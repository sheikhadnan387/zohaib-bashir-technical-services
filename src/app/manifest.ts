import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: company.shortName,
    description: "Shampoo cleaning, painting, AC services and flooring work across Dubai.",
    start_url: "/",
    display: "browser",
    background_color: "#0b0d0f",
    theme_color: "#0b0d0f",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
