import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { ProjectItem } from "@/lib/projects";

function Pane({
  label,
  image,
  alt,
  tone,
}: {
  label: string;
  image: string;
  alt: string;
  tone: "before" | "after";
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 320px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <span
        className={clsx(
          "absolute left-3 top-3 rounded-sm px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.14em]",
          tone === "after" ? "bg-brand-orange text-brand-black" : "bg-brand-black/80 text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
}

/** Before / after comparison card. */
export function ProjectCard({ project, className }: { project: ProjectItem; className?: string }) {
  return (
    <article
      className={clsx(
        "group overflow-hidden rounded-lg border border-brand-black/10 bg-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-px bg-brand-black/10">
        <Pane label="Before" tone="before" image={project.before.image} alt={project.before.alt} />
        <Pane label="After" tone="after" image={project.after.image} alt={project.after.alt} />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange-text">
            {project.category}
          </span>
          <span className="text-[12.5px] text-brand-black/55">{project.property}</span>
        </div>
        <h3 className="mt-2 font-heading text-[18px] font-bold leading-snug text-brand-black sm:text-[20px]">
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-brand-muted">{project.summary}</p>
        <Link
          href={`/services/${project.serviceSlug}`}
          className="focus-ring mt-4 inline-flex items-center gap-1.5 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-black transition-colors hover:text-brand-orange-text"
        >
          About this service
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
