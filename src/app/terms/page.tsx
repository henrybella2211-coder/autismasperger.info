import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: `Terms of use and website disclaimer for ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Disclaimer", href: "/terms" }]} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Terms &amp; Disclaimer</h1>
        <p className="mt-2 text-sm text-foreground/60">Last updated 15 September 2026</p>
        <div className="manual-body mt-6">
          <h2>Use of this website</h2>
          <p>
            {SITE.name} is an independent editorial and information website
            for adults in the United Kingdom. By using this site you agree to
            use it lawfully and not to misuse or attempt to disrupt it.
          </p>
          <h2>Informational purpose only</h2>
          <p>
            Content on this site is general troubleshooting and maintenance
            information, not medical advice or manufacturer instructions. It
            is written for people who already use a vape device, not as an
            invitation for anyone under 18, or anyone who doesn&apos;t
            already smoke or vape, to start. See our{" "}
            <Link href="/age-notice">Age Notice</Link>.
          </p>
          <h2>Follow your manufacturer's guidance too</h2>
          <p>
            Where our guidance and your device&apos;s own manual or
            manufacturer instructions differ, particularly on charging,
            battery care or warranty-affecting repairs, follow the
            manufacturer&apos;s guidance.
          </p>
          <h2>External links</h2>
          <p>
            We link to official UK sources where doing so is genuinely
            useful. We&apos;re not responsible for the content or
            availability of external websites, and a link doesn&apos;t imply
            endorsement of everything on that site.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Text on this site belongs to {SITE.name} unless otherwise
            credited. Photographs are sourced under the Unsplash License.
            Please don&apos;t republish our guides wholesale without
            permission.
          </p>
          <h2>Liability</h2>
          <p>
            We take reasonable care to keep guides accurate and up to date,
            but we make no guarantee they&apos;re complete or error-free, and
            we accept no liability for decisions made on the basis of this
            site&apos;s content, including any attempt to repair or modify a
            device. If in doubt, stop and seek advice from the
            manufacturer or a competent retailer.
          </p>
        </div>
      </div>
    </>
  );
}
