import { serviceAreas } from "./company";

export type AreaName = (typeof serviceAreas)[number];

export interface Area {
  slug: string;
  name: AreaName;
  /** Short name used in headings, e.g. "JVC". */
  shortName: string;
  /** Typical property mix — general knowledge about the community, no claims about our past jobs. */
  homes: string;
  /** One or two sentences on what owners and tenants there typically need. */
  note: string;
  /** Slugs of nearby areas for internal links. */
  nearby: string[];
  /** Optional page title when an area has its own search volume (see SEO-KEYWORDS.md). */
  seoTitle?: string;
  /** Optional AC paragraph for areas where people search for AC work (Search Console queries). */
  acFocus?: string;
}

const towerAc =
  "In tower apartments the work usually needs building management approval first, and where a building runs central cooling the central plant stays with them. We look after the AC units and ducts inside your home: filter and coil cleaning, drain lines, servicing and repairs, with the scope and price agreed in writing before we start.";
const villaAc =
  "Villas and townhouses usually have several split or ducted units. We service them unit by unit: filters, coils, drain lines and ducts, and list what each one needs in the written quote before any work starts.";

const apartmentTip =
  "Most towers require a work permit or NOC from building management before contractors start. Tell us the building name and we'll prepare what the management office asks for.";
const villaTip =
  "Villas usually have several AC units, larger wall areas and outdoor spaces, so we quote room by room and list everything in writing before work starts.";

export const areas: Area[] = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    shortName: "Downtown",
    homes: "High-rise apartments around Burj Khalifa and Dubai Mall, plus the low-rise Old Town buildings.",
    note: `Repainting and sofa cleaning before a new tenancy are common requests here, along with AC servicing in older towers. ${apartmentTip}`,
    nearby: ["business-bay", "dubai-creek-harbour"],
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    shortName: "Business Bay",
    homes: "Apartment towers and office buildings along the Dubai Water Canal.",
    note: `Alongside homes we work on offices and commercial units, so painting and flooring can be scheduled around business hours. ${apartmentTip}`,
    nearby: ["downtown-dubai", "dubai-creek-harbour"],
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    shortName: "Creek Harbour",
    homes: "Newer waterfront apartment towers.",
    note: `New handovers often need snagging touch-ups, AC servicing and upgraded flooring before move-in. ${apartmentTip}`,
    nearby: ["downtown-dubai", "nad-al-sheba"],
    seoTitle: "Dubai Creek Harbour AC Cleaning & Repair",
    acFocus: towerAc
  },
  {
    slug: "nad-al-sheba",
    name: "Nad Al Sheba",
    shortName: "Nad Al Sheba",
    homes: "Villas and townhouses in a family community.",
    note: `Interior and exterior repainting, multi-unit AC servicing and deep cleaning of sofas and carpets are typical villa jobs. ${villaTip}`,
    nearby: ["dubai-creek-harbour", "downtown-dubai"],
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    shortName: "Dubai Hills",
    homes: "Villas, townhouses and apartment buildings around the park and golf course.",
    note: `We handle both villa and apartment work here, from full repaints to parquet installation. ${villaTip}`,
    nearby: ["arabian-ranches", "the-meadows"],
  },
  {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle (JVC)",
    shortName: "JVC",
    homes: "A mix of mid-rise apartment buildings, townhouses and villas.",
    note: `With a lot of rented apartments, move-in and move-out repainting and sofa and carpet cleaning are frequent requests. ${apartmentTip}`,
    nearby: ["jumeirah-village-triangle", "jumeirah-park"],
    seoTitle: "AC Repair JVC | Painting, Flooring & Cleaning",
    acFocus: `JVC is a mix of apartment buildings, townhouses and villas. ${villaAc} ${towerAc}`
  },
  {
    slug: "jumeirah-village-triangle",
    name: "Jumeirah Village Triangle (JVT)",
    shortName: "JVT",
    homes: "Villas and townhouses, with some apartment buildings.",
    note: `Villa repainting, AC servicing and wooden flooring upgrades are common. ${villaTip}`,
    nearby: ["jumeirah-village-circle", "jumeirah-park"],
  },
  {
    slug: "jumeirah-park",
    name: "Jumeirah Park",
    shortName: "Jumeirah Park",
    homes: "Spacious family villas.",
    note: `Large villas mean more rooms to paint, several AC units and big sofas and rugs to clean. ${villaTip}`,
    nearby: ["jumeirah-village-triangle", "jumeirah-lake-towers"],
    seoTitle: "Villa Painting, AC & Flooring in Jumeirah Park"
  },
  {
    slug: "jumeirah-lake-towers",
    name: "Jumeirah Lake Towers (JLT)",
    shortName: "JLT",
    homes: "Apartment and office towers around the lakes.",
    note: `We work on both homes and offices in JLT, including office repainting and flooring. ${apartmentTip}`,
    nearby: ["dubai-marina", "jumeirah-park"],
    seoTitle: "AC Repair & Cleaning in JLT | Painting & Flooring",
    acFocus: towerAc
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    shortName: "Dubai Marina",
    homes: "High-rise apartments along the marina.",
    note: `Humidity near the water makes regular AC servicing and cleaning important, and tenancy changes keep repainting in demand. ${apartmentTip}`,
    nearby: ["jumeirah-beach-residence", "jumeirah-lake-towers"],
  },
  {
    slug: "jumeirah-beach-residence",
    name: "Jumeirah Beach Residence (JBR)",
    shortName: "JBR",
    homes: "Beachfront apartment towers.",
    note: `Sea air and sand mean ACs, sofas and carpets need cleaning more often. ${apartmentTip}`,
    nearby: ["dubai-marina", "bluewaters-island"],
  },
  {
    slug: "bluewaters-island",
    name: "Bluewaters Island",
    shortName: "Bluewaters",
    homes: "Island apartment residences.",
    note: `We schedule visits around building access rules and keep work areas covered and clean. ${apartmentTip}`,
    nearby: ["jumeirah-beach-residence", "dubai-marina"],
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    shortName: "Arabian Ranches",
    homes: "Established villa and townhouse community.",
    note: `Older villas here often need full repaints, parquet repair or replacement, and AC servicing across several units. ${villaTip}`,
    nearby: ["dubai-hills-estate", "damac-hills"],
    seoTitle: "Villa Painting, AC & Flooring in Arabian Ranches"
  },
  {
    slug: "damac-hills",
    name: "DAMAC Hills",
    shortName: "DAMAC Hills",
    homes: "Villas, townhouses and apartments around the golf course.",
    note: `Repainting, AC servicing and flooring upgrades are common for both villa owners and tenants. ${villaTip}`,
    nearby: ["arabian-ranches", "town-square"],
    seoTitle: "AC Repair DAMAC Hills | Painting & Flooring",
    acFocus: villaAc
  },
  {
    slug: "the-springs",
    name: "The Springs",
    shortName: "The Springs",
    homes: "Townhouses and villas around lakes in Emirates Living.",
    note: `Many Springs homes are well established, so repainting, parquet refinishing and AC servicing are frequent jobs. ${villaTip}`,
    nearby: ["the-meadows", "jumeirah-park"],
  },
  {
    slug: "the-meadows",
    name: "The Meadows",
    shortName: "The Meadows",
    homes: "Larger family villas in Emirates Living.",
    note: `Big villas with several AC units, large wall areas and wooden floors are typical here. ${villaTip}`,
    nearby: ["the-springs", "dubai-hills-estate"],
  },
  {
    slug: "town-square",
    name: "Town Square",
    shortName: "Town Square",
    homes: "Townhouses and apartment buildings.",
    note: `Move-in repainting, AC servicing and deep cleaning are common for new tenants and owners. ${apartmentTip}`,
    nearby: ["mira-oasis", "damac-hills"],
  },
  {
    slug: "mira-oasis",
    name: "Mira Oasis",
    shortName: "Mira Oasis",
    homes: "Family townhouses.",
    note: `Townhouse repainting, AC servicing and sofa and carpet cleaning are typical requests. ${villaTip}`,
    nearby: ["town-square", "arabian-ranches"],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAreaByName(name: string): Area | undefined {
  return areas.find((a) => a.name === name);
}
