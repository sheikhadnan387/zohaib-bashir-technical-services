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
