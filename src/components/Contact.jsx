import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { CONTACT } from "../data";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-zinc-100 scroll-mt-24">
      <SectionLabel>Contact</SectionLabel>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 text-center md:text-left">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            Let's build
            <br />
            something<span className="text-fuchsia-600">.</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-md mx-auto md:mx-0">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            <Mail size={16} />
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 border-2 border-zinc-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
          >
            <Phone size={16} />
            {CONTACT.phone}
          </a>
          <div className="flex flex-wrap justify-center gap-4 text-zinc-500">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-zinc-900 flex items-center gap-1 text-sm">
              <Github size={16} /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-900 flex items-center gap-1 text-sm">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-zinc-900 flex items-center gap-1 text-sm">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
