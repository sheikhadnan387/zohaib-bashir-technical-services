import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghost-light";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus-ring";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-deep active:bg-brand-orange-deep",
  secondary:
    "border border-brand-black/15 text-brand-black hover:border-brand-black hover:bg-brand-black hover:text-white",
  ghost:
    "text-brand-black hover:text-brand-orange px-0 py-1",
  "ghost-light":
    "text-white/90 hover:text-brand-orange px-0 py-1",
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
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
