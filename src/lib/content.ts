import sharedJson from "@/content/shared.json";
import landingJson from "@/content/landing.json";
import eventsJson from "@/content/events.json";
import aboutJson from "@/content/about.json";
import academyJson from "@/content/academy.json";
import membershipJson from "@/content/membership.json";
import merchJson from "@/content/merch.json";
import contactsJson from "@/content/contacts.json";
import type {
  SharedContent,
  LandingContent,
  EventsContent,
  AboutContent,
  AcademyContent,
  MembershipContent,
  MerchContent,
  ContactsContent,
} from "./content-schema";

const shared = sharedJson as SharedContent;
const landing = landingJson as LandingContent;
const events = eventsJson as EventsContent;
const about = aboutJson as AboutContent;
const academy = academyJson as AcademyContent;
const membership = membershipJson as MembershipContent;
const merch = merchJson as MerchContent;
const contacts = contactsJson as ContactsContent;

export const SECTIONS = shared.sections;
export type SectionId = (typeof SECTIONS)[number]["id"];

export const BRAND = shared.brand;
export const NAV_LINKS = shared.navLinks;
export const FOOTER_LINKS = shared.footerLinks;
export type FooterLink = (typeof FOOTER_LINKS)[number];
export const MARQUEE_ITEMS = shared.marquee;

export const HIGHLIGHTS = landing.highlights;

export const EVENT_TEXTS = events.texts;
export const EVENT_ACTIVE = events.active;
export const COMING_SOON_HERO_TITLE = events.comingSoonHeroTitle;
export const COMING_SOON_HERO_IMAGE = events.comingSoonHeroImage;
export const EVENT_HERO_IMAGE = events.heroImage;
export const EVENT_FESTIVAL_IMAGE = events.festivalImage;
export const EVENT_WORKSHOPS = events.workshops;
export type EventWorkshop = (typeof EVENT_WORKSHOPS)[number];
export const EVENT_ACTIVITIES = events.activities;
export const EVENT_VENUE_CARDS = events.venueCards;
export const EVENT_ARCHIVE = events.archive;

export const ABOUT_TEXTS = about.texts;
export const ABOUT_HEADINGS = about.headings;
export const TEAM_MEMBERS = about.team;
export type TeamMember = (typeof TEAM_MEMBERS)[number];
export const ABOUT_REF_CARDS = about.refCards;

export const ACADEMY_TEXTS = academy.texts;
export const ACADEMY_HEADINGS = academy.headings;
export const EDUCATORS = academy.educators;
export type Educator = (typeof EDUCATORS)[number];

export const MEMBERSHIP_TEXTS = membership.texts;
export const MEMBERSHIP_HEADINGS = membership.headings;
export const MEMBERSHIP_BENEFITS = membership.texts.benefits;

export const MERCH_TEXTS = merch.texts;
export const MERCH_HEADINGS = merch.headings;
export const PRODUCTS = merch.products;
export type Product = (typeof PRODUCTS)[number];
export const MERCH_REF_CARDS = merch.refCards;

export const CONTACTS_TEXTS = contacts.texts;

export const RAW_CONTENT = {
  shared: sharedJson as SharedContent,
  landing: landingJson as LandingContent,
  events: eventsJson as EventsContent,
  about: aboutJson as AboutContent,
  academy: academyJson as AcademyContent,
  membership: membershipJson as MembershipContent,
  merch: merchJson as MerchContent,
  contacts: contactsJson as ContactsContent,
} as const;
