import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, CheckCircle2, MapPin } from "lucide-react";
import { areas, getAreaBySlug } from "@/lib/areas";
import { company, proofPoints } from "@/lib/company";
import { services } from "@/lib/services";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { QuickQuote } from "@/components/sections/QuickQuote";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.seoTitle ?? `Painting, AC, Flooring & Cleaning in ${area.shortName}`,
    description: `Painting, AC repair, parquet flooring and sofa & carpet cleaning in ${area.name}, Dubai. Fixed written quotes, WhatsApp ${company.whatsappHours}. Studio painting from AED 350.`,
    path: `/areas/${area.slug}`,
    keywords: services.map((s) => `${s.shortName.toLowerCase()} ${area.shortName}`),
  });
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const path = `/areas/${area.slug}`;
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: area.shortName, path },
  ];
  const nearby = area.nearby.map((s) => getAreaBySlug(s)).filter((a) => a !== undefined);

  const faqs = [
    {
      q: `Do you work in ${area.name}?`,
      a: `Yes. We provide painting, AC repair and maintenance, parquet and wooden flooring, and sofa and carpet cleaning in ${area.name} and across Dubai.`,
    },
    {
      q: `How much does painting cost in ${area.shortName}?`,
      a: "Studio wall painting starts from AED 350. Larger homes are priced on the number of rooms, wall condition and ceilings. You get a fixed written quote before work starts.",
    },
    {
      q: "How quickly do you reply?",
      a: `We reply on WhatsApp every day, ${company.whatsappHours}. Send your property type, size and what needs doing, and we'll come back with a price and available times.`,
    },
    {
      q: "What if I'm not happy with the work?",
      a: "Tell us within 48 hours of completion and we'll come back and fix it free of charge.",
    },
  ];

  const promises = [proofPoints.established, proofPoints.responseTime, "Fixed written quote, no hidden charges"].filter(
    (p): p is string => Boolean(p)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow={`Serving ${area.shortName}`}
        title={`Technical Services in ${area.shortName}`}
        description={`Painting, AC repair, flooring and sofa & carpet cleaning in ${area.name}, from one licensed team.`}
        image="/images/pages/services-hero.webp"
        imageAlt=""
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>About {area.shortName}</Eyebrow>
              <p className="mt-5 flex items-start gap-3 text-[18px] leading-relaxed text-brand-black/80 sm:text-[20px]">
                <Building2 className="mt-1.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                {area.homes}
              </p>
              <p className="mt-5 text-[16.5px] leading-relaxed text-brand-muted">{area.note}</p>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                  Our Services in {area.shortName}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {services.map((s) => (
                    <ServiceCard key={s.slug} service={s} className="h-[240px]" />
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="mt-14">
              <Reveal>
                <h2 className="font-heading text-[26px] font-bold text-brand-black sm:text-[30px]">
                  Common Questions in {area.shortName}
                </h2>
                <div className="mt-6">
                  <FaqList faqs={faqs} />
                </div>
              </Reveal>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+24px)] lg:self-start">
            <Reveal delay={0.05}>
              <div className="rounded-lg bg-brand-black p-6 text-white sm:p-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Why {area.shortName} residents call us
                </p>
                <ul className="mt-5 space-y-3">
                  {promises.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/85">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-orange" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#quick-quote"
                  className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-brand-orange px-5 py-3.5 text-[14px] font-bold text-brand-black transition-colors hover:bg-brand-orange-accent"
                >
                  Get a quick quote
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            {nearby.length > 0 && (
              <Reveal delay={0.1}>
                <div className="rounded-lg border border-brand-black/10 bg-brand-bg p-6 sm:p-7">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-black/60">Nearby areas</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {nearby.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/areas/${n.slug}`}
                          className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-brand-black/15 bg-white px-3.5 py-1.5 text-[14px] text-brand-black/80 transition-colors hover:border-brand-orange hover:text-brand-orange-text"
                        >
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {n.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </section>

      <QuickQuote initialArea={area.name} />

      <ContactCTA />
    </>
  );
}
