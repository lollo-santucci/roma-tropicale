"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { BRAND } from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function ContactsSection() {
  return (
    <section id="contacts" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 py-10 sm:py-14 lg:py-16">
        {/* Left column */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:max-w-[480px]">
          <div className="flex flex-col gap-1">
            <AnimatedText
              text="say hi (:"
              as="h1"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-[36px] text-roma-dark tracking-[-1.8px]"
            />
            <ScrollReveal delay={0.1}>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-roma-dark text-2xl sm:text-3xl lg:text-[40px] tracking-[-2px] hover:text-roma-purple transition-colors"
              >
                {BRAND.email}
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="text-sm leading-relaxed text-roma-dark">
              <p>Non abbiamo una sede fisica: puoi incontrarci ai nostri eventi itineranti, tra piante, workshop e momenti di incontro.</p>
              <p className="mt-4">
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-roma-purple underline"
                >
                  Seguici su Instagram
                </a>
                {" per scoprire dove saremo e partecipare ai prossimi eventi!"}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-end w-full lg:max-w-[480px]">
          <ScrollReveal direction="left">
            <p className="text-2xl sm:text-3xl lg:text-[36px] text-roma-dark text-right tracking-[-1.8px] leading-tight">
              {BRAND.tagline}
            </p>
          </ScrollReveal>
          <Image
            src="/icons/upside-drop.svg"
            alt=""
            width={150}
            height={225}
            className="w-[80px] sm:w-[100px] lg:w-[130px] h-auto mt-4"
          />
        </div>
      </div>

      {/* ── Collaborazioni & Partnership + Social ── */}
      <div className="relative flex justify-center py-10 sm:py-14">
        {/* Card — centrata */}
        <ScrollReveal>
          <div className="bg-roma-dark rounded-[24px] flex flex-col gap-8 sm:gap-12 items-center justify-center px-6 sm:px-12 lg:px-[200px] py-10 sm:py-[50px]">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-[36px] text-white tracking-[-1.8px] text-center">
              Collaborazioni & Partnership
            </h2>
            <p className="text-sm sm:text-base lg:text-[20px] text-white text-center tracking-[-1px] max-w-[479px]">
              Scrivici se vuoi proporre un progetto, ospitare un evento o collaborare con la nostra community.
            </p>
            <PillButton
              href={`mailto:${BRAND.email}?subject=Collaborazione`}
              className="bg-[#f3f0f0] text-black hover:bg-roma-purple hover:text-white text-base sm:text-[20px] tracking-[-1px] px-8 sm:px-[45px] py-4 sm:py-5"
            >
              SCRIVICI!
            </PillButton>
          </div>
        </ScrollReveal>

        {/* Social icons — lg+: verticale a destra in absolute */}
        <div className="hidden lg:flex flex-col gap-2.5 items-center absolute right-10 lg:right-[60px] bottom-14">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
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

        {/* Social icons — mobile/tablet: orizzontale sotto */}
        <div className="flex lg:hidden gap-2.5 items-center absolute bottom-0 left-6 sm:left-10">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
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

      {/* ── Newsletter ── */}
      <div className="flex justify-center py-6 sm:py-10">
        <ScrollReveal>
          <div className="bg-roma-dark rounded-[24px] px-6 sm:px-12 lg:px-[200px] py-10 sm:py-12 flex flex-col items-center gap-6">
            <NewsletterForm variant="full" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
