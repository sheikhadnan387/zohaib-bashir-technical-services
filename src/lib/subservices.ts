/**
 * Sub-service landing pages, each targeting its own search term.
 * They live under their parent service: /services/[parentSlug]/[slug].
 *
 * Copy only restates work the parent service already describes — no prices,
 * guarantees or turnaround promises. Add those only once the client confirms them.
 */
export interface SubService {
  slug: string;
  parentSlug: string;
  name: string;
  /** Short label for links and cards. */
  shortName: string;
  /** Plain-language blurb for the parent page's link card. */
  blurb: string;
  heroTagline: string;
  intro: string;
  whatWeDo: string[];
  approach: string;
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const subServices: SubService[] = [
  {
    slug: "ac-duct-cleaning",
    parentSlug: "ac-repair-maintenance",
    name: "AC Duct Cleaning in Dubai",
    shortName: "AC Duct Cleaning",
    blurb: "Ductwork inspection and cleaning for better airflow in villas, apartments and offices.",
    heroTagline: "Cleaner ducts, better airflow.",
    intro:
      "Over time, dust and debris build up inside AC ductwork. That can restrict airflow, make the system work harder and affect the air in your property. Our AC duct cleaning service in Dubai starts with an inspection of the ductwork, then removes accumulated dust and debris from ducts, vents and grilles in villas, apartments and commercial properties.",
    whatWeDo: [
      "Ductwork inspection and condition check",
      "Cleaning of ducts, vents and grilles",
      "Removal of accumulated dust and debris",
      "Air filter check and replacement where needed",
      "Airflow check after cleaning",
      "Advice on a suitable servicing schedule",
    ],
    approach:
      "We inspect before we clean, so you know the condition of the ductwork and what needs attention. Cleaning is carried out system by system, and we check airflow afterwards so the result is confirmed rather than assumed.",
    faqs: [
      {
        q: "When should I have my AC ducts cleaned?",
        a: "If you notice weak airflow, dust collecting around vents, or musty smells, an inspection is a good idea. For routine upkeep, many property owners include duct cleaning with their regular AC maintenance. We can advise based on your property and system.",
      },
      {
        q: "Do you clean ducts in villas and apartments?",
        a: "Yes. We work in residential villas and apartments as well as offices and commercial units.",
      },
      {
        q: "Can duct cleaning be booked together with AC servicing?",
        a: "Yes. Many customers book duct cleaning together with routine AC servicing, so the whole system is looked after in the same booking.",
      },
      {
        q: "How do I get a quote?",
        a: "Call, WhatsApp or use the quote form. We review the requirement, visit the site where needed, and send a clear scope and quotation before any work starts.",
      },
    ],
    seoTitle: "AC Duct Cleaning Dubai | Inspection & Cleaning",
    seoDescription:
      "AC duct cleaning in Dubai — ductwork inspection and cleaning for villas, apartments and offices to improve airflow and indoor air quality. Request a quote.",
    keywords: ["AC duct cleaning Dubai", "duct cleaning Dubai", "air duct cleaning Dubai", "AC ductwork cleaning", "AC maintenance Dubai"],
  },
  {
    slug: "ac-cleaning",
    parentSlug: "ac-repair-maintenance",
    name: "AC Cleaning in Dubai",
    shortName: "AC Cleaning",
    blurb: "Filter, coil and drain cleaning that helps your AC cool better and work less.",
    heroTagline: "A clean AC cools better and works less.",
    intro:
      "A dirty filter and coil make an air conditioner work harder for less cooling. Our AC cleaning service in Dubai covers filters, indoor units, coils and drain lines for split and ducted systems, helping them run efficiently through the hottest months. If we find a fault while cleaning, we diagnose it and explain what is needed.",
    whatWeDo: [
      "Air filter cleaning or replacement",
      "Indoor unit and coil cleaning",
      "Drain line check and clearing",
      "Outdoor unit inspection and cleaning",
      "Cooling performance check",
      "Report of any issues found",
    ],
    approach:
      "Cleaning is only part of keeping an AC healthy, so we check how the system performs as well as how it looks. Anything that needs repair is explained and quoted before extra work is done.",
    faqs: [
      {
        q: "How often should an AC be cleaned in Dubai?",
        a: "Heavy use through the long summer means filters and coils collect dirt quickly. Many property owners arrange cleaning or servicing before summer and again during the year. We can suggest a schedule that suits your unit and how you use it.",
      },
      {
        q: "Is AC cleaning the same as AC servicing?",
        a: "Cleaning removes dirt from filters, coils and drains. Servicing goes further and also checks performance, refrigerant levels and the electrical condition of the unit. Many customers book both together.",
      },
      {
        q: "Will you repair faults you find?",
        a: "Yes. We diagnose and repair AC faults. We explain what is needed and give a quotation before any additional work.",
      },
      {
        q: "Do you clean split AC units?",
        a: "Yes — split units as well as ducted systems, in homes and commercial properties.",
      },
    ],
    seoTitle: "AC Cleaning Dubai | Split & Ducted AC Cleaning",
    seoDescription:
      "AC cleaning in Dubai — filter, coil and drain cleaning for split and ducted systems in villas, apartments and offices. Better cooling, less strain. Request a quote.",
    keywords: ["AC cleaning Dubai", "split AC cleaning Dubai", "AC filter cleaning Dubai", "AC service Dubai", "AC maintenance Dubai"],
  },
  {
    slug: "curtain-cleaning",
    parentSlug: "sofa-carpet-cleaning",
    name: "Curtain Cleaning in Dubai",
    shortName: "Curtain Cleaning",
    blurb: "Fabric-appropriate curtain and drape cleaning that removes dust, odours and stains.",
    heroTagline: "Fresh curtains, without damaging the fabric.",
    intro:
      "Curtains quietly collect dust, odours and allergens, especially in a dusty climate. Our curtain cleaning service in Dubai uses shampoo and deep-cleaning methods chosen to suit each fabric, removing dirt and stains while protecting the material, colour and finish.",
    whatWeDo: [
      "Curtain and drape shampoo cleaning and treatment",
      "Dust and allergen removal",
      "Odour treatment",
      "Stain pre-treatment",
      "Fabric assessment before cleaning",
      "Residential, office and hospitality curtains",
    ],
    approach:
      "We assess the fabric first, because not every curtain can be cleaned the same way. We choose the method that suits the material, or tell you if a fabric isn't suitable for a particular treatment.",
    faqs: [
      {
        q: "Can all curtain fabrics be shampoo cleaned?",
        a: "Not always — fabric type matters. We assess before cleaning and choose a suitable method, or tell you plainly if a fabric isn't suited to a treatment.",
      },
      {
        q: "Do you clean curtains in offices and hotels as well as homes?",
        a: "Yes. We clean curtains and drapes in residential, commercial and hospitality properties.",
      },
      {
        q: "Can curtain cleaning be combined with sofa or carpet cleaning?",
        a: "Yes. Many customers book curtains together with sofas and carpets so everything is done in the same booking.",
      },
      {
        q: "How do I get a quote?",
        a: "Call, WhatsApp or use the quote form and tell us roughly how many curtains and what fabric they are. We'll send a clear quotation before any work starts.",
      },
    ],
    seoTitle: "Curtain Cleaning Dubai | Deep Cleaning",
    seoDescription:
      "Curtain cleaning in Dubai — shampoo and deep cleaning for curtains and drapes in homes, offices and hotels. Removes dust, odours and stains. Request a quote.",
    keywords: ["curtain cleaning Dubai", "drapes cleaning Dubai", "curtain shampoo cleaning Dubai", "sofa cleaning Dubai", "carpet cleaning Dubai"],
  },
  {
    slug: "mattress-cleaning",
    parentSlug: "sofa-carpet-cleaning",
    name: "Mattress Cleaning in Dubai",
    shortName: "Mattress Cleaning",
    blurb: "Shampoo cleaning and sanitization to lift stains, odours and allergens from mattresses.",
    heroTagline: "A fresher, cleaner place to sleep.",
    intro:
      "Mattresses build up dust, sweat and allergens over the years, and spills leave stains and odours behind. Our mattress cleaning service in Dubai uses shampoo cleaning and sanitization to lift dirt and stains from mattresses in homes, serviced apartments and hotels.",
    whatWeDo: [
      "Mattress shampoo cleaning and sanitization",
      "Stain pre-treatment and removal",
      "Odour and allergen treatment",
      "Fabric assessment before cleaning",
      "Homes, serviced apartments and hospitality properties",
    ],
    approach:
      "We check the mattress type and condition first, then pick the cleaning method that removes deep-set dirt and stains without harming the material.",
    faqs: [
      {
        q: "How long before I can use the mattress again?",
        a: "Drying time depends on the mattress and the conditions. We'll tell you what to expect when we assess it.",
      },
      {
        q: "Can you remove old stains and odours?",
        a: "We pre-treat and clean stains and odours as far as the material allows. We'll be upfront about what can realistically be achieved.",
      },
      {
        q: "Do you clean mattresses in hotels and serviced apartments?",
        a: "Yes — we work with residential, commercial and hospitality properties.",
      },
      {
        q: "How do I get a quote?",
        a: "Call, WhatsApp or use the quote form with the number and size of mattresses. We'll send a clear quotation before any work starts.",
      },
    ],
    seoTitle: "Mattress Cleaning Dubai | Deep Cleaning",
    seoDescription:
      "Mattress cleaning in Dubai — shampoo cleaning and sanitization to remove stains, odours and allergens in homes, apartments and hotels. Request a quote.",
    keywords: ["mattress cleaning Dubai", "mattress shampoo cleaning Dubai", "mattress sanitization Dubai", "sofa cleaning Dubai"],
  },
];

export function getSubService(parentSlug: string, slug: string): SubService | undefined {
  return subServices.find((s) => s.parentSlug === parentSlug && s.slug === slug);
}

export function getSubServicesFor(parentSlug: string): SubService[] {
  return subServices.filter((s) => s.parentSlug === parentSlug);
}
