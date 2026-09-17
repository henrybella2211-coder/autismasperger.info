import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("how-to-clean-and-maintain-your-vape-kit")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-08-22T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-08-22",
    dateModified: article.lastUpdatedISO,
    author: { "@type": "Organization", name: `${SITE.name} editorial team` },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: article.title, href: `/guides/${article.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-slate">
          Cleaning &amp; care
        </p>
        <h1 className="mt-1 font-heading text-3xl font-bold leading-tight text-forest sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-3 flex flex-wrap gap-x-3 text-sm text-foreground/60">
          <span>{article.readTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{article.lastUpdated}</span>
        </p>

        <div className="relative mt-6 h-56 w-full overflow-hidden rounded-sm border border-border-default sm:h-72">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="manual-body mt-6">
          <p>
            A vape kit that&apos;s kept clean lasts longer, tastes better and
            is less likely to develop the leaking and burnt-taste problems
            covered elsewhere on this site. None of this takes long. A
            couple of minutes every few days, plus a slightly longer check
            when you change the coil, is enough for most people.
          </p>
          <p>
            The steps below apply to most pod kits and mods on the market,
            whether the tank is refillable glass and metal or a smaller
            plastic pod. The general principle is the same throughout: keep
            liquid off the electronics, keep contacts dry, and don&apos;t
            rush reassembly before everything has properly dried out.
          </p>
          <p>
            You don&apos;t need special vape-branded cleaning products for
            any of this. A dry cloth, cotton buds, and occasionally a small
            amount of warm water for a tank rinse cover almost every
            situation you&apos;ll come across.
          </p>
          <h2 id="burnt-taste">Why cleaning affects taste</h2>
          <p>
            Dried e-liquid residue that builds up around the coil and airflow
            slots doesn&apos;t just look grubby, it can scorch the next time
            you vape, which is one of the more overlooked causes of a
            sudden burnt taste alongside a coil that simply needs replacing.
            Keeping the pod and contacts clean removes one variable when
            you&apos;re troubleshooting flavour that&apos;s gone off.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Wipe down the pod or tank",
              children: (
                <>
                  <p>
                    Separate the pod or tank from the battery section and wipe
                    the outside with a dry or barely damp cloth to remove
                    fingerprints and any spilled e-liquid. Pay particular
                    attention to the mouthpiece, since residue here is what you
                    actually taste first on every draw.
                  </p>
                  <p>
                    If the mouthpiece is removable, take it off and wipe
                    inside the opening too, where e-liquid tends to collect
                    if you vape while the device is lying on its side. A dry
                    cotton bud works well for the narrow bore of a mouthpiece
                    that a cloth can&apos;t reach into.
                  </p>
                </>
              ),
            },
            {
              title: "Clean the battery contacts",
              children: (
                <>
                  <p>
                    E-liquid that seeps down into the connection between the
                    pod and battery section can cause a burnt taste, poor
                    connectivity, or a device that won&apos;t fire properly.
                    Use a dry cotton bud to clean the metal contacts on both the
                    pod and the battery section. Never use a wet cloth or liquid
                    cleaner directly on the contacts.
                  </p>
                  <p>
                    If a contact looks visibly sticky or discoloured, a
                    cotton bud very lightly dampened with isopropyl alcohol
                    can shift residue that a dry bud alone won&apos;t move.
                    Let the contacts dry fully, at least a minute or two,
                    before reconnecting the pod, and avoid using anything
                    metal to scrape at the contacts, which can scratch and
                    damage the connection permanently.
                  </p>
                </>
              ),
            },
            {
              title: "Rinse an empty tank if needed",
              children: (
                <p>
                  If you&apos;re switching e-liquid flavours or the tank
                  feels genuinely gummed up, empty it fully, remove the coil,
                  and rinse the tank section only, not the coil or any
                  electronic part, under warm water. Shake out the excess and
                  leave it to air dry completely before refitting the coil
                  and refilling. Putting a wet tank back together traps
                  moisture against the coil and can affect how it fires.
                </p>
              ),
            },
            {
              title: "Never submerge electronics",
              children: (
                <Callout title="Do not do this">
                  The battery or mod section, including any part with a
                  screen, button or USB port, should never be submerged in
                  water or cleaning liquid. If it gets wet, dry it thoroughly
                  before use and let it sit powered off for a few hours if
                  you&apos;re unsure.
                </Callout>
              ),
            },
            {
              title: "Let everything dry fully before reassembly",
              children: (
                <p>
                  Trapped moisture is a common, avoidable cause of a
                  device that misfires or tastes odd on the first few draws
                  after cleaning. Leave parts on a dry cloth or kitchen
                  towel for at least twenty minutes, longer if you rinsed a
                  tank, before putting the kit back together.
                </p>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <h2>How often to clean</h2>
          <p>
            A quick wipe of the mouthpiece and contacts every couple of days
            is enough for most people. A fuller clean, including a tank
            rinse if applicable, fits naturally alongside a coil change,
            roughly every one to four weeks depending on use.
          </p>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>How often</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wipe mouthpiece and casing</td>
                <td>Every 2&ndash;3 days</td>
              </tr>
              <tr>
                <td>Clean battery contacts</td>
                <td>Whenever you spot residue, or at each coil change</td>
              </tr>
              <tr>
                <td>Rinse an empty tank</td>
                <td>When changing flavour, or if it feels gummed up</td>
              </tr>
              <tr>
                <td>Full strip-down and dry</td>
                <td>Roughly every 1&ndash;4 weeks, alongside a coil change</td>
              </tr>
            </tbody>
          </table>
          <h2>Storage habits worth adopting</h2>
          <ul>
            <li>
              Avoid leaving your device in direct sunlight or a hot car;
              heat can affect both the battery and the e-liquid inside.
            </li>
            <li>
              Store it upright where practical to reduce the chance of
              e-liquid pooling against the coil or seals over time.
            </li>
            <li>
              Keep spare pods and coils in a cool, dry place, away from
              direct sunlight, until you need them.
            </li>
            <li>
              If you&apos;re not using a device for more than a week or two,
              consider emptying the tank first rather than leaving e-liquid
              sitting against a coil that isn&apos;t being used.
            </li>
          </ul>
          <p>
            For a closer look at storage, including sealed spares, e-liquid
            shelf life and packing your kit for a flight, see our full guide
            to{" "}
            <Link href="/guides/how-to-store-your-vape-kit-and-e-liquids">
              storing your vape kit and e-liquids properly
            </Link>
            .
          </p>
          <h2>Signs your kit is overdue a clean</h2>
          <p>
            A few practical signals are worth watching for rather than
            sticking rigidly to a schedule. A mouthpiece that tastes
            slightly stale even with fresh e-liquid, a device that feels
            gritty around the pod connection, or contacts that look visibly
            discoloured are all reasonable prompts to clean sooner rather
            than waiting for your usual interval.
          </p>
          <p>
            None of this is complicated, but it&apos;s the kind of routine
            maintenance that prevents most of the common faults covered on
            this site, including{" "}
            <Link href="/guides/why-is-my-pod-leaking">leaking</Link> and a
            device that{" "}
            <Link href="/guides/vape-wont-charge-or-turn-on">
              won&apos;t charge or turn on
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
