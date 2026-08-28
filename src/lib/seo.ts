import type { Metadata } from "next";
import { company } from "./company";

const SITE_NAME = `${company.legalName}`;

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${company.siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.siteUrl}/#organization`,
    name: company.legalName,
    image: `${company.siteUrl}/og-image.jpg`,
    url: company.siteUrl,
    telephone: company.phoneE164,
    email: company.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.officeLine1,
      addressLocality: company.city,
      addressCountry: company.countryCode,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.siteUrl}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${company.siteUrl}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: company.legalName,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}
