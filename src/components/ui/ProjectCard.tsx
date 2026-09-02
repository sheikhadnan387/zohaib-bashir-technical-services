import Image from "next/image";
import type { ProjectItem } from "@/lib/projects";

export function ProjectCard({ project, className = "" }: { project: ProjectItem; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-lg border border-white/10 bg-brand-black ${className}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent transition-opacity duration-500 group-hover:from-brand-black" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-block rounded-sm bg-brand-orange/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {project.category}
        </span>
        <h3 className="mt-2.5 font-heading text-[16px] font-bold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-[12.5px] text-white/60">{project.location}</p>
      </div>
    </div>
  );
}
