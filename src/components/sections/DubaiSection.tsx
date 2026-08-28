import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function SkylineMark({ className }: { className?: string }) {
  const bars = [18, 34, 24, 52, 30, 44, 20, 60, 28, 38, 22, 46];
  return (
    <svg viewBox="0 0 240 64" className={className} fill="none" aria-hidden="true">
      <line x1="0" y1="63" x2="240" y2="63" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 20 + 2}
          y={64 - h}
          width="10"
          height={h}
          fill="currentColor"
          fillOpacity={i === 7 ? 0.9 : 0.28}
        />
      ))}
    </svg>
  );
}

export function DubaiSection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container-edge relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <Eyebrow tone="light">Serving Dubai</Eyebrow>
          <h2 className="mt-5 font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] lg:text-[50px]">
            Technical Services for
            <br />
            Modern Properties.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/60">
            Zohaib Bashir Technical Services is based in Dubai Investment
            Park 1, Dubai, and provides technical installation, maintenance
            and property-related services to residential and commercial
            properties across the emirate.
          </p>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/45">
            Licensed as a Sole Establishment under License No.{" "}
            {"1009851"}.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-lg border border-white/10 bg-brand-black/40 p-8 sm:p-10">
            <SkylineMark className="h-16 w-full text-brand-orange" />
            <div className="mt-8 flex items-center gap-2 text-[13px] uppercase tracking-[0.16em] text-white/50">
              <span className="h-px w-8 bg-brand-orange" />
              Dubai, United Arab Emirates
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
