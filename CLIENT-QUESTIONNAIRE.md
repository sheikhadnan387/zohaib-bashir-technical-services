# Client questionnaire — facts the website still needs

Everything on the site today is either already true (licence, services, office) or deliberately left blank. The items below turn blank slots into claims that convert. **Only answer what is actually true — every answer becomes a public statement.**

Where each answer goes is noted so it can be dropped in without redesign.

---

## 1. Response time
*How quickly does a customer get a reply on WhatsApp / phone, and during what hours?*

Example: "WhatsApp replies within 30 minutes, 8am–8pm, 7 days."

> Answer:

→ `proofPoints.responseTime` in `src/lib/company.ts` (shows in "Why Choose Us")

## 2. Guarantee
*Is there any workmanship guarantee or re-do policy? For how long? Any exclusions?*

Example: "Workmanship guaranteed for 12 months" or "If you're not satisfied, we come back and fix it at no charge."

> Answer:

→ `proofPoints.guarantee`

## 3. Established
*What year did the business start operating (not necessarily the licence date)?*

> Answer:

→ `proofPoints.established` ("Serving Dubai since ____")

## 4. Site visits and pricing
*Is the site assessment free? Is the quote fixed once agreed? Any minimum call-out fee?*

> Answer:

→ Hero trust strip + service page quote card (only if free / fixed)

## 5. Areas you actually serve
*Confirm or edit this list. Remove anywhere you don't go; add anywhere you do.*

Dubai Investment Park · Jumeirah Village Circle · Dubai Marina · Business Bay · Downtown Dubai · Arabian Ranches · Dubai Hills · Jumeirah · Al Barsha · Dubai Silicon Oasis · Motor City · Mirdif

> Changes:

→ `serviceAreas` in `src/lib/company.ts`

## 6. Reviews (need customer permission)
*Two to five real reviews. For each: name as they'd like it shown (e.g. "Sarah M."), area or property type, which service, star rating, and their words.*

> 1.
> 2.
> 3.

→ `src/lib/reviews.ts` (section appears automatically)

## 7. Google Business Profile
*Link to the profile, or confirm there isn't one yet.*

> Answer:

→ `googleReviewsUrl` in `src/lib/reviews.ts`. If none exists, set one up first — it's the highest-value marketing step for a Dubai trade business.

## 8. Business email
*A domain email for enquiries (e.g. info@zohaibbashirtechnicalservices.com) instead of the personal Gmail currently shown.*

> Answer:

→ `company.email` — also used as the quote-form recipient

## 9. Office pin
*Exact Google Maps location of the office (share the pin or coordinates).*

> Answer:

→ `company.geo` (used in search-engine structured data)

## 10. Typical clients
*Who do you mostly work for — homeowners, tenants, landlords, building management, offices? Any ongoing contracts you can mention?*

> Answer:

→ About page copy and "Why Choose Us" lead card

## 11. Real photos (optional but strongly recommended)
*Phone photos of actual jobs — especially before/after of the same room. Daylight, no filters, original size.*

→ Replace the generated images in `public/images/` (same filenames, no code change needed)

---

Send answers in any format — WhatsApp voice note, email, or filled in here.
