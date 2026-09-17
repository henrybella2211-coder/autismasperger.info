import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("why-is-my-pod-leaking")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-08-20T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-08-20",
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
          Leaking
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
            A leaking pod or tank is one of the most common faults reported
            by vapers, and in most cases it has a specific, fixable cause
            rather than being a sign the device is broken. This guide sets
            out six checks in a sensible order, starting with the quickest to
            rule out. Work through them one at a time rather than jumping
            around, since fixing the wrong thing first can make it harder to
            tell what actually solved the problem.
          </p>

          <h2>Work through these checks in order</h2>
          <p>
            Each step below builds on the last. Stop as soon as you find and
            fix the cause; there&apos;s no need to work through every step if
            an earlier one turns out to be the answer.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Check the coil is seated properly",
              children: (
                <>
                  <p>
                    Unscrew the pod or tank from the battery section and look
                    at where the coil meets the base. The coil should sit
                    flush, with its threads engaging evenly. A coil that has
                    been screwed in at an angle, or cross-threaded, will
                    leave a small gap that e-liquid can seep through.
                  </p>
                  <p>
                    Remove the coil, check the threads for damage, and refit
                    it by hand until it stops turning naturally, then a
                    quarter-turn more. Avoid forcing it with tools; vape
                    threads are usually plastic or soft metal and strip
                    easily.
                  </p>
                </>
              ),
            },
            {
              title: "Check the O-rings and seals for wear",
              children: (
                <>
                  <p>
                    Most pods and tanks rely on small rubber or silicone
                    O-rings to keep e-liquid sealed inside. These sit around
                    the base of the coil, the glass or plastic section, and
                    sometimes the drip tip. Heat and regular use flatten and
                    harden them over months of use, so a seal that worked
                    fine when the device was new can eventually let liquid
                    through.
                  </p>
                  <p>
                    Look closely for O-rings that appear flattened, cracked,
                    or have come out of their groove entirely. Replacement
                    O-ring kits for popular tanks typically cost around
                    &pound;3&ndash;&pound;6 from a vape shop and are a cheap
                    first repair to try before replacing the whole tank.
                  </p>
                </>
              ),
            },
            {
              title: "Check your fill level",
              children: (
                <p>
                  Most tanks and pods have a maximum fill line, and filling
                  above it pushes e-liquid into the central airflow chimney
                  rather than leaving room for it to sit properly around the
                  coil. This is a very common, easily overlooked cause of
                  leaking, particularly with pods that have a small fill
                  window that&apos;s easy to misjudge. It also helps to wait
                  a minute or two after filling before pulling on the device,
                  giving the coil time to fully saturate rather than flooding
                  under the first few draws. The same overfilling and
                  flooding also explains a lot of{" "}
                  <Link href="/guides/why-does-my-vape-gurgle-or-crackle">
                    gurgling or crackling sounds
                  </Link>
                  , so it&apos;s worth checking both symptoms together if
                  you&apos;re getting either one.
                </p>
              ),
            },
            {
              title: "Check whether your e-liquid is too thin for the device",
              children: (
                <>
                  <p>
                    E-liquid is a mix of propylene glycol (PG) and vegetable
                    glycerine (VG), and the ratio matters more than most new
                    vapers expect. High-VG liquid is thicker and is designed
                    for sub-ohm, direct-to-lung (DTL) tanks with larger coil
                    holes and higher wattage. Using a high-VG liquid in a
                    low-power mouth-to-lung (MTL) pod, which has smaller
                    juice holes, can cause it to flood the coil faster than
                    it can vaporise, and the excess finds its way out through
                    the airflow.
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Device type</th>
                        <th>Typical wattage</th>
                        <th>Best suited e-liquid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MTL pod kit</td>
                        <td>5&ndash;25W</td>
                        <td>Nic salts, 50/50 PG/VG or higher PG</td>
                      </tr>
                      <tr>
                        <td>DTL sub-ohm tank</td>
                        <td>40&ndash;80W+</td>
                        <td>High-VG shortfill e-liquid</td>
                      </tr>
                    </tbody>
                  </table>
                  <p id="weak-flavour">
                    This mismatch is also a common reason behind weak or
                    muted flavour, not just leaking: liquid that&apos;s too
                    thick for the wattage struggles to vaporise fully, so you
                    get a thinner-tasting draw as well as a wetter one.
                    Checking your device&apos;s recommended wattage range
                    against your e-liquid&apos;s VG content solves both
                    symptoms at once.
                  </p>
                </>
              ),
            },
            {
              title: "Check for cracks in the pod or tank",
              children: (
                <p>
                  Inspect the glass or plastic section carefully, particularly
                  near the base and any seams. Hairline cracks are easy to
                  miss and often follow a drop, even a short one onto a hard
                  surface. A cracked tank will usually leak steadily rather
                  than only after filling, which is a useful clue that
                  points away from the fill-level or O-ring checks above.
                </p>
              ),
            },
            {
              title: "Consider temperature and altitude changes",
              children: (
                <p>
                  Air pressure and temperature changes can cause trapped air
                  inside a sealed tank to expand and push e-liquid out, even
                  with no fault at all. This is why devices sometimes leak
                  after being left in a hot car, taken on a flight, or moved
                  from a cold outdoor pocket into a warm room. If leaking only
                  happens after one of these situations, the device itself
                  may be fine.
                </p>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <h2>When it's more than a quick fix</h2>
          <p>
            If you&apos;ve worked through all six checks and the pod still
            leaks, it&apos;s worth replacing the coil outright, since worn
            coils can distort slightly with heat over time even without
            visible damage. Coils are a consumable part and typically need
            replacing every one to four weeks depending on use, regardless of
            leaking.
          </p>
          <Callout title="Worth knowing">
            Regularly{" "}
            <Link href="/guides/how-to-clean-and-maintain-your-vape-kit">
              cleaning and maintaining your kit
            </Link>{" "}
            keeps threads and seals free of dried residue, which is one of
            the quieter causes of leaks developing in the first place.
          </Callout>
          <p>
            Under the Tobacco and Related Products Regulations, UK-regulated
            nicotine e-liquid is capped at 20mg/ml and sold in bottles no
            larger than 10ml, with pre-filled pods and cartridges limited to
            2ml. Sticking to correctly filled, properly sealed refillable
            tanks and pods, as covered above, is the main thing within your
            control when it comes to leaking.
          </p>
        </div>
      </article>
    </>
  );
}
