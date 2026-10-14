import Image from "next/image";
import { services } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="bg-brand-bg py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Zohaib Bashir Technical Services</Eyebrow>
              <h2 className="mt-4 sm:mt-5 font-heading text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] text-brand-black">
                Professional Services.
                <br />
                Quality Execution.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-4 sm:mt-6">
              <p className="text-[16px] sm:text-[17px] lg:text-[19px] leading-relaxed text-brand-black/75">
                We provide specialized services for residential and commercial
                properties across Dubai — shampoo cleaning, painting work, AC
                services and flooring installation, each delivered with the same
                standard of quality, attention to detail and professional execution.
              </p>
              <p className="mt-3.5 sm:mt-5 text-[15px] sm:text-[16px] leading-relaxed text-brand-muted">
                Each service is handled by people who understand its specific
                requirements and techniques. Property owners and managers work
                with a focused team that delivers quality results across every
                service area.
              </p>

              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-5 border-t border-brand-black/10 pt-6 sm:pt-8 sm:grid-cols-4">
                {services.map((service) => {
                  const Icon = getServiceIcon(service.icon);
                  return (
                    <div key={service.slug} className="flex flex-col items-start gap-1.5 sm:gap-2">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-[11.5px] sm:text-[12px] font-medium leading-tight text-brand-black/65">
                        {service.shortName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-black/10 bg-brand-black shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/home/about-team.webp"
                  alt="Zohaib Bashir Technical Services Team in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="inline-block rounded-sm bg-brand-orange px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Qualified Team
                  </span>
                  <p className="mt-1.5 font-heading text-[16px] sm:text-[18px] font-bold text-white">
                    Dedicated Property Care &amp; Technical Services
                  </p>
                  <p className="mt-1 text-[11.5px] sm:text-[12px] text-white/75">
                    Operating across residential &amp; commercial properties in Dubai
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
