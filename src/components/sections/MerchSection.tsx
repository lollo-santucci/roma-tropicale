"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND, MERCH_TEXTS, MERCH_HEADINGS, MERCH_REF_CARDS } from "@/lib/constants";
import Editable from "@/components/admin/Editable";
import EditableImage from "@/components/admin/EditableImage";
import EditableList from "@/components/admin/EditableList";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function MerchSection() {
  return (
    <section id="merch" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
      {/* ── Logo Header ── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6 sm:pt-8">
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
        <PillButton href="/">HOME</PillButton>
      </div>

      {/* ── Header Section ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text={MERCH_HEADINGS.main}
            editablePath="headings.main"
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              <EditableList path="texts" items={MERCH_TEXTS} template="Nuovo paragrafo">
                {(p, i) => (
                  <p className="text-pretty">
                    <Editable path={`texts[${i}]`} multiline>{p}</Editable>
                  </p>
                )}
              </EditableList>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: hero image + social icons */}
        <div className="flex gap-4 sm:gap-5 items-end w-full lg:flex-1">
          <div className="relative flex-1 w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[543px] overflow-hidden">
            <Image
              src="/merch/1.jpg"
              alt="Merch Roma Tropicale"
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

      {/* ── Reference Cards Section ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 lg:px-[60px] py-10 sm:py-14 lg:py-16">
        <EditableList
          path="refCards"
          items={MERCH_REF_CARDS}
          template={{ label: "ETICHETTA", href: "mailto:romatropicale@gmail.com", image: "/merch/2.jpg" }}
        >
          {(card, i) => (
            <ScrollReveal delay={i * 0.1}>
              <div className="flex flex-col gap-4 items-center">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <EditableImage path={`refCards[${i}].image`} src={card.image} alt={card.label} fill>
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </EditableImage>
                </div>
                <PillButton href={card.href} className="text-[11px] tracking-[0.66px] font-semibold h-10 px-5">
                  <Editable path={`refCards[${i}].label`}>{card.label}</Editable>
                </PillButton>
              </div>
            </ScrollReveal>
          )}
        </EditableList>
      </div>
    </section>
  );
}
