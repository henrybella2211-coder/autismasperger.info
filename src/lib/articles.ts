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
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category) {
  return ARTICLES.filter((a) => a.category === category);
}
