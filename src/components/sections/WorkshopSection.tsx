"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND } from "@/lib/constants";
import type { EventWorkshop } from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

interface WorkshopSectionProps {
  workshop: EventWorkshop;
}

export default function WorkshopSection({ workshop }: WorkshopSectionProps) {
  return (
    <section id="workshop" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
      {/* ── Logo Header ── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6 sm:pt-8">
        <Link href="/">
          <Image
            src="/imgs/logo-romatropicale.svg"
            alt="Roma Tropicale — Torna alla home"
            width={100}
            height={107}
            className="size-auto max-w-[80px] sm:max-w-[100px]"
          />
        </Link>
        <PillButton href="/events/#workshop">Workshop</PillButton>
      </div>

      {/* ── Content Section ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text={workshop.title}
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <p className="font-medium text-lg sm:text-xl text-roma-purple">
              Timing: {workshop.timing} | Costo: {workshop.price}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-medium text-lg sm:text-xl text-roma-purple">
              A cura di {workshop.educator}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              {workshop.description.map((p, i) => (
                <p key={i} className="text-pretty">{p}</p>
              ))}
              <a
                href={workshop.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {workshop.registrationNote}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href={workshop.registrationUrl} rotate={-13}>
                Iscriviti ora!
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: hero image + social icons */}
        <div className="flex gap-4 sm:gap-5 items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt flex-1 w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[625px]"
            role="img"
            aria-label={`${workshop.title} photo placeholder`}
          />
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
    </section>
  );
}
