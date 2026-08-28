"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/services";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import clsx from "clsx";

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
        {(["All", ...projectCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={clsx(
              "focus-ring rounded-[6px] border px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] transition-colors",
              active === cat
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-brand-black/15 text-brand-black/60 hover:border-brand-black/30"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {filtered.map((project) => (
          <RevealItem key={project.id}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>

      {filtered.length === 0 && (
        <p className="mt-10 text-[14px] text-brand-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
