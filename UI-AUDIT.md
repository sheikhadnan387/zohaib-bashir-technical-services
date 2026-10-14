# UI/UX Audit — Zohaib Bashir Technical Services

Reviewed: all routes (/, /about, /services, /services/[slug], /projects, /contact) at desktop 1440 and mobile 375, plus the source in `src/`.
Note: no prior audit report exists in the repo, so this is a fresh audit. Findings marked (code) come from reading source and were not all verified visually.

## Verdict
Solid foundation: consistent dark/orange industrial palette, good mobile action bar, skip link, reduced-motion support, clean component structure. The site reads as a template-grade brochure, not yet a trust-building local-services brand. The biggest gaps are **button contrast/hierarchy, broken grid layouts, a non-functional form, and weak proof (AI-style imagery presented as portfolio).**

---

## P0 — Fix first (conversion / trust / broken)

1. **Primary CTA is black on a black surface.** `Button.tsx` `primary` = `bg-brand-black` + black border. In the header ("Request a Quote") and on the hero it is nearly invisible; orange only appears on hover (and then label turns black). The page's main conversion button has no visual weight. → Make primary solid orange (`#ea580c`-range for contrast), secondary outlined; add a `primary-on-dark` / `primary-on-light` pair.
2. **Quote form doesn't submit.** `QuoteForm.tsx:85-89` builds a `mailto:` and sets `window.location.href`. On phones without a mail app (most Dubai users use Gmail/WhatsApp web) nothing happens and the lead is lost. → Real endpoint (Route Handler + email/Resend/WhatsApp API), success + error states, spam protection.
3. **Orphaned 4th card in every 3-column grid.** Services showcase (`ServicesShowcase.tsx:31`), services page (`services/page.tsx:40`), projects preview and projects grid all use `lg:grid-cols-3` with 4 items → one lonely card + a big empty area on desktop. The home bento (`auto-rows-[220px]` + dense flow) leaves a visible hole next to the AC card. → `lg:grid-cols-4` or 2×2, or a deliberate 2+2 bento.
4. **Portfolio is not credible.** All "Selected Work" images are AI-looking renders (identical empty penthouse interiors), with a disclaimer "Project imagery will be updated…" (`ProjectsPreview.tsx:31`). The hero/team/process images also look generated. For a local trade business this undermines trust. → Real before/after photos, even phone shots; until then remove the Projects section rather than disclaim it.
5. **Copy error: "all nine service disciplines"** (`about/page.tsx:157`) — the site offers four. Also About "Dubai Location" has an empty left column and no map.
6. **Floating WhatsApp button overlaps the footer** ("Terms & Conditions" is covered at 1440). Add bottom padding / hide near footer.

## P1 — Visual design

7. **Contrast failures.** White text on `#f97316` is ~2.8:1 (fails AA) — affects mobile action bar "Quote" (10px text), tags, orange chips. Orange eyebrows (11–12px, `#f97316`) on white/light grey also ~2.8:1. 14 instances of `text-white/30–60` on dark. → Darken orange for text/buttons (`#c2410c`/`#ea580c`), keep bright orange for graphics only; minimum `text-white/70` for body.
8. **Hero lacks a focal anchor and proof.** Dark gradient covers ~half the video; no rating, years in business, response time, or licence badge near the CTA. Add a trust strip (License No. 1009851, "Free site visit", "Reply within X min on WhatsApp").
9. **Type scale is tiny and uppercase-heavy.** Body 14–15px, eyebrows/buttons 11–13px with wide tracking, everything ALL-CAPS. Raise body to 16–17px, reduce uppercase to eyebrows only.
10. **Page header hero images (inner pages)** put the title low in the banner with breadcrumb/eyebrow/description stacked at low contrast over a busy photo. Increase overlay under text, bigger H1, drop duplicate eyebrow + breadcrumb.
11. **"Serving Dubai" visual is a decorative bar chart** with no meaning (`DubaiSection.tsx`). Replace with an actual map / list of served areas (Dubai Investment Park, Marina, Business Bay, Arabian Ranches…).
12. **Process section (`WorkProcess.tsx`)** uses alternating arches where reading order is zig-zag (02 above 01, 04 above 03). Hard to follow; 4 different photos add weight but little meaning. → Simple 1-2-3-4 row with icons and connector line.
13. **Repetition.** Home shows the same four services three times (Intro icons, showcase cards, FeaturedExpertise alternating rows) plus the megamenu. Cut FeaturedExpertise or Intro list.
14. **Design tokens are half-used.** Mixed `rounded-[6px]`, `rounded-lg`, arbitrary px font sizes (`text-[13px]`, `[17px]`…). → Define a type scale and radii in `@theme`, drop arbitrary values.

## P1 — UX / functionality

15. **No service-page conversion path above the fold**: service detail pages have a CTA only at the bottom. Add a sticky side card (phone, WhatsApp, quote) and a short inline form.
16. **No social proof anywhere** (reviews, client logos, Google rating, certificates). Biggest single lever after real photos.
17. **Contact form is long** (name, phone, email, service, property type, location, details, preferred method). Cut to name, phone, service, optional details; the rest is progressive.
18. **Email is a personal Gmail** (`Raiswaris777@gmail.com`) — hurts credibility. Use `info@zohaibbashirtechnical.com`.
19. **Header**: on scroll the logo shrinks and the CTA stays invisible (see #1). Mega menu is 640px for 4 links — a simple dropdown is enough. Mobile menu doesn't trap focus or lock scroll (code).
20. **Site loader** (`SiteLoader.tsx`) delays every first view ~1.25 s and locks scroll; it's a branding nicety that hurts LCP. Remove or run only on first session.
21. **Mobile hero**: 13 px white strip between the header (71 px) and hero (starts at 84 px) because `main` uses a fixed `pt-[84px]` but the mobile header is shorter. → Use a CSS variable for header height.
22. **Small tap targets**: 19 links/buttons under 40 px on mobile home (footer links, card links, ghost buttons).

## P2 — Performance & SEO

23. **Heavy assets**: hero video 2.6 MB; ~12 images of 0.8 MB each (webp already, but oversized); `process/step-*.jpg` are JPEGs at ~0.8 MB. A duplicate unused `public/video/basheer technical Service video.mp4` (2.6 MB, spaces in name). → Re-export at display size (≤150 KB), remove duplicate, use `poster` + `preload="none"` on mobile, skip video on `prefers-reduced-data`.
24. **Hero & reveal animations are JS-gated** (`Reveal.tsx` initial `opacity: 0`): LCP text waits on hydration; no-JS users see blanks. Don't reveal above-the-fold content; use CSS animation.
25. **Fonts**: two Google fonts (Inter + Manrope), fine, but headings fall back unstyled if `--font-heading` fails. OK as is.
26. SEO basics present (metadata, JSON-LD, sitemap, robots). Missing: OG images, per-page `openGraph.images`, LocalBusiness `geo`/`areaServed`/`openingHours`, FAQ schema on service pages, Arabic/hreflang (target market is Dubai — consider an Arabic version).
27. `public/` still has Next boilerplate svgs (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) — delete. `PlaceholderVisual.tsx` is unused — delete.

## P3 — Polish ideas
- Sticky mini-CTA on service pages; WhatsApp deep link with prefilled service message.
- Before/after slider component for projects.
- Service-area chips and a "Typical turnaround / pricing from" line per service.
- Dark/light rhythm: reduce back-to-back grey/white sections to give the page clearer pacing.

---

## Suggested improvement order for Fable
1. Button system + orange contrast tokens (#1, #7, #14)
2. Grid fixes (#3), WhatsApp/footer overlap (#6), mobile header gap (#21), copy error (#5)
3. Real form backend (#2, #17) + business email (#18)
4. Hero trust strip + service-page conversion card (#8, #15, #16)
5. Assets & performance (#20, #23, #24, #27)
6. Content/proof: real project photos, reviews (#4, #16) — needs client input
