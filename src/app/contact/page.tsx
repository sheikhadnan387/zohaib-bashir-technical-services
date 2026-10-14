import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { company } from "@/lib/company";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { ContactHeader } from "@/components/sections/ContactHeader";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Zohaib Bashir Technical Services in Dubai — call, WhatsApp, email or request a quote for technical, maintenance and installation services.",
  path: "/contact",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const mapsQuery = encodeURIComponent(`${company.officeLine1}, ${company.officeLine2}`);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=14&output=embed`;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <ContactHeader breadcrumbItems={breadcrumbItems} />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Visit Our Office</Eyebrow>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-lg border border-brand-black/10 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/55">Office</p>
                  <p className="mt-1 text-[17px] font-semibold text-brand-black">
                    {company.officeLine1}
                    <br />
                    {company.officeLine2}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-brand-black/10 bg-brand-bg">
              <iframe
                title={`Map of ${company.legalName} office, ${company.officeLine1}`}
                src={mapsEmbedSrc}
                className="block aspect-[16/9] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-between gap-3 px-5 py-3.5 text-[14px] text-brand-black/75 transition-colors hover:text-brand-orange-text"
              >
                <span>{company.officeLine1}, {company.officeLine2}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]">
                  Open in Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Request a Quote</Eyebrow>
            <div className="mt-8 rounded-lg border border-brand-black/10 bg-brand-bg p-6 sm:p-8">
              <Suspense fallback={null}>
                <QuoteForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
