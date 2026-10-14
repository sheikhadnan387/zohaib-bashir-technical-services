import Image from "next/image";
import { FileBadge2, Building2, Phone } from "lucide-react";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-[calc(100svh-var(--header-h))] min-h-[480px] max-h-[700px] sm:max-h-none sm:min-h-[580px] lg:min-h-[640px] w-full overflow-hidden bg-brand-black">
      {/* Background Image */}
      <Image
        src="/images/home/hero.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-center"
      />

      {/* Readability Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent sm:via-brand-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/35 to-brand-black/15" />

      {/* Hero Content */}
      <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-8 sm:justify-center sm:pb-0">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0.00s" }}>
            <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-brand-orange">
              <span className="h-px w-6 sm:w-8 bg-brand-orange" />
              Technical Services • Dubai
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.12s" }}>
            <h1 className="mt-3 sm:mt-6 font-heading text-[28px] xs:text-[32px] sm:text-[46px] md:text-[58px] lg:text-[70px] font-bold leading-[1.08] text-white break-words">
              Technical Expertise.
              <br />
              Built Around Your Property.
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <p className="mt-3 sm:mt-5 max-w-lg text-[15px] sm:text-[16.5px] lg:text-[18px] leading-relaxed text-white/75">
              Professional installation, maintenance and technical services
              for residential and commercial properties across Dubai.
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.36s" }}>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" withArrow className="justify-center sm:justify-start">
                Request a Quote
              </Button>
              <Button href="/services" variant="ghost-light" className="justify-center sm:justify-start">
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.48s" }}>
            <ul className="mt-7 sm:mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/15 pt-5 text-[13px] sm:text-[13.5px] text-white/80">
              <li className="flex items-center gap-2">
                <FileBadge2 className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                Licensed · No. {company.licenseNo}
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                Residential &amp; commercial, all Dubai
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                <a href={company.phoneHref} className="focus-ring hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
