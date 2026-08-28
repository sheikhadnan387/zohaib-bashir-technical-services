export type ProjectCategory =
  | "HVAC"
  | "Interior"
  | "Maintenance"
  | "Pools"
  | "Painting"
  | "Technical";

export interface Service {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProjectCategory;
  icon: string;
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
    id: "infrastructure-network",
    number: "01",
    slug: "infrastructure-network",
    name: "Infrastructure & Network Computer Installation & Maintenance",
    shortName: "Infrastructure & Network",
    category: "Technical",
    icon: "Network",
    shortDescription:
      "Structured cabling, network setup and computer system installation and maintenance for offices and residential properties.",
    heroTagline: "Reliable networks, built to run quietly in the background.",
    intro:
      "A property runs on its infrastructure long after the installers have left. We install and maintain the network cabling, computer systems and connectivity that offices, retail units and residences depend on day to day, with a focus on tidy execution and dependable performance.",
    whatWeDo: [
      "Structured network cabling for offices and residential units",
      "Computer and workstation installation and setup",
      "Network hardware installation — switches, routers and access points",
      "Ongoing maintenance and fault diagnosis for existing network infrastructure",
      "Cable management and containment for a clean technical finish",
      "System troubleshooting and performance checks",
    ],
    applications: [
      "Office fit-outs",
      "Residential apartments and villas",
      "Retail units",
      "Mixed-use commercial buildings",
    ],
    approach:
      "We start by understanding how the space is actually used, then plan cable routes and hardware placement that keep the installation clean, labelled and easy to maintain going forward.",
    relatedSlugs: ["electromechanical", "building-cleaning"],
    seoTitle: "Infrastructure & Network Installation Dubai",
    seoDescription:
      "Network installation and computer system maintenance in Dubai — structured cabling, hardware setup and ongoing technical support for offices and residences.",
    keywords: ["network installation Dubai", "computer maintenance Dubai", "structured cabling Dubai"],
  },
  {
    id: "carpentry-wood-flooring",
    number: "02",
    slug: "carpentry-wood-flooring",
    name: "Carpentry & Wood Flooring",
    shortName: "Carpentry & Wood Flooring",
    category: "Interior",
    icon: "Hammer",
    shortDescription:
      "Precision carpentry and flooring solutions for residential and commercial spaces.",
    heroTagline: "Craftsmanship measured in millimetres, not guesswork.",
    intro:
      "From fitted joinery to full flooring installations, our carpentry work is built around accurate measurement, sound material selection and a clean finish. We handle both new installations and the repair or restoration of existing woodwork.",
    whatWeDo: [
      "Wood and laminate flooring installation",
      "Fitted joinery, skirting and trims",
      "Custom carpentry for cabinetry and built-in units",
      "Door, frame and hardware fitting",
      "Flooring repair and refinishing",
      "Site measurement and material planning",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial interiors",
      "Retail fit-outs",
      "Renovation projects",
    ],
    approach:
      "Every carpentry job starts with an accurate site measurement and a clear material plan, so installation on site is efficient and the finished result sits flush, level and true.",
    relatedSlugs: ["floor-wall-tiling", "painting"],
    seoTitle: "Carpentry & Wood Flooring Services Dubai",
    seoDescription:
      "Carpentry and wood flooring installation in Dubai — fitted joinery, flooring installation and repair for residential and commercial properties.",
    keywords: ["carpentry services Dubai", "wood flooring Dubai", "flooring installation Dubai"],
  },
  {
    id: "floor-wall-tiling",
    number: "03",
    slug: "floor-wall-tiling",
    name: "Floor & Wall Tiling",
    shortName: "Floor & Wall Tiling",
    category: "Interior",
    icon: "Grid3x3",
    shortDescription:
      "Professional tiling installation and repair for floors and walls across residential and commercial properties.",
    heroTagline: "Level surfaces, straight lines, consistent grout work.",
    intro:
      "Tiling is a discipline of preparation as much as installation. We prepare surfaces correctly, set tiles to consistent lines and levels, and finish with clean, even grouting — for kitchens, bathrooms, floors and feature walls alike.",
    whatWeDo: [
      "Floor tiling for residential and commercial spaces",
      "Wall tiling for kitchens, bathrooms and feature areas",
      "Surface preparation and levelling",
      "Grouting and sealing",
      "Repair and replacement of damaged or loose tiles",
      "Material and layout planning",
    ],
    applications: [
      "Kitchens and bathrooms",
      "Residential flooring",
      "Commercial and retail floors",
      "Balconies and outdoor tiled areas",
    ],
    approach:
      "We assess the substrate before any tile is set, correcting levelling issues first so the finished surface is stable, even and built to last.",
    relatedSlugs: ["carpentry-wood-flooring", "building-cleaning"],
    seoTitle: "Floor & Wall Tiling Services Dubai",
    seoDescription:
      "Tiling installation and repair in Dubai — floor and wall tiling for kitchens, bathrooms and commercial spaces, from surface preparation to finishing.",
    keywords: ["tiling services Dubai", "floor tiling Dubai", "wall tiling Dubai"],
  },
  {
    id: "hvac",
    number: "04",
    slug: "hvac",
    name: "Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance",
    shortName: "AC, Ventilation & Air Filtration",
    category: "HVAC",
    icon: "Wind",
    shortDescription:
      "Installation and maintenance solutions for air-conditioning, ventilation and air filtration systems.",
    heroTagline: "Comfort engineered for Dubai's climate, every season.",
    intro:
      "Dependable air-conditioning and ventilation is essential to any Dubai property. We install and maintain AC units, ventilation systems and air filtration equipment, keeping systems running efficiently across residential and commercial spaces.",
    whatWeDo: [
      "Air-conditioning unit installation",
      "Routine AC servicing and maintenance",
      "Ventilation system installation and upkeep",
      "Air filtration system installation and filter maintenance",
      "Fault diagnosis and repair",
      "Duct and unit cleaning as part of scheduled maintenance",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial units",
      "Retail spaces",
      "Multi-unit residential buildings",
    ],
    approach:
      "We treat AC and ventilation as connected systems — inspecting units, ducting and filtration together so maintenance addresses performance and air quality, not just the unit itself.",
    relatedSlugs: ["electromechanical", "swimming-pool-maintenance"],
    seoTitle: "AC & HVAC Maintenance Dubai",
    seoDescription:
      "Air-conditioning, ventilation and air filtration installation and maintenance in Dubai for residential and commercial properties.",
    keywords: ["AC maintenance Dubai", "HVAC maintenance Dubai", "air conditioning installation Dubai"],
  },
  {
    id: "swimming-pool-maintenance",
    number: "05",
    slug: "swimming-pool-maintenance",
    name: "Swimming Pools Maintenance",
    shortName: "Swimming Pool Maintenance",
    category: "Pools",
    icon: "Waves",
    shortDescription:
      "Ongoing maintenance services to keep swimming pools clean, balanced and properly functioning.",
    heroTagline: "Clear water, balanced chemistry, dependable upkeep.",
    intro:
      "A well-maintained pool depends on consistent attention — water balance, filtration and equipment all need to be checked on a routine basis. We provide ongoing swimming pool maintenance for private and shared pools.",
    whatWeDo: [
      "Water quality testing and chemical balancing",
      "Filtration system checks and cleaning",
      "Pool surface and tile cleaning",
      "Pump and equipment inspection",
      "Debris removal and general upkeep",
      "Scheduled maintenance visits",
    ],
    applications: [
      "Private villa pools",
      "Residential building pools",
      "Hotel and hospitality pools",
      "Community shared pools",
    ],
    approach:
      "Pool maintenance works best as a routine, not a one-off visit — we check water chemistry and equipment condition consistently so problems are caught early rather than after they surface.",
    relatedSlugs: ["hvac", "electromechanical"],
    seoTitle: "Swimming Pool Maintenance Dubai",
    seoDescription:
      "Swimming pool maintenance in Dubai — water balancing, filtration checks and equipment upkeep for villas, residences and shared pools.",
    keywords: ["swimming pool maintenance Dubai", "pool cleaning Dubai", "pool service Dubai"],
  },
  {
    id: "building-cleaning",
    number: "06",
    slug: "building-cleaning",
    name: "Building Cleaning Services",
    shortName: "Building Cleaning",
    category: "Maintenance",
    icon: "Sparkles",
    shortDescription:
      "Professional cleaning services for residential and commercial buildings.",
    heroTagline: "A clean building is a well-maintained one.",
    intro:
      "We provide building cleaning services suited to residential and commercial properties, covering common areas, interiors and post-work clean-ups so spaces are left in proper order.",
    whatWeDo: [
      "Residential and commercial interior cleaning",
      "Common area and facility cleaning",
      "Post-construction and post-renovation cleaning",
      "Window and glass surface cleaning",
      "Deep cleaning for move-in or handover",
      "Scheduled cleaning visits",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial units",
      "Buildings after renovation or construction work",
      "Common areas in multi-unit buildings",
    ],
    approach:
      "Cleaning scope is agreed upfront against the actual condition and use of the space, so the result matches what the property genuinely needs rather than a fixed checklist.",
    relatedSlugs: ["painting", "floor-wall-tiling"],
    seoTitle: "Building Cleaning Services Dubai",
    seoDescription:
      "Professional building cleaning services in Dubai for residential and commercial properties, including post-construction cleaning.",
    keywords: ["building cleaning services Dubai", "commercial cleaning Dubai", "post construction cleaning Dubai"],
  },
  {
    id: "painting",
    number: "07",
    slug: "painting",
    name: "Painting Contracting",
    shortName: "Painting Contracting",
    category: "Painting",
    icon: "Paintbrush",
    shortDescription:
      "Interior and exterior painting contracting for residential and commercial properties.",
    heroTagline: "A precise finish, from prep to final coat.",
    intro:
      "Good paintwork is decided before the first coat goes on. We prepare surfaces properly, select suitable materials for the substrate and environment, and apply finishes with attention to line, coverage and consistency.",
    whatWeDo: [
      "Interior painting for residential and commercial spaces",
      "Exterior painting contracting",
      "Surface preparation, filling and sanding",
      "Repainting and touch-up work",
      "Wall repair prior to painting",
      "Colour and finish consultation",
    ],
    applications: [
      "Residential apartments and villas",
      "Offices and commercial interiors",
      "Retail units",
      "Exterior facades and common areas",
    ],
    approach:
      "We prepare every surface before painting begins — filling, sanding and priming as needed — because the quality of a finish is set well before the first coat of paint is applied.",
    relatedSlugs: ["carpentry-wood-flooring", "building-cleaning"],
    seoTitle: "Painting Services Dubai",
    seoDescription:
      "Interior and exterior painting contracting in Dubai for residential and commercial properties, from surface preparation to final finish.",
    keywords: ["painting services Dubai", "painting contractor Dubai", "interior painting Dubai"],
  },
  {
    id: "aluminum-glass",
    number: "08",
    slug: "aluminum-glass",
    name: "Aluminum & Glass Installation & Maintenance",
    shortName: "Aluminum & Glass",
    category: "Technical",
    icon: "SquareStack",
    shortDescription:
      "Installation and maintenance of aluminum and glass fixtures, partitions and structures.",
    heroTagline: "Clean lines in aluminum and glass, properly fitted.",
    intro:
      "Aluminum and glass installations demand precise fitting and secure fixing. We install and maintain aluminum and glass elements including partitions, windows and fixtures across residential and commercial properties.",
    whatWeDo: [
      "Aluminum and glass partition installation",
      "Window and door frame installation",
      "Glass fixture fitting and replacement",
      "Aluminum structure maintenance and repair",
      "Sealing and weatherproofing",
      "Hardware adjustment and servicing",
    ],
    applications: [
      "Office partitions and interiors",
      "Residential windows and balconies",
      "Retail glass frontages",
      "Commercial facades and fixtures",
    ],
    approach:
      "Fit and alignment are checked at every stage of an aluminum or glass installation, since a small deviation at the frame becomes a visible flaw in the finished surface.",
    relatedSlugs: ["electromechanical", "carpentry-wood-flooring"],
    seoTitle: "Aluminum & Glass Installation Dubai",
    seoDescription:
      "Aluminum and glass installation and maintenance in Dubai — partitions, windows and fixtures for residential and commercial properties.",
    keywords: ["aluminum and glass services Dubai", "glass partition installation Dubai", "aluminum works Dubai"],
  },
  {
    id: "electromechanical",
    number: "09",
    slug: "electromechanical",
    name: "Electromechanical Equipment Installation & Maintenance",
    shortName: "Electromechanical Equipment",
    category: "Technical",
    icon: "Cog",
    shortDescription:
      "Installation and maintenance of electromechanical equipment and systems.",
    heroTagline: "The mechanical and electrical systems behind every property.",
    intro:
      "Electromechanical equipment keeps a building's core systems running. We handle the installation and ongoing maintenance of electromechanical equipment across residential and commercial properties.",
    whatWeDo: [
      "Electromechanical equipment installation",
      "Preventive maintenance for mechanical and electrical systems",
      "Fault diagnosis and repair",
      "Equipment servicing and adjustment",
      "System inspection and testing",
      "Coordination with related technical works on site",
    ],
    applications: [
      "Residential buildings",
      "Commercial and office properties",
      "Facilities with mechanical plant equipment",
      "Multi-service technical properties",
    ],
    approach:
      "Electromechanical work is carried out with the same equipment logged and inspected on a routine basis, so faults are identified early and systems stay reliable.",
    relatedSlugs: ["hvac", "infrastructure-network"],
    seoTitle: "Electromechanical Services Dubai",
    seoDescription:
      "Electromechanical equipment installation and maintenance in Dubai for residential and commercial properties.",
    keywords: ["electromechanical services Dubai", "electromechanical maintenance Dubai"],
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
