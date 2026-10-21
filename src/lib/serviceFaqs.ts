import { company } from "./company";

export type Faq = { q: string; a: string };

/**
 * FAQs for each main service page (also emitted as FAQPage schema).
 * Only client-confirmed facts are stated as facts: studio painting from AED 350,
 * WhatsApp hours, serving Dubai since 2021, the 48-hour fix-it promise.
 * Everything else is phrased as "depends on the job / confirmed in your quote".
 */
const shared = {
  areas: {
    q: "Which areas of Dubai do you cover?",
    a: "We work across Dubai, including Downtown, Business Bay, Dubai Creek Harbour, Dubai Hills Estate, JVC, JVT, Jumeirah Park, JLT, Dubai Marina, JBR, Bluewaters, Arabian Ranches, DAMAC Hills, The Springs, The Meadows, Town Square and Mira Oasis. If your area isn't listed, message us. We most likely cover it.",
  },
  booking: {
    q: "How do I book?",
    a: `Send us a WhatsApp message (we reply every day, ${company.whatsappHours}), call ${company.phoneDisplay}, or use the quick quote form on this site. Tell us the property type, size and what needs doing, and we'll confirm the price and a time that suits you.`,
  },
  guarantee: {
    q: "What if I'm not happy with the work?",
    a: "Every job starts with a fixed written quote, so there are no hidden charges. If something isn't right, tell us within 48 hours of completion and we'll come back and fix it free of charge.",
  },
};

export const serviceFaqs: Record<string, Faq[]> = {
  "painting-services": [
    {
      q: "How much does painting cost in Dubai?",
      a: "Studio wall painting starts from AED 350. Larger apartments, villas and offices are priced on the number of rooms, wall condition, ceilings and the paint you choose. Send us your property size and you'll get a fixed written quote before any work starts.",
    },
    {
      q: "Is the paint included in the price?",
      a: "We can supply the paint or use paint you've already bought. Your quote states clearly which option it covers, along with the brand and finish.",
    },
    {
      q: "Do you fix cracks and damp patches before painting?",
      a: "Yes. Surface preparation is part of the job: filling cracks and holes, sanding, treating stains and priming where needed, so the new paint lasts.",
    },
    {
      q: "Do I need to move my furniture out?",
      a: "No. We move furniture to the centre of the room, cover floors and furniture, and mask edges and fittings before painting. We clean up when we finish.",
    },
    {
      q: "Do you paint for move-in and move-out handovers?",
      a: "Yes. Repainting a rented apartment or villa to white for a landlord or agency handover is one of our most common jobs. Tell us your handover date when you message us.",
    },
    shared.guarantee,
    shared.areas,
    shared.booking,
  ],
  "ac-repair-maintenance": [
    {
      q: "How often should my AC be serviced in Dubai?",
      a: "Because ACs run almost all year in Dubai, most homes benefit from a service at least twice a year, ideally before and after the peak summer months. Dusty or sandy areas may need it more often.",
    },
    {
      q: "My AC is running but not cooling. Can you fix it?",
      a: "Yes. Common causes are blocked filters, dirty coils, low gas, or a thermostat or fan fault. Our technician diagnoses the cause first and tells you the price before doing any repair.",
    },
    {
      q: "Do you service split, ducted and central AC systems?",
      a: "Yes. We work on split units, ducted and concealed units, and the AC systems found in Dubai apartments, villas and offices.",
    },
    {
      q: "Do you clean AC ducts?",
      a: "Yes. Duct cleaning removes built-up dust and debris, which helps air quality and cooling. See our AC duct cleaning page for details.",
    },
    {
      q: "Is there a call-out or inspection charge?",
      a: "Any inspection charge is told to you upfront, before the visit. Repairs are quoted in writing after diagnosis, and nothing is done without your approval.",
    },
    shared.guarantee,
    shared.areas,
    shared.booking,
  ],
  "parquet-wooden-flooring": [
    {
      q: "What types of wooden flooring do you install?",
      a: "We install solid and engineered parquet, wooden, laminate and vinyl flooring, including straight-plank and herringbone patterns, for apartments, villas and offices.",
    },
    {
      q: "Can you repair or polish my existing parquet?",
      a: "Yes. We sand and polish worn parquet, fix scratches and gaps, and replace damaged boards so the repair blends in with the rest of the floor.",
    },
    {
      q: "How is flooring priced?",
      a: "Flooring is priced per square metre, based on the material, pattern and the condition of the floor underneath. We measure on site and give you a fixed written quote.",
    },
    {
      q: "Can flooring be installed over existing tiles?",
      a: "In many cases, yes, if the tiles are level and firmly fixed. We check the surface during the site visit and tell you whether any preparation is needed.",
    },
    {
      q: "Is wooden flooring suitable for Dubai's humidity?",
      a: "Yes, with the right material and installation. Engineered flooring and correct underlay and expansion gaps help the floor cope with temperature and humidity changes.",
    },
    shared.guarantee,
    shared.areas,
    shared.booking,
  ],
  "sofa-carpet-cleaning": [
    {
      q: "What cleaning method do you use?",
      a: "We choose shampoo or deep-extraction cleaning based on the fabric. We check the material first so it is cleaned effectively without damaging it.",
    },
    {
      q: "How long does a sofa take to dry?",
      a: "Most sofas and carpets are dry within a few hours, depending on the fabric and ventilation. Keeping the AC or a fan running helps them dry faster.",
    },
    {
      q: "Can you remove stains and odours?",
      a: "We treat common stains such as food, drinks and pet marks, and deep cleaning removes most odours. Very old or set-in stains may fade rather than disappear completely, and we'll tell you honestly before we start.",
    },
    {
      q: "Do you also clean mattresses and curtains?",
      a: "Yes. Along with sofas and carpets, we clean mattresses, rugs, curtains, dining chairs and other upholstery.",
    },
    {
      q: "Are the cleaning products safe for children and pets?",
      a: "We use fabric-appropriate cleaning products. Let us know about children, pets or allergies when you book, and we'll take that into account.",
    },
    shared.guarantee,
    shared.areas,
    shared.booking,
  ],
};
