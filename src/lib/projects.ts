import type { ProjectCategory } from "./services";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  /** Property type rather than a named location — no client-identifying data is published. */
  property: string;
  serviceSlug: string;
  summary: string;
  before: { image: string; alt: string };
  after: { image: string; alt: string };
}

export const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Split AC Service & Deep Clean",
    category: "AC",
    property: "Apartment, Dubai",
    serviceSlug: "ac-repair-maintenance",
    summary: "Filter wash, coil clean, drain flush and performance check on a wall-mounted split unit.",
    before: {
      image: "/images/projects/project-ac-before.webp",
      alt: "Wall-mounted split AC with its cover open showing a dusty filter before servicing",
    },
    after: {
      image: "/images/projects/project-ac.webp",
      alt: "Technician wiping down the same split AC unit after servicing, cover closed and clean",
    },
  },
  {
    id: "p2",
    title: "Herringbone Parquet Installation",
    category: "Flooring",
    property: "Villa living room, Dubai",
    serviceSlug: "parquet-wooden-flooring",
    summary: "Subfloor levelling and adhesive-fixed oak herringbone parquet across the main living area.",
    before: {
      image: "/images/projects/project-flooring-before.webp",
      alt: "Bare levelled concrete subfloor with stacked parquet blocks ready for installation",
    },
    after: {
      image: "/images/projects/project-flooring.webp",
      alt: "Finished oak herringbone parquet floor with installer checking the final row",
    },
  },
  {
    id: "p3",
    title: "Bedroom Repaint",
    category: "Painting",
    property: "Villa bedroom, Dubai",
    serviceSlug: "painting-services",
    summary: "Filling, sanding and two coats of warm-white emulsion with masked, crisp edges.",
    before: {
      image: "/images/projects/project-painting-before.webp",
      alt: "Empty bedroom with scuffed walls, filler patches and masking tape before painting",
    },
    after: {
      image: "/images/projects/project-painting.webp",
      alt: "Freshly painted warm-white bedroom with painter removing the last masking tape",
    },
  },
  {
    id: "p4",
    title: "Office Sofa Cleaning",
    category: "Cleaning",
    property: "Office lounge, Dubai",
    serviceSlug: "sofa-carpet-cleaning",
    summary: "Pre-treatment and hot-water extraction to lift stains and restore even tone on fabric seating.",
    before: {
      image: "/images/projects/project-cleaning-before.webp",
      alt: "Light grey fabric sofa with visible stains before cleaning",
    },
    after: {
      image: "/images/projects/project-cleaning.webp",
      alt: "Technician finishing an upholstery extraction clean on the same sofa, now stain-free",
    },
  },
];

export const projectCategories: ProjectCategory[] = ["AC", "Flooring", "Painting", "Cleaning"];
