import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { company } from "@/lib/company";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
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

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.officeLine1}, ${company.officeLine2}`
)}`;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)) }}
      />

      <PageHeader
        breadcrumbItems={breadcrumbItems}
        eyebrow="Contact Us"
        title="Talk to Our Team"
        description="Reach us directly, or send through your project details and we'll get back to you."
        image="/images/pages/contact-hero.webp"
        imageAlt="Contact Zohaib Bashir Technical Services team in Dubai"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-edge grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Contact Details</Eyebrow>

            <div className="mt-8 space-y-6">
              <a href={company.phoneHref} className="focus-ring group flex items-start gap-4 rounded-lg border border-brand-black/10 p-5 transition-colors hover:border-brand-orange">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/40">Phone</p>
                  <p className="mt-1 text-[17px] font-semibold text-brand-black group-hover:text-brand-orange">{company.phoneDisplay}</p>
                </div>
              </a>

              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="focus-ring group flex items-start gap-4 rounded-lg border border-brand-black/10 p-5 transition-colors hover:border-brand-orange">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/40">WhatsApp</p>
                  <p className="mt-1 text-[17px] font-semibold text-brand-black group-hover:text-brand-orange">{company.phoneDisplay}</p>
                </div>
              </a>

              <a href={company.emailHref} className="focus-ring group flex items-start gap-4 rounded-lg border border-brand-black/10 p-5 transition-colors hover:border-brand-orange">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/40">Email</p>
                  <p className="mt-1 break-all text-[17px] font-semibold text-brand-black group-hover:text-brand-orange">{company.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-lg border border-brand-black/10 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-black/40">Office</p>
                  <p className="mt-1 text-[17px] font-semibold text-brand-black">
                    {company.officeLine1}
                    <br />
                    {company.officeLine2}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group relative mt-6 flex aspect-[16/9] w-full items-end overflow-hidden rounded-lg bg-brand-black"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(249,115,22,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.16) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative flex w-full items-center justify-between gap-3 p-5">
                <span className="text-[13px] font-medium text-white/70">
                  {company.officeLine1}, {company.officeLine2}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] bg-brand-orange px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  Open in Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Request a Quote</Eyebrow>
            <div className="mt-8 rounded-lg border border-brand-black/10 bg-brand-bg p-6 sm:p-8">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
