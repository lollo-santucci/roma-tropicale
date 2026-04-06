"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND, MERCH_TEXTS, MERCH_REF_CARDS } from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function MerchSection() {
  return (
    <section id="merch" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
      {/* ── Logo Header ── */}
      <div className="flex items-center justify-between pt-[30px] px-0 lg:px-[100px]">
        <Image
          src="/imgs/logo-romatropicale.svg"
          alt="Roma Tropicale"
          width={100}
          height={107}
          className="w-[100px] h-[107px]"
        />
        <PillButton href="/">HOME</PillButton>
      </div>

      {/* ── Header Section ── */}
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 px-0 lg:px-[100px] py-10 sm:py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[25px] w-full lg:flex-1">
          <AnimatedText
            text="il merch di Roma Tropicale"
            as="h1"
            className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-2px]"
          />

          <ScrollReveal>
            <div className="text-[13px] leading-[20px] text-roma-dark">
              {MERCH_TEXTS.map((p, i) => (
                <p key={i} className={i < MERCH_TEXTS.length - 1 ? "mb-5" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: hero image + social icons */}
        <div className="flex gap-5 items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt flex-1 lg:flex-none lg:w-[560px] h-[300px] sm:h-[400px] lg:h-[543px]"
            role="img"
            aria-label="Merch hero image placeholder"
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

      {/* ── Reference Cards Section ── */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center justify-center px-0 lg:px-[60px] py-10 sm:py-[60px]">
        {MERCH_REF_CARDS.map((card, i) => (
          <ScrollReveal key={card.label} delay={i * 0.1}>
            <div className="flex flex-col gap-4 items-center w-full md:w-[380px]">
              <div
                className="bg-[#d1d1d1] w-full md:w-[380px] h-[480px]"
                role="img"
                aria-label="Reference card photo placeholder"
              />
              <PillButton href={card.href} className="text-[11px] tracking-[0.66px] h-10 px-5">
                {card.label}
              </PillButton>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
