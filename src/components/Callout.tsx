/** Amber caution note, used sparingly for safety-relevant warnings. */
export default function Callout({
  title = "Caution",
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 border border-amber bg-amber/10 px-4 py-3 rounded-sm">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-dark">
        {title}
      </p>
      <div className="mt-1 text-[0.95rem] leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  );
}
