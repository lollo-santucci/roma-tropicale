"use client";

import Image from "next/image";
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
                className="w-10 h-10 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Logo Header ── */}
      <div className="flex items-center pt-[30px] px-0 lg:px-[100px]">
        <Image
          src="/imgs/logo-romatropicale.svg"
          alt="Roma Tropicale"
          width={100}
          height={107}
          className="w-[100px] h-[107px]"
        />
      </div>

      {/* ── Section 1: Primavera Tropicale Festival ── */}
      <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 px-0 lg:px-[100px] py-10 sm:py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[25px] w-full lg:w-[480px] lg:shrink-0">
          <AnimatedText
            text={EVENT_TEXTS.title}
            as="h1"
            className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-2px]"
          />

          <ScrollReveal>
            <div className="text-[13px] leading-[20px] text-roma-dark">
              {EVENT_TEXTS.intro.map((p, i) => (
                <p key={i} className="mb-5">{p}</p>
              ))}

              <p className="mb-0">Cosa ti aspetta?</p>
              {EVENT_TEXTS.highlights.map((h, i) => (
                <p key={i} className="mb-0">
                  <span className="font-medium text-[#b06fff]">• {h.title}</span>
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
            className="bg-roma-bg-alt flex-1 lg:flex-none lg:w-[560px] h-[350px] lg:h-[552px]"
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
