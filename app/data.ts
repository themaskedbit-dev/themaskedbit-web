export const products = [
  {
    name: "KeptSo",
    kind: "Product",
    description: "A calmer way to manage contacts, conversations, notes and follow-ups.",
    href: "https://keptso.com",
  },
  {
    name: "ConceptOwl",
    kind: "Service project",
    description: "An app for delivering IIT coaching classes online.",
    href: null,
  },
  {
    name: "Baladiyeti",
    kind: "Service project",
    description: "A municipal services app created for Muscat Municipality.",
    href: "https://play.google.com/store/apps/details?id=mm.gov.baladiyeti&hl=en",
  },
] as const;

export const navigation = [
  { label: "Tools", href: "/tools" },
  { label: "Media", href: "/media" },
  { label: "Betterment", href: "/betterment" },
  { label: "About", href: "/about" },
] as const;
