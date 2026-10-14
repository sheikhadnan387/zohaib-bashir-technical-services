import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { serviceAreas } from "@/lib/company";
import { getSubServicesFor } from "@/lib/subservices";
import { ServiceQuoteCard } from "@/components/ui/ServiceQuoteCard";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const subs = getSubServicesFor(service.slug);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.name,
              description: service.seoDescription,
              path: `/services/${service.slug}`,
            })
          ),
        }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow={service.category}
        title={service.name}
        description={service.heroTagline}
        image={service.bannerImage}
        imageAlt={service.bannerAlt}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <p className="mt-5 text-[18px] leading-relaxed text-brand-black/75 sm:text-[20px]">
                  {service.intro}
                </p>
              </Reveal>

              <div className="mt-14">
                <Reveal>
                  <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                    What We Do
                  </h2>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    {service.whatWeDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-orange"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <span className="text-[15.5px] leading-relaxed text-brand-black/75">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="mt-14">
                <Reveal>
                  <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                    Our Approach
                  </h2>
                  <p className="mt-5 text-[16.5px] leading-relaxed text-brand-muted">
                    {service.approach}
                  </p>
                </Reveal>
              </div>

              {subs.length > 0 && (
                <div className="mt-14">
                  <Reveal>
                    <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                      Popular {service.shortName} Services
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {subs.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/services/${service.slug}/${sub.slug}`}
                          className="focus-ring group rounded-lg border border-brand-black/10 bg-brand-bg p-5 transition-colors hover:border-brand-orange"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-heading text-[18px] font-bold text-brand-black">{sub.shortName}</span>
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-brand-black/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="mt-1.5 block text-[15px] leading-relaxed text-brand-muted">{sub.blurb}</span>
                        </Link>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )}
            </div>

            {/* Sidebar Visual & Property Types Column */}
            <div className="flex flex-col gap-8 lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:self-start">
              <Reveal delay={0.05}>
                <ServiceQuoteCard
                  heading={`Get a quote for ${service.shortName}`}
                  serviceSlug={service.slug}
                  whatsappSubject={service.name}
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-brand-black/10 bg-brand-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)]">
                  <Image
                    src={service.detailImage}
                    alt={service.detailImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="inline-block rounded-sm bg-brand-orange px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-black">
                      {service.category} Standards
                    </span>
                    <p className="mt-2 font-heading text-[16px] font-bold leading-snug text-white sm:text-[17px]">
                      {service.detailCaption}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-lg border border-brand-black/10 bg-brand-bg p-7 sm:p-8">
                  <h2 className="font-heading text-[19px] font-bold text-brand-black">
                    Property &amp; Application Types
                  </h2>
                  <ul className="mt-5 space-y-3.5">
                    {service.applications.map((app) => (
                      <li key={app} className="flex items-center gap-3">
                        <MapPin
                          className="h-4 w-4 shrink-0 text-brand-orange"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <span className="text-[15px] text-brand-black/70">
                          {app}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-brand-black/10 pt-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-black/55">
                      Available across Dubai
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {serviceAreas.slice(0, 8).map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-brand-black/10 bg-white px-3 py-1 text-[13px] text-brand-black/75"
                        >
                          {area}
                        </li>
                      ))}
                      <li className="rounded-full px-1 py-1 text-[13px] text-brand-black/55">+ all of Dubai</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-brand-black/10 pt-14">
              <Reveal>
                <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                  Related Services
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {related.map((r) => (
                    <ServiceCard key={r.slug} service={r} className="h-[220px]" />
                  ))}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
