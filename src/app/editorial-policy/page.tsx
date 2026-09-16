import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `How ${SITE.name} researches, writes and maintains its guides.`,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Editorial Policy", href: "/editorial-policy" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Editorial Policy</h1>
        <div className="manual-body mt-6">
          <h2>How we research</h2>
          <p>
            Guides on {SITE.name} are written from general, publicly
            available knowledge of how vape hardware works. Where a claim is
            regulatory, legal or safety-related, such as e-liquid container
            limits or battery safety, we reference official UK sources,
            including GOV.UK and the MHRA, rather than state it as our own
            authority.
          </p>
          <h2>What we do not do</h2>
          <ul>
            <li>We do not claim laboratory testing of any device or fault.</li>
            <li>We do not publish star ratings or invented review scores.</li>
            <li>We do not accept payment for favourable coverage.</li>
            <li>We do not publish fabricated testimonials, reviews or comments.</li>
          </ul>
          <h2>Corrections</h2>
          <p>
            If you spot something inaccurate or out of date, tell us via our{" "}
            <Link href="/contact">Contact page</Link>. Where a correction is
            warranted, we update the guide directly and refresh its
            &quot;last updated&quot; date.
          </p>
          <h2>Keeping content current</h2>
          <p>
            UK vaping regulation and product categories have changed
            meaningfully in recent years. We review guides periodically and
            update them when relevant rules or common device types change.
          </p>
          <h2>Independence</h2>
          <p>
            This is an independent publication. We&apos;re not owned by, or
            acting on behalf of, any vape manufacturer or retailer.
          </p>
        </div>
      </div>
    </>
  );
}
