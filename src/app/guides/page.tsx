import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORY_LABELS, getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "All Steady Vape troubleshooting and maintenance guides, grouped by the problem they solve: leaking, cleaning and care, and battery and charging.",
  alternates: { canonical: "/guides" },
};

const CATEGORY_ORDER = ["leaking", "cleaning", "battery"] as const;

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }]} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Guides</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/85">
          Every guide on {"Steady Vape"} is grouped by the problem it deals
          with, not by publish date. Find your symptom below and work through
          the guide in order. There are {ARTICLES.length} guides published so
          far.
        </p>

        <div className="mt-8 flex flex-col gap-10">
          {CATEGORY_ORDER.map((category) => {
            const articles = getArticlesByCategory(category);
            if (articles.length === 0) return null;
            return (
              <section key={category} aria-labelledby={`cat-${category}`}>
                <h2
                  id={`cat-${category}`}
                  className="font-heading border-b-2 border-forest pb-2 text-lg font-bold uppercase tracking-wide text-forest"
                >
                  {CATEGORY_LABELS[category]}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
