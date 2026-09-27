import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import Callout from "@/components/Callout";
import JsonLd from "@/components/JsonLd";
import { getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

const article = getArticleBySlug(
  "why-switching-nic-salt-strength-can-affect-how-your-device-performs"
)!;

export const metadata: Metadata = {
  title: article.title,
  description: article.metaDescription,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.metaDescription,
    type: "article",
    publishedTime: "2026-09-24T00:00:00.000Z",
    modifiedTime: `${article.lastUpdatedISO}T00:00:00.000Z`,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: "2026-09-24",
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
            It&apos;s a common assumption: if a vape suddenly feels harsher on
            the throat, or the hit feels stronger than expected, the device
            must be faulty. Sometimes that&apos;s true. But a genuinely
            common cause is much simpler and has nothing to do with the
            hardware at all &mdash; it&apos;s the nicotine salt strength in
            the bottle you&apos;re using.
          </p>
          <p>
            Nic salt e-liquids are sold in a handful of set strengths, and
            moving between them, or switching to a new brand at the same
            strength, can change how a hit feels even though the device
            itself hasn&apos;t changed at all. This guide walks through how
            strength interacts with your coil and wattage, how to tell that
            apart from an actual device problem, and a simple way to test
            which one you&apos;re dealing with before you assume anything
            needs replacing.
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Understand what nic salt strength actually changes",
              children: (
                <>
                  <p>
                    Nicotine salt e-liquid is generally described as giving a
                    smoother throat hit at a given strength than the same
                    strength in freebase e-liquid, which is a widely stated
                    formulation characteristic rather than a claim about
                    safety. That smoothness is relative, though, not
                    absolute. A 20mg nic salt is still a strong hit compared
                    with a 5mg one, and if a bottle is stronger than what
                    you&apos;re used to, it can feel harsh, sharp, or almost
                    peppery at the back of the throat even coming out of a
                    device that&apos;s working exactly as it should.
                  </p>
                  <p>
                    This matters because harshness and strength are easy to
                    mix up with faults. A scratchy throat hit, a slightly
                    lightheaded feeling, or a hit that feels &quot;too
                    much&quot; can all come from nicotine strength alone, with
                    nothing mechanically wrong with the pod, coil, or
                    battery at all.
                  </p>
                </>
              ),
            },
            {
              title: "Know how strength interacts with coil and wattage",
              children: (
                <>
                  <p>
                    Nic salts are formulated for low-power mouth-to-lung
                    (MTL) pod kits, typically running somewhere in the
                    5&ndash;25W range with a higher-resistance coil. That
                    combination produces a tighter, cooler draw that suits
                    higher nicotine strengths. Push the same e-liquid through
                    a lower-resistance coil or a higher wattage setting, and
                    the extra heat and airflow intensify the throat hit
                    further, sometimes to the point of feeling genuinely
                    unpleasant even at a strength that was comfortable in a
                    different device.
                  </p>
                  <p>
                    The reverse also happens. A worn coil, one that&apos;s
                    coked up with residue or simply old, can produce a
                    hotter, harsher-tasting draw than a fresh one at the
                    exact same wattage and strength, which is one of the
                    reasons it&apos;s easy to blame a bottle of e-liquid for
                    something the coil is actually responsible for. Strength,
                    wattage and coil condition all push in the same
                    direction &mdash; towards a harsher or stronger-feeling
                    hit &mdash; which is exactly why it&apos;s worth ruling
                    them out one at a time rather than guessing.
                  </p>
                </>
              ),
            },
            {
              title:
                "Rule out a genuine device issue before you change strength",
              children: (
                <>
                  <p>
                    Before assuming strength is the answer, check for the
                    usual signs of an actual device fault. A pod or tank
                    that&apos;s{" "}
                    <Link href="/guides/why-is-my-pod-leaking">
                      leaking around the base or mouthpiece
                    </Link>{" "}
                    can pull excess, poorly vaporised e-liquid into the
                    airflow, which tastes harsh and burnt rather than simply
                    strong. A coil that&apos;s well past its usual one-to-four
                    week lifespan will often produce a scorched, unpleasant
                    hit regardless of what&apos;s in the tank, and no change
                    of e-liquid will fix that until the coil itself is
                    swapped.
                  </p>
                  <p>
                    It&apos;s worth working through a quick check of the
                    contacts and airflow too, along the lines set out in our
                    guide to{" "}
                    <Link href="/guides/how-to-clean-and-maintain-your-vape-kit">
                      cleaning and maintaining a vape kit
                    </Link>
                    , since built-up residue around the coil or airflow can
                    produce a rough, harsh-tasting draw that has nothing to
                    do with nicotine strength at all. If cleaning and a fresh
                    coil don&apos;t change anything, that&apos;s a reasonable
                    point to look at strength next.
                  </p>
                </>
              ),
            },
            {
              title: "Test strength on its own, one variable at a time",
              children: (
                <>
                  <p>
                    The clearest way to isolate strength is to keep
                    everything else the same and only change the bottle.
                    Use the same device, the same coil, and ideally a
                    similar flavour, then try a bottle one step down in
                    strength &mdash; from 20mg to 10mg, or 10mg to 5mg &mdash;
                    and see whether the harshness or intensity eases off. If
                    it does, that&apos;s a strong signal the device was never
                    the issue.
                  </p>
                  <p>
                    Many vapers who find their usual strength has started
                    feeling too intense, whether that&apos;s from a new
                    bottle, a new batch, or simply a change in their own
                    tolerance over time, find it useful to keep a
                    lower-strength option on hand to test against. If
                    you&apos;re new to nic salts or want a lower-strength
                    starting point to compare with,{" "}
                    <a
                      href="https://localsupplies.co.uk/collections/elux-nic-salts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Elux vape liquid 5mg
                    </a>{" "}
                    is a widely available option at the lower end of the UK
                    strength range. Nicotine needs vary a lot from person to
                    person, so this is about having a reference point to test
                    against, not a suggestion that any one strength is right
                    for you specifically.
                  </p>
                </>
              ),
            },
            {
              title:
                "Don't overlook flavour and formulation when you switch bottles",
              children: (
                <>
                  <p>
                    Strength is the main variable, but it&apos;s rarely the
                    only thing that changes when you pick up a new bottle.
                    Most nic salt e-liquid is a standard 50/50 PG/VG mix,
                    which is the formulation MTL pod kits are designed
                    around, but small differences between brands in exactly
                    how that&apos;s blended can still make one bottle feel a
                    little sharper or smoother than another at the same
                    stated strength. Menthol and &quot;ice&quot; flavours in
                    particular can add their own cooling, tingling sensation
                    on the throat that&apos;s easy to mistake for extra
                    nicotine strength, when it&apos;s actually the cooling
                    agent doing that work.
                  </p>
                  <p>
                    If you&apos;ve switched brand and strength at the same
                    time, it&apos;s worth changing one variable before the
                    other where possible. Trying the new brand at your usual
                    strength first, or your usual brand at a lower strength,
                    makes it much easier to work out which change is
                    actually behind a harsher hit, rather than guessing at
                    both at once.
                  </p>
                </>
              ),
            },
            {
              title: "Watch for the pattern, not just a single hit",
              children: (
                <p>
                  A single harsh puff doesn&apos;t tell you much on its own;
                  device temperature, draw speed and even how full the tank
                  is can all affect one individual hit. What&apos;s more
                  useful is the pattern across a full tank or pod. If
                  harshness is consistent from the first draw to the last,
                  and disappears when you drop to a lower strength with
                  everything else unchanged, that points to strength. If it
                  instead builds up gradually, comes with a burnt or
                  scorched taste, or is accompanied by leaking or a gurgling
                  sound, that points back towards the device or the coil
                  rather than the e-liquid itself.
                </p>
              ),
            },
          ]}
        />

        <div className="manual-body">
          <h2>Quick reference: strength mismatch or device issue?</h2>
          <table>
            <thead>
              <tr>
                <th>What you notice</th>
                <th>Most likely cause</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consistently sharp or strong hit, same from first draw to last</td>
                <td>Nic salt strength, or wattage set too high for the coil</td>
              </tr>
              <tr>
                <td>Harshness eases off on a lower-strength bottle, same device and coil</td>
                <td>Confirms a strength mismatch, not a fault</td>
              </tr>
              <tr>
                <td>Burnt or scorched taste that builds up over a tank or pod</td>
                <td>Coil reaching the end of its life</td>
              </tr>
              <tr>
                <td>Harshness alongside leaking or a gurgling sound</td>
                <td>Device issue &mdash; check the coil seating and seals first</td>
              </tr>
            </tbody>
          </table>

          <Callout title="Nicotine needs vary">
            There&apos;s no single strength that&apos;s correct for everyone.
            If you find your usual nic salt strength has started to feel too
            harsh or too strong, that&apos;s worth treating as useful
            feedback to test against a lower strength, rather than something
            to push through or assume is a device fault.
          </Callout>

          <h2>The short version</h2>
          <p>
            A harsh or overly strong hit is worth checking against nicotine
            strength before you assume your device has developed a fault.
            Rule out the obvious device causes first &mdash; leaking, a worn
            or dirty coil, residue around the airflow &mdash; and if those
            check out, try dropping to a lower strength with everything else
            held constant. If the harshness eases off, you&apos;ve found your
            answer without spending anything on a replacement device or
            coil.
          </p>
        </div>
      </article>
    </>
  );
}
