import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: `${SITE.name} is intended for adults aged 18 and over.`,
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Age Notice", href: "/age-notice" }]} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Age Notice</h1>
        <div className="manual-body mt-6">
          <p>
            {SITE.name} is written for adults aged 18 and over who already
            smoke or vape, or who are seeking factual maintenance and
            troubleshooting information about vape products. Nothing on this
            site is intended to encourage anyone under 18, or anyone who
            doesn&apos;t already smoke or vape, to start.
          </p>
          <p>
            It is illegal in the UK to sell vaping or tobacco products to
            anyone under 18. If you are under 18, please leave this site.
          </p>
          <h2>On the risks of vaping</h2>
          <p>
            Vaping is not risk-free. According to the NHS, vaping carries far
            fewer risks than smoking, and nicotine vapes can help some
            smokers quit, but the long-term effects of vaping are still being
            studied. We don&apos;t describe vaping as safe or harmless, and
            nothing on this site is medical advice. If you&apos;re trying to
            stop smoking, NHS Smokefree offers free, impartial support.
          </p>
          <h2>Responsible reading</h2>
          <p>
            Our guides help existing vapers fix and maintain the devices
            they already own. They&apos;re written for people already using
            these products, not as an invitation for non-smokers to begin.
          </p>
          <p>
            For more on how we handle content, see our{" "}
            <Link href="/editorial-policy">Editorial Policy</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
