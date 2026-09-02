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
    id: "shampoo-cleaning",
    number: "01",
    slug: "shampoo-cleaning",
    name: "Shampoo Cleaning Services",
    shortName: "Shampoo Cleaning",
    category: "Cleaning",
    icon: "Sparkles",
    image: "/images/services/shampoo-cleaning.webp",
    shortDescription:
      "Professional shampoo and deep cleaning for sofas, carpets, mattresses and curtains in residential and commercial properties.",
    heroTagline: "Deep cleaning that brings fabrics back to life.",
    intro:
      "Quality fabrics and textiles need specialized care to stay fresh and durable. We provide professional shampoo cleaning for sofas, carpets, mattresses and curtains across residential and commercial properties, using proven techniques and industry-standard equipment to remove dirt, allergens and stains while preserving the material.",
    whatWeDo: [
      "Sofa shampoo cleaning and stain removal",
      "Carpet shampoo cleaning and deep extraction",
      "Mattress shampoo cleaning and sanitization",
      "Curtain shampoo cleaning and treatment",
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
    relatedSlugs: ["painting-work", "ac-services"],
    seoTitle: "Shampoo Cleaning Services Dubai — Sofa, Carpet, Mattress & Curtain Cleaning",
    seoDescription:
      "Professional shampoo cleaning in Dubai for sofas, carpets, mattresses and curtains — deep cleaning services for residential and commercial properties.",
    keywords: ["shampoo cleaning Dubai", "sofa cleaning Dubai", "carpet cleaning Dubai", "mattress cleaning Dubai", "curtain cleaning Dubai"],
  },
  {
    id: "painting-work",
    number: "02",
    slug: "painting-work",
    name: "Painting Work",
    shortName: "Painting Work",
    category: "Painting",
    icon: "Paintbrush",
    image: "/images/services/painting-work.webp",
    shortDescription:
      "Interior and exterior painting services for residential and commercial properties.",
    heroTagline: "A precise finish, from prep to final coat.",
    intro:
      "Quality paintwork starts with proper surface preparation. We handle everything from surface prep, filling and sanding to the final coat, using industry-standard materials and techniques to deliver a clean, durable finish for residential and commercial spaces.",
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
    relatedSlugs: ["shampoo-cleaning", "flooring-parquet"],
    seoTitle: "Painting Services Dubai",
    seoDescription:
      "Interior and exterior painting services in Dubai for residential and commercial properties — surface preparation, painting and finishing.",
    keywords: ["painting services Dubai", "painting contractor Dubai", "interior painting Dubai", "exterior painting Dubai"],
  },
  {
    id: "ac-services",
    number: "03",
    slug: "ac-services",
    name: "AC Services Installation & Maintenance",
    shortName: "AC Services",
    category: "AC",
    icon: "Wind",
    image: "/images/services/ac-services.webp",
    shortDescription:
      "Air-conditioning installation, servicing and maintenance for residential and commercial properties.",
    heroTagline: "Reliable cooling engineered for Dubai's climate.",
    intro:
      "Dependable air-conditioning is essential for Dubai properties. We install, service and maintain AC units, ensuring systems run efficiently and reliably throughout the year. From routine maintenance to fault diagnosis and repair, we keep your cooling systems performing at their best.",
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
    relatedSlugs: ["shampoo-cleaning", "flooring-parquet"],
    seoTitle: "AC Services & HVAC Maintenance Dubai",
    seoDescription:
      "Air-conditioning installation, servicing and maintenance in Dubai — AC repair, maintenance and installation for residential and commercial properties.",
    keywords: ["AC services Dubai", "AC maintenance Dubai", "air conditioning installation Dubai", "AC repair Dubai"],
  },
  {
    id: "flooring-parquet",
    number: "04",
    slug: "flooring-parquet",
    name: "Flooring & Parquet Work",
    shortName: "Flooring & Parquet Work",
    category: "Flooring",
    icon: "Hammer",
    image: "/images/services/flooring-parquet.webp",
    shortDescription:
      "Wood, parquet and laminate flooring installation and repair for residential and commercial properties.",
    heroTagline: "Precision flooring from preparation to finishing.",
    intro:
      "Quality flooring transforms a space. We install and maintain wood, parquet and laminate flooring with careful attention to substrate preparation, material selection and precision installation. From new installations to repairs and refinishing, our work is built to last.",
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
    relatedSlugs: ["painting-work", "ac-services"],
    seoTitle: "Flooring & Parquet Installation Dubai",
    seoDescription:
      "Wood, parquet and laminate flooring installation in Dubai — flooring services for residential and commercial properties including installation, repair and refinishing.",
    keywords: ["flooring installation Dubai", "parquet flooring Dubai", "wood flooring Dubai", "laminate flooring Dubai"],
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
