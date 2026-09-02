import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative h-[calc(100svh-84px)] min-h-[600px] w-full overflow-hidden bg-brand-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
      >
        <source src="/video/hero-services.mp4" type="video/mp4" />
      </video>

      {/* Readability Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-black/75 via-brand-black/45 to-transparent sm:via-brand-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/10" />

      {/* Hero Content */}
      <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-16 sm:justify-center sm:pb-0">
        <RevealGroup className="max-w-3xl" stagger={0.12}>
          <RevealItem>
            <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
              <span className="h-px w-8 bg-brand-orange" />
              Technical Services • Dubai
            </div>
          </RevealItem>

          <RevealItem>
            <h1 className="mt-6 font-heading text-[42px] font-bold leading-[1.05] text-white sm:text-[58px] lg:text-[74px]">
              Technical Expertise.
              <br />
              Built Around Your Property.
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
              Professional installation, maintenance and technical services
              for residential and commercial properties across Dubai.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" withArrow>
                Request a Quote
              </Button>
              <Button href="/services" variant="ghost-light">
                Explore Our Services
              </Button>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="mt-10 flex items-center gap-2 text-[13px] text-white/50">
              <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              Dubai, United Arab Emirates
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
