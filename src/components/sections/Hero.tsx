import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative h-[calc(100svh-84px)] min-h-[480px] max-h-[700px] sm:max-h-none sm:min-h-[580px] lg:min-h-[640px] w-full overflow-hidden bg-brand-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster="/images/home/cta-property.webp"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center pointer-events-none"
      >
        <source src="/video/hero-services.mp4" type="video/mp4" />
      </video>

      {/* Readability Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent sm:via-brand-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/35 to-brand-black/15" />

      {/* Hero Content */}
      <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-8 sm:justify-center sm:pb-0">
        <RevealGroup className="max-w-3xl" stagger={0.12}>
          <RevealItem>
            <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-brand-orange">
              <span className="h-px w-6 sm:w-8 bg-brand-orange" />
              Technical Services • Dubai
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="mt-3 sm:mt-6 font-heading text-[28px] xs:text-[32px] sm:text-[46px] md:text-[58px] lg:text-[70px] font-bold leading-[1.08] text-white break-words">
              Technical Expertise.
              <br />
              Built Around Your Property.
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-3 sm:mt-5 max-w-lg text-[14px] sm:text-[16.5px] lg:text-[18px] leading-relaxed text-white/75">
              Professional installation, maintenance and technical services
              for residential and commercial properties across Dubai.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" withArrow className="justify-center sm:justify-start">
                Request a Quote
              </Button>
              <Button href="/services" variant="ghost-light" className="justify-center sm:justify-start">
                Explore Our Services
              </Button>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="mt-6 sm:mt-9 flex items-center gap-2 text-[12px] sm:text-[13px] text-white/50">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-orange" aria-hidden="true" />
              Dubai, United Arab Emirates
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
