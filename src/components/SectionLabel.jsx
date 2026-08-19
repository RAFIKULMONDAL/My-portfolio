export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
      <span className="h-px w-8 bg-zinc-300" />
      <span className="text-xs tracking-widest uppercase text-zinc-500 font-mono">
        {children}
      </span>
    </div>
  );
}
