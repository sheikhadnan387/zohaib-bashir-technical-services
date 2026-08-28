import { services } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="bg-brand-bg py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Zohaib Bashir Technical Services</Eyebrow>
            <h2 className="mt-5 font-heading text-[34px] font-bold leading-[1.08] text-brand-black sm:text-[44px] lg:text-[50px]">
              One Team.
              <br />
              Multiple Technical
              <br />
              Disciplines.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:pt-2">
            <p className="text-[17px] leading-relaxed text-brand-black/70 sm:text-[19px]">
              We provide technical installation, maintenance and
              property-related services for residential and commercial
              properties across Dubai — covering everything from
              air-conditioning and electromechanical systems to carpentry,
              tiling, painting, aluminum &amp; glass and building cleaning.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-brand-muted sm:text-[16px]">
              Rather than coordinating separate contractors for every trade,
              property owners and managers work with a single technical
              team that understands how these disciplines connect — from
              structured network cabling to finished flooring.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-5 border-t border-brand-black/10 pt-8 sm:grid-cols-5">
              {services.map((service) => {
                const Icon = getServiceIcon(service.icon);
                return (
                  <div key={service.slug} className="flex flex-col items-start gap-2">
                    <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-[11px] font-medium leading-tight text-brand-black/55">
                      {service.shortName}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
