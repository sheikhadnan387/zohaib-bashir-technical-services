import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ServicesShowcase() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Expertise Across
                <br />
                Every Detail.
              </>
            }
          />
          <Reveal delay={0.1}>
            <Button href="/services" variant="secondary" withArrow>
              All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.08}
              y={16}
            >
              <ServiceCard service={service} className="h-[320px] sm:h-[360px] xl:h-[400px]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
