import { ABOUT_TEXT, ABOUT_HIGHLIGHT } from "../data";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-zinc-100 scroll-mt-24">
      <SectionLabel>About</SectionLabel>
      <div className="grid md:grid-cols-3 gap-8 sm:gap-10 items-start">
        <div className="md:col-span-2">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">{ABOUT_TEXT}</p>
        </div>
        <div className="border-2 border-zinc-900 rounded-2xl p-6 bg-zinc-50">
          <p className="font-display text-4xl text-fuchsia-600 mb-2">01</p>
          <p className="text-sm text-zinc-500">{ABOUT_HIGHLIGHT}</p>
        </div>
      </div>
    </section>
  );
}
