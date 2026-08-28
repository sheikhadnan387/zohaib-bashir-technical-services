import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "A selection of the project categories Zohaib Bashir Technical Services works across in Dubai — HVAC, interior, maintenance, pools, painting and technical works.",
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
        title="Selected Work"
        description="Representative categories of technical work carried out across Dubai properties."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge">
          <ProjectsGrid />
          <p className="mt-12 max-w-2xl border-t border-brand-black/10 pt-6 text-[13px] leading-relaxed text-brand-muted">
            The entries above are placeholder / demo listings that illustrate
            the categories of work we undertake. No client-identifying
            project data or photography has been published here — this
            section will be updated with verified, completed project records
            and photography as they become available.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
