import Image from "next/image";
import clsx from "clsx";
import { company } from "@/lib/company";

export function Logo({
  className = "",
  size = "h-11 sm:h-12 lg:h-[58px]",
  markSize,
  priority = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  markSize?: string;
  size?: string;
  priority?: boolean;
}) {
  const finalSize = markSize ? markSize.replace(/w-\S+/g, "w-auto") : size;

  return (
    <span className={clsx("inline-flex items-center", className)}>
      <Image
        src="/logo/logo.svg"
        alt={company.legalName}
        width={998}
        height={992}
        priority={priority}
        className={clsx("w-auto object-contain transition-all duration-300", finalSize)}
      />
    </span>
  );
}

export function Mark({
  className = "h-9 w-9",
}: {
  className?: string;
  tone?: "orange" | "white" | "charcoal";
}) {
  return (
    <Image
      src="/logo/logo.svg"
      alt={company.legalName}
      width={100}
      height={100}
      className={clsx("w-auto object-contain", className)}
    />
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
      <Mark className="h-full w-full p-2" />
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
