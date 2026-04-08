"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import {
  BRAND,
  EVENT_TEXTS,
  EVENT_WORKSHOPS,
  EVENT_ACTIVITIES,
  EVENT_VENUE_CARDS,
} from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function EventsSection() {
  return (
    <section id="events" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
      {/* ── Hero Image (full-width) ── */}
      <div className="relative -mx-6 sm:-mx-10 lg:mx-0 w-screen h-[400px] sm:h-[600px] lg:h-screen">
        <div
          className="absolute inset-0 bg-roma-dark"
          role="img"
          aria-label="Event hero placeholder"
        />
        {/* Pill buttons top-right */}
        <div className="absolute top-[69px] right-6 sm:right-10 lg:right-[100px] flex flex-col items-start gap-6">
          <PillButton href="/" rotate={-13}>HOME</PillButton>
          <PillButton href="/events/#workshop" rotate={15}>workshop</PillButton>
        </div>
        {/* Title + social bottom-right */}
        <div className="absolute bottom-10 right-6 sm:right-10 lg:right-[100px] flex gap-2 items-start">
          <p className="font-semibold text-roma-bg text-right text-xl sm:text-2xl lg:text-[36px] tracking-[2.88px] uppercase max-w-[487px] leading-tight">
            {EVENT_TEXTS.heroTitle}
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
            className="size-auto max-w-[80px] sm:max-w-[100px]"
          />
        </Link>
      </div>

      {/* ── Section 1: Primavera Tropicale Festival ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text={EVENT_TEXTS.title}
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              {EVENT_TEXTS.intro.map((p, i) => (
                <p key={i} className="text-pretty">{p}</p>
              ))}

              <p>Cosa ti aspetta?</p>
              {EVENT_TEXTS.highlights.map((h, i) => (
                <p key={i} className="mb-0">
                  <span className="font-medium text-roma-purple">• {h.title}</span>
                  {` | ${h.description}`}
                </p>
              ))}

              <p className="mt-5">{EVENT_TEXTS.outro}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href="/contacts" rotate={-13}>
                Partecipa
              </PillButton>
              <PillButton href="/contacts" rotate={15}>
                prenota un <br/> workshop
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: image */}
        <div className="flex items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[552px]"
            role="img"
            aria-label="Festival photo placeholder"
          />
        </div>
      </div>

      {/* ── Section 2: Workshop ── */}
      <div id="workshop" className="flex flex-col gap-[10px] items-start px-6 sm:px-10 lg:px-[60px] py-[35px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-1.2px] leading-[34px] shrink-0">
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

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center w-full py-10 sm:py-[60px]">
          {EVENT_WORKSHOPS.map((ws, i) => (
            <ScrollReveal key={ws.slug} delay={i * 0.1}>
              <div className="flex flex-col gap-4 items-center w-full md:w-[380px]">
                <div
                  className="bg-[#d1d1d1] w-full md:w-[380px] h-[480px]"
                  role="img"
                  aria-label="Workshop photo placeholder"
                />
                <PillButton href={`/events/${ws.slug}`} className="text-[11px] tracking-[0.66px] h-10 px-5">
                  partecipa
                </PillButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Section 3: Le attività ── */}
      <div className="flex flex-col gap-[10px] items-start px-6 sm:px-10 lg:px-[60px] py-[35px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-1.2px] leading-[34px] shrink-0">
            Le attività
          </h2>
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={200}
            height={61}
            className="hidden lg:block shrink-0"
          />
          <p className="text-roma-dark text-base sm:text-lg lg:text-2xl">
            {EVENT_TEXTS.activitiesIntro}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start justify-center w-full py-10 sm:py-[60px]">
          {EVENT_ACTIVITIES.map((activity, i) => (
            <ScrollReveal key={activity.name} delay={i * 0.08} className="flex-1 min-w-0">
              <div className="flex flex-col gap-4 overflow-hidden">
                <div
                  className="bg-[#d1d1d1] w-full h-[276px]"
                  role="img"
                  aria-label="Activity photo placeholder"
                />
                <hr className="border-roma-dark/20 w-full" />
                <p className="text-[11px] font-semibold tracking-[0.66px] uppercase text-roma-dark">
                  {activity.name}
                </p>
                <p className="text-[11px] tracking-[0.66px] uppercase text-roma-dark">
                  {activity.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Section 4: La Venue ── */}
      <div className="flex flex-col gap-[10px] items-start px-6 sm:px-10 lg:px-[60px] py-[35px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-1.2px] leading-[34px] shrink-0">
            La Venue
          </h2>
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={200}
            height={61}
            className="hidden lg:block shrink-0"
          />
          <p className="text-roma-dark text-base sm:text-lg lg:text-2xl">
            {EVENT_TEXTS.venueIntro}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start justify-center w-full py-10 sm:py-[60px]">
          {EVENT_VENUE_CARDS.map((card, i) => (
            <ScrollReveal key={card.name} delay={i * 0.08} className="flex-1 min-w-0">
              <div className="flex flex-col gap-4 overflow-hidden">
                <div
                  className="bg-[#d1d1d1] w-full h-[276px]"
                  role="img"
                  aria-label="Venue photo placeholder"
                />
                <hr className="border-roma-dark/20 w-full" />
                <p className="text-[11px] font-semibold tracking-[0.66px] uppercase text-roma-dark">
                  {card.name}
                </p>
                <p className="text-[11px] tracking-[0.66px] uppercase text-roma-dark">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
