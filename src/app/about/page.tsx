import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name}, an independent UK vape troubleshooting and maintenance website.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">About {SITE.name}</h1>
        <div className="manual-body mt-6">
          <p>
            {SITE.name} publishes practical, step-by-step troubleshooting and
            maintenance guides for adults in the UK who already use a vape
            kit and want to fix a specific problem, from a leaking pod to a
            device that won&apos;t charge.
          </p>
          <h2>What this site is</h2>
          <p>
            This is an independent information website. We do not sell vape
            devices, coils or e-liquid, and we are not affiliated with any
            manufacturer. We do not accept payment for favourable coverage
            of any product or brand, and we do not run invented product
            reviews or star ratings.
          </p>
          <h2>How guides are written</h2>
          <p>
            Content is written and edited by our UK-based editorial team,
            drawing on general knowledge of how vape hardware works and,
            where relevant, official UK sources for regulatory or safety
            information. See our{" "}
            <Link href="/editorial-policy">Editorial Policy</Link> for more
            detail on how we research and keep guides current.
          </p>
          <h2>Get in touch</h2>
          <p>
            Questions, corrections, or anything else, our{" "}
            <Link href="/contact">Contact page</Link> has the details.
          </p>
        </div>
      </div>
    </>
  );
}
