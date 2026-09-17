import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("why-does-my-vape-gurgle-or-crackle")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-09-14T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-09-14",
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
            A little crackling or popping is completely normal for most
            devices, especially mesh coils run at higher wattage; it&apos;s
            simply the sound of e-liquid heating quickly against the coil. A
            wet, bubbling gurgle is a different sound entirely, and it almost
            always means there&apos;s more e-liquid sitting in the coil or
            airflow than the device can vaporise cleanly. This is usually
            called flooding, and in most cases it&apos;s easy to fix without
            any tools or spare parts.
          </p>
          <h2>Work through these checks in order</h2>
          <p>
            Start by telling the two sounds apart, then work down the list.
            Most gurgling clears up at the first or second check, so there&apos;s
            no need to strip the device down before you&apos;ve tried the
            simple fixes.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Decide whether it's crackle or gurgle",
              children: (
                <>
                  <p>
                    Light, dry crackling or a faint popping sound during a
                    draw is normal, particularly on sub-ohm or mesh coils,
                    and isn&apos;t something to fix. A gurgle sounds wetter
                    and more like bubbling liquid, and it&apos;s often
                    accompanied by hot e-liquid spitting into your mouth,
                    which is unpleasant but not usually dangerous. If what
                    you&apos;re hearing is the second one, work through the
                    checks below.
                  </p>
                </>
              ),
            },
            {
              title: "Check whether you've just refilled",
              children: (
                <p>
                  A gurgle that starts straight after filling, or after
                  switching to a fresh coil, is usually just a coil that
                  hasn&apos;t fully saturated yet. Fresh wicking material
                  needs a minute or two to soak up e-liquid evenly before it
                  can vaporise it properly. Leave the device to sit for a
                  couple of minutes after filling rather than drawing on it
                  straight away, and try a gentle draw before a full one.
                </p>
              ),
            },
            {
              title: "Check your fill level",
              children: (
                <p>
                  Filling above the maximum line pushes e-liquid into the
                  central airflow chimney instead of leaving it to sit
                  around the coil, which is one of the most common causes of
                  both gurgling and{" "}
                  <Link href="/guides/why-is-my-pod-leaking">
                    leaking from the pod or tank
                  </Link>
                  . If you tend to fill right to the top, try stopping just
                  below the line and see whether the sound goes away over
                  the next couple of refills.
                </p>
              ),
            },
            {
              title: "Check how hard and fast you're drawing",
              children: (
                <p>
                  Long, hard, fast draws pull e-liquid through the coil
                  faster than it can vaporise, especially on higher-wattage
                  direct-to-lung tanks with larger juice holes. If you&apos;ve
                  recently switched to a more powerful device or a
                  thinner e-liquid, try shorter, gentler draws and give the
                  coil a moment to keep up rather than pulling continuously.
                </p>
              ),
            },
            {
              title: "Check the angle you're holding or storing it at",
              children: (
                <p>
                  Vaping with the device tilted, lying flat, or stored on
                  its side lets e-liquid pool unevenly over the coil head
                  instead of sitting around it properly. This is especially
                  common overnight; a device left flat on a bedside table can
                  flood by the time you pick it up in the morning. Keeping it
                  upright, both while drawing and in storage, is a simple
                  habit that prevents a lot of gurgling before it starts.
                </p>
              ),
            },
            {
              title: "Tap it out and let it rest",
              children: (
                <p>
                  If a gurgle has already set in, hold the mouthpiece over a
                  tissue or the sink, cover the airflow, and gently tap the
                  device a few times to knock excess e-liquid out of the
                  chimney. Leave it to sit upright for a few minutes
                  afterwards, then try a slow, gentle draw. This clears the
                  majority of flooding without needing to remove the coil at
                  all.
                </p>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <h2>When gurgling means something else</h2>
          <p>
            If you&apos;ve worked through every check above and the gurgle
            keeps coming back within a day or two of clearing it, the coil
            itself may be reaching the end of its life. Wicking material
            degrades with use and can start absorbing liquid unevenly, which
            produces the same wet, bubbling sound even with a correct fill
            level and gentle draws. Coils are a consumable part and
            typically need replacing every one to four weeks depending on
            use, regardless of the cause.
          </p>
          <p>
            A gurgle that comes with visible leaking from the seams, rather
            than just an occasional wet draw, points more towards a worn
            O-ring or a hairline crack than flooding.{" "}
            <Link href="/guides/why-is-my-pod-leaking">
              Our guide to a leaking pod or tank
            </Link>{" "}
            covers how to check both.
          </p>
          <Callout title="Worth knowing">
            A small amount of e-liquid reaching your mouth during a bad
            gurgle isn&apos;t generally something to worry about, though it
            can taste unpleasant and cause a brief cough. Stop, tap the
            device out, and let it rest rather than continuing to draw on it.
          </Callout>
          <p>
            It&apos;s also worth checking whether your e-liquid actually
            suits your device. High-VG liquid is thicker and designed for
            sub-ohm tanks with larger juice holes and higher wattage; using
            it in a low-power mouth-to-lung pod can flood the coil faster
            than a thinner, higher-PG liquid would. If gurgling started
            around the same time you changed e-liquid brand or flavour, a
            mismatched VG ratio is worth ruling out alongside fill level and
            draw technique.
          </p>
          <h2>Preventing gurgling day to day</h2>
          <ul>
            <li>Fill to the marked line, not right to the top.</li>
            <li>
              Wait a minute or two after filling, and after fitting a new
              coil, before taking a full draw.
            </li>
            <li>
              Take shorter, gentler draws rather than long, hard pulls,
              particularly on higher-wattage devices.
            </li>
            <li>
              Keep the device upright during use and while it&apos;s stored
              between sessions.
            </li>
            <li>
              Match your e-liquid&apos;s PG/VG ratio to what your device is
              designed for.
            </li>
          </ul>
          <h2>Quick reference: what the sound usually points to</h2>
          <table>
            <thead>
              <tr>
                <th>What you hear</th>
                <th>Most likely cause</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Light, dry crackle or pop</td>
                <td>Normal for most coils, nothing to fix</td>
              </tr>
              <tr>
                <td>Wet gurgle right after refilling</td>
                <td>Coil not yet saturated; let it rest a minute or two</td>
              </tr>
              <tr>
                <td>Gurgle that doesn&apos;t settle</td>
                <td>Overfilled tank, harsh draw, or wrong device angle</td>
              </tr>
              <tr>
                <td>Gurgle plus liquid at the seams</td>
                <td>Worn O-ring or a crack, not flooding</td>
              </tr>
              <tr>
                <td>Gurgle returns within a day or two</td>
                <td>Coil is worn out and needs replacing</td>
              </tr>
            </tbody>
          </table>
          <p>
            Most gurgling comes down to routine habits rather than a fault:
            fill to the line rather than over it, draw gently rather than
            hard, and keep the device upright when you&apos;re not using it.
            Staying on top of{" "}
            <Link href="/guides/how-to-clean-and-maintain-your-vape-kit">
              regular cleaning and maintenance
            </Link>{" "}
            also helps, since dried residue around the airflow can make a
            borderline flooding problem worse than it would otherwise be.
          </p>
        </div>
      </article>
    </>
  );
}
