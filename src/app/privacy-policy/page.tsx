import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles personal data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Privacy Policy</h1>
        <p className="mt-2 text-sm text-foreground/60">Last updated 15 September 2026</p>
        <div className="manual-body mt-6">
          <p>
            This policy explains what happens to personal data when you visit{" "}
            {SITE.name} ({SITE.url.replace("https://", "")}). We keep the
            amount of data we collect deliberately small.
          </p>
          <h2>What we collect</h2>
          <p>
            This site does not currently run analytics, advertising, or
            tracking scripts. We don&apos;t use cookies to build a profile of
            visitors or serve targeted adverts. See our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> for full detail.
          </p>
          <p>
            If you email us via the address on our{" "}
            <Link href="/contact">Contact page</Link>, we receive whatever
            information you choose to include, such as your email address
            and the content of your message. We use this only to respond to
            you.
          </p>
          <h2>Hosting and technical data</h2>
          <p>
            Like most websites, our hosting provider may keep basic technical
            logs, such as IP address and request time, for security and
            reliability. We don&apos;t use this for marketing.
          </p>
          <h2>Your rights</h2>
          <p>
            Under UK data protection law (UK GDPR and the Data Protection Act
            2018), you can ask what personal data we hold about you, ask for
            it to be corrected or deleted, and object to how it&apos;s used.
            Contact us using the details on our{" "}
            <Link href="/contact">Contact page</Link> to make a request.
          </p>
          <h2>Changes to this policy</h2>
          <p>
            If how we handle data changes, we&apos;ll update this page and
            the &quot;last updated&quot; date above.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
