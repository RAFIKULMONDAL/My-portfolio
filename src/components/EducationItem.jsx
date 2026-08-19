import { GraduationCap } from "lucide-react";

export default function EducationItem({ edu }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
      <div className="sm:w-40 shrink-0 flex items-center gap-2 text-zinc-500 font-mono text-sm">
        <GraduationCap size={16} />
        {edu.year}
      </div>
      <div>
        <h3 className="font-display text-lg sm:text-xl">{edu.degree}</h3>
        <p className="text-zinc-500 text-sm mt-1">{edu.school}</p>
        <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{edu.note}</p>
      </div>
    </div>
  );
}
