import { SKILLS, CHIP_COLORS } from "../data";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  const colorKeys = Object.keys(CHIP_COLORS);
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-zinc-100 scroll-mt-24">
      <SectionLabel>Skills</SectionLabel>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {SKILLS.map((skill, i) => {
          const color = colorKeys[i % colorKeys.length];
          return (
            <span
              key={skill}
              className={`bg-white border-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-transform duration-300 hover:-translate-y-1 ${CHIP_COLORS[color]}`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}
