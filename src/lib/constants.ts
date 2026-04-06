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
  partners: [
    "elho",
    "Elkement",
    "WIKO",
    "airbnb",
    "PEPPERMINT",
    "PLANT CIRCLE",
    "SPRITZ",
    "W Hotels",
    "tera",
    "the hoxton",
    "BKLYN",
    "WWF",
  ],
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

export const ABOUT_TEXTS = {
  intro: [
    "Roma Tropicale è un movimento urbano di giovani plant lovers che si muove tra digitale e territorio, dando vita a un progetto che unisce contenuti editoriali, eventi, workshop e festival dedicati alla cultura del verde.",
    "Ripensiamo la città come un ecosistema creativo, dove ogni spazio può diventare occasione di incontro, scambio e sperimentazione intorno alla cultura green.",
    "Coltiviamo piante, idee e relazioni: le piante sono il nostro linguaggio comune, un pretesto gentile per incontrarsi, condividere esperienze e far crescere nuove connessioni tra persone, comunità e luoghi.",
  ],
  mission:
    "Promuovere uno stile di vita più green e consapevole, condividendo conoscenze e buone pratiche per vivere il verde in modo accessibile e responsabile.",
  vision:
    "Contribuire a una città più umana e più verde, dove la cultura delle piante ispira scelte sostenibili nella vita quotidiana.",
  teamNetwork: [
    "Il nostro team è composto da professionisti del marketing e dell'event management, che uniscono competenze strategiche, creative e organizzative per progettare esperienze coinvolgenti e curate in ogni dettaglio.",
    "Attorno al progetto cresce una rete di collaborazioni multidisciplinari: lavoriamo quotidianamente con botanici, agronomi, designer e creativi che contribuiscono allo sviluppo di workshop, eventi e nuovi format dedicati alla community.",
    "Questo scambio continuo di competenze ci permette di sperimentare, innovare e portare nuove idee nella cultura del verde urbano.",
  ],
  brandsDescription:
    "Selezioniamo con grande attenzione le realtà con cui collaboriamo: ogni progetto deve essere in linea con i valori di sostenibilità, creatività e cultura del verde che guidano Roma Tropicale.",
  collaborationIntro:
    "Sviluppiamo collaborazioni su misura, progettate insieme ai partner in base agli obiettivi e al tipo di pubblico che desiderano raggiungere.",
  collaborationChannels: "Attraverso i canali online e offline di Roma Tropicale è possibile:",
  collaborationItems: [
    "promuovere prodotti e servizi",
    "valorizzare location, shop e ristoranti",
    "sviluppare strategie di lancio prodotto",
    "realizzare content creation e storytelling",
    "organizzare eventi e attivazioni per la community",
  ],
  collaborationFooter: "L'unico requisito: condividere i nostri valori e la nostra visione.",
} as const;

export const MERCH_TEXTS = [
  "Il Merch di Roma Tropicale nasce come una produzione in edizione limitata, pensata per mettere al centro qualità, cura dei dettagli e una gestione responsabile delle quantità.",
  "Produciamo solo ciò che serve, con l'obiettivo di ridurre gli sprechi e valorizzare ogni singolo pezzo.",
  "Il progetto unisce prodotti a vocazione sostenibile, lavorazioni e personalizzazioni realizzate da fornitori locali, e la collaborazione con l'illustratore e street artist romano Starz, che firma le grafiche delle collezioni.\nOgni pezzo è realizzato con particolare attenzione ai materiali e ai processi di produzione, per garantire qualità e durata nel tempo.",
  "Le tempistiche di realizzazione variano indicativamente dai 10 giorni alle 3 settimane, in base alla disponibilità in magazzino e al carico di lavoro al momento della conferma dell'ordine.",
  "Ad ogni evento sarà possibile trovare una selezione del merch, tra nuove capsule e pezzi iconici from the archive.",
  "Acquistare un prodotto del merch significa supportare attivamente l'Associazione Culturale no profit Roma Tropicale e contribuire allo sviluppo delle sue attività, diventando parte della community e ambassador del progetto.",
] as const;

export const MERCH_REF_CARDS = [
  { label: "SCOPRI IL MERCH", href: "/merch" },
  { label: "ASCOLTA LE PLAYLIST", href: "#" },
  { label: "BECOME A MEMBER", href: "/membership" },
] as const;

export const ABOUT_REF_CARDS = [
  { label: "SCOPRI IL MERCH", href: "/merch" },
  { label: "ASCOLTA LE PLAYLIST", href: "#" },
  { label: "BECOME A MEMBER", href: "/membership" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contacts" },
] as const;

export type FooterLink = (typeof FOOTER_LINKS)[number];
