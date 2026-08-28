import { Building2 } from "lucide-react";
import type { ProjectItem } from "@/lib/projects";
import { getServiceBySlug } from "@/lib/services";
import { getServiceIcon } from "@/lib/icons";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

export function ProjectCard({ project, className = "" }: { project: ProjectItem; className?: string }) {
  const service = getServiceBySlug(project.serviceSlug);
  const Icon = service ? getServiceIcon(service.icon) : Building2;

  return (
    <div className={`group relative overflow-hidden rounded-lg ${className}`}>
      <PlaceholderVisual
        icon={Icon}
        label={project.location}
        tone="dark"
        className="relative aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-block rounded-sm bg-brand-orange/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
          {project.category}
        </span>
        <h3 className="mt-2.5 font-heading text-[16px] font-bold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-[12.5px] text-white/55">{project.location}</p>
      </div>
    </div>
  );
}
