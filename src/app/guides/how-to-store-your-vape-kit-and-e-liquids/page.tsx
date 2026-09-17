import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("how-to-store-your-vape-kit-and-e-liquids")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-09-15T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-09-15",
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
            Where and how you keep your device and your e-liquid between
            uses affects more than tidiness. Heat, light and the wrong angle
            are behind a fair share of the leaking, flooding and battery
            problems covered elsewhere on this site, and most of it comes
            down to a handful of simple habits rather than anything
            technical.
          </p>
          <p>
            None of the steps below need special equipment. A cool, dry
            shelf or drawer out of direct light covers most of it; the rest
            is just being deliberate about how you pack and pack away your
            kit.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Keep heat and direct sunlight away from your kit",
              children: (
                <p>
                  A hot car, a sunny windowsill, or a spot right next to a
                  radiator can affect both halves of your kit at once: heat
                  accelerates the natural breakdown of e-liquid, and it puts
                  extra strain on the lithium battery, shortening how long it
                  holds a charge over time. A cupboard, drawer or bag pocket
                  out of direct sunlight is a better home for a device or
                  spare e-liquid than anywhere it might sit in the sun for
                  hours.
                </p>
              ),
            },
            {
              title: "Store the device upright, not lying flat",
              children: (
                <p>
                  Keeping a pod kit or mod upright when it&apos;s not in use
                  reduces the chance of e-liquid pooling against the coil or
                  seals. Left on its side for hours, particularly overnight,
                  e-liquid can settle unevenly over the coil head, which is
                  one of the more common reasons a device{" "}
                  <Link href="/guides/why-does-my-vape-gurgle-or-crackle">
                    gurgles or spits on the first draw of the day
                  </Link>
                  . A mug, a stand, or simply propping it against something
                  in a drawer is enough.
                </p>
              ),
            },
            {
              title: "Keep spare coils and pods sealed until needed",
              children: (
                <p>
                  Leave spare coils in their original sealed packaging
                  until you&apos;re ready to fit one. The wicking material
                  inside can dry out, pick up dust, or absorb moisture from
                  the air if it&apos;s left open for weeks, all of which
                  affect how evenly it soaks up e-liquid once it&apos;s
                  finally used. A cool, dry drawer works better than a damp
                  bathroom cabinet or a bag that sits in direct sun.
                </p>
              ),
            },
            {
              title: "Store e-liquid bottles upright with the cap tight",
              children: (
                <p>
                  Standing bottles upright keeps e-liquid away from the
                  dropper tip or nozzle, reducing the chance of a slow
                  drip building up around the cap. Keep bottles somewhere
                  dark or at least out of direct light, since UV exposure
                  is one of the main things that speeds up the natural
                  darkening and flavour drift that happens to e-liquid over
                  time.
                </p>
              ),
            },
            {
              title: "Know what's normal ageing and what's a bottle to bin",
              children: (
                <>
                  <p>
                    E-liquid darkening gradually over weeks or months is
                    usually just oxidation, the same harmless colour change
                    you&apos;d see in a cut apple, and it doesn&apos;t
                    automatically mean the bottle has gone off, though very
                    old stock may taste and hit slightly weaker than it did
                    when fresh. A sudden colour change, a much thicker or
                    thinner texture than usual, or a sour, musty or simply
                    &quot;off&quot; smell that&apos;s different from the
                    labelled flavour are better signals that a bottle is
                    past its best and worth discarding.
                  </p>
                  <p>
                    As a general habit, buy e-liquid in quantities you&apos;ll
                    actually get through within a few months rather than
                    stockpiling far more than you need, and always check the
                    best-before date printed on the bottle.
                  </p>
                </>
              ),
            },
            {
              title: "Pack it correctly if you're travelling, especially by air",
              children: (
                <>
                  <p>
                    UK Civil Aviation Authority guidance is clear that vapes
                    and e-cigarettes, along with any spare batteries, must
                    go in your cabin bag and never in hold luggage, because a
                    damaged lithium battery in the hold has no one nearby to
                    respond if it overheats. The device should be carried
                    protected from accidental activation and not charged
                    during the flight.
                  </p>
                  <p>
                    E-liquid in hand luggage still needs to follow the
                    standard rules for liquids, carried in a container of
                    100ml or less inside a clear resealable bag, which UK
                    10ml nicotine e-liquid bottles comfortably fit within.
                    Rules can vary slightly by airline and destination, so
                    it&apos;s worth checking with your airline directly
                    before you fly.
                  </p>
                </>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <Callout title="Flying with your kit">
            Never pack a vape device or spare batteries in checked luggage.
            Keep them in your cabin bag, carried on your person where
            possible, and switched off for the duration of the flight.
          </Callout>
          <h2>How long e-liquid actually lasts</h2>
          <p>
            UK-regulated nicotine e-liquid is sold in bottles no larger than
            10ml, capped at 20mg/ml nicotine strength, and most bottles carry
            a best-before date printed on the label or base. Left unopened,
            in a cool, dark spot, e-liquid generally stays usable for well
            over a year. Once opened, it&apos;s exposed to more light and air
            every time the cap comes off, so it&apos;s sensible to treat an
            opened bottle as something to use within a matter of months
            rather than leaving it at the back of a drawer indefinitely.
            Nicotine itself breaks down gradually with heat, light and air
            exposure, so old stock is more likely to taste flatter and hit
            weaker than to become unsafe outright, but a bottle that smells
            wrong is still one to throw away rather than use.
          </p>
          <h2>Quick reference: storage do&apos;s and don&apos;ts</h2>
          <table>
            <thead>
              <tr>
                <th>Do</th>
                <th>Don&apos;t</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Store upright, out of direct sunlight</td>
                <td>Leave in a hot car or on a sunny windowsill</td>
              </tr>
              <tr>
                <td>Keep spare coils sealed until needed</td>
                <td>Leave coils open in a damp or humid spot</td>
              </tr>
              <tr>
                <td>Keep e-liquid bottles capped and upright</td>
                <td>Store bottles on their side or somewhere warm</td>
              </tr>
              <tr>
                <td>Pack devices and batteries in cabin luggage</td>
                <td>Pack a device or spare battery in the hold</td>
              </tr>
            </tbody>
          </table>
          <Callout title="Worth knowing">
            A new Vaping Products Duty takes effect in the UK from 1 October
            2026, and it&apos;s tempting to buy well ahead of any price
            change. E-liquid doesn&apos;t keep indefinitely, though, so it&apos;s
            worth only stocking up on what you&apos;ll realistically use
            within its shelf life rather than buying in bulk purely to beat
            a price rise.
          </Callout>
          <p>
            Most of this is habit rather than effort: an upright shelf out
            of the sun, sealed spares, and a cabin bag rather than a suitcase
            when you fly. Paired with{" "}
            <Link href="/guides/how-to-clean-and-maintain-your-vape-kit">
              regular cleaning and maintenance
            </Link>
            , sensible storage is one of the simplest ways to avoid most of
            the common faults covered on this site before they start.
          </p>
        </div>
      </article>
    </>
  );
}
