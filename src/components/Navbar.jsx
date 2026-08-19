import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "../data";
import { scrollToSection } from "../utils";
import SocialLinks from "./SocialLinks";

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const time = now
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
    .replace(/ ?[AP]M/i, "");
  const meridiem = now
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
    .slice(-2)
    .toLowerCase();
  const date = now.toLocaleDateString([], { month: "long", day: "numeric" });
  return { time, meridiem, date };
}

export default function Navbar() {
  const { time, meridiem, date } = useClock();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0 group cursor-default">
          <span className="text-xl inline-block transition-transform duration-300 origin-[70%_70%] group-hover:animate-wave">
            👋
          </span>
          <span className="font-semibold text-amber-600 transition-all duration-300 group-hover:text-fuchsia-600 group-hover:scale-110 inline-block">
            Hello!
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => scrollToSection(l.href)}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop: full social row */}
          <SocialLinks className="hidden sm:flex text-zinc-400" />

          {/* Mobile: GitHub + LinkedIn shown in place of the clock */}
          <div className="flex sm:hidden items-center gap-3 text-zinc-400">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-zinc-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-zinc-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Desktop/laptop: live clock */}
          <div className="hidden sm:block text-right leading-none">
            <div className="font-display text-base sm:text-lg">
              {time}
              <span className="text-xs align-top ml-1 font-sans font-normal text-zinc-500">
                {meridiem}
              </span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">{date}</div>
          </div>

          <button
            className="md:hidden text-zinc-600"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 sm:px-6 pb-4 text-sm font-medium text-zinc-600">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => {
                setMenuOpen(false);
                scrollToSection(l.href);
              }}
              className="py-2 border-b border-zinc-100 text-left cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <SocialLinks className="pt-3 text-zinc-400" />
        </nav>
      )}
    </header>
  );
}
