import clsx from "clsx";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em]",
        tone === "dark" ? "text-brand-orange-deep" : "text-brand-orange",
        className
      )}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={clsx("mb-3 sm:mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={clsx(
          "font-heading text-[26px] xs:text-[30px] sm:text-[40px] lg:text-[52px] font-bold leading-[1.08] break-words",
          tone === "dark" ? "text-brand-black" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-3 sm:mt-5 max-w-xl text-[14.5px] sm:text-[17px] leading-relaxed",
            tone === "dark" ? "text-brand-muted" : "text-white/65",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
