import {
  Code2,
  Component as ComponentIcon,
  Cpu,
  BrainCircuit,
} from "lucide-react";

// ------------------------------------------------------------------
// EDIT ME: all site content lives in this one file. Components import
// from here, so you never need to touch component code just to
// update text, links, or data.
// ------------------------------------------------------------------

export const NAME = "Rafikul Mondal";
export const FIRST_NAME = "RAFIKUL";
export const LAST_NAME = "MONDAL";

export const TAGLINE_CHIPS = [
  { label: "Full-Stack development", icon: Code2, color: "fuchsia" },
  { label: "React development", icon: ComponentIcon, color: "amber" },
  { label: "C++", icon: Cpu, color: "lime" },
  { label: "DSA Enthusiast", icon: BrainCircuit, color: "rose" },
];

// TODO: replace with your own story
export const ABOUT_TEXT =
  "I'm a full-stack developer who likes turning ideas into fast, reliable products. I build interfaces with React and Next.js, wire up back ends with Firebase and MongoDB, and keep my problem-solving sharp with C++ and DSA on the side. I care about clean code, small details, and shipping things people actually use.";

// Short highlight line shown in the accent box next to the About text.
export const ABOUT_HIGHLIGHT =
  "Focused on shipping full-stack products with React on the front end and a solid grip on data structures underneath.";

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Firebase",
  "MongoDB",
  "C++",
  "SQL",
  "GitHub",
  
];

export const PROJECTS = [
  {
    name: "Skyfast",
    tag: "Weather app",
    description:
      "A weather app that gives quick, clear forecasts — current conditions plus the next few days at a glance.",
    link: "https://skyfast.vercel.app/",
  },
  {
    name: "Crypto Tracker",
    tag: "Finance / data",
    description:
      "Live cryptocurrency price tracker with charts and watchlists for keeping an eye on the market.",
    link: "https://crypto-tracker-eight-gold.vercel.app/",
  },
  {
    name: "GoalPedia",
    tag: "Productivity",
    description:
      "A goal-tracking app for setting targets, breaking them into steps, and following progress over time.",
    link: "https://goalpedia-mu.vercel.app/",
  },
];

export const EDUCATION = [
  {
    year: "2024 — 2028",
    degree: "Bachelor of Engineering (B.E.) in Information Technology",
    school: "Smt. Kashibai Navale College of Engineering",
    note: "Pursuing a B.E. in Information Technology, building on a foundation in programming, data structures, and web development.",
  },
  {
    year: "2022 — 2024",
    degree: "Higher Secondary (Science)",
    school: "Abasaheb Junior College of Science, Atpadi",
    note: "Physics, Chemistry, Mathematics, Computer Science.",
  },
];

// Phone is a placeholder — swap in your real number whenever you're ready.
export const CONTACT = {
  email: "rafikmandal2006@gmail.com",
  phone: "+91 91126 10345",
  github: "https://github.com/RAFIKULMONDAL",
  linkedin:
    "https://www.linkedin.com/in/rafikul-mondal-5259b3337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/rafik.mondal_?igsh=emZsOTFyeWV6eTg1",
};

export const CHIP_COLORS = {
  fuchsia: "border-fuchsia-500 text-fuchsia-600",
  amber: "border-amber-500 text-amber-600",
  lime: "border-lime-600 text-lime-700",
  rose: "border-rose-500 text-rose-600",
  sky: "border-sky-500 text-sky-600",
};

export const ROTATIONS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];

export const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];
