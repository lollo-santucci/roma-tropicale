"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND, ABOUT_TEXTS, ABOUT_REF_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="bg-roma-bg px-6 sm:px-10 lg:px-24">
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

      {/* ── Header Section ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text="about us"
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              {ABOUT_TEXTS.intro.map((p, i) => (
                <p key={i} className="text-pretty">{p}</p>
              ))}
              <div>
                <p className="font-medium text-roma-purple">Mission</p>
                <p className="text-pretty">{ABOUT_TEXTS.mission}</p>
              </div>
              <div>
                <p className="font-medium text-roma-purple">Vision</p>
                <p className="text-pretty">{ABOUT_TEXTS.vision}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="hidden sm:flex flex-col gap-10 py-8 items-start">
              <PillButton href="/" rotate={-13}>Home</PillButton>
              <PillButton href="https://romatropicale.com" rotate={15}>Blog</PillButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex gap-4 sm:gap-5 items-end w-full lg:flex-1">
          <div className="relative flex-1 w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[552px] overflow-hidden">
            <Image
              src="/about/1.jpg"
              alt="Roma Tropicale community"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
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

      {/* ── Team & Network Section ── */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        <ScrollReveal direction="left" className="w-full lg:flex-1">
          <div className="relative w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[552px] overflow-hidden">
            <Image
              src="/about/2.jpg"
              alt="Team & Network Roma Tropicale"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-5 sm:gap-6 items-start sm:items-end w-full lg:flex-1">
          <AnimatedText
            text="team & network"
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight sm:text-right w-full text-balance"
          />
          <ScrollReveal>
            <div className="text-sm leading-relaxed text-roma-dark sm:text-right">
              {ABOUT_TEXTS.teamNetwork.map((p, i) => (
                <p key={i} className={cn("text-pretty", i < ABOUT_TEXTS.teamNetwork.length - 1 && "mb-4 sm:mb-5")}>
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Reference Cards Section ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 lg:px-[60px] py-10 sm:py-14 lg:py-16">
        {ABOUT_REF_CARDS.map((card, i) => (
          <ScrollReveal key={card.label} delay={i * 0.1}>
            <div className="flex flex-col gap-4 items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <PillButton href={card.href} className="text-[11px] tracking-[0.66px] font-semibold h-10 px-5">
                {card.label}
              </PillButton>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Brands Section ── */}
      <div id="collab" className="bg-roma-bg-alt -mx-6 sm:-mx-10 lg:-mx-24 px-6 sm:px-10 lg:px-24 py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6">
          {/* Horizontal divider line */}
          <hr className="border-roma-dark/10 w-full" />

          {/* Header row: title + arrow + description */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-roma-dark tracking-tight leading-snug w-full lg:w-72 shrink-0 text-balance">
              brands we collaborate with
            </h2>
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={200}
              height={61}
              className="hidden lg:block shrink-0"
            />
            <p className="text-roma-dark text-sm sm:text-base lg:text-2xl text-pretty">
              {ABOUT_TEXTS.brandsDescription}
            </p>
          </div>

          {/* Partner logo grid */}
          <ScrollReveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 my-8 sm:my-12 lg:my-16">
              {BRAND.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center h-12 sm:h-14 lg:h-16"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={60}
                    className={cn(
                      "w-auto object-contain opacity-60 hover:opacity-100 transition-opacity",
                      partner.size === "small"
                        ? "max-h-10 sm:max-h-12 lg:max-h-14"
                        : "max-h-16 sm:max-h-20 lg:max-h-24"
                    )}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Collaboration details */}
          <ScrollReveal>
            <div className="text-roma-dark text-xs sm:text-sm leading-relaxed max-w-lg flex flex-col gap-3 sm:gap-4">
              <p className="text-pretty">{ABOUT_TEXTS.collaborationIntro}</p>
              <p className="text-pretty">{ABOUT_TEXTS.collaborationChannels}</p>
              <ul className="list-disc ml-5">
                {ABOUT_TEXTS.collaborationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-pretty">{ABOUT_TEXTS.collaborationFooter}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
