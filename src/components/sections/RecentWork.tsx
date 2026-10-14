import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function RecentWork() {
  const featured = projects.slice(0, 2);

  return (
    <section className="bg-brand-bg py-14 sm:py-20 lg:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Before & After"
            title="The Difference, Side by Side."
            description="Representative examples of the work we carry out across Dubai properties."
          />
          <Reveal delay={0.1}>
            <Button href="/projects" variant="secondary" withArrow>
              View All Work
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} y={16}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
