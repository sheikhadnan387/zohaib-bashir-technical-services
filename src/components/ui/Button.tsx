import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghost-light";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-[13px] font-semibold uppercase tracking-[0.12em] focus-ring select-none";

const variants: Record<Variant, string> = {
  primary:
    "overflow-hidden border border-brand-black bg-brand-black px-6 py-3.5 text-white transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none shadow-xs",
  secondary:
    "overflow-hidden border border-brand-black/25 bg-brand-black px-6 py-3.5 text-white transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none shadow-xs",
  ghost:
    "px-0 py-1 text-brand-black transition-colors duration-300 hover:text-brand-orange",
  "ghost-light":
    "px-0 py-1 text-white/90 transition-colors duration-300 hover:text-brand-orange",
};

interface CommonProps {
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...rest
}: CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const isSwept = variant === "primary" || variant === "secondary";

  const content = (
    <>
      {/* Orange sweep reveal layer for primary/secondary buttons */}
      {isSwept && (
        <span
          className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-brand-orange transition-transform duration-[380ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100 motion-reduce:hidden"
          aria-hidden="true"
        />
      )}

      {/* Button label text */}
      <span
        className={clsx(
          "relative z-10 transition-colors duration-300",
          isSwept
            ? "text-white group-hover:text-brand-black"
            : variant === "ghost-light"
            ? "text-white/90 group-hover:text-brand-orange"
            : "text-brand-black group-hover:text-brand-orange"
        )}
      >
        {children}
      </span>

      {/* Arrow icon animation */}
      {withArrow && (
        <ArrowUpRight
          className={clsx(
            "relative z-10 h-4 w-4 shrink-0 transition-all duration-300 ease-out",
            isSwept
              ? "text-white group-hover:rotate-45 group-hover:translate-x-1 group-hover:text-brand-black motion-reduce:transform-none"
              : "text-current transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          )}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={clsx(base, variants[variant], className)}
        {...(isExternal ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={clsx(base, variants[variant], className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
