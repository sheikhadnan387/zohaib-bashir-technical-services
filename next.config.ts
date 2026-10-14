import type { NextConfig } from "next";

const redirects: { source: string; destination: string }[] = [
  // Current slugs before the keyword-driven rename
  { source: "/services/shampoo-cleaning", destination: "/services/sofa-carpet-cleaning" },
  { source: "/services/painting-work", destination: "/services/painting-services" },
  { source: "/services/ac-services", destination: "/services/ac-repair-maintenance" },
  { source: "/services/flooring-parquet", destination: "/services/parquet-wooden-flooring" },

  // Earlier slugs from previous versions of the site
  { source: "/services/hvac", destination: "/services/ac-repair-maintenance" },
  { source: "/services/building-cleaning", destination: "/services/sofa-carpet-cleaning" },
  { source: "/services/painting", destination: "/services/painting-services" },
  { source: "/services/carpentry-wood-flooring", destination: "/services/parquet-wooden-flooring" },

  // Removed services
  { source: "/services/infrastructure-network", destination: "/services" },
  { source: "/services/floor-wall-tiling", destination: "/services" },
  { source: "/services/swimming-pool-maintenance", destination: "/services" },
  { source: "/services/aluminum-glass", destination: "/services" },
  { source: "/services/electromechanical", destination: "/services" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
