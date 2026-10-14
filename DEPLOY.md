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

## Quote emails
`public/api/quote.php` → edit `QUOTE_TO` (recipient) and rebuild/upload. Create a mailbox such as
`info@zohaibbashirtechnicalservices.com` in cPanel → Email Accounts, then point `QUOTE_TO` and
`company.email` at it.

## After going live
- Add the site in Google Search Console and submit `/sitemap.xml`.
- Set up the Google Business Profile (see SEO-KEYWORDS.md).
