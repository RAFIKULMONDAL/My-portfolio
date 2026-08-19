import { Github, Instagram, Linkedin } from "lucide-react";
import { CONTACT } from "../data";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={CONTACT.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="hover:text-zinc-900 transition-colors"
      >
        <Github size={18} />
      </a>
      <a
        href={CONTACT.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="hover:text-zinc-900 transition-colors"
      >
        <Instagram size={18} />
      </a>
      <a
        href={CONTACT.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="hover:text-zinc-900 transition-colors"
      >
        <Linkedin size={18} />
      </a>
    </div>
  );
}
