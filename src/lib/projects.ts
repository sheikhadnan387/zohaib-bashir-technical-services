import type { ProjectCategory } from "./services";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  serviceSlug: string;
  size: "large" | "medium" | "small";
  image: string;
}

export const projects: ProjectItem[] = [
  { id: "p1", title: "Residential AC Maintenance Program", category: "AC", location: "Dubai Investment Park", serviceSlug: "ac-services", size: "large", image: "/images/projects/project-ac.webp" },
  { id: "p2", title: "Villa Flooring & Parquet Installation", category: "Flooring", location: "Arabian Ranches", serviceSlug: "flooring-parquet", size: "medium", image: "/images/projects/project-flooring.webp" },
  { id: "p3", title: "Apartment Interior Paint & Refresh", category: "Painting", location: "Dubai Marina", serviceSlug: "painting-work", size: "small", image: "/images/projects/project-painting.webp" },
  { id: "p4", title: "Commercial Carpet & Upholstery Cleaning", category: "Cleaning", location: "Business Bay", serviceSlug: "shampoo-cleaning", size: "medium", image: "/images/projects/project-cleaning.webp" },
];

export const projectCategories: ProjectCategory[] = [
  "AC",
  "Flooring",
  "Painting",
  "Cleaning",
];
