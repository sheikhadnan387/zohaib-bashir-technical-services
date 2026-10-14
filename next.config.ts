import type { NextConfig } from "next";

/**
 * The site is exported as plain static files (`npm run build` → `out/`) and
 * served from Namecheap shared hosting. Consequences:
 *  - next/image optimisation is unavailable (images are pre-compressed WebP).
 *  - redirects live in `public/.htaccess`, not here.
 *  - the quote form posts to `public/api/quote.php`.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Inline the (small) stylesheet into each page: one less round trip before first paint
  // on a high-latency host.
  experimental: { inlineCss: true },
};

export default nextConfig;
