import { company } from "@/lib/company";
import { services } from "@/lib/services";

// Sends quote requests by email through Resend's REST API.
// Required env: RESEND_API_KEY. Optional: QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL.
// Without RESEND_API_KEY the route returns 503 and the form shows its WhatsApp fallback.

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const orNone = (s: string) => s || "Not provided";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (clean(body.website, 100)) return Response.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const serviceSlug = clean(body.service, 60);
  const propertyType = clean(body.propertyType, 30);
  const location = clean(body.location, 150);
  const contactMethod = clean(body.contactMethod, 20);
  const details = typeof body.details === "string" ? body.details.trim().slice(0, 2000) : "";

  if (
    !name ||
    !/^[0-9+\s()-]{7,}$/.test(phone) ||
    (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ||
    !serviceSlug
  ) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY is not set — quote request was not delivered.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const serviceName = services.find((s) => s.slug === serviceSlug)?.name ?? "Other / Not sure";
  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Service", serviceName],
    ["Property type", propertyType || "Not specified"],
    ["Location", location || "Not specified"],
    ["Preferred contact", contactMethod],
  ];
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Project details:", orNone(details)].join("\n");
  const html =
    `<table>${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table>` +
    `<p><b>Project details</b></p><p>${escapeHtml(orNone(details)).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL ?? `${company.legalName} <onboarding@resend.dev>`,
      to: [process.env.QUOTE_TO_EMAIL ?? company.email],
      reply_to: email || undefined,
      subject: `Quote request — ${name} (${serviceName})`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[quote] Resend error", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
