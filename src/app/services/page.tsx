import type { Metadata } from "next";
import { services } from "@/lib/services";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Our Services",
  description:
    "Shampoo cleaning, painting, AC services and flooring work in Dubai — professional services for residential and commercial properties.",
  path: "/services",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow="What We Do"
        title="Our Four Core Services."
        description="Shampoo cleaning, painting, AC services and flooring work delivered with the same standard of quality and attention to detail."
        image="/images/pages/services-hero.webp"
        imageAlt="Professional technical services and maintenance in Dubai"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08} y={16}>
                <ServiceCard service={service} className="h-[340px] xl:h-[400px]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
