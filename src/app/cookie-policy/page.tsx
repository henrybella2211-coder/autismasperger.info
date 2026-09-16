import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies ${SITE.name} actually uses.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Cookie Policy</h1>
        <p className="mt-2 text-sm text-foreground/60">Last updated 15 September 2026</p>
        <div className="manual-body mt-6">
          <p>
            This website does not currently use tracking, advertising or
            analytics cookies. We haven&apos;t added a cookie consent banner
            because there is nothing beyond strictly necessary technical
            cookies, if any, required simply for pages to work correctly,
            currently in use.
          </p>
          <h2>What might change</h2>
          <p>
            If we later add analytics or any cookie that isn&apos;t strictly
            necessary, we&apos;ll update this page, add a proper consent
            mechanism where the law requires it, and revise the &quot;last
            updated&quot; date above.
          </p>
          <h2>Third-party content</h2>
          <p>
            Where a guide links out to an external website, such as GOV.UK,
            the NHS, or a manufacturer&apos;s site, that site may set its own
            cookies once you leave {SITE.name}. We don&apos;t control those
            cookies; check the relevant site&apos;s own policy for detail.
          </p>
          <h2>Questions</h2>
          <p>
            See our <Link href="/contact">Contact page</Link> if you have a
            question about this policy.
          </p>
        </div>
      </div>
    </>
  );
}
