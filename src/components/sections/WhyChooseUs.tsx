import { MessageSquare, Target, CheckCircle2, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We take time to understand the requirement before work begins, so there are no surprises once a job is underway.",
  },
  {
    number: "02",
    icon: Target,
    title: "Technical Attention",
    description:
      "Each discipline is handled by people who understand its specific technical requirements, not a generalist approach.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Quality-Focused Execution",
    description:
      "Work is carried out to be functional and durable first — a finish that holds up well after the job is complete.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Multi-Service Capability",
    description:
      "A single technical team across nine disciplines means fewer contractors to coordinate for property owners and managers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              A Professional Approach
              <br />
              From Start to Finish.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.number} delay={i * 0.08}>
                <div className="border-t-2 border-brand-black/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[13px] font-bold text-brand-orange">
                      {pillar.number}
                    </span>
                    <Icon className="h-6 w-6 text-brand-black/25" strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-[19px] font-bold text-brand-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-brand-muted">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
