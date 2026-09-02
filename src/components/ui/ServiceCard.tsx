import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={clsx(
        "focus-ring group relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-brand-black transition-all duration-500 ease-out hover:-translate-y-[3px] hover:border-white/20",
        "min-h-[220px] w-full",
        className
      )}
    >
      {/* Background Visual Image with Subtle Zoom */}
      <Image
        src={service.image}
        alt={service.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/25 transition-colors duration-500 group-hover:from-brand-black/95 group-hover:via-brand-black/70" />

      {/* Card Content Layout */}
      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 sm:p-7">
        {/* Top Header: Number Pill & Action Indicator */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-sm border border-brand-orange/30 bg-brand-black/70 px-2.5 py-0.5 font-heading text-[12px] font-bold tracking-wider text-brand-orange backdrop-blur-xs transition-colors duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange/15">
            {service.number}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-brand-black/50 text-white/70 backdrop-blur-xs transition-all duration-300 group-hover:border-brand-orange/60 group-hover:bg-brand-orange group-hover:text-white">
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content Info */}
        <div className="mt-8">
          <div className="mb-1.5">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-orange/90">
              {service.category}
            </span>
          </div>
          <h3 className="font-heading text-[19px] font-bold leading-snug text-white transition-colors duration-300 sm:text-[21px]">
            {service.shortName}
          </h3>
          <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-white/65">
            {service.shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
            <span>Explore Service</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* GloCore Full-Width 2px Orange Accent Bottom Line using scaleX */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
