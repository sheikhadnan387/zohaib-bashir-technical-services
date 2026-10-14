import { MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company, serviceAreas } from "@/lib/company";

export function DubaiSection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-14 sm:py-20 lg:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container-edge relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow tone="light">Serving Dubai</Eyebrow>
          <h2 className="mt-4 sm:mt-5 font-heading text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] text-white">
            Technical Services
            <br />
            Across the Emirate.
          </h2>
          <p className="mt-4 sm:mt-6 max-w-md text-[16.5px] sm:text-[17px] leading-relaxed text-white/75">
            Based in {company.officeLine1}, we serve residential and commercial
            properties across Dubai — from villa communities to apartment towers
            and commercial units.
          </p>
          <p className="mt-3 sm:mt-4 max-w-md text-[15px] leading-relaxed text-white/75">
            Licensed as a Sole Establishment under License No. {company.licenseNo}.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-lg border border-white/10 bg-brand-black/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
              <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              Areas we regularly serve
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13.5px] text-white/85"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-white/70">
              Not listed? We cover all of Dubai — call or WhatsApp to confirm your location.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
