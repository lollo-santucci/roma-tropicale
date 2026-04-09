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
    instagram: "https://www.instagram.com/roma_tropicale/",
    spotify: "https://open.spotify.com/user/j775s2cr1wn1f95xsx6fjes3d?si=4996c84c2bf24288&nd=1&dlsi=b85c280780fd454e",
    linkedin: "https://www.linkedin.com/company/roma-tropicale/?viewAsMember=true",
  },
  membershipForm: "https://docs.google.com/forms/d/e/1FAIpQLSfs0XG3HmP47rt7jnmOAr2NgPA0UncCzpf9r24WWTw7koxwyg/viewform",
  newsletterForm: "https://stats.sender.net/forms/e0RBL5/view",
  partners: [
    { name: "elho", logo: "/logos/elho.svg", size: "default" },
    { name: "compo", logo: "/logos/compo.svg", size: "default" },
    { name: "evo", logo: "/logos/evo.svg", size: "default" },
    { name: "hiro", logo: "/logos/hiro.svg", size: "default" },
    { name: "instruo", logo: "/logos/instruo.svg", size: "default" },
    { name: "peppermint", logo: "/logos/peppermint.svg", size: "default" },
    { name: "plant scraper", logo: "/logos/plant scraper.svg", size: "default" },
    { name: "polo del 900", logo: "/logos/polo del 900.svg", size: "small" },
    { name: "sansi", logo: "/logos/sansi.svg", size: "default" },
    { name: "tera", logo: "/logos/tera.svg", size: "default" },
    { name: "the hoxton", logo: "/logos/the hoxton.svg", size: "default" },
    { name: "uniqlo", logo: "/logos/uniqlo.svg", size: "small" },
    { name: "w", logo: "/logos/w.svg", size: "default" },
    { name: "wwf", logo: "/logos/wwf.svg", size: "default" },
    { name: "xister", logo: "/logos/xister.svg", size: "default" },
  ],
} as const;

export const MARQUEE_ITEMS = [
  { text: "NEW EVENT - COMING SOON", href: "/events" },
  { text: "sign up for our newsletters", href: "/#newsletter" },
  { text: "listen to our playlists", href: "https://open.spotify.com/user/j775s2cr1wn1f95xsx6fjes3d?si=4996c84c2bf24288&nd=1&dlsi=b85c280780fd454e" },
  { text: "read our blog", href: "/blog" },
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

export const EVENT_TEXTS = {
  title: "Primavera Tropicale Festival",
  heroTitle: "PRIMAVERA TROPICALE FESTIVAL 2026",
  intro: [
    "Torna il Primavera Tropicale Festival, giunto alla sua quarta edizione: il 17 maggio la venue di Humo si trasforma in un ecosistema vibrante dove cultura, community e lifestyle si incontrano.",
    "Un format contemporaneo pensato per un pubblico curioso, giovane e attento ai trend, capace di offrire un'esperienza immersiva tra natura, musica e creatività.",
  ],
  highlights: [
    { title: "Sonorizzazioni nella natura", description: "Momenti musicali immersivi tra gli spazi verdi, per vivere il suono in connessione con l'ambiente." },
    { title: "Workshop botanici & lectures", description: "Appuntamenti dedicati alla cura delle piante e alla cultura del verde, tra ispirazione e conoscenza." },
    { title: "Chill all'aria aperta", description: "Atmosfere rilassate, street food selezionato e una drink list pensata per accompagnare ogni momento della giornata." },
    { title: "Green Market", description: "Una selezione di piante, design e realtà indipendenti legate al lifestyle sostenibile." },
  ],
  outro: "Altri dettagli verranno svelati presto.",
  workshopIntro: "Prenota il tuo posto ai laboratori previsti durante il Festival: posti limitatissimi! Cosa aspetti?",
  activitiesIntro: "Scopri le attività della giornata e i corner esperenziali",
  venueIntro: "Humo è un'oasi tropicale a due passi da Roma, a mezz'ora dal centro storico. Indirizzo: Via dei Laghi, km 4 (ampio parcheggio)",
} as const;

export const EVENT_WORKSHOPS = [
  {
    slug: "herbarium-giapponese",
    title: "Workshop Herbarium Giapponese",
    timing: "14:30-15:30",
    price: "40€",
    educator: "Debora Valeriani (kokè)",
    description: [
      "Un'antica tecnica di studio e conservazione delle piante, si trasforma in una forma d'arte contemporanea.",
      "L'Herbarium Giapponese è un'espressione poetica della filosofia estetica Wabi Sabi, che celebra la bellezza autentica, imperfetta e silenziosa della natura. Le sue radici affondano in un profondo rispetto per il tempo, la materia e la semplicità.",
      "Durante il lab creerai la tua composizione all'interno di un'ampolla di vetro: foglie e fiori secchi o stabilizzati appariranno sospesi grazie a un olio speciale che ne esalta forme e colori, dando vita a un piccolo universo senza tempo.",
      "Incluso nel costo del lab, un hot drink con biscottini da gustare al bar dell'Hoxton!",
    ],
    registrationUrl: "#",
    registrationNote: "Si accede ai workshop solo previa registrazione.",
  },
  {
    slug: "kokedama-tropicale",
    title: "Workshop Kokedama Tropicale",
    timing: "16:00-17:00",
    price: "35€",
    educator: "Sara Mokrani",
    description: [
      "Scopri l'arte giapponese del Kokedama: sfere di muschio che avvolgono le radici delle piante, creando composizioni sospese e poetiche.",
      "Durante il laboratorio imparerai a realizzare il tuo Kokedama con piante tropicali, guidato passo dopo passo.",
    ],
    registrationUrl: "#",
    registrationNote: "Si accede ai workshop solo previa registrazione.",
  },
  {
    slug: "terrarium-workshop",
    title: "Workshop Terrarium",
    timing: "17:30-18:30",
    price: "45€",
    educator: "Luca Recchiuti",
    description: [
      "Crea il tuo ecosistema in miniatura: un terrarium chiuso che vive e respira autonomamente.",
      "Imparerai a scegliere le piante giuste, stratificare il substrato e comporre un paesaggio verde in vetro.",
    ],
    registrationUrl: "#",
    registrationNote: "Si accede ai workshop solo previa registrazione.",
  },
] as const;

export type EventWorkshop = (typeof EVENT_WORKSHOPS)[number];

export const EVENT_ACTIVITIES = [
  { name: "Attività 1", description: "Descrizione" },
  { name: "Attività 2", description: "Descrizione" },
  { name: "Attività 3", description: "Descrizione" },
  { name: "Attività 4", description: "Descrizione" },
  { name: "Attività 5", description: "Descrizione" },
] as const;

export const EVENT_VENUE_CARDS = [
  { name: "Venue 1", description: "Descrizione" },
  { name: "Venue 2", description: "Descrizione" },
  { name: "Venue 3", description: "Descrizione" },
  { name: "Venue 4", description: "Descrizione" },
  { name: "Venue 5", description: "Descrizione" },
] as const;

export const PRODUCTS = [
  { name: "Bucket Hat", description: "Cappello bucket con logo Roma Tropicale ricamato." },
  { name: "Cappello Patch", description: "Baseball cap con patch tropicale in edizione limitata." },
  { name: "T-shirt", description: "T-shirt in cotone organico con grafica tropicale." },
  { name: "Tote Bag", description: "Borsa in tela organica con stampa botanica." },
] as const;

export type Product = (typeof PRODUCTS)[number];

export const EDUCATORS = [
  { name: "Luca Recchiuti", description: "Indoor Plants: tropicali e subtropicali" },
  { name: "Elisabetta Margheriti", description: "Outdoor Gardening: cura ed esposizione" },
  { name: "Andrea Limitone", description: "Propagazione delle piante, metodi tradizionali e innovativi" },
  { name: "Leonardo Romeo", description: "Cura delle piante, malattie, prevenzione e rimedi" },
  { name: "Lorenzo Liguori", description: "Piante carnivore, tips & tricks" },
] as const;

export type Educator = (typeof EDUCATORS)[number];

export const ACADEMY_TEXTS = {
  intro: [
    "L'Academy Tropicale è la piattaforma formativa di Roma Tropicale dedicata a chi vuole orientarsi nel mondo delle piante e del green design in modo semplice ma approfondito.",
    "Un luogo di apprendimento contemporaneo dove teoria e pratica si incontrano, grazie al contributo di botanici, esperti e professionisti del settore che condividono conoscenze, tecniche e soluzioni creative legate alla cultura del verde.",
    "Attraverso le lezioni dell'Academy esploriamo il mondo delle piante a 360°: dalla botanica alla cura quotidiana, dalla propagazione al design dei vasi e degli spazi verdi.",
    "Ogni lezione include una parte teorica e tutorial pratici pensati per essere replicati facilmente anche a casa.",
  ],
  audience: {
    question: "A chi è dedicata",
    intro: "L'Academy Tropicale è pensata per:",
    items: [
      "aspiranti pollici verdi",
      "plant lovers curiosi e appassionati",
      "tutti i membri della nostra community che desiderano approfondire la cultura delle piante.",
    ],
  },
  essentials: {
    intro: "Il primo corso dell'Academy è composto da 5 lezioni video (da 10 a 45 minuti) registrate all'interno di splendide serre botaniche.",
    program: [
      { title: "Indoor Plants: tropicali e subtropicali", educator: "Luca Recchiuti" },
      { title: "Outdoor Gardening: cura ed esposizione", educator: "Elisabetta Margheriti" },
      { title: "Propagazione delle piante, metodi tradizionali e innovativi", educator: "Andrea Limitone" },
      { title: "Cura delle piante, malattie, prevenzione e rimedi", educator: "Leonardo Romeo" },
      { title: "Piante carnivore, tips & tricks", educator: "Lorenzo Liguori" },
    ],
    tera: "L'Academy Tropicale è un progetto ideato da Roma Tropicale e realizzato in collaborazione con Tera, azienda italiana che produce vasi sostenibili unendo etica, design e rispetto per l'ambiente, con l'obiettivo di trasformare gli spazi che ospitano le piante in ambienti vivi, spontanei e naturali.",
    purchase: "Il corso Essentials è disponibile al prezzo lancio di €14,99*.",
    purchaseDetail: "Una volta completato il pagamento tramite PayPal, riceverai via email le istruzioni per accedere alla piattaforma e iniziare subito le lezioni.",
  },
} as const;

export const MEMBERSHIP_TEXTS = {
  intro: [
    "Da oltre 5 anni, Roma Tropicale è uno spazio di incontro, confronto e crescita per chi ama le piante, il design e un approccio consapevole al vivere.",
    "Un luogo che esiste online e prende forma dal vivo durante eventi e attività, pensato per favorire lo scambio di idee e conoscenze in un ambiente inclusivo, sicuro e stimolante.",
  ],
  body: [
    "Attraverso lezioni, workshop, talk, incontri e laboratori, portiamo avanti un progetto di divulgazione culturale dedicato alla botanica, alla sostenibilità e all'osservazione dei trend contemporanei.",
    "Oggi puoi sostenere attivamente questo percorso e vivere Roma Tropicale in modo ancora più speciale, diventando member.",
  ],
  question: "Cosa significa associarsi a Roma Tropicale?",
  benefits: [
    "sostenere concretamente i valori e le attività che portiamo avanti dal 2020;",
    "entrare in una crew di plant lovers unita da passioni, curiosità e obiettivi comuni;",
    "ricevere inviti in anteprima a experience, incontri ed eventi speciali;",
    "avere prelazione sull'acquisto dei workshop;",
    "accedere ad attività esclusive riservati ai soci;",
  ],
  pricing: "Quota d'iscrizione all'Associazione Culturale* Roma Tropicale:",
  pricingDetail: "La quota per l'anno 2026 è di 5€, ed è valida fino al 31 dicembre 2026.",
} as const;

export const MEMBERSHIP_BENEFITS = MEMBERSHIP_TEXTS.benefits;

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
  "Il progetto unisce prodotti a vocazione sostenibile, lavorazioni e personalizzazioni realizzate da fornitori locali, e la collaborazione con illustratori e illustratrici cool, che firmano le grafiche delle collezioni. Ogni pezzo è realizzato con particolare attenzione ai materiali e ai processi di produzione, per garantire qualità e durata nel tempo.",
  "Le tempistiche di realizzazione variano indicativamente dai 10 giorni alle 3 settimane, in base alla disponibilità in magazzino e al carico di lavoro al momento della conferma dell'ordine.",
  'Ad ogni evento sarà possibile trovare una selezione del merch, tra nuove capsule e pezzi iconici "from the archive".',
  "Acquistare un prodotto del merch significa supportare attivamente l'Associazione Culturale no profit Roma Tropicale e contribuire allo sviluppo delle sue attività, diventando parte della community e ambassador del progetto.",
] as const;

export const MERCH_REF_CARDS = [
  { label: "CONTATTACI", href: "mailto:romatropicale@gmail.com?subject=Richiesta%20Merch&body=Ciao%2C%20vorrei%20informazioni%20sul%20merch.", image: "/merch/2.png" },
  { label: "CONTATTACI", href: "mailto:romatropicale@gmail.com?subject=Richiesta%20Merch&body=Ciao%2C%20vorrei%20informazioni%20sul%20merch.", image: "/merch/3.png" },
  { label: "CONTATTACI", href: "mailto:romatropicale@gmail.com?subject=Richiesta%20Merch&body=Ciao%2C%20vorrei%20informazioni%20sul%20merch.", image: "/merch/4.jpg" },
] as const;

export const ABOUT_REF_CARDS = [
  { label: "SCOPRI IL MERCH", href: "/merch", image: "/about/3.jpg" },
  { label: "ASCOLTA LE PLAYLIST", href: "https://open.spotify.com/user/j775s2cr1wn1f95xsx6fjes3d?si=4996c84c2bf24288&nd=1&dlsi=b85c280780fd454e", image: "/about/4.jpg" },
  { label: "BECOME A MEMBER", href: "/membership", image: "/about/5.jpg" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contacts" },
] as const;

export type FooterLink = (typeof FOOTER_LINKS)[number];
