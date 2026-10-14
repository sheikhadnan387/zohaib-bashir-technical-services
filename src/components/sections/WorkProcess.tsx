import { MessageCircle, ClipboardCheck, FileText, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us What You Need",
    description: "Share your property's requirement by phone, WhatsApp or the quote form.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Site Assessment",
    description: "We review the requirement, and visit the site where needed.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Scope & Quotation",
    description: "A clear scope of work and quotation is prepared for your review.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Execution",
    description: "Our team carries out the work to the agreed scope and schedule.",
  },
];

export function WorkProcess() {
  return (
    <section className="bg-brand-bg py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="How We Work"
          tone="dark"
          title={
            <>
              A Straightforward
              <br />
              Process, Every Time.
            </>
          }
        />

        <ol className="relative mt-10 grid grid-cols-1 gap-8 sm:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector line behind the step markers (desktop only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-brand-black/10 lg:block"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative">
                <Reveal delay={i * 0.08} y={16} className="flex gap-5 lg:block">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-white text-brand-orange shadow-[0_0_0_6px_var(--color-bg)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="lg:mt-6">
                    <span className="font-heading text-[12px] font-bold tracking-[0.2em] text-brand-orange-text">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1.5 font-heading text-[19px] font-bold leading-snug text-brand-black sm:text-[21px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[16px] leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
