"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND, ACADEMY_TEXTS, EDUCATORS } from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function AcademySection() {
  return (
    <section id="academy" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
      {/* ── Hero Image (full-width) ── */}
      <div
        className="-mx-6 sm:-mx-10 lg:mx-0 w-screen aspect-[1214/664] lg:aspect-auto lg:h-screen bg-roma-bg-alt"
        role="img"
        aria-label="Academy hero image placeholder"
      />

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

      {/* ── Section 1: cos'è l'Academy Tropicale ── */}
      <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 px-0 lg:px-[100px] py-10 sm:py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[25px] w-full lg:w-[480px] lg:shrink-0">
          <AnimatedText
            text="cos'è l'Academy Tropicale"
            as="h1"
            className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-2px]"
          />

          <ScrollReveal>
            <div className="text-[13px] leading-[20px] text-roma-dark">
              {ACADEMY_TEXTS.intro.map((p, i) => (
                <p key={i} className="mb-5">{p}</p>
              ))}

              <p className="mb-0">{ACADEMY_TEXTS.audience.question}</p>
              <p className="mb-0">{ACADEMY_TEXTS.audience.intro}</p>
              <ul className="list-disc ml-5">
                {ACADEMY_TEXTS.audience.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href="https://www.paypal.com/ncp/payment/VMF3J8BGRD9RJ" rotate={-13}>
                Iscriviti ora
              </PillButton>
              <PillButton href="https://www.academytropicale.com" rotate={15}>
                Accedi
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: hero image + social icons */}
        <div className="flex gap-5 items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt flex-1 lg:flex-none lg:w-[560px] h-[350px] lg:h-[552px]"
            role="img"
            aria-label="Academy course photo placeholder"
          />
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

      {/* ── Section 2: il corso Essentials ── */}
      <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 px-0 lg:px-[100px] py-10 sm:py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[25px] w-full lg:w-[480px] lg:shrink-0">
          <AnimatedText
            text="il corso Essentials"
            as="h2"
            className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-2px]"
          />

          <ScrollReveal>
            <div className="text-[13px] leading-[20px] text-roma-dark">
              <p className="mb-5">{ACADEMY_TEXTS.essentials.intro}</p>

              <p className="font-medium mb-0">Programma</p>
              <ul className="list-disc ml-5 mb-5">
                {ACADEMY_TEXTS.essentials.program.map((lesson, i) => (
                  <li key={i}>
                    <span className="font-medium text-[#b06fff]">{lesson.title}</span>
                    {` – a cura di ${lesson.educator}`}
                  </li>
                ))}
              </ul>

              <p className="font-medium mb-0">La collaborazione con Tera</p>
              <p className="mb-5">{ACADEMY_TEXTS.essentials.tera}</p>

              <p className="mb-0">Come acquistare il corso</p>
              <p className="mb-0">{ACADEMY_TEXTS.essentials.purchase}</p>
              <p>{ACADEMY_TEXTS.essentials.purchaseDetail}</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: image */}
        <div className="flex items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt flex-1 lg:flex-none lg:w-[560px] h-[350px] lg:h-[552px]"
            role="img"
            aria-label="Essentials course photo placeholder"
          />
        </div>
      </div>

      {/* ── Educators Section ── */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start justify-center px-0 lg:px-[60px] py-10 sm:py-[60px]">
        {EDUCATORS.map((educator, i) => (
          <ScrollReveal key={educator.name} delay={i * 0.08} className="flex-1 min-w-0">
            <div className="flex flex-col gap-4 overflow-hidden">
              <div
                className="bg-[#d1d1d1] w-full h-[276px]"
                role="img"
                aria-label={`${educator.name} photo placeholder`}
              />
              <hr className="border-roma-dark/20 w-full" />
              <p className="text-[11px] font-semibold tracking-[0.66px] uppercase text-roma-dark">
                {educator.name}
              </p>
              <p className="text-[11px] tracking-[0.66px] uppercase text-roma-dark">
                {educator.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
