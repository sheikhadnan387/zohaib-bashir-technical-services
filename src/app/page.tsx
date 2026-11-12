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
import { QuickQuote } from "@/components/sections/QuickQuote";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technical Services Dubai | Painting, AC, Flooring & Cleaning",
  description:
    "Licensed Dubai technical services company since 2021: painting, AC repair, parquet flooring and sofa & carpet cleaning. Fixed quotes, studio painting from AED 350.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesShowcase />
      <QuickQuote />
      <RecentWork />
      <DubaiSection />
      <WhyChooseUs />
      <WorkProcess />
      <Reviews />
      <ContactCTA />
    </>
  );
}
