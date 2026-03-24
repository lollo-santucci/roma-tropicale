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
  about:
    "Roma Tropicale è un movimento urbano di plant lovers che coltiva piante, idee e relazioni. Ripensiamo la città come un ecosistema creativo fatto di eventi, workshop e incontri dove la cultura del verde diventa occasione di connessione e comunità.",
  socials: {
    instagram: "#",
    spotify: "#",
    linkedin: "#",
  },
  partners: ["Deliveroo", "Spritz", "Tara", "The Hoxton", "W Hotels"],
} as const;

export const MARQUEE_ITEMS = [
  { text: "h 15: sara mokrani & s. costa", href: "/" },
  { text: "sign up for our newsletters", href: "#newsletter" },
  { text: "listen to mathematical model 0010 by boring tables", href: "/" },
  { text: "read our journal", href: "/blog" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Academy", href: "/academy" },
  { label: "Merch", href: "/merch" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contacts" },
] as const;

export const HIGHLIGHTS = [
  {
    title: "I Vasi Found di Elho",
    description:
      "Una selezione curata dei nostri vasi preferiti per trasformare ogni angolo in un'oasi verde.",
  },
  {
    title: "Il festival è alle porte",
    description:
      "Preparati al prossimo grande evento green della stagione. Musica, piante e community.",
  },
  {
    title: "Il nuovo merch di Roma Tropicale",
    description:
      "Tee, tote bag e accessori pensati per chi vive il verde ogni giorno.",
  },
  {
    title: "Workshop di maggio",
    description:
      "Kokedama, terrari e composizioni floreali: il calendario dei prossimi laboratori.",
  },
  {
    title: "Community Swap Day",
    description:
      "Porta una pianta, scambiala con un'altra. Connessioni verdi tra persone.",
  },
  {
    title: "Roma Tropicale Zine Vol.3",
    description:
      "La terza edizione della nostra rivista indipendente su cultura e natura urbana.",
  },
] as const;
