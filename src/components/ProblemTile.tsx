import Link from "next/link";

const ICONS: Record<string, React.ReactNode> = {
  Leaking: (
    <path d="M12 3c-1.8 2.4-4 5.6-4 8a4 4 0 0 0 8 0c0-2.4-2.2-5.6-4-8Z" />
  ),
  "Burnt taste": (
    <>
      <path d="M4 13c1-4 4-6 4-9 2 1 3 3 2 5 3-1 6 1 6 5a6 6 0 0 1-12 0c0-.5.1-1 0-1Z" />
    </>
  ),
  "Weak flavour": (
    <>
      <path d="M5 12h14M5 12a4 4 0 0 1 4-4M19 12a4 4 0 0 1-4 4" strokeWidth="1.6" stroke="currentColor" fill="none" strokeLinecap="round" />
    </>
  ),
  "Won't charge": (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  ),
};

export default function ProblemTile({
  label,
  description,
  href,
}: {
  label: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex border border-border-default bg-white transition-colors hover:border-forest"
    >
      <span className="flex w-14 shrink-0 items-center justify-center bg-slate sm:w-16">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#F0F1EE"
          aria-hidden="true"
        >
          {ICONS[label]}
        </svg>
      </span>
      <span className="flex flex-1 flex-col justify-center gap-0.5 px-4 py-4">
        <span className="font-heading text-base font-semibold text-forest group-hover:underline">
          {label}
        </span>
        <span className="text-sm leading-snug text-foreground/80">
          {description}
        </span>
      </span>
    </Link>
  );
}
