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
    title: "Focused Expertise",
    description:
      "Specialized capability across shampoo cleaning, painting, AC services and flooring means each service receives proper attention and skill.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
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

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.number} delay={i * 0.08}>
                <div className="border-t-2 border-brand-black/10 pt-5 sm:pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[12.5px] sm:text-[13px] font-bold text-brand-orange">
                      {pillar.number}
                    </span>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-black/25" strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3.5 sm:mt-5 font-heading text-[17px] sm:text-[19px] font-bold text-brand-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] sm:text-[14.5px] leading-relaxed text-brand-muted">
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
