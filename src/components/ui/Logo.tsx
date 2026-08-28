import { company } from "@/lib/company";

/**
 * ZB monogram — a single geometric form built from straight strokes only.
 * The bold zig-zag reads as "Z" across the full frame; the vertical spine
 * with two square brackets on the right reads as "B", sharing the spine's
 * intersection with the Z diagonal at the mark's centre.
 */
export function Mark({
  className,
  tone = "orange",
}: {
  className?: string;
  tone?: "orange" | "white" | "charcoal";
}) {
  const color =
    tone === "orange" ? "#F97316" : tone === "white" ? "#FFFFFF" : "#0B0D0F";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points="18,20 86,20 18,80 86,80"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line x1="52" y1="20" x2="52" y2="80" stroke={color} strokeWidth="7" strokeLinecap="square" />
      <polyline
        points="52,28 76,28 76,48"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <polyline
        points="76,52 76,72 52,72"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function MarkBadge({
  className,
  dark = true,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        background: dark ? "#0B0D0F" : "#FFFFFF",
        border: dark ? "none" : "1px solid #E5E7EB",
      }}
    >
      <Mark tone={dark ? "orange" : "charcoal"} className="h-full w-full p-[18%]" />
    </div>
  );
}

export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={className}>
      <span
        className={
          "block font-heading font-bold uppercase leading-[0.95] tracking-tight " +
          (tone === "dark" ? "text-brand-black" : "text-white")
        }
        style={{ fontSize: "1em" }}
      >
        {company.shortName}
      </span>
      <span
        className="block font-sans text-[0.32em] uppercase tracking-[0.28em] text-brand-orange"
        style={{ marginTop: "0.15em" }}
      >
        {company.tagline}
      </span>
    </span>
  );
}

export function Logo({
  className = "",
  tone = "dark",
  markSize = "h-9 w-9",
}: {
  className?: string;
  tone?: "dark" | "light";
  markSize?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark tone={tone === "dark" ? "orange" : "white"} className={markSize} />
      <Wordmark tone={tone} className="text-[15px] sm:text-[16px]" />
    </span>
  );
}
