import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Service slug changes - permanent redirects for renamed services
      {
        source: "/services/hvac",
        destination: "/services/ac-services",
        permanent: true,
      },
      {
        source: "/services/building-cleaning",
        destination: "/services/shampoo-cleaning",
        permanent: true,
      },
      {
        source: "/services/painting",
        destination: "/services/painting-work",
        permanent: true,
      },
      {
        source: "/services/carpentry-wood-flooring",
        destination: "/services/flooring-parquet",
        permanent: true,
      },
      // Removed services - redirect to services index
      {
        source: "/services/infrastructure-network",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/floor-wall-tiling",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/swimming-pool-maintenance",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/aluminum-glass",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/electromechanical",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
