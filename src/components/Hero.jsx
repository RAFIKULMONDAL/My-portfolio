import { ArrowUpRight } from "lucide-react";
import { NAME, FIRST_NAME, LAST_NAME, TAGLINE_CHIPS, CHIP_COLORS, ROTATIONS } from "../data";
import { scrollToSection } from "../utils";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28 flex flex-col items-center text-center">
      <p className="text-zinc-500 mb-4 max-w-xl">
        <span className="mr-2">👋</span>
        Hey, I'm {NAME}, building across the stack and sharpening problem-solving daily.
      </p>

      <h1 className="font-display leading-[0.95] tracking-tight uppercase group cursor-default select-none">
        <span
          className="block text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-zinc-900
                     transition-all duration-500 ease-out
                     group-hover:scale-105 group-hover:-rotate-1 group-hover:text-fuchsia-600"
        >
          {FIRST_NAME}
        </span>
        <span
          className="block text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-zinc-400 mt-1 sm:mt-2
                     transition-all duration-500 ease-out delay-75
                     group-hover:scale-105 group-hover:rotate-1 group-hover:text-zinc-900
                     group-hover:tracking-widest"
        >
          {LAST_NAME}
        </span>
      </h1>

      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-xl">
        {TAGLINE_CHIPS.map((chip, i) => {
          const Icon = chip.icon;
          return (
            <span
              key={chip.label}
              className={`inline-flex items-center gap-2 bg-white border-2 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-transform duration-300 hover:scale-105 hover:rotate-0 ${CHIP_COLORS[chip.color]} ${ROTATIONS[i % ROTATIONS.length]}`}
            >
              <Icon size={16} />
              {chip.label}
            </span>
          );
        })}
      </div>

      <div className="mt-12 sm:mt-14 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          See my work
          <ArrowUpRight size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center gap-2 border-2 border-zinc-900 px-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}
