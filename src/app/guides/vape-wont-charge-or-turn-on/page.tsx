import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug("vape-wont-charge-or-turn-on")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-08-25T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-08-25",
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
          Battery &amp; charging
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
            A device that won&apos;t charge or switch on is usually down to
            one of a small number of causes, most of which don&apos;t mean
            the kit is broken. Work through the checks below before assuming
            you need a replacement.
          </p>
          <p>
            Start with the simplest explanations first. It&apos;s easy to
            assume the worst when a device suddenly goes dark, but a blocked
            port or an underpowered cable causes far more &quot;dead&quot;
            devices than an actual battery failure does.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Check the cable and port for debris",
              children: (
                <>
                  <p>
                    Pocket lint and dust build up in USB-C and micro-USB ports
                    over time and can stop a good connection forming. Look
                    into the port with a torch and gently clear any visible
                    debris with a dry cocktail stick or toothpick, never
                    anything metal or sharp. Check the cable end too; a bent
                    or corroded connector is a common, easy-to-miss culprit.
                  </p>
                  <p>
                    Devices that live in a coat pocket or bag alongside
                    keys and coins are particularly prone to a clogged
                    port, so this is worth checking first even if it seems
                    an unlikely cause. A short blast of compressed air, held
                    at a slight angle rather than straight in, can also
                    shift debris a cocktail stick can&apos;t reach.
                  </p>
                </>
              ),
            },
            {
              title: "Try a different cable and power source",
              children: (
                <>
                  <p>
                    Not all USB cables are equal, and a cable that charges a
                    phone fine may not deliver enough power to a vape device.
                    Try a second cable if you have one, and plug into a
                    different USB port or wall adapter rather than a laptop
                    or unpowered USB hub, which can supply less current than
                    the device needs.
                  </p>
                  <p>
                    A charging light that flickers on briefly then goes out
                    when you plug in usually points to a power or cable
                    issue rather than a battery fault, since the device is
                    at least detecting a connection. No response at all from
                    any cable or port is more likely to point further down
                    this list.
                  </p>
                </>
              ),
            },
            {
              title: "Check for the device's safety cut-off",
              children: (
                <p>
                  Most modern pod kits and mods include a safety feature
                  that shuts the device down after a period of inactivity,
                  or if it detects a short circuit or unusually low
                  resistance, often from a coil that isn&apos;t seated
                  properly. Check your device&apos;s manual or manufacturer
                  support page for how to reset it, since the method varies
                  between brands but is usually a specific button-press
                  sequence.
                </p>
              ),
            },
            {
              title: "Reseat or replace the coil",
              children: (
                <>
                  <p>
                    A coil that&apos;s cross-threaded, damaged, or has reached
                    the end of its life can trigger a short-circuit protection
                    message or simply stop the device firing. Remove the pod,
                    check the coil is seated correctly, and try a fresh coil
                    if you have one spare before assuming the fault lies with
                    charging at all.
                  </p>
                  <p>
                    This is worth checking even if the device does appear to
                    charge normally, since some devices separate charging
                    faults from firing faults completely: the battery fills
                    up fine, but the coil resistance reading is what&apos;s
                    stopping it switching on or producing vapour.
                  </p>
                </>
              ),
            },
            {
              title: "Know when to stop, not force it",
              children: (
                <Callout title="Battery safety">
                  If the battery looks swollen, the casing is warped, or the
                  device gets unusually hot while charging, stop using it
                  immediately and don&apos;t attempt to force a charge or
                  open it up. A swollen or damaged lithium battery is a
                  safety risk, not a fault to work around.
                </Callout>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <h2>Quick reference: what the symptom usually points to</h2>
          <table>
            <thead>
              <tr>
                <th>What you see</th>
                <th>Most likely cause</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No light or response on any cable or port</td>
                <td>Safety cut-off, or battery at end of life</td>
              </tr>
              <tr>
                <td>Light flickers, then stops</td>
                <td>Cable or power source not supplying enough current</td>
              </tr>
              <tr>
                <td>Charges, but won&apos;t fire</td>
                <td>Coil not seated, or short-circuit protection</td>
              </tr>
              <tr>
                <td>Device is hot, swollen or warped</td>
                <td>Stop use; battery safety issue</td>
              </tr>
            </tbody>
          </table>
          <p>
            It&apos;s also worth noting the difference between a device that
            gives no response at all and one that responds but produces no
            vapour. The latter usually points to the coil or airflow rather
            than charging, so if button presses or draws produce a click or
            light but nothing else, start with the coil check above rather
            than continuing to swap cables.
          </p>
          <h2>Charging safely, day to day</h2>
          <ul>
            <li>
              Use the cable supplied with the device, or a cable and
              adapter you know matches its charging spec.
            </li>
            <li>
              Avoid leaving a device charging unattended overnight as a
              matter of routine, particularly on soft furnishings.
            </li>
            <li>
              Keep the device somewhere it can&apos;t overheat while
              charging, out of direct sunlight and away from bedding.
            </li>
            <li>
              Unplug it once it&apos;s fully charged rather than leaving it
              connected for long periods after the light indicates it&apos;s
              done.
            </li>
          </ul>
          <h2>When it's the end of the road</h2>
          <p>
            If you&apos;ve worked through every check above and the device
            still won&apos;t hold a charge or switch on, particularly an
            older device that&apos;s been through many charge cycles, this
            can simply mean the battery has reached the end of its usable
            life. This is normal wear rather than a fault, and at that point
            replacing the device is usually more sensible than continuing to
            try to revive it. Staying on top of routine{" "}
            <Link href="/guides/how-to-clean-and-maintain-your-vape-kit">
              cleaning and maintenance
            </Link>{" "}
            helps delay this point, but it doesn&apos;t prevent it
            indefinitely.
          </p>
          <p>
            If your device is still within its manufacturer warranty period,
            it&apos;s worth checking the manufacturer&apos;s own support
            channels before replacing it outright, particularly for a fault
            that appeared suddenly rather than through gradual wear. Keep
            hold of any proof of purchase in case you need it.
          </p>
        </div>
      </article>
    </>
  );
}
