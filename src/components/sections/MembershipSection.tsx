"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import PillButton from "@/components/ui/PillButton";
import { MEMBERSHIP_BENEFITS } from "@/lib/constants";

export default function MembershipSection() {
  return (
    <section
      id="membership"
      className="bg-roma-bg-alt px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Text side */}
        <div className="flex-1 flex flex-col gap-6">
          <AnimatedText
            text="Entra a far parte del club!"
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark"
          />

          <ScrollReveal>
            <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
              La membership di Roma Tropicale ti dà accesso a un mondo di esperienze
              uniche, connessioni autentiche e contenuti esclusivi della nostra community
              plant-based.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="space-y-3">
              {MEMBERSHIP_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-roma-purple mt-2 flex-shrink-0" />
                  <span className="text-roma-dark/80 text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-roma-dark">
                4&euro;
              </span>
              <span className="text-roma-dark/50 text-sm">
                fino al 31 dicembre 2026
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <PillButton variant="purple" href="/contacts">
              SCOPRI DI PIÙ
            </PillButton>
          </ScrollReveal>
        </div>

        {/* Image side */}
        <div className="flex-1 w-full max-w-lg" role="img" aria-label="Membership community photo">
          <ImageReveal className="w-full" aspectRatio="aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}
