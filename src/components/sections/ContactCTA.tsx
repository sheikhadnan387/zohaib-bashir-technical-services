import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { company } from "@/lib/company";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-14 sm:py-20 lg:py-28">
      {/* Property Background Visual */}
      <Image
        src="/images/home/cta-property.webp"
        alt="Dubai Luxury Property Services"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Readability Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/85 to-brand-black/75" />
      <div className="absolute inset-0 bg-brand-black/40" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-orange/15 to-transparent lg:block" />
      <div className="container-edge relative">
        <Reveal className="max-w-xl">
          <h2 className="font-heading text-[28px] xs:text-[32px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.08] text-white break-words">
            Have a Project
            <br />
            in Mind?
          </h2>
          <p className="mt-4 sm:mt-6 text-[14.5px] sm:text-[17px] leading-relaxed text-white/70">
            Tell us what your property needs and get in touch with our team.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-[6px] bg-brand-orange px-6 sm:px-7 py-3.5 sm:py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-orange-deep"
            >
              Request a Quote
            </Link>
            <a
              href={company.phoneHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/25 px-6 sm:px-7 py-3.5 sm:py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          </div>

          <a
            href={company.phoneHref}
            className="focus-ring mt-6 sm:mt-8 inline-block text-[18px] sm:text-[22px] lg:text-[24px] font-semibold tracking-wide text-white/80 hover:text-brand-orange"
          >
            {company.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
