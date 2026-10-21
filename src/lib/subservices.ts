/**
 * Sub-service landing pages, each targeting its own search term.
 * They live under their parent service: /services/[parentSlug]/[slug].
 *
 * Copy only restates work the parent service already describes. The only prices and
 * promises used are client-confirmed ones (studio painting from AED 350, 48-hour fix-it promise).
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
  {
    slug: "ac-installation",
    parentSlug: "ac-repair-maintenance",
    name: "AC Installation in Dubai",
    shortName: "AC Installation",
    blurb: "New and replacement AC installation for villas, apartments and commercial units.",
    heroTagline: "Installed properly, cooling from day one.",
    intro:
      "A good air conditioner still performs badly if it is installed badly. Our AC installation service in Dubai covers new installations and replacements for villas, apartments, offices and commercial units — from advising on unit placement to fitting, testing and handing over a system that cools efficiently.",
    whatWeDo: [
      "Site assessment and unit placement advice",
      "Installation of new AC units",
      "Replacement of existing units",
      "Secure mounting of indoor and outdoor units",
      "Testing and performance check after installation",
      "Handover and guidance on using and maintaining the unit",
    ],
    approach:
      "Installation quality shapes how well and how long an AC runs, so we start with the site: where the units will sit, how the space is used and what the property needs. Every installation is tested before handover.",
    faqs: [
      {
        q: "Do you install AC units for new and existing properties?",
        a: "Yes. We install units in new properties and replace or add units in existing ones, in villas, apartments, offices and commercial spaces.",
      },
      {
        q: "Can you advise on which unit and where to place it?",
        a: "Yes. We review the space and the requirement, and advise on placement. Tell us the room size and how you use it when you request a quote.",
      },
      {
        q: "Do you also maintain the AC after installation?",
        a: "Yes. We provide routine AC servicing, cleaning and repair, so the same team can look after the system after it is installed.",
      },
      {
        q: "How do I get a quote?",
        a: "Call, WhatsApp or use the quote form. We review the requirement, visit the site where needed, and send a clear scope and quotation before any work starts.",
      },
    ],
    seoTitle: "AC Installation Dubai | Split AC Installation",
    seoDescription:
      "AC installation in Dubai — new and replacement AC installation for villas, apartments and offices, with site advice and testing before handover. Request a quote.",
    keywords: ["AC installation Dubai", "split AC installation Dubai", "AC replacement Dubai", "new AC installation Dubai", "AC repair Dubai"],
  },
  {
    slug: "vinyl-flooring",
    parentSlug: "parquet-wooden-flooring",
    name: "Vinyl Flooring in Dubai",
    shortName: "Vinyl Flooring",
    blurb: "Vinyl flooring installation with proper subfloor preparation for homes and offices.",
    heroTagline: "Durable vinyl floors, installed flat and clean.",
    intro:
      "Vinyl flooring is a practical, hard-wearing choice for homes, offices and retail spaces, and it is easy to keep clean. Our vinyl flooring service in Dubai covers measuring, subfloor preparation and installation, so the finished floor is level, tight at the joints and neat at the edges.",
    whatWeDo: [
      "Site measurement and material planning",
      "Subfloor preparation and levelling",
      "Vinyl flooring installation",
      "Skirting, transitions and finishing details",
      "Replacement of existing flooring",
      "Repair of damaged vinyl sections",
    ],
    approach:
      "A vinyl floor only looks as good as the surface under it, so we measure the site and correct the subfloor first. Then we install with attention to joints, edges and transitions so the result is level and clean.",
    faqs: [
      {
        q: "Do you install vinyl flooring in apartments, villas and offices?",
        a: "Yes. We install flooring in residential apartments and villas as well as offices, retail spaces and other commercial interiors.",
      },
      {
        q: "Does the subfloor need to be prepared?",
        a: "Usually, yes. Vinyl shows imperfections in the surface beneath it, so we assess the subfloor and level or repair it before installing.",
      },
      {
        q: "Can you also install parquet, wooden or laminate flooring?",
        a: "Yes. Alongside vinyl we install parquet, wooden and laminate flooring, and can help you compare them for your space.",
      },
      {
        q: "How do I get a quote?",
        a: "Call, WhatsApp or use the quote form with the area and the type of space. We'll measure where needed and send a clear quotation before any work starts.",
      },
    ],
    seoTitle: "Vinyl Flooring Dubai | Installation",
    seoDescription:
      "Vinyl flooring in Dubai — measuring, subfloor preparation and installation for villas, apartments and offices. Durable, easy-to-clean floors. Request a quote.",
    keywords: ["vinyl flooring Dubai", "vinyl flooring installation Dubai", "vinyl floor Dubai", "flooring Dubai", "flooring company Dubai"],
  },
  {
    slug: "sofa-cleaning",
    parentSlug: "sofa-carpet-cleaning",
    name: "Sofa Cleaning in Dubai",
    shortName: "Sofa Cleaning",
    blurb: "Shampoo and deep-extraction sofa and upholstery cleaning that lifts stains, dust and odours.",
    heroTagline: "Your sofa, deep clean and fresh again.",
    intro:
      "Sofas take the most daily wear in any home: food, drinks, dust, sweat and pets. Our sofa cleaning service in Dubai uses shampoo and deep-extraction methods chosen for your fabric, lifting dirt and stains from deep in the cushions while protecting the material. We clean fabric sofas, sofa beds, sectionals, armchairs and dining chairs in homes and offices.",
    whatWeDo: [
      "Fabric check before cleaning",
      "Stain pre-treatment (food, drinks, pet marks)",
      "Shampoo cleaning and deep extraction",
      "Cushions, arms and backs cleaned separately",
      "Odour treatment",
      "Sofa beds, sectionals, armchairs and dining chairs",
    ],
    approach:
      "We check the fabric label and test a hidden spot first, then pick the right product and method. Very old or set-in stains may fade rather than disappear completely, and we tell you that honestly before we start.",
    faqs: [
      {
        q: "How long does a sofa take to dry after cleaning?",
        a: "Usually a few hours, depending on the fabric and airflow. Keeping the AC or a fan on helps it dry faster.",
      },
      {
        q: "How is sofa cleaning priced?",
        a: "By the number of seats and the type of sofa. Tell us how many seats on WhatsApp and you'll get a fixed price before we come.",
      },
      {
        q: "Can you clean leather sofas?",
        a: "Tell us the material when you message us. We'll confirm whether and how we can clean it before booking.",
      },
      {
        q: "Can I book carpets or mattresses at the same time?",
        a: "Yes. Most customers combine sofa cleaning with carpets, rugs or mattresses in the same visit.",
      },
    ],
    seoTitle: "Sofa Cleaning Dubai | Shampoo & Deep Cleaning",
    seoDescription:
      "Sofa cleaning in Dubai: shampoo and deep-extraction cleaning for fabric sofas, sofa beds and armchairs. Stain and odour treatment. Fixed price on WhatsApp.",
    keywords: ["sofa cleaning Dubai", "sofa cleaning service Dubai", "sofa shampoo cleaning Dubai", "upholstery cleaning Dubai", "couch cleaning Dubai"],
  },
  {
    slug: "carpet-cleaning",
    parentSlug: "sofa-carpet-cleaning",
    name: "Carpet Cleaning in Dubai",
    shortName: "Carpet Cleaning",
    blurb: "Carpet shampoo and deep extraction for wall-to-wall carpets and rugs.",
    heroTagline: "Deep carpet cleaning for Dubai's dust and sand.",
    intro:
      "Dubai's dust and sand settle deep into carpet fibres, where vacuuming can't reach. Our carpet cleaning service in Dubai uses carpet shampoo and deep extraction to pull out embedded dirt, stains and odours from wall-to-wall carpets and rugs in villas, apartments and offices.",
    whatWeDo: [
      "Dry vacuuming to remove loose dust and sand",
      "Stain pre-treatment",
      "Carpet shampoo cleaning",
      "Deep extraction of dirt and moisture",
      "Odour treatment",
      "Wall-to-wall carpets, area rugs and office carpets",
    ],
    approach:
      "We vacuum first, treat stains, then shampoo and extract. Removing the dirty water, not just pushing it around, is what gets carpets truly clean and helps them dry faster.",
    faqs: [
      {
        q: "How often should carpets be cleaned in Dubai?",
        a: "Most homes benefit from a deep clean every 6 to 12 months. Homes with children, pets or heavy foot traffic may need it more often.",
      },
      {
        q: "Do you clean rugs as well as fitted carpets?",
        a: "Yes. We clean wall-to-wall carpets in homes and offices as well as loose area rugs.",
      },
      {
        q: "How long until I can walk on the carpet?",
        a: "Usually a few hours, depending on thickness and airflow. We'll give you a time on the day.",
      },
      {
        q: "How do I get a price?",
        a: "Send the number of rooms or rugs and rough sizes on WhatsApp, and we'll reply with a fixed price.",
      },
    ],
    seoTitle: "Carpet Cleaning Dubai | Shampoo & Deep Extraction",
    seoDescription:
      "Carpet cleaning in Dubai: carpet shampoo and deep extraction for fitted carpets and rugs in villas, apartments and offices. Removes dust, sand and stains.",
    keywords: ["carpet cleaning Dubai", "carpet shampoo Dubai", "rug cleaning Dubai", "carpet deep cleaning Dubai", "office carpet cleaning Dubai"],
  },
  {
    slug: "villa-painting",
    parentSlug: "painting-services",
    name: "Villa Painting in Dubai",
    shortName: "Villa Painting",
    blurb: "Interior and exterior villa painting, room by room, with full surface preparation.",
    heroTagline: "Villa painting, inside and out.",
    intro:
      "Villas have more rooms, higher ceilings, staircases and exterior walls exposed to Dubai's sun and sand. Our villa painting service covers interiors, exteriors, boundary walls and gates, with crack filling, sanding and priming before every coat so the finish lasts.",
    whatWeDo: [
      "Interior painting: bedrooms, living areas, staircases",
      "Exterior walls and boundary walls",
      "Ceilings and high walls",
      "Crack filling, sanding and priming",
      "Doors, frames and gates",
      "Move-in and move-out repainting",
    ],
    approach:
      "We walk through the villa with you, agree which rooms and surfaces are included, and give you a fixed written quote. Furniture is moved and covered, floors are protected, and we clean up when we finish.",
    faqs: [
      {
        q: "How is villa painting priced?",
        a: "By the number of rooms, ceiling heights, wall condition and whether the exterior is included. You get a fixed written quote after a quick look, with no hidden charges.",
      },
      {
        q: "Do you paint villa exteriors?",
        a: "Yes, including external walls and boundary walls, with paint suited to sun and heat.",
      },
      {
        q: "Can we stay in the villa while you paint?",
        a: "Yes. We work room by room so the rest of the home stays usable, and we cover furniture and floors in each room.",
      },
      {
        q: "What if something isn't right after the job?",
        a: "Tell us within 48 hours and we'll come back and fix it free of charge.",
      },
    ],
    seoTitle: "Villa Painting Dubai | Interior & Exterior",
    seoDescription:
      "Villa painting in Dubai: interior and exterior painting, ceilings, boundary walls and gates with full surface preparation. Fixed written quote, no hidden charges.",
    keywords: ["villa painting Dubai", "villa painting services Dubai", "exterior painting Dubai", "house painting Dubai", "painters in Dubai"],
  },
  {
    slug: "apartment-painting",
    parentSlug: "painting-services",
    name: "Apartment Painting in Dubai",
    shortName: "Apartment Painting",
    blurb: "Apartment repainting from studios up, ideal for move-in and move-out handovers.",
    heroTagline: "Apartment painting from AED 350.",
    intro:
      "Whether you're moving in, moving out or refreshing a rented flat, our apartment painting service in Dubai covers studios to large apartments. Studio wall painting starts from AED 350. We handle surface preparation, protect your floors and furniture, and work within your building's rules.",
    whatWeDo: [
      "Studio, 1, 2, 3 and 4+ bedroom apartments",
      "Move-out repainting to white for handover",
      "Feature walls and colour changes",
      "Ceilings on request",
      "Crack and nail-hole filling",
      "Work permits arranged with building management",
    ],
    approach:
      "Tell us the apartment size and building. We confirm what the management office needs, agree the scope and colours, and give you a fixed written quote before we start.",
    faqs: [
      {
        q: "How much does apartment painting cost in Dubai?",
        a: "Studio wall painting starts from AED 350. Bigger apartments are priced by the number of rooms, wall condition and whether ceilings are included.",
      },
      {
        q: "Do you repaint apartments for tenancy handover?",
        a: "Yes. Repainting to white before handing back keys is one of our most common requests. Share your handover date when you book.",
      },
      {
        q: "Do I need permission from building management?",
        a: "Most Dubai towers require a work permit or NOC before contractors start. Tell us the building name and we'll help with what the management office asks for.",
      },
      {
        q: "Is the paint included?",
        a: "We can supply the paint or use paint you've bought. Your quote states which option it covers.",
      },
    ],
    seoTitle: "Apartment Painting Dubai | Studio from AED 350",
    seoDescription:
      "Apartment painting in Dubai from studios to 4+ bedrooms. Move-out repainting, feature walls and ceilings. Studio wall painting from AED 350. Fixed quote.",
    keywords: ["apartment painting Dubai", "flat painting Dubai", "move out painting Dubai", "wall painting Dubai", "painting services Dubai"],
  },
  {
    slug: "laminate-flooring",
    parentSlug: "parquet-wooden-flooring",
    name: "Laminate Flooring in Dubai",
    shortName: "Laminate Flooring",
    blurb: "Laminate flooring supply guidance, subfloor preparation and installation.",
    heroTagline: "Laminate flooring, measured and fitted properly.",
    intro:
      "Laminate gives the look of wood at a lower cost, and is quick to install. Our laminate flooring service in Dubai covers measuring, subfloor preparation, underlay, installation and skirting for apartments, villas and offices.",
    whatWeDo: [
      "Site measurement and material planning",
      "Subfloor checks and levelling",
      "Underlay installation",
      "Laminate installation with expansion gaps",
      "Skirting, thresholds and transitions",
      "Repair and replacement of damaged boards",
    ],
    approach:
      "We check the floor is level and dry before fitting, use the right underlay, and leave proper expansion gaps so the floor copes with Dubai's temperature changes.",
    faqs: [
      {
        q: "Can laminate be installed over tiles?",
        a: "Often yes, if the tiles are level and firmly fixed. We check during the site visit.",
      },
      {
        q: "Laminate or parquet: which should I choose?",
        a: "Laminate is more affordable and scratch-resistant. Parquet is real wood, can be sanded and refinished, and lasts longer. We'll explain both for your space.",
      },
      {
        q: "How is laminate flooring priced?",
        a: "Per square metre, based on the product and floor preparation needed. We measure and give you a fixed written quote.",
      },
      {
        q: "Is laminate suitable for kitchens and bathrooms?",
        a: "Standard laminate isn't suited to wet areas. Ask us about water-resistant or vinyl options for those rooms.",
      },
    ],
    seoTitle: "Laminate Flooring Dubai | Installation",
    seoDescription:
      "Laminate flooring in Dubai: measuring, subfloor levelling, underlay and installation for apartments, villas and offices. Fixed written quote.",
    keywords: ["laminate flooring Dubai", "laminate flooring installation Dubai", "flooring Dubai", "wooden flooring Dubai", "flooring company Dubai"],
  },
];

export function getSubService(parentSlug: string, slug: string): SubService | undefined {
  return subServices.find((s) => s.parentSlug === parentSlug && s.slug === slug);
}

export function getSubServicesFor(parentSlug: string): SubService[] {
  return subServices.filter((s) => s.parentSlug === parentSlug);
}
