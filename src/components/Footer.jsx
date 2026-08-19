import { NAME } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8 text-center text-xs text-zinc-400 px-4">
      © {new Date().getFullYear()} {NAME}. Built with React & Tailwind.
    </footer>
  );
}
