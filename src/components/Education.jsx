import { EDUCATION } from "../data";
import SectionLabel from "./SectionLabel";
import EducationItem from "./EducationItem";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-zinc-100 scroll-mt-24">
      <SectionLabel>Education</SectionLabel>
      <div className="space-y-8">
        {EDUCATION.map((edu) => (
          <EducationItem key={edu.degree} edu={edu} />
        ))}
      </div>
    </section>
  );
}
