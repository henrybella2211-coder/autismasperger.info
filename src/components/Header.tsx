import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-1.5 text-sm font-medium text-foreground hover:bg-forest/10 sm:px-3 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Decorative brand bar — not a progress indicator */}
      <div className="h-1 w-full bg-forest" aria-hidden="true" />
    </header>
  );
}
