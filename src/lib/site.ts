export const SITE = {
  name: "Steady Vape",
  tagline: "Keep your kit running properly.",
  url: "https://autismasperger.info",
  description:
    "Practical, step-by-step troubleshooting and maintenance guidance for UK vapers whose kit isn't working quite right.",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms & Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/age-notice", label: "Age Notice" },
];

export const AGE_NOTICE_SHORT =
  "Steady Vape is written for adults aged 18+ who already smoke or vape, or who are seeking factual information. Nothing on this site is intended to encourage anyone under 18, or anyone who does not already smoke or vape, to start.";

export const CONTACT_EMAIL = "hello@autismasperger.info";

export const PROBLEM_TILES = [
  {
    label: "Leaking",
    description: "E-liquid escaping from the pod, tank or mouthpiece.",
    href: "/guides/why-is-my-pod-leaking",
  },
  {
    label: "Burnt taste",
    description: "A harsh, scorched taste that wasn't there before.",
    href: "/guides/how-to-clean-and-maintain-your-vape-kit#burnt-taste",
  },
  {
    label: "Weak flavour",
    description: "Vapour that tastes thin, muted or watery.",
    href: "/guides/why-is-my-pod-leaking#weak-flavour",
  },
  {
    label: "Won't charge",
    description: "No lights, no response, or the battery won't hold charge.",
    href: "/guides/vape-wont-charge-or-turn-on",
  },
] as const;
