import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Before & After Projects Dubai",
  description:
    "Before and after examples of sofa cleaning, painting, AC servicing and parquet flooring work across Dubai properties.",
  path: "/projects",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow="Portfolio"
        title="Before & After"
        description="Side-by-side examples of sofa cleaning, painting, AC servicing and parquet flooring work across Dubai properties."
        image="/images/pages/projects-hero.webp"
        imageAlt="Selected residential and commercial technical projects in Dubai"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge">
          <ProjectsGrid />
          <p className="mt-12 max-w-2xl border-t border-brand-black/10 pt-6 text-[14px] leading-relaxed text-brand-muted">
            Representative examples of the work we carry out. Property types
            are shown instead of addresses — no client-identifying details are
            published.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
