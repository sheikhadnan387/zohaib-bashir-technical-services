# Asli Reviews aur Photos Jaldi Lane ka Tareeqa

Website par reviews ka section **pehle se bana hua hai**. Jaise hi `src/lib/reviews.ts` mein asli review daalein ge, woh homepage par khud dikhne lagega.

---

## 1. Google Business Profile (sab se zaroori, 15 minute)

1. https://business.google.com par jayein aur **Zohaib Bashir Technical Services** ke naam se profile banayein.
2. Category: **Painting** (main), aur saath mein: Air conditioning repair service, Flooring contractor, Carpet cleaning service.
3. Address: Dubai Investment Park 1, phone +971 58 817 0040, website zohaibbashirtechnicalservices.com.
4. Service areas mein website wale 18 areas daal dein.
5. Verification complete karein (Google video ya postcard se karta hai).
6. Verify hone ke baad **"Ask for reviews"** se review link copy karein aur developer ko bhej dein. Woh `googleReviewsUrl` mein lag jayega.

## 2. Har kaam ke baad customer ko ye WhatsApp message bhejein

**English:**
> Hi [Name], thank you for choosing Zohaib Bashir Technical Services today! If you're happy with the [painting / AC service / flooring / cleaning], could you leave us a quick Google review? It really helps a small Dubai business like ours: [REVIEW LINK]
> If anything isn't right, just reply here. We'll come back and fix it within 48 hours.

**Urdu / Hindi:**
> Assalam o Alaikum [Name], aaj ka kaam karwane ka shukriya! Agar aap kaam se khush hain to please 1 minute nikal kar Google par review de dein. Is se hamari bohat madad hoti hai: [REVIEW LINK]
> Koi masla ho to yahin message karein, 48 ghante mein aa kar theek kar denge.

**Tip:** Message kaam khatam hone ke **usi din** bhejein. Agle din tak customer bhool jata hai.

## 3. Purane khush customers

Pichle 2–3 saal ke jo customers khush the, unhein bhi upar wala message bhej dein. 20 logon ko bhejne par aam taur par 5–10 reviews mil jate hain.

**Website ke liye:** Jis customer ne WhatsApp par tareef ki ho, us se poochein: *"Kya hum aap ka ye message website par aap ke pehle naam aur area ke saath laga sakte hain?"* Haan kehne par screenshot developer ko bhej dein.

## 4. Kaam ki photos — technician ke liye checklist

Har job par **phone se 3 photos** lein:

| Kab | Kya | Kaise |
|---|---|---|
| Kaam se pehle | Wohi deewar, sofa, AC ya floor | Seedha samne se, achi roshni mein |
| Kaam ke baad | **Bilkul usi jagah se, usi angle se** | Taake before/after match kare |
| Kaam ke dauran | Team kaam karte hue (uniform mein) | Customer ka chehra ya ghar ka saman na dikhe |

**Dhyan rakhein:**
- Phone ko **horizontal** (landscape) pakrein.
- Customer ki personal cheezein (family photos, documents, building number) frame mein na aayein.
- Photo bhejte waqt likh dein: service, area, property type. Jaise "Painting, JVC, 2BR apartment".
- Photos WhatsApp ke bajaye **Google Drive / email** se bhejein, taake quality kharab na ho.

**Har service ki kam az kam 2 before/after jodi** aa jayein to Projects page poora asli ho jayega.

## 5. Developer ke liye

- Reviews: `src/lib/reviews.ts` → `reviews` array mein `{ name, context, serviceSlug, rating, quote, source }`.
- Google link: `googleReviewsUrl`.
- Photos: `public/images/projects/` mein `.webp` (1600px wide, under 200 KB), phir `src/lib/projects.ts` update karein.
