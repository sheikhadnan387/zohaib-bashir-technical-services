import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowUpRight, ChevronDown } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { subServices, getSubService, getSubServicesFor } from "@/lib/subservices";
import { buildMetadata, breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServiceQuoteCard } from "@/components/ui/ServiceQuoteCard";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return subServices.map((s) => ({ slug: s.parentSlug, sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}): Promise<Metadata> {
  const { slug, sub } = await params;
  const page = getSubService(slug, sub);
  if (!page) return {};
  return buildMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/services/${slug}/${sub}`,
    keywords: page.keywords,
  });
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>;
}) {
  const { slug, sub } = await params;
  const parent = getServiceBySlug(slug);
  const page = getSubService(slug, sub);
  if (!parent || !page) notFound();

  const siblings = getSubServicesFor(parent.slug).filter((s) => s.slug !== page.slug);
  const path = `/services/${parent.slug}/${page.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: parent.shortName, path: `/services/${parent.slug}` },
    { name: page.shortName, path },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({ name: page.name, description: page.seoDescription, path })),
        }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title={page.name}
        description={page.heroTagline}
        image={parent.bannerImage}
        imageAlt={parent.bannerAlt}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-edge">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <p className="mt-5 text-[18px] leading-relaxed text-brand-black/75 sm:text-[20px]">{page.intro}</p>
              </Reveal>

              <div className="mt-14">
                <Reveal>
                  <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">What&rsquo;s Included</h2>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    {page.whatWeDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
                        <span className="text-[15.5px] leading-relaxed text-brand-black/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="mt-14">
                <Reveal>
                  <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">Our Approach</h2>
                  <p className="mt-5 text-[16.5px] leading-relaxed text-brand-muted">{page.approach}</p>
                </Reveal>
              </div>

              <div className="mt-14">
                <Reveal>
                  <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">Common Questions</h2>
                  <div className="mt-6 divide-y divide-brand-black/10 rounded-lg border border-brand-black/10">
                    {page.faqs.map((faq) => (
                      <details key={faq.q} className="group px-5 py-4 sm:px-6">
                        <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-semibold text-brand-black [&::-webkit-details-marker]:hidden">
                          {faq.q}
                          <ChevronDown className="h-5 w-5 shrink-0 text-brand-black/50 transition-transform group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <p className="mt-3 text-[15.5px] leading-relaxed text-brand-muted">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:self-start">
              <Reveal delay={0.05}>
                <ServiceQuoteCard
                  heading={`Get a quote for ${page.shortName}`}
                  serviceSlug={parent.slug}
                  whatsappSubject={page.name.replace(/ in Dubai$/, "")}
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-brand-black/10 bg-brand-black">
                  <Image
                    src={parent.detailImage}
                    alt={parent.detailImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/10 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-5 font-heading text-[16px] font-bold text-white">{parent.detailCaption}</p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 border-t border-brand-black/10 pt-14">
            <Reveal>
              <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">More {parent.shortName}</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href={`/services/${parent.slug}`}
                  className="focus-ring group rounded-lg border border-brand-black/10 bg-brand-bg p-5 transition-colors hover:border-brand-orange"
                >
                  <span className="flex items-center justify-between gap-3 font-heading text-[18px] font-bold text-brand-black">
                    All {parent.shortName}
                    <ArrowUpRight className="h-4 w-4 text-brand-black/40 group-hover:text-brand-orange" aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-brand-muted">{parent.shortDescription}</span>
                </Link>
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${parent.slug}/${s.slug}`}
                    className="focus-ring group rounded-lg border border-brand-black/10 bg-brand-bg p-5 transition-colors hover:border-brand-orange"
                  >
                    <span className="flex items-center justify-between gap-3 font-heading text-[18px] font-bold text-brand-black">
                      {s.shortName}
                      <ArrowUpRight className="h-4 w-4 text-brand-black/40 group-hover:text-brand-orange" aria-hidden="true" />
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-relaxed text-brand-muted">{s.blurb}</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
