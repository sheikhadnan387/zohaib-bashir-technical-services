import Image from "next/image";
import { MessageCircle, ClipboardCheck, FileText, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us What You Need",
    description: "Share your property's requirement by phone, WhatsApp or the quote form.",
    image: "/images/process/step-1.jpg",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Site / Requirement Assessment",
    description: "We review the requirement, and visit the site where needed.",
    image: "/images/process/step-2.jpg",
  },
  {
    number: "03",
    icon: FileText,
    title: "Scope & Quotation",
    description: "A clear scope of work and quotation is prepared for your review.",
    image: "/images/process/step-3.jpg",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Execution",
    description: "Our team carries out the work to the agreed scope and schedule.",
    image: "/images/process/step-4.jpg",
  },
];

export function WorkProcess() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28 overflow-hidden">
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

        {/* ========================================================================= */}
        {/* DESKTOP 4-COLUMN ALTERNATING RHYTHM (xl and above)                       */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 hidden xl:grid xl:grid-cols-4 xl:gap-6 2xl:gap-8 items-start">
          {steps.map((step, i) => {
            const Icon = step.icon;
            // Even index (01, 03): Image top -> Badge -> Text bottom
            // Odd index (02, 04): Text top -> Badge -> Image bottom
            const isImageTop = i % 2 === 0;

            return (
              <Reveal key={step.number} delay={i * 0.08} className="group relative flex flex-col items-center">
                {/* ---------------- Upper Block (Uniform Height) ---------------- */}
                <div className="h-[300px] 2xl:h-[330px] w-full flex flex-col justify-end">
                  {isImageTop ? (
                    <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-md bg-brand-bg shadow-sm">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1536px) 25vw, 320px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center text-center px-3 2xl:px-4">
                      <Icon
                        className="h-6 w-6 text-brand-orange mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <h3 className="font-heading text-[17px] 2xl:text-[19px] font-bold leading-snug text-brand-black">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] 2xl:text-[14px] leading-relaxed text-brand-black/60 max-w-[240px]">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* ---------------- Middle Transition Number Badge (Aligned Axis) ---------------- */}
                <div className="my-4 flex items-center justify-center relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-black text-white shadow-sm transition-all duration-[350ms] ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.06] group-hover:bg-brand-orange motion-reduce:transform-none">
                    <span className="font-heading text-[13px] font-bold tracking-wider">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* ---------------- Lower Block (Uniform Height) ---------------- */}
                <div className="h-[300px] 2xl:h-[330px] w-full flex flex-col justify-start">
                  {isImageTop ? (
                    <div className="flex h-full w-full flex-col items-center justify-center text-center px-3 2xl:px-4">
                      <Icon
                        className="h-6 w-6 text-brand-orange mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <h3 className="font-heading text-[17px] 2xl:text-[19px] font-bold leading-snug text-brand-black">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] 2xl:text-[14px] leading-relaxed text-brand-black/60 max-w-[240px]">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-md bg-brand-bg shadow-sm">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1536px) 25vw, 320px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TABLET 2-COLUMN GRID (md to xl)                                           */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 hidden md:grid md:grid-cols-2 gap-x-10 gap-y-12 xl:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                delay={i * 0.08}
                className="group relative flex flex-col items-center"
              >
                <div className="relative h-[240px] w-full overflow-hidden rounded-t-[999px] rounded-b-md bg-brand-bg shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1280px) 50vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="my-3.5 flex items-center justify-center relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-black text-white shadow-sm transition-all duration-[350ms] ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.06] group-hover:bg-brand-orange motion-reduce:transform-none">
                    <span className="font-heading text-[12.5px] font-bold tracking-wider">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <Icon
                    className="h-5 w-5 text-brand-orange mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-[17px] font-bold leading-snug text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-black/60 max-w-xs">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERTICAL SEQUENCE (under md)                                       */}
        {/* ========================================================================= */}
        <div className="mt-10 flex flex-col gap-9 md:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 0.06} className="group relative flex flex-col items-center">
                <div className="relative h-[220px] w-full max-w-[280px] overflow-hidden rounded-t-[999px] rounded-b-md bg-brand-bg shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover"
                  />
                </div>

                <div className="my-3 flex items-center justify-center relative z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-black text-white shadow-sm transition-all duration-[350ms] ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.06] group-hover:bg-brand-orange motion-reduce:transform-none">
                    <span className="font-heading text-[12.5px] font-bold tracking-wider">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center px-4 max-w-xs">
                  <Icon
                    className="h-5 w-5 text-brand-orange mb-1.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-[16.5px] font-bold leading-snug text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-brand-black/60">
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


