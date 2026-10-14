import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { subServices } from "@/lib/subservices";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${company.siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${company.siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${company.siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${company.siteUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${company.siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${company.siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${company.siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${company.siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const subServiceRoutes: MetadataRoute.Sitemap = subServices.map((s) => ({
    url: `${company.siteUrl}/services/${s.parentSlug}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes];
}
