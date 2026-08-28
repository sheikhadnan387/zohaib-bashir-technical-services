import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { Service } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = getServiceIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={clsx(
        "focus-ring group relative block h-full min-h-[220px] w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <PlaceholderVisual icon={Icon} label={service.shortName} tone="dark" className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-transparent transition-opacity duration-500 group-hover:from-brand-black/95" />

      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <span className="font-heading text-[15px] font-bold tracking-wider text-brand-orange">
            {service.number}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className="font-heading text-[19px] font-bold leading-tight text-white sm:text-[21px]">
            {service.shortName}
          </h3>
          <p className="mt-2.5 line-clamp-2 text-[13.5px] leading-relaxed text-white/60">
            {service.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
            Explore Service
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
