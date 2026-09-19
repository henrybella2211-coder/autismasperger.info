export type Category = "leaking" | "cleaning" | "battery";

export const CATEGORY_LABELS: Record<Category, string> = {
  leaking: "Leaking",
  cleaning: "Cleaning & care",
  battery: "Battery & charging",
};

export type ArticleMeta = {
  slug: string;
  title: string;
  metaDescription: string;
  category: Category;
  excerpt: string;
  readTime: string;
  lastUpdated: string; // display string
  lastUpdatedISO: string; // machine readable
  image: { src: string; alt: string };
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "why-is-my-pod-leaking",
    title: "Why is my pod leaking? A step-by-step troubleshooting guide",
    metaDescription:
      "A systematic guide to diagnosing a leaking vape pod or tank: coil seating, worn O-rings, overfilling, e-liquid thickness, cracks and pressure changes.",
    category: "leaking",
    excerpt:
      "Work through six checks in order, from coil seating to e-liquid thickness, to find out exactly why your pod or tank is leaking.",
    readTime: "8 min read",
    lastUpdated: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    image: {
      src: "/images/pod-tank-e-liquid-fill-level.jpg",
      alt: "A refillable vape tank with a visible e-liquid fill window sitting on a table",
    },
  },
  {
    slug: "how-to-clean-and-maintain-your-vape-kit",
    title: "How to clean and maintain your vape kit properly",
    metaDescription:
      "Safe, practical steps for cleaning a pod kit or mod: wiping down the pod and contacts, drying before reassembly, cleaning frequency and storage advice.",
    category: "cleaning",
    excerpt:
      "Safe cleaning steps for the pod, contacts and airflow, plus how often to do it and how to store your kit so it lasts longer.",
    readTime: "7 min read",
    lastUpdated: "Last updated 12 September 2026",
    lastUpdatedISO: "2026-09-12",
    image: {
      src: "/images/wiping-device-with-cloth.jpg",
      alt: "A hand wiping down the casing of a black electronic device with a soft white cloth",
    },
  },
  {
    slug: "vape-wont-charge-or-turn-on",
    title: "My vape won't charge or turn on: common causes and fixes",
    metaDescription:
      "Common causes of a vape that won't charge or switch on, from a dirty port and safety cut-offs to battery safety and knowing when a device is at the end of its life.",
    category: "battery",
    excerpt:
      "Work through cable, port and safety cut-off checks, and learn when a battery fault means stop, not fix.",
    readTime: "8 min read",
    lastUpdated: "Last updated 15 September 2026",
    lastUpdatedISO: "2026-09-15",
    image: {
      src: "/images/usb-c-charging-cable-macro.jpg",
      alt: "Close-up of a USB-C charging cable connector against a plain background",
    },
  },
  {
    slug: "why-does-my-vape-gurgle-or-crackle",
    title: "Why does my vape make a gurgling or crackling sound?",
    metaDescription:
      "What a gurgling or crackling vape sound usually means: coil flooding, overfilling, drawing too hard, device angle, and how to tell normal crackle from a real problem.",
    category: "leaking",
    excerpt:
      "A light crackle is usually normal. A wet gurgle usually means the coil is flooded. Here's how to tell the difference and fix it.",
    readTime: "7 min read",
    lastUpdated: "Last updated 16 September 2026",
    lastUpdatedISO: "2026-09-16",
    image: {
      src: "/images/vape-tank-and-mesh-coil-on-dark-surface.jpg",
      alt: "A clear sub-ohm vape tank standing next to its mesh replacement coil on a dark wooden surface",
    },
  },
  {
    slug: "how-to-store-your-vape-kit-and-e-liquids",
    title: "How to store your vape kit and e-liquids properly",
    metaDescription:
      "Practical storage advice for vape kits and e-liquid: avoiding heat and sunlight, upright storage, sealing spare coils, flying with lithium batteries, and signs an e-liquid bottle has gone off.",
    category: "cleaning",
    excerpt:
      "Where and how you store your kit and e-liquid affects leaking, battery life and flavour. Simple habits that make a real difference.",
    readTime: "8 min read",
    lastUpdated: "Last updated 17 September 2026",
    lastUpdatedISO: "2026-09-17",
    image: {
      src: "/images/vape-pod-kit-and-e-liquid-bottle.jpg",
      alt: "A pink pod vape kit standing next to a small 10ml e-liquid bottle on a plain background",
    },
  },
  {
    slug: "al-fakher-hypermax-prime-50k-care-and-troubleshooting",
    title:
      "Getting the most from your Al Fakher HyperMax Prime 50K: care and troubleshooting tips",
    metaDescription:
      "Practical care and troubleshooting tips for the Al Fakher HyperMax Prime 50K pod kit: charging the 1000mAh battery, keeping the snap-pod contacts clean, and telling a spent pod from a charging fault.",
    category: "battery",
    excerpt:
      "Charging habits, contact care and knowing a spent pod from a charging fault, plus storage advice for this rechargeable snap-pod kit.",
    readTime: "7 min read",
    lastUpdated: "Last updated 18 September 2026",
    lastUpdatedISO: "2026-09-18",
    image: {
      src: "/images/rechargeable-pod-vape-kit-standing-upright.jpg",
      alt: "A rechargeable pod vape kit standing upright on a reflective surface",
    },
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category) {
  return ARTICLES.filter((a) => a.category === category);
}
