import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

const CATEGORY_COLOUR: Record<string, string> = {
  leaking: "bg-slate",
  cleaning: "bg-forest",
  battery: "bg-amber",
};

/** Flat rectangular tile: left coloured icon block, 1px border, hover darkens border only. */
export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/guides/${article.slug}`}
      className="group flex border border-border-default bg-white transition-colors hover:border-forest"
    >
      <span
        className={`w-2 shrink-0 sm:w-3 ${CATEGORY_COLOUR[article.category]}`}
        aria-hidden="true"
      />
      <span className="flex flex-1 flex-col gap-1.5 px-4 py-4 sm:px-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate">
          {article.category === "leaking" && "Leaking"}
          {article.category === "cleaning" && "Cleaning & care"}
          {article.category === "battery" && "Battery & charging"}
        </span>
        <span className="font-heading text-lg font-semibold leading-snug text-forest group-hover:underline">
          {article.title}
        </span>
        <span className="text-sm leading-relaxed text-foreground/85">
          {article.excerpt}
        </span>
        <span className="mt-1 flex flex-wrap gap-x-3 text-xs text-foreground/60">
          <span>{article.readTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.lastUpdated}</span>
        </span>
      </span>
    </Link>
  );
}
