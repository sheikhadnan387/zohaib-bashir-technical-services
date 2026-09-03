import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ProjectsPreview() {
  const featured = projects.slice(0, 6);

  return (
    <section className="bg-brand-bg py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Portfolio" title="Selected Work" />
          <Reveal delay={0.1}>
            <Button href="/projects" variant="secondary" withArrow>
              View Projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08} y={16}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 max-w-2xl text-[12px] sm:text-[12.5px] leading-relaxed text-brand-muted/80">
          Representative project categories shown above. Project imagery
          will be updated with verified photography as it becomes available.
        </p>
      </div>
    </section>
  );
}
