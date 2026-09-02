"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/services";
import { ProjectCard } from "@/components/ui/ProjectCard";
import clsx from "clsx";

type FilterValue = ProjectCategory | "All";

type FilterTab = {
  label: string;
  value: FilterValue;
};

const filterTabs: FilterTab[] = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Shampoo Cleaning",
    value: "Cleaning",
  },
  {
    label: "Painting",
    value: "Painting",
  },
  {
    label: "AC Services",
    value: "AC",
  },
  {
    label: "Flooring & Parquet",
    value: "Flooring",
  },
];

export function ProjectsGrid() {
  const [active, setActive] = useState<FilterValue>("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => setActive(tab.value)}
            className={clsx(
              "focus-ring rounded-[6px] border px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] transition-colors",
              active === tab.value
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-brand-black/15 text-brand-black/60 hover:border-brand-black/30"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-[14px] text-brand-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
