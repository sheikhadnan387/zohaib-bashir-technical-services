import { Users, FileBadge2, FileText, Wrench, Clock, ShieldCheck, CalendarCheck } from "lucide-react";
import { company, proofPoints } from "@/lib/company";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Supporting reasons — every claim here is already stated elsewhere on the site.
const pillars = [
  {
    icon: FileBadge2,
    title: "Licensed, and You Deal Direct",
    description: `A licensed Sole Establishment (No. ${company.licenseNo}) based in ${company.officeLine1}. You call or WhatsApp the team doing the work — no call centre, no subcontracting chain.`,
  },
  {
    icon: FileText,
    title: "Scope and Price Before Work Starts",
    description:
      "Every job gets a written scope of work and quotation for your review first. What was agreed is what gets done — no surprises once a job is underway.",
  },
  {
    icon: Wrench,
    title: "Specialists for Each Trade",
    description:
      "Cleaning, painting, AC and flooring each have their own techniques and tools. Each is handled by people who know that trade, not a general handyman.",
  },
];

// Client-supplied facts (response time, guarantee, years) render only when set in company.ts.
const factIcons = { responseTime: Clock, guarantee: ShieldCheck, established: CalendarCheck } as const;

export function WhyChooseUs() {
  const facts = (Object.keys(factIcons) as (keyof typeof factIcons)[])
    .filter((key) => proofPoints[key])
    .map((key) => ({ key, Icon: factIcons[key], text: proofPoints[key] as string }));

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              One Team for
              <br />
              the Whole Property.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-12 lg:gap-6">
          {/* Lead reason — the real differentiator */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-lg bg-brand-black p-7 text-white sm:p-9">
              <Users className="h-7 w-7 text-brand-orange" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-heading text-[24px] font-bold leading-snug sm:text-[28px]">
                Four trades. One contact. One quote.
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/75">
                Most property jobs need more than one trade — a move-in means
                painting, a deep clean and an AC service. Instead of
                coordinating three contractors, you brief one team once and
                deal with a single point of contact from scope to handover.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li
                    key={s.slug}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[13px] text-white/85"
                  >
                    {s.shortName}
                  </li>
                ))}
              </ul>
              {facts.length > 0 && (
                <ul className="mt-auto space-y-2.5 border-t border-white/10 pt-6">
                  {facts.map(({ key, Icon, text }) => (
                    <li key={key} className="flex items-center gap-2.5 text-[14px] text-white/85">
                      <Icon className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          {/* Supporting reasons */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 lg:gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.08 + i * 0.08} className="h-full">
                  <div className="flex h-full gap-4 rounded-lg border border-brand-black/10 bg-brand-bg p-5 sm:gap-5 sm:p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-white text-brand-orange">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-[18px] font-bold leading-snug text-brand-black sm:text-[19px]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{pillar.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
