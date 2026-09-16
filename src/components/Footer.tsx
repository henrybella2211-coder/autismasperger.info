import Link from "next/link";
import { AGE_NOTICE_SHORT, FOOTER_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Age notice strip — distinct amber top border of the footer */}
      <div className="border-t-4 border-amber bg-forest">
        <p className="mx-auto max-w-5xl px-4 py-3 text-xs leading-relaxed text-white/90 sm:px-6">
          <strong className="font-semibold text-white">18+ only.</strong>{" "}
          {AGE_NOTICE_SHORT}
        </p>
      </div>
      <div className="bg-forest">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-white/80">
            {SITE.name} &mdash; {SITE.tagline}
          </p>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 underline-offset-2 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mx-auto max-w-5xl px-4 pb-6 text-xs text-white/60 sm:px-6">
          {SITE.name} is an independent UK vaping information website. It is
          not affiliated with any device manufacturer.
        </p>
      </div>
    </footer>
  );
}
