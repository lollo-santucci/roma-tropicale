"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { BRAND, MEMBERSHIP_TEXTS } from "@/lib/constants";

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-roma-bg px-6 sm:px-10 lg:px-0">
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
      <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-16 px-0 lg:px-[100px] py-10 sm:py-[60px]">
        {/* Left column */}
        <div className="flex flex-col gap-[25px] w-full lg:w-[480px] lg:shrink-0">
          <AnimatedText
            text="Entra a far parte del club!"
            as="h1"
            className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-2px]"
          />

          <ScrollReveal>
            <div className="text-[13px] leading-[20px] text-roma-dark">
              {MEMBERSHIP_TEXTS.intro.map((p, i) => (
                <p key={i} className="mb-5">{p}</p>
              ))}

              {MEMBERSHIP_TEXTS.body.map((p, i) => (
                <p key={`body-${i}`} className="mb-5">{p}</p>
              ))}

              <p className="mb-0">{MEMBERSHIP_TEXTS.question}</p>
              <ul className="list-disc ml-5 mt-1">
                {MEMBERSHIP_TEXTS.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <p className="mt-5 mb-0">{MEMBERSHIP_TEXTS.pricing}</p>
              <p>{MEMBERSHIP_TEXTS.pricingDetail}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 py-8">
              <PillButton href={BRAND.membershipForm} rotate={-13}>
                Iscriviti ora
              </PillButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: hero image + social icons */}
        <div className="flex gap-5 items-end w-full lg:flex-1">
          <div
            className="bg-roma-bg-alt flex-1 lg:flex-none lg:w-[560px] h-[400px] lg:h-[625px]"
            role="img"
            aria-label="Membership community photo placeholder"
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


    </section>
  );
}
