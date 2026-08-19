import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group border-2 border-zinc-900 rounded-2xl p-6 bg-white hover:bg-zinc-900 hover:text-white transition-colors duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs uppercase tracking-widest text-fuchsia-600 group-hover:text-fuchsia-400 font-mono">
          {project.tag}
        </span>
        <ArrowUpRight
          size={18}
          className="text-zinc-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
        />
      </div>
      <h3 className="font-display text-xl sm:text-2xl mt-4 mb-3">{project.name}</h3>
      <p className="text-sm text-zinc-600 group-hover:text-zinc-300 leading-relaxed">
        {project.description}
      </p>
    </a>
  );
}
