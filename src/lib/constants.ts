export const SECTIONS = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "academy", label: "Academy" },
  { id: "merch", label: "Merch" },
  { id: "membership", label: "Membership" },
  { id: "contacts", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const BRAND = {
  name: "Roma Tropicale",
  tagline: "rooted in Rome, creating green connections around",
  email: "ciao@romatropicale.com",
  description: "A plant based creative studio & community",
  socials: {
    instagram: "#",
    spotify: "#",
    linkedin: "#",
  },
  partners: ["Deliveroo", "Spritz", "Tara", "The Hoxton", "W Hotels"],
} as const;
