import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE.name} editorial team.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl font-bold text-forest">Get in touch</h1>
        <div className="manual-body mt-6">
          <p>
            For questions, corrections or general feedback about anything
            published on {SITE.name}, email us directly. We&apos;re a small
            independent site and read every message, though we can&apos;t
            guarantee a reply to everything.
          </p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block rounded-sm bg-forest px-5 py-2.5 font-heading text-sm font-semibold text-white hover:bg-forest-dark"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-sm text-foreground/60">
            This address is not yet monitored by a live support team; treat
            it as the intended point of contact ahead of launch. We don&apos;t
            offer a phone number or postal address, and we can&apos;t give
            personalised advice on quitting smoking. NHS Smokefree is a
            better place to start for that.
          </p>
        </div>
      </div>
    </>
  );
}
