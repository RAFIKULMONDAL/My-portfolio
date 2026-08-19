import { PROJECTS } from "../data";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-zinc-100 scroll-mt-24">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
