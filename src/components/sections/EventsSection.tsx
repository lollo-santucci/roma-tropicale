"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";
import DatesSection from "@/components/sections/DatesSection";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import NewsletterForm from "@/components/ui/NewsletterForm";
import {
  BRAND,
  EVENT_TEXTS,
  EVENT_WORKSHOPS,
  EVENT_ACTIVITIES,
  EVENT_VENUE_CARDS,
  EVENT_ARCHIVE,
  EVENT_ACTIVE,
  COMING_SOON_HERO_TITLE,
  COMING_SOON_HERO_IMAGE,
  EVENT_HERO_IMAGE,
  EVENT_FESTIVAL_IMAGE,
} from "@/lib/constants";
import Editable from "@/components/admin/Editable";
import EditableList from "@/components/admin/EditableList";
import EditableImage from "@/components/admin/EditableImage";
import EditableToggle from "@/components/admin/EditableToggle";
import { useAdmin, useEditableValue } from "@/components/admin/AdminContext";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function EventsSection() {
  const { enabled } = useAdmin();
  const isActive = useEditableValue<boolean>("active", EVENT_ACTIVE);
  return (
    <>
      {enabled ? <EditableToggle path="active" value={EVENT_ACTIVE} /> : null}
      {isActive ? <EventsActive /> : <EventsComingSoon />}
    </>
  );
}

function OutroBlock() {
  const { enabled } = useAdmin();
  const value = useEditableValue<string>("texts.outro", EVENT_TEXTS.outro);
  if (!enabled && !value.trim()) return null;
  return (
    <p className="mt-5">
      <Editable path="texts.outro" multiline>{EVENT_TEXTS.outro || "Scrivi un outro…"}</Editable>
    </p>
  );
}

function HighlightsBlock() {
  const { enabled } = useAdmin();
  const items = useEditableValue<typeof EVENT_TEXTS.highlights>(
    "texts.highlights",
    EVENT_TEXTS.highlights
  );
  if (!enabled && items.length === 0) return null;
  return (
    <>
      <p>Cosa ti aspetta?</p>
      <EditableList
        path="texts.highlights"
        items={EVENT_TEXTS.highlights}
        template={{ title: "Titolo", description: "Descrizione" }}
      >
        {(h, i) => (
          <p className="mb-0">
            <span className="font-medium text-roma-purple">
              • <Editable path={`texts.highlights[${i}].title`}>{h.title}</Editable>
            </span>
            {" | "}
            <Editable path={`texts.highlights[${i}].description`} multiline>{h.description}</Editable>
          </p>
        )}
      </EditableList>
    </>
  );
}

function EventsActive() {
  const { enabled: adminEnabled } = useAdmin();
  return (
    <>
    <section id="events" className="bg-roma-bg px-6 sm:px-10 lg:px-24 overflow-x-hidden">
      {/* ── Hero Image (full-width) ── */}
      <div className="relative -mx-6 sm:-mx-10 lg:-mx-24 h-[400px] sm:h-[600px] lg:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-roma-dark" />
        <EditableImage path="heroImage" src={EVENT_HERO_IMAGE} alt="Evento hero" fill>
          {EVENT_HERO_IMAGE ? (
            <Image
              src={EVENT_HERO_IMAGE}
              alt="Evento hero"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : null}
        </EditableImage>
        {/* Pill buttons top-right */}
        <div className="absolute top-[69px] right-6 sm:right-10 lg:right-[100px] flex flex-col items-start gap-10">
          <PillButton href="/" rotate={-13}>HOME</PillButton>
          <PillButton href="/events/#workshop" rotate={15}>workshop</PillButton>
        </div>
        {/* Title + social bottom-right */}
        <div className="absolute bottom-10 right-6 sm:right-10 lg:right-[100px] flex gap-2 items-start">
          <Image
            src="/events/event-logo.png"
            alt={EVENT_TEXTS.heroTitle}
            width={2160}
            height={896}
            priority
            className="h-auto w-[260px] sm:w-[320px] lg:w-[400px]"
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 sm:size-10 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Logo Header ── */}
      <div className="max-w-7xl mx-auto flex items-center pt-6 sm:pt-8">
        <Link href="/">
          <Image
            src="/imgs/logo-romatropicale.svg"
            alt="Roma Tropicale — Torna alla home"
            width={100}
            height={107}
            loading="eager"
            className="h-auto w-auto max-w-[80px] sm:max-w-[100px]"
          />
        </Link>
      </div>

      {/* ── Section 1: Primavera Tropicale Festival ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text={EVENT_TEXTS.title}
            editablePath="texts.title"
            as="h1"
            className="font-[family-name:var(--font-display)] text-[clamp(1.875rem,3.5vw,3rem)] text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              <EditableList path="texts.intro" items={EVENT_TEXTS.intro} template="Nuovo paragrafo">
                {(p, i) => (
                  <p className="text-pretty">
                    <Editable path={`texts.intro[${i}]`} multiline>{p}</Editable>
                  </p>
                )}
              </EditableList>

              <HighlightsBlock />


              <OutroBlock />

            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href="https://www.eventbrite.com/cc/primavera-tropicale-26-a-green-block-party-4839739?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=odclsxcollection&utm-source=cp&aff=odclsxcollection" rotate={-13}>
                Partecipa
              </PillButton>
              <PillButton href="https://forms.gle/gEathYpYqjohQU8n8" rotate={15}>
                prenota un <br/> workshop
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: image */}
        <div className="flex items-end w-full lg:flex-1">
          <div className="relative bg-roma-bg-alt w-full max-w-[560px] lg:max-w-[440px] 2xl:max-w-[560px] aspect-[4/5]">
            <EditableImage path="festivalImage" src={EVENT_FESTIVAL_IMAGE} alt="Festival" fill>
              {EVENT_FESTIVAL_IMAGE ? (
                <Image
                  src={EVENT_FESTIVAL_IMAGE}
                  alt="Festival"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : null}
            </EditableImage>
          </div>
        </div>
      </div>

      {/* ── Section 1.5: Le date (3 flyers) ── */}
      <DatesSection />

      {/* ── Section 2: Workshop ── */}
      <div id="workshop" className="flex flex-col gap-[10px] items-start py-[35px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] text-roma-dark tracking-[-1.2px] leading-tight shrink-0">
            Workshop
          </h2>
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={200}
            height={61}
            className="hidden lg:block shrink-0"
          />
          <p className="text-roma-dark text-base sm:text-lg lg:text-2xl">
            {EVENT_TEXTS.workshopIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full py-10 sm:py-[60px]">
          {EVENT_WORKSHOPS.map((ws, i) => (
            <ScrollReveal key={ws.slug} delay={i * 0.05}>
              <article className="flex flex-col gap-4 h-full">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#d1d1d1]">
                  <EditableImage path={`workshops[${i}].image`} src={ws.image} alt={ws.title} fill>
                    {ws.image ? (
                      <Image src={ws.image} alt={ws.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                    ) : null}
                  </EditableImage>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.125rem,1.4vw,1.5rem)] text-roma-dark tracking-tight leading-tight text-balance">
                    <Editable path={`workshops[${i}].title`}>{ws.title}</Editable>
                  </h3>
                  <p className="text-sm text-roma-purple font-medium">
                    <Editable path={`workshops[${i}].timing`}>{ws.timing}</Editable>
                    {" · "}
                    <Editable path={`workshops[${i}].price`}>{ws.price}</Editable>
                  </p>
                  <p className="text-xs text-roma-dark/70">
                    A cura di <Editable path={`workshops[${i}].educator`}>{ws.educator}</Editable>
                  </p>
                  {(ws.place || adminEnabled) && (
                    <p className="text-xs text-roma-dark/50 leading-relaxed">
                      <Editable path={`workshops[${i}].place`}>{ws.place || "Aggiungi luogo…"}</Editable>
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <PillButton href={`/events/${ws.slug}`} className="text-[11px] tracking-[0.66px] font-semibold h-10 px-5">
                    scopri di più
                  </PillButton>
                  <PillButton href={ws.registrationUrl} className="text-[11px] tracking-[0.66px] font-semibold h-10 px-5">
                    iscriviti
                  </PillButton>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

      {/* ── Section 3: Le attività (horizontal scroll) ── */}
      <HorizontalScrollSection
        title="Le attività"
        description={EVENT_TEXTS.activitiesIntro}
      >
        {EVENT_ACTIVITIES.map((activity, i) => (
          <motion.div
            key={activity.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-[240px] sm:w-[260px] lg:w-[320px] 2xl:w-[400px] shrink-0"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#d1d1d1]">
              <EditableImage path={`activities[${i}].image`} src={activity.image} alt={activity.name} fill>
                {activity.image ? (
                  <Image src={activity.image} alt={activity.name} fill sizes="320px" className="object-cover" />
                ) : null}
              </EditableImage>
            </div>
            <hr className="border-roma-dark/20 w-full my-3" />
            <p className="text-sm font-bold text-roma-dark mb-1">
              <Editable path={`activities[${i}].name`}>{activity.name}</Editable>
            </p>
            <p className="text-xs text-roma-dark/50 leading-relaxed">
              <Editable path={`activities[${i}].description`} multiline>{activity.description}</Editable>
            </p>
          </motion.div>
        ))}
      </HorizontalScrollSection>

      {/* ── Section 4: La Venue (horizontal scroll) ── */}
      <HorizontalScrollSection
        title="Le Venues"
        description={EVENT_TEXTS.venueIntro}
      >
        {EVENT_VENUE_CARDS.map((card, i) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-[240px] sm:w-[260px] lg:w-[320px] 2xl:w-[400px] shrink-0"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#d1d1d1]">
              <EditableImage path={`venueCards[${i}].image`} src={card.image} alt={card.name} fill>
                {card.image ? (
                  <Image src={card.image} alt={card.name} fill sizes="320px" className="object-cover" />
                ) : null}
              </EditableImage>
            </div>
            <hr className="border-roma-dark/20 w-full my-3" />
            <p className="text-sm font-bold text-roma-dark mb-1">
              <Editable path={`venueCards[${i}].name`}>{card.name}</Editable>
            </p>
            <p className="text-xs text-roma-dark/50 leading-relaxed">
              <Editable path={`venueCards[${i}].description`} multiline>{card.description}</Editable>
            </p>
          </motion.div>
        ))}
      </HorizontalScrollSection>

      {/* ── Section 5: From the archive (horizontal scroll) ── */}
      <HorizontalScrollSection
        id="archive"
        title="from the archive"
        description="Una selezione dei nostri eventi preferiti del passato."
      >
        {EVENT_ARCHIVE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-[240px] sm:w-[260px] lg:w-[320px] 2xl:w-[400px] shrink-0"
          >
            <Link
              href={item.href}
              className="block group transform-gpu transition-[scale] duration-200 ease-out motion-safe:active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-roma-purple"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <EditableImage path={`archive[${i}].image`} src={item.image} alt={item.title} fill>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, (max-width: 1536px) 320px, 400px"
                    className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                </EditableImage>
              </div>
              <hr className="border-roma-dark/20 w-full my-3" />
              <h3 className="text-sm font-bold text-roma-dark mb-1 group-hover:text-roma-purple transition-colors duration-300">
                <Editable path={`archive[${i}].title`}>{item.title}</Editable>
              </h3>
              <p className="text-xs text-roma-dark/50 leading-relaxed">
                <Editable path={`archive[${i}].description`} multiline>{item.description}</Editable>
              </p>
            </Link>
          </motion.div>
        ))}
      </HorizontalScrollSection>
    </>
  );
}

function EventsComingSoon() {
  return (
    <>
      <section id="events" className="bg-roma-bg px-6 sm:px-10 lg:px-24 overflow-x-hidden">
        {/* ── Hero Image (full-width) ── */}
        <div className="relative -mx-6 sm:-mx-10 lg:-mx-24 h-[400px] sm:h-[600px] lg:h-screen overflow-hidden">
          <EditableImage path="comingSoonHeroImage" src={COMING_SOON_HERO_IMAGE} alt="Prossimo evento in arrivo" fill>
            <Image
              src={COMING_SOON_HERO_IMAGE}
              alt="Prossimo evento in arrivo"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </EditableImage>
          {/* Title + social bottom-right */}
          <div className="absolute bottom-10 md:bottom-12 right-6 sm:right-10 lg:right-[150px] flex gap-2 items-start">
            <p className="font-semibold text-roma-white text-right text-xl sm:text-2xl lg:text-[36px] tracking-[2.88px] uppercase max-w-[487px] leading-tight">
              <Editable path="comingSoonHeroTitle" multiline>{COMING_SOON_HERO_TITLE}</Editable>
            </p>
            <div className="flex flex-col gap-2 items-center justify-center">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 sm:size-10 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Logo Header ── */}
        <div className="max-w-7xl mx-auto flex items-center pt-6 sm:pt-8">
          <Link href="/">
            <Image
              src="/imgs/logo-romatropicale.svg"
              alt="Roma Tropicale — Torna alla home"
              width={100}
              height={107}
              loading="eager"
              className="h-auto w-auto max-w-[80px] sm:max-w-[100px]"
            />
          </Link>
        </div>

      </section>

      {/* ── From the archive ── */}
      <HorizontalScrollSection
        id="archive"
        title="from the archive"
        description="Una selezione dei nostri eventi preferiti del passato."
      >
        {EVENT_ARCHIVE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-[240px] sm:w-[260px] lg:w-[320px] 2xl:w-[400px] shrink-0"
          >
            <Link
              href={item.href}
              className="block group transform-gpu transition-[scale] duration-200 ease-out motion-safe:active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-roma-purple"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <EditableImage path={`archive[${i}].image`} src={item.image} alt={item.title} fill>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, (max-width: 1536px) 320px, 400px"
                    className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                </EditableImage>
              </div>
              <hr className="border-roma-dark/20 w-full my-3" />
              <h3 className="text-sm font-bold text-roma-dark mb-1 group-hover:text-roma-purple transition-colors duration-300">
                <Editable path={`archive[${i}].title`}>{item.title}</Editable>
              </h3>
              <p className="text-xs text-roma-dark/50 leading-relaxed">
                <Editable path={`archive[${i}].description`} multiline>{item.description}</Editable>
              </p>
            </Link>
          </motion.div>
        ))}
      </HorizontalScrollSection>

      {/* ── Newsletter CTA ── */}
      <div className="bg-roma-bg flex justify-center py-10 sm:py-14 px-6 sm:px-10">
        <ScrollReveal>
          <div className="bg-roma-dark rounded-[24px] px-6 sm:px-12 lg:px-[200px] py-10 sm:py-12 flex flex-col items-center gap-6">
            <NewsletterForm variant="full" />
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
