<?php
/**
 * Quote-request handler. Emails the request from the hosting account itself —
 * no third-party service needed. The site posts JSON here (see QuoteForm.tsx).
 *
 * To change where quotes go, edit QUOTE_TO below.
 */

const QUOTE_TO   = 'Raiswaris777@gmail.com';                       // where quote emails are delivered
const QUOTE_FROM = 'quotes@zohaibbashirtechnicalservices.com';      // must be on this domain so mail is accepted
const SITE_NAME  = 'Zohaib Bashir Technical Services';
const MAX_PER_WINDOW = 5;
const WINDOW_SECONDS = 600;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, ['error' => 'method_not_allowed']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    reply(400, ['error' => 'invalid_json']);
}

// Honeypot: pretend success so bots don't retry.
if (!empty(trim((string)($data['website'] ?? '')))) {
    reply(200, ['ok' => true]);
}

// Simple per-IP rate limit (file in the system temp dir, outside the web root).
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$file = sys_get_temp_dir() . '/zbts_quote_' . md5($ip) . '.json';
$now  = time();
$hits = is_file($file) ? (json_decode((string)file_get_contents($file), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn($t) => $now - $t < WINDOW_SECONDS));
if (count($hits) >= MAX_PER_WINDOW) {
    reply(429, ['error' => 'rate_limited']);
}
$hits[] = $now;
@file_put_contents($file, json_encode($hits), LOCK_EX);

// Clean single-line values (strips CR/LF so nothing can inject mail headers).
function line($v, int $max): string {
    $v = preg_replace('/[\r\n]+/', ' ', trim((string)$v));
    return mb_substr($v, 0, $max);
}

$name     = line($data['name'] ?? '', 100);
$phone    = line($data['phone'] ?? '', 30);
$email    = line($data['email'] ?? '', 120);
$service  = line($data['service'] ?? '', 60);
$serviceName = line($data['serviceName'] ?? '', 80) ?: $service;
$property = line($data['propertyType'] ?? '', 30);
$location = line($data['location'] ?? '', 150);
$contact  = line($data['contactMethod'] ?? '', 20);
$details  = mb_substr(trim((string)($data['details'] ?? '')), 0, 2000);

if ($name === '' || !preg_match('/^[0-9+\s()-]{7,}$/', $phone) || $service === ''
    || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    reply(400, ['error' => 'invalid_fields']);
}

$lines = [
    "Name: $name",
    "Phone: $phone",
    'Email: ' . ($email ?: 'Not provided'),
    "Service: $serviceName",
    'Property type: ' . ($property ?: 'Not specified'),
    'Location: ' . ($location ?: 'Not specified'),
    'Preferred contact: ' . ($contact ?: 'Not specified'),
    '',
    'Project details:',
    $details ?: 'Not provided',
];

$received = date('Y-m-d H:i:s T');

// 1. Always keep a private copy, outside the public web folder (one JSON object per line).
//    Find it in cPanel > File Manager > Home directory > quote-requests.log
$logDir  = dirname($_SERVER['DOCUMENT_ROOT'] ?? __DIR__);
$logLine = json_encode([
    'received' => $received, 'ip' => $ip, 'name' => $name, 'phone' => $phone, 'email' => $email,
    'service' => $serviceName, 'property' => $property, 'location' => $location,
    'contact' => $contact, 'details' => $details,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n";
$logged = @file_put_contents($logDir . '/quote-requests.log', $logLine, FILE_APPEND | LOCK_EX) !== false;

// 2. Email it.
$headers = [
    'From: ' . SITE_NAME . ' <' . QUOTE_FROM . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$subject = '=?UTF-8?B?' . base64_encode("Quote request — $name ($serviceName)") . '?=';
$sent = mail(QUOTE_TO, $subject, implode("\r\n", $lines), implode("\r\n", $headers), '-f' . QUOTE_FROM);

if (!$sent) {
    error_log('[quote] mail() failed for request from ' . $ip);
}

// Success if the lead was captured by at least one route; only fail if both failed.
if (!$sent && !$logged) {
    reply(502, ['error' => 'send_failed']);
}
reply(200, ['ok' => true]);
