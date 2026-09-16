import Image from "next/image";
import Link from "next/link";
import ProblemTile from "@/components/ProblemTile";
import { ARTICLES } from "@/lib/articles";
import { PROBLEM_TILES, SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border-default bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-slate">
              Vape troubleshooting &amp; maintenance
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-forest sm:text-4xl">
              Having a problem with your vape?
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/85">
              {SITE.name} is a set of plain, step-by-step guides for existing
              vapers whose kit isn&apos;t working quite right. Pick the
              symptom that matches what you&apos;re seeing and work through
              the checks in order.
            </p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {PROBLEM_TILES.map((tile) => (
                <ProblemTile
                  key={tile.label}
                  label={tile.label}
                  description={tile.description}
                  href={tile.href}
                />
              ))}
            </div>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-sm border border-border-default sm:h-72 lg:h-80">
            <Image
              src="/images/vape-mod-tank-close-up.jpg"
              alt="A vape mod and tank resting against a dark textured rock"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Latest guides — numbered-list row, not cards */}
      <section className="border-b border-border-default bg-background">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-heading text-xl font-bold text-forest">
              Latest guides
            </h2>
            <Link
              href="/guides"
              className="text-sm font-medium text-slate-dark hover:underline"
            >
              View all guides
            </Link>
          </div>
          <ol className="mt-4 flex flex-col border-t border-border-default">
            {ARTICLES.map((article, i) => (
              <li key={article.slug} className="border-b border-border-default">
                <Link
                  href={`/guides/${article.slug}`}
                  className="group flex items-start gap-4 py-4 hover:bg-white"
                >
                  <span
                    className="step-marker font-heading shrink-0 text-2xl font-bold text-border-default group-hover:text-forest"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-base font-semibold text-forest group-hover:underline sm:text-lg">
                      {article.title}
                    </span>
                    <span className="mt-1 block text-sm text-foreground/75">
                      {article.excerpt}
                    </span>
                    <span className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-foreground/55">
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.lastUpdated}</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How to use this site */}
      <section className="bg-slate">
        <div className="mx-auto max-w-5xl px-4 py-10 text-white sm:px-6">
          <h2 className="font-heading text-xl font-bold">
            How to use this site
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/70">
                Step 1
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/90">
                Find the problem tile or guide that matches what your device
                is doing right now.
              </p>
            </div>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/70">
                Step 2
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/90">
                Work through the numbered checks in order. Each guide is
                written so you can stop as soon as you find the cause.
              </p>
            </div>
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/70">
                Step 3
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/90">
                Amber boxes flag anything safety-related, such as battery
                damage. Stop and follow that advice rather than continuing to
                troubleshoot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
