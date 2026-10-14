# Deploying to Namecheap shared hosting (cPanel)

The site is a **static export** — plain HTML/CSS/JS/images — plus one PHP file for the quote form.

## Build the bundle
```bash
npm run package        # builds out/ and writes deploy/site.zip
```

## Upload
1. cPanel → **File Manager** → `public_html`.
2. Remove the Namecheap parking page files (`index.html`, `nc_assets/`, etc.).
3. **Upload** `deploy/site.zip` into `public_html`, then **Extract** it there.
4. Make sure hidden files are shown (Settings → Show Hidden Files) and that `.htaccess` is in `public_html`.
5. Delete `site.zip` from `public_html`.

## Check
- `https://zohaibbashirtechnicalservices.com/` loads; `http://` and `www.` redirect to it.
- `/services/shampoo-cleaning` redirects (301) to `/services/sofa-carpet-cleaning`.
- Submit the quote form once; confirm the email arrives (check spam the first time).

## Where quote requests go
Every quote is handled by `public/api/quote.php` and is delivered **two ways**:

1. **Email** to `QUOTE_TO` in that file (currently `Raiswaris777@gmail.com`). The first few may land in
   **Spam** — mark them "Not spam" once and Gmail learns the sender.
2. **A private copy** in `quote-requests.log` in the hosting **home directory** (one request per line;
   open it in cPanel → File Manager → Home Directory — it is outside `public_html`, so it is not public).
   This means a lead is never lost even if the email is delayed or filtered.

To change the recipient, edit `QUOTE_TO`, then `npm run package` and re-upload `api/quote.php`.

## After going live
- Add the site in Google Search Console and submit `/sitemap.xml`.
- Set up the Google Business Profile (see SEO-KEYWORDS.md).

## Google Search Console
- Property: `https://zohaibbashirtechnicalservices.com/` (URL prefix), verified by HTML file on 14 Oct 2026 under the Google
  account sheikhadnan387@gmail.com. Sitemap `sitemap.xml` submitted (Google found 17 pages).
- **Never delete `googlec6943ba2c1b5dd7b.html` from `public_html`** — removing it un-verifies the property.
  It lives in `public/`, so every `npm run package` re-includes it.
- Add the business owner as a second owner: Search Console → Settings → Users and permissions → Add user (Owner).

## Professional email (set up 14 Oct 2026)
- `info@`, `sales@`, `quotes@` @zohaibbashirtechnicalservices.com are **cPanel forwarders** (cPanel → Email → Forwarders) to
  `Raiswaris777@gmail.com`. They receive only — there is no mailbox, so mail can't be *sent from* them yet.
- To also send from `info@`: create a mailbox in cPanel → Email Accounts (this needs a password, set by the owner),
  **delete the `info@` forwarder first** (a forwarder overrides a mailbox of the same name), then add it to Gmail
  via Settings → Accounts → Send mail as.
- The Namecheap "Private Email" trial (expires 13 Nov 2026) is unused and can be ignored.
- Quote form still delivers to Gmail directly (`QUOTE_TO` in `public/api/quote.php`).
