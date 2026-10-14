import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { RecentWork } from "@/components/sections/RecentWork";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Reviews } from "@/components/sections/Reviews";
import { DubaiSection } from "@/components/sections/DubaiSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technical Services Dubai | AC, Painting, Cleaning & Flooring",
  description:
    "Zohaib Bashir Technical Services — licensed Dubai technical services company: AC repair & maintenance, painting services, sofa & carpet cleaning, and parquet & wooden flooring for homes and offices.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesShowcase />
      <RecentWork />
      <DubaiSection />
      <WhyChooseUs />
      <WorkProcess />
      <Reviews />
      <ContactCTA />
    </>
  );
}
