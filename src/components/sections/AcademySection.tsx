"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="academy" className="bg-roma-bg px-6 sm:px-10 lg:px-0 overflow-hidden">
      {/* ── Hero Image (full-width) ── */}
      <div className="-mx-6 sm:-mx-10 lg:mx-0 lg:w-full aspect-[1214/664] lg:aspect-auto lg:h-screen relative overflow-hidden">
        <Image
          src="/academy/academy-header.webp"
          alt="Academy Tropicale"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
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

      {/* ── Section 1: cos'è l'Academy Tropicale ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text="cos'è l'Academy Tropicale"
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              {ACADEMY_TEXTS.intro.map((p, i) => (
                <p key={i} className="text-pretty">{p}</p>
              ))}

              <p className="text-pretty">{ACADEMY_TEXTS.audience.intro}</p>
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

        {/* Right column: video + social icons */}
        <div className="flex gap-4 sm:gap-5 items-end w-full lg:flex-1">
          <div className="relative flex-1 w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[552px] overflow-hidden group">
            <video
              ref={videoRef}
              src="/academy/intro-academy-tropicale.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-roma-dark/60 backdrop-blur-sm flex items-center justify-center text-roma-white hover:bg-roma-dark/80 transition-colors opacity-0 group-hover:opacity-100"
              aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
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

      {/* ── Section 2: il corso Essentials ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:flex-1">
          <AnimatedText
            text="il corso Essentials"
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark tracking-tight text-balance"
          />

          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:gap-5 text-sm leading-relaxed text-roma-dark">
              <p className="text-pretty">{ACADEMY_TEXTS.essentials.intro}</p>

              <p className="font-medium">Programma</p>
              <ul className="list-disc ml-5">
                {ACADEMY_TEXTS.essentials.program.map((lesson, i) => (
                  <li key={i}>
                    <span className="font-medium text-roma-purple">{lesson.title}</span>
                    {` – a cura di ${lesson.educator}`}
                  </li>
                ))}
              </ul>

              <p className="font-medium">La collaborazione con Tera</p>
              <p className="text-pretty">{ACADEMY_TEXTS.essentials.tera}</p>

              <p className="font-medium">Come acquistare il corso</p>
              <p className="text-pretty">{ACADEMY_TEXTS.essentials.purchase}</p>
              <p className="text-pretty">{ACADEMY_TEXTS.essentials.purchaseDetail}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href="https://www.paypal.com/ncp/payment/VMF3J8BGRD9RJ" rotate={0}>
                Inizia il corso
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: image */}
        <div className="flex items-end w-full lg:flex-1">
          <div className="relative w-full max-w-[560px] aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[552px] overflow-hidden">
            <Image
              src="/academy/foto-vaso.png"
              alt="Corso Essentials — vaso"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
