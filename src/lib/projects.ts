import type { ProjectCategory } from "./services";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  serviceSlug: string;
  size: "large" | "medium" | "small";
}

/**
 * Placeholder / demo project listings.
 * No real project photography or client data has been supplied for this
 * license. These entries illustrate the categories of work the company
 * undertakes and should be replaced with verified project records and
 * photography before publishing.
 */
export const projects: ProjectItem[] = [
  { id: "p1", title: "Residential AC System Maintenance", category: "HVAC", location: "Dubai Investment Park", serviceSlug: "hvac", size: "large" },
  { id: "p2", title: "Villa Wood Flooring Installation", category: "Interior", location: "Arabian Ranches", serviceSlug: "carpentry-wood-flooring", size: "medium" },
  { id: "p3", title: "Office Network Cabling Upgrade", category: "Technical", location: "Business Bay", serviceSlug: "infrastructure-network", size: "small" },
  { id: "p4", title: "Private Villa Pool Maintenance Programme", category: "Pools", location: "Jumeirah", serviceSlug: "swimming-pool-maintenance", size: "medium" },
  { id: "p5", title: "Apartment Interior Repaint", category: "Painting", location: "Dubai Marina", serviceSlug: "painting", size: "small" },
  { id: "p6", title: "Commercial Wall & Floor Tiling", category: "Interior", location: "Al Barsha", serviceSlug: "floor-wall-tiling", size: "large" },
  { id: "p7", title: "Post-Renovation Building Cleaning", category: "Maintenance", location: "Deira", serviceSlug: "building-cleaning", size: "small" },
  { id: "p8", title: "Office Glass Partition Installation", category: "Technical", location: "DIFC", serviceSlug: "aluminum-glass", size: "medium" },
  { id: "p9", title: "Electromechanical Equipment Servicing", category: "Technical", location: "Dubai Investment Park", serviceSlug: "electromechanical", size: "small" },
];

export const projectCategories: ProjectCategory[] = [
  "HVAC",
  "Interior",
  "Maintenance",
  "Pools",
  "Painting",
  "Technical",
];
