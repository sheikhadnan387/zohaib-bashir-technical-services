import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const tallIndices = new Set([1, 3]);

export function ServicesShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-3 lg:[grid-auto-flow:dense]">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.08}
              y={16}
              className={tallIndices.has(i) ? "lg:row-span-2" : ""}
            >
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
