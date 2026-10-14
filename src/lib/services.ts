export type ProjectCategory =
  | "AC"
  | "Flooring"
  | "Cleaning"
  | "Painting";

export interface Service {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProjectCategory;
  icon: string;
  image: string;
  bannerImage: string;
  bannerAlt: string;
  detailImage: string;
  detailImageAlt: string;
  detailCaption: string;
  shortDescription: string;
  heroTagline: string;
  intro: string;
  whatWeDo: string[];
  applications: string[];
  approach: string;
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "sofa-carpet-cleaning",
    number: "01",
    slug: "sofa-carpet-cleaning",
    name: "Sofa & Carpet Cleaning Services",
    shortName: "Sofa & Carpet Cleaning",
    category: "Cleaning",
    icon: "Sparkles",
    image: "/images/services/shampoo-cleaning.webp",
    bannerImage: "/images/services/shampoo-cleaning.webp",
    bannerAlt: "Professional sofa, carpet, mattress, and curtain deep cleaning in a modern Dubai home",
    detailImage: "/images/home/featured-cleaning.webp",
    detailImageAlt: "Specialized deep extraction shampoo machine lifting stains and allergens from sofa upholstery",
    detailCaption: "Deep Extraction & Fiber Sanitization",
    shortDescription:
      "Sofa, carpet, mattress and curtain cleaning — shampoo and deep-extraction cleaning for homes and commercial properties in Dubai.",
    heroTagline: "Sofa and carpet cleaning that brings fabrics back to life.",
    intro:
      "Sofas, carpets, mattresses and curtains take daily wear and collect dirt, dust and stains. We provide professional sofa cleaning and carpet cleaning in Dubai for homes, offices and hospitality properties, using shampoo and deep-extraction methods with industry-standard equipment to remove dirt, allergens and stains while protecting the fabric.",
    whatWeDo: [
      "Sofa cleaning and stain removal (shampoo and extraction)",
      "Carpet shampoo cleaning and deep extraction",
      "Mattress cleaning and sanitization",
      "Curtain cleaning and treatment",
      "Upholstered furniture cleaning",
      "Allergen removal and odor treatment",
      "Pre-treatment and post-cleaning protection",
    ],
    applications: [
      "Residential apartments and villas",
      "Family homes and living spaces",
      "Offices and commercial interiors",
      "Hotels and hospitality properties",
    ],
    approach:
      "We assess the fabric type and condition before cleaning, selecting the appropriate shampoo and extraction method to remove deep-set dirt and stains while protecting the material's integrity and appearance.",
    relatedSlugs: ["painting-services", "ac-repair-maintenance"],
    seoTitle: "Sofa & Carpet Cleaning Dubai | Deep Cleaning",
    seoDescription:
      "Professional sofa and carpet cleaning in Dubai — shampoo and deep-extraction cleaning for sofas, carpets, mattresses and curtains in homes and offices. Request a quote.",
    keywords: ["sofa cleaning Dubai", "carpet cleaning Dubai", "carpet shampoo Dubai", "sofa cleaning service Dubai", "mattress cleaning Dubai", "curtain cleaning Dubai", "upholstery cleaning Dubai"],
  },
  {
    id: "painting-services",
    number: "02",
    slug: "painting-services",
    name: "Painting Services",
    shortName: "Painting Services",
    category: "Painting",
    icon: "Paintbrush",
    image: "/images/services/painting-work.webp",
    bannerImage: "/images/services/painting-work.webp",
    bannerAlt: "Professional painter applying smooth interior wall paint in a luxury Dubai apartment",
    detailImage: "/images/projects/project-painting.webp",
    detailImageAlt: "Freshly painted warm-white bedroom with crisp edges, painter removing the final masking tape",
    detailCaption: "Flawless Surface Preparation & Finishing",
    shortDescription:
      "Interior and exterior painting services for villas, apartments, offices and commercial properties in Dubai.",
    heroTagline: "A precise finish, from prep to final coat.",
    intro:
      "Quality paintwork starts with proper surface preparation. Our painting services in Dubai cover villas, apartments, offices and commercial units — from surface prep, filling and sanding to the final coat — using industry-standard materials and techniques to deliver a clean, durable finish.",
    whatWeDo: [
      "Interior painting for residential and commercial spaces",
      "Exterior painting and facade work",
      "Surface preparation, filling and sanding",
      "Primer application and paint selection",
      "Repainting and touch-up services",
      "Wall repair and damage correction prior to painting",
      "Color consultation and finish selection",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial interiors",
      "Retail units and storefronts",
      "Exterior facades and building elements",
    ],
    approach:
      "We prepare every surface before painting begins — filling, sanding and priming as needed — because the quality of a finish is set well before the first coat of paint is applied.",
    relatedSlugs: ["sofa-carpet-cleaning", "parquet-wooden-flooring"],
    seoTitle: "Painting Services Dubai | Villa & Apartment",
    seoDescription:
      "Painting services in Dubai for villas, apartments and offices — interior and exterior painting with proper surface preparation and a clean finish. Request a quote.",
    keywords: ["painting services Dubai", "wall painting Dubai", "villa painting Dubai", "apartment painting Dubai", "painters in Dubai", "interior painting Dubai", "painting company Dubai"],
  },
  {
    id: "ac-repair-maintenance",
    number: "03",
    slug: "ac-repair-maintenance",
    name: "AC Repair & Maintenance",
    shortName: "AC Repair & Maintenance",
    category: "AC",
    icon: "Wind",
    image: "/images/services/ac-services.webp",
    bannerImage: "/images/services/ac-services.webp",
    bannerAlt: "Professional HVAC technician installing and maintaining a split air conditioner in Dubai",
    detailImage: "/images/home/featured-ac.webp",
    detailImageAlt: "Technician reading a digital manifold gauge on an outdoor AC condenser unit",
    detailCaption: "Diagnostics & Efficiency Optimization",
    shortDescription:
      "AC repair, servicing, cleaning and installation for homes and commercial properties in Dubai.",
    heroTagline: "Reliable cooling engineered for Dubai's climate.",
    intro:
      "Dependable air-conditioning is essential for Dubai properties. We provide AC repair, AC maintenance and installation, keeping systems running efficiently and reliably throughout the year. From routine servicing and cleaning to fault diagnosis and repair, we keep your cooling systems performing at their best.",
    whatWeDo: [
      "AC unit installation for new and existing properties",
      "Routine AC servicing and maintenance programs",
      "Air filter replacement and system cleaning",
      "Fault diagnosis, troubleshooting and repair",
      "Refrigerant level checks and refilling",
      "Ductwork inspection and cleaning",
      "Performance optimization and efficiency checks",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial units",
      "Retail spaces and storefronts",
      "Multi-unit residential buildings",
    ],
    approach:
      "We treat each AC system individually, performing thorough inspections to identify issues early and address them before they impact performance. Regular maintenance keeps systems running efficiently and extends equipment life.",
    relatedSlugs: ["sofa-carpet-cleaning", "parquet-wooden-flooring"],
    seoTitle: "AC Repair & Maintenance Dubai | AC Servicing",
    seoDescription:
      "AC repair and maintenance in Dubai — servicing, cleaning, fault repair and installation for villas, apartments and offices. Call, WhatsApp or request a quote.",
    keywords: ["AC repair Dubai", "AC maintenance Dubai", "AC service Dubai", "AC cleaning Dubai", "AC duct cleaning Dubai", "AC installation Dubai", "AC maintenance company Dubai"],
  },
  {
    id: "parquet-wooden-flooring",
    number: "04",
    slug: "parquet-wooden-flooring",
    name: "Parquet & Wooden Flooring",
    shortName: "Parquet & Wooden Flooring",
    category: "Flooring",
    icon: "Hammer",
    image: "/images/services/flooring-parquet.webp",
    bannerImage: "/images/services/flooring-parquet.webp",
    bannerAlt: "Professional flooring specialist installing premium wooden parquet flooring in Dubai",
    detailImage: "/images/home/featured-flooring.webp",
    detailImageAlt: "Installer pressing an oak herringbone parquet block into fresh adhesive",
    detailCaption: "Precision Subfloor Prep & Parquet Craftsmanship",
    shortDescription:
      "Parquet, wooden and laminate flooring installation, repair and refinishing for homes and commercial properties in Dubai.",
    heroTagline: "Precision flooring from preparation to finishing.",
    intro:
      "Quality flooring transforms a space. We install and maintain parquet, wooden and laminate flooring in Dubai with careful attention to substrate preparation, material selection and precision installation. From new installations to repairs and refinishing, our work is built to last.",
    whatWeDo: [
      "Wood flooring installation",
      "Parquet flooring installation and pattern work",
      "Laminate flooring installation",
      "Subfloor preparation and leveling",
      "Flooring repair and replacement",
      "Refinishing and restoration of existing floors",
      "Skirting, transitions and finishing details",
      "Site measurement and material planning",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial interiors",
      "Retail spaces",
      "Renovation and restoration projects",
    ],
    approach:
      "Every flooring project starts with precise site measurement and substrate assessment. We correct leveling issues first, select appropriate materials for the space, and install with attention to detail so the finished surface is durable, level and visually flawless.",
    relatedSlugs: ["painting-services", "ac-repair-maintenance"],
    seoTitle: "Parquet & Wooden Flooring Dubai | Installation",
    seoDescription:
      "Parquet and wooden flooring in Dubai — installation, repair and refinishing of parquet, wood and laminate floors for villas, apartments and offices. Request a quote.",
    keywords: ["flooring Dubai", "parquet flooring Dubai", "wooden flooring Dubai", "laminate flooring Dubai", "flooring company Dubai", "floor polishing Dubai"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
