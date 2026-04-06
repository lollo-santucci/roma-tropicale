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

export const ARCHIVE_EVENTS = [
  {
    title: "Tropical Night",
    date: "15 Dic 2025",
    location: "The Hoxton, Roma",
    description: "Una serata di musica, cocktail plant-based e connessioni verdi.",
  },
  {
    title: "Green Market",
    date: "28 Nov 2025",
    location: "Trastevere",
    description: "Mercatino di prodotti sostenibili e workshop creativi.",
  },
  {
    title: "Plant Swap",
    date: "10 Ott 2025",
    location: "Pigneto",
    description: "Scambia le tue piante e incontra la community.",
  },
  {
    title: "Rooftop Botanico",
    date: "22 Set 2025",
    location: "W Hotel, Roma",
    description: "Aperitivo panoramico tra piante tropicali.",
  },
] as const;

export type ArchiveEvent = (typeof ARCHIVE_EVENTS)[number];

export const PRODUCTS = [
  { name: "Bucket Hat", description: "Cappello bucket con logo Roma Tropicale ricamato." },
  { name: "Cappello Patch", description: "Baseball cap con patch tropicale in edizione limitata." },
  { name: "T-shirt", description: "T-shirt in cotone organico con grafica tropicale." },
  { name: "Tote Bag", description: "Borsa in tela organica con stampa botanica." },
] as const;

export type Product = (typeof PRODUCTS)[number];

export const EDUCATORS = [
  { name: "Luca R." },
  { name: "Marta B." },
  { name: "Giulia F." },
  { name: "Andrea P." },
  { name: "Sara M." },
  { name: "Davide C." },
  { name: "Elena T." },
  { name: "Marco V." },
] as const;

export type Educator = (typeof EDUCATORS)[number];

export const MEMBERSHIP_BENEFITS = [
  "Accesso prioritario a tutti gli eventi",
  "Sconti esclusivi sul merch",
  "Accesso alla community privata",
  "Workshop mensili gratuiti",
  "Newsletter dedicata con contenuti extra",
] as const;

export const TEAM_MEMBERS = [
  { name: "Member 1", role: "Founder & Creative Director" },
  { name: "Member 2", role: "Community Manager" },
  { name: "Member 3", role: "Events Coordinator" },
] as const;

export type TeamMember = (typeof TEAM_MEMBERS)[number];

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contacts" },
] as const;

export type FooterLink = (typeof FOOTER_LINKS)[number];
