import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { FeaturedExpertise } from "@/components/sections/FeaturedExpertise";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { DubaiSection } from "@/components/sections/DubaiSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zohaib Bashir Technical Services | Technical Services Dubai",
  description:
    "Professional technical installation, maintenance and property services in Dubai — HVAC, carpentry, tiling, pool maintenance, cleaning, painting, aluminum & glass, electromechanical and network services.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesShowcase />
      <FeaturedExpertise />
      <WhyChooseUs />
      <WorkProcess />
      <ProjectsPreview />
      <DubaiSection />
      <ContactCTA />
    </>
  );
}
