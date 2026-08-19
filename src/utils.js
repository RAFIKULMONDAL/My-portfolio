// JS-driven smooth scroll — used instead of plain #hash links so navigation
// works reliably everywhere (including sandboxed/preview iframes that can
// block hash URL changes).
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
