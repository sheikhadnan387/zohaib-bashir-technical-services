import { MessageCircle, ClipboardCheck, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { number: "01", icon: MessageCircle, title: "Tell Us What You Need", description: "Share your property's requirement by phone, WhatsApp or the quote form." },
  { number: "02", icon: ClipboardCheck, title: "Site / Requirement Assessment", description: "We review the requirement, and visit the site where needed." },
  { number: "03", icon: FileText, title: "Scope & Quotation", description: "A clear scope of work and quotation is prepared for your review." },
  { number: "04", icon: Wrench, title: "Execution", description: "Our team carries out the work to the agreed scope and schedule." },
  { number: "05", icon: CheckCircle2, title: "Completion & Handover", description: "The work is reviewed and the site is handed back in proper order." },
];

export function WorkProcess() {
  return (
    <section className="bg-brand-black py-20 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="How We Work"
          tone="light"
          title={
            <>
              A Straightforward
              <br />
              Process, Every Time.
            </>
          }
        />

        {/* Desktop horizontal timeline */}
        <div className="relative mt-20 hidden lg:grid lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-5 h-px bg-white/15" aria-hidden="true" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 0.1} className="relative pr-4">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-black">
                  <span className="font-heading text-[12px] font-bold text-brand-orange">{step.number}</span>
                </div>
                <Icon className="mt-6 h-6 w-6 text-brand-orange" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-[17px] font-bold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-14 flex flex-col gap-10 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <Reveal key={step.number} delay={i * 0.06} className="relative flex gap-5 pl-1">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-black">
                    <span className="font-heading text-[12px] font-bold text-brand-orange">{step.number}</span>
                  </div>
                  {!isLast && <div className="mt-2 w-px flex-1 bg-white/15" />}
                </div>
                <div className="pb-2">
                  <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.25} aria-hidden="true" />
                  <h3 className="mt-3 font-heading text-[17px] font-bold leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">
                    {step.description}
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
