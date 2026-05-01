import { z } from "zod";

const partnerSchema = z.object({
  name: z.string(),
  logo: z.string(),
  size: z.enum(["default", "small"]),
});

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const marqueeItemSchema = z.object({
  text: z.string(),
  href: z.string(),
});

const sectionSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export const sharedSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
    email: z.string(),
    description: z.string(),
    about: z.string(),
    socials: z.object({
      instagram: z.string(),
      spotify: z.string(),
      linkedin: z.string(),
    }),
    membershipForm: z.string(),
    newsletterForm: z.string(),
    partners: z.array(partnerSchema),
  }),
  sections: z.array(sectionSchema),
  navLinks: z.array(linkSchema),
  footerLinks: z.array(linkSchema),
  marquee: z.array(marqueeItemSchema),
});

const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  image: z.string(),
});

export const landingSchema = z.object({
  highlights: z.array(highlightSchema),
});

const workshopSchema = z.object({
  slug: z.string(),
  title: z.string(),
  timing: z.string(),
  price: z.string(),
  educator: z.string(),
  place: z.string().default(""),
  image: z.string().default(""),
  description: z.array(z.string()),
  registrationUrl: z.string(),
  registrationNote: z.string(),
});

const activitySchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().default(""),
});

const archiveCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string(),
  image: z.string(),
});

export const eventsSchema = z.object({
  active: z.boolean(),
  comingSoonHeroTitle: z.string(),
  comingSoonHeroImage: z.string().default("/events/coming-soon-header.jpg"),
  heroImage: z.string().default("/events/coming-soon-header.jpg"),
  festivalImage: z.string().default("/events/coming-soon-header.jpg"),
  texts: z.object({
    title: z.string(),
    heroTitle: z.string(),
    intro: z.array(z.string()),
    highlights: z.array(z.object({ title: z.string(), description: z.string() })),
    outro: z.string(),
    workshopIntro: z.string(),
    activitiesIntro: z.string(),
    venueIntro: z.string(),
  }),
  workshops: z.array(workshopSchema),
  activities: z.array(activitySchema),
  venueCards: z.array(activitySchema),
  archive: z.array(archiveCardSchema),
});

const refCardSchema = z.object({
  label: z.string(),
  href: z.string(),
  image: z.string(),
});

const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
});

export const aboutSchema = z.object({
  headings: z.object({
    aboutUs: z.string().default("about us"),
    teamNetwork: z.string().default("team & network"),
    brands: z.string().default("brands we collaborate with"),
  }),
  texts: z.object({
    intro: z.array(z.string()),
    mission: z.string(),
    vision: z.string(),
    teamNetwork: z.array(z.string()),
    brandsDescription: z.string(),
    collaborationIntro: z.string(),
    collaborationChannels: z.string(),
    collaborationItems: z.array(z.string()),
    collaborationFooter: z.string(),
  }),
  team: z.array(teamMemberSchema),
  refCards: z.array(refCardSchema),
});

const educatorSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const academySchema = z.object({
  headings: z.object({
    main: z.string().default("cos'è l'Academy Tropicale"),
    essentials: z.string().default("il corso Essentials"),
  }),
  texts: z.object({
    intro: z.array(z.string()),
    audience: z.object({
      question: z.string(),
      intro: z.string(),
      items: z.array(z.string()),
    }),
    essentials: z.object({
      intro: z.string(),
      program: z.array(z.object({ title: z.string(), educator: z.string() })),
      tera: z.string(),
      purchase: z.string(),
      purchaseDetail: z.string(),
    }),
  }),
  educators: z.array(educatorSchema),
});

export const membershipSchema = z.object({
  headings: z.object({
    main: z.string().default("entra a far parte del club!"),
  }),
  texts: z.object({
    intro: z.array(z.string()),
    body: z.array(z.string()),
    question: z.string(),
    benefits: z.array(z.string()),
    pricing: z.string(),
    pricingDetail: z.string(),
  }),
});

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const merchSchema = z.object({
  headings: z.object({
    main: z.string().default("il merch di Roma Tropicale"),
  }),
  texts: z.array(z.string()),
  products: z.array(productSchema),
  refCards: z.array(refCardSchema),
});

export const contactsSchema = z.object({
  texts: z.object({
    sayHi: z.string(),
    intro: z.string(),
    instagramSuffix: z.string(),
    collabTitle: z.string(),
    collabBody: z.string(),
    collabCta: z.string(),
  }),
});

export const slugToSchema = {
  shared: sharedSchema,
  landing: landingSchema,
  events: eventsSchema,
  about: aboutSchema,
  academy: academySchema,
  membership: membershipSchema,
  merch: merchSchema,
  contacts: contactsSchema,
} as const;

export type ContentSlug = keyof typeof slugToSchema;

export type SharedContent = z.infer<typeof sharedSchema>;
export type LandingContent = z.infer<typeof landingSchema>;
export type EventsContent = z.infer<typeof eventsSchema>;
export type AboutContent = z.infer<typeof aboutSchema>;
export type AcademyContent = z.infer<typeof academySchema>;
export type MembershipContent = z.infer<typeof membershipSchema>;
export type MerchContent = z.infer<typeof merchSchema>;
export type ContactsContent = z.infer<typeof contactsSchema>;
