import Image from "next/image";
import { services } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="bg-brand-bg py-20 sm:py-28">
      <div className="container-edge">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Zohaib Bashir Technical Services</Eyebrow>
              <h2 className="mt-5 font-heading text-[34px] font-bold leading-[1.08] text-brand-black sm:text-[44px] lg:text-[50px]">
                Professional Services.
                <br />
                Quality Execution.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <p className="text-[17px] leading-relaxed text-brand-black/70 sm:text-[19px]">
                We provide specialized services for residential and commercial
                properties across Dubai — shampoo cleaning, painting work, AC
                services and flooring installation, each delivered with the same
                standard of quality, attention to detail and professional execution.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-brand-muted sm:text-[16px]">
                Each service is handled by people who understand its specific
                requirements and techniques. Property owners and managers work
                with a focused team that delivers quality results across every
                service area.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-black/10 pt-8 sm:grid-cols-4">
                {services.map((service) => {
                  const Icon = getServiceIcon(service.icon);
                  return (
                    <div key={service.slug} className="flex flex-col items-start gap-2">
                      <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-[12px] font-medium leading-tight text-brand-black/65">
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
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-block rounded-sm bg-brand-orange px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Qualified Team
                  </span>
                  <p className="mt-2 font-heading text-[16px] font-bold text-white sm:text-[18px]">
                    Dedicated Property Care &amp; Technical Services
                  </p>
                  <p className="mt-1 text-[12px] text-white/65">
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
