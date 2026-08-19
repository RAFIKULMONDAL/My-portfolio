# Rafikul Mondal — Portfolio

A React + Tailwind portfolio site, split into one component per section.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx          # Assembles all sections
    ├── index.css        # Tailwind + fonts + dot background
    ├── data.js           # ALL editable content lives here (name, skills, projects, etc.)
    ├── utils.js          # scrollToSection() helper for nav
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── ProjectCard.jsx
        ├── Education.jsx
        ├── EducationItem.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── SectionLabel.jsx
        └── SocialLinks.jsx
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Editing content

Almost everything you'll want to change — your bio, skills, project links,
education, contact info — lives in **`src/data.js`**. You shouldn't need to
touch the component files just to update text.

Lines marked `// TODO` in `data.js` are placeholders (About text, project
links/descriptions, education, contact info) — replace those with your real
details.

## Build for production

```bash
npm run build
```

This outputs a static site in `dist/`, ready to deploy to Vercel, Netlify,
GitHub Pages, or any static host.
