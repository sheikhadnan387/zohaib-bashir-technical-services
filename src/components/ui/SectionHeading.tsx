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
        <Eyebrow tone={tone} className={clsx("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={clsx(
          "font-heading text-[36px] font-bold leading-[1.05] sm:text-[44px] lg:text-[56px]",
          tone === "dark" ? "text-brand-black" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 max-w-xl text-[16px] leading-relaxed sm:text-[18px]",
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
