import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileBadge2, Building2, Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { company } from "@/lib/company";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { DubaiSection } from "@/components/sections/DubaiSection";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Technical Services Company Dubai",
  description:
    "Zohaib Bashir Technical Services is a licensed Dubai provider of AC repair, painting, sofa & carpet cleaning and parquet & wooden flooring.",
  path: "/about",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const companyInfo = [
  { label: "Legal Name", value: company.legalName, icon: Building2 },
  { label: "Business Type", value: company.businessType, icon: FileBadge2 },
  { label: "License No.", value: company.licenseNo, icon: FileBadge2 },
  { label: "Office", value: `${company.officeLine1}, ${company.officeLine2}`, icon: MapPin },
  { label: "Phone", value: company.phoneDisplay, icon: Phone },
  { label: "Email", value: company.email, icon: Mail },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow="About Us"
        title="Technical Capability. Professional Execution."
        description="A Dubai-based service provider specializing in AC repair & maintenance, painting, sofa & carpet cleaning and parquet flooring for residential and commercial properties."
        image="/images/pages/about-hero.webp"
        imageAlt="Zohaib Bashir Technical Services professional team in Dubai"
      />

      {/* Who We Are */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="text-[19px] leading-relaxed text-brand-black/75 sm:text-[22px]">
              Zohaib Bashir Technical Services is a Dubai-based technical
              services provider, operating as a Sole Establishment under
              License No. {company.licenseNo}.
            </p>
            <p className="mt-5 text-[16.5px] leading-relaxed text-brand-muted">
              Based at Dubai Investment Park 1, the company provides
              AC repair and maintenance, painting, sofa and carpet cleaning,
              and parquet and wooden flooring to residential and commercial properties across Dubai, with
              a focus on quality execution and professional service delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-bg py-16 sm:py-24">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-5 font-heading text-[30px] font-bold leading-tight text-brand-black sm:text-[36px]">
                Our Service
                <br />
                Offerings.
              </h2>
              <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-brand-muted">
                Each service is delivered with the same standard of
                preparation, execution and attention to detail.
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-brand-black/10 border-y border-brand-black/10">
                {services.map((service, i) => {
                  const Icon = getServiceIcon(service.icon);
                  return (
                    <Reveal key={service.slug} delay={(i % 5) * 0.05}>
                      <li>
                        <Link
                          href={`/services/${service.slug}`}
                          className="focus-ring group flex items-center gap-5 py-5"
                        >
                          <span className="font-heading text-[13px] font-bold text-brand-orange">
                            {service.number}
                          </span>
                          <Icon className="h-5 w-5 shrink-0 text-brand-black/55" strokeWidth={1.5} aria-hidden="true" />
                          <span className="flex-1 text-[16px] font-medium text-brand-black/85 group-hover:text-brand-orange sm:text-[16px]">
                            {service.shortName}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-brand-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" aria-hidden="true" />
                        </Link>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Our Approach</Eyebrow>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="text-[17px] leading-relaxed text-brand-black/75 sm:text-[19px]">
              We approach every job the same way — understand the
              requirement, assess it properly, agree a clear scope, then
              execute it to a standard that holds up over time. Working
              across multiple disciplines under one team means the
              technical detail of each trade is respected, while the
              property owner deals with a single point of contact.
            </p>
          </Reveal>
        </div>
      </section>

      <DubaiSection />

      {/* Company Information */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge">
          <Eyebrow>Company Information</Eyebrow>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {companyInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label}>
                  <div className="border-t border-brand-black/10 pt-5">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/55">
                      <Icon className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                      {item.label}
                    </div>
                    <p className="mt-2 break-words text-[16px] font-medium text-brand-black">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
