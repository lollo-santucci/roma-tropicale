"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BRAND, SECTIONS } from "@/lib/constants";
import { useScrollContext } from "@/components/layout/HorizontalScroll";

const footerLinks = ["About", "Events", "Academy", "Contact"];
const footerSectionIds = ["about", "events", "academy", "contacts"] as const;

export default function ContactsSection() {
  const { scrollToSection } = useScrollContext();

  return (
    <section
      id="contacts"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg overflow-y-auto"
    >
      <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-24 lg:py-16 flex flex-col justify-between">
        {/* Top: say hi */}
        <div className="pt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end">
          <div className="flex-1">
            <AnimatedText
              text="say hi (:"
              as="h2"
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl text-roma-dark"
            />
            <ScrollReveal delay={0.2}>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-roma-dark text-2xl sm:text-3xl lg:text-5xl font-[family-name:var(--font-display)] hover:text-roma-purple transition-colors mt-4 inline-block"
              >
                {BRAND.email}
              </a>
            </ScrollReveal>
          </div>

          <div className="flex flex-col items-end gap-4">
            <ScrollReveal direction="left">
              <p className="text-roma-dark/60 text-sm sm:text-base text-right max-w-xs">
                {BRAND.tagline}
              </p>
            </ScrollReveal>
            {/* Purple drop placeholder */}
            <div className="w-16 h-24 bg-roma-purple rounded-full" />
          </div>
        </div>

        {/* Collaborations card */}
        <ScrollReveal className="my-8 lg:my-12">
          <div className="bg-roma-dark rounded-card p-6 sm:p-8 max-w-2xl">
            <p className="text-roma-white font-[family-name:var(--font-display)] text-xl sm:text-2xl mb-4">
              Collaborazioni & Partnership
            </p>
            <p className="text-roma-white/60 text-sm mb-6">
              Lavoriamo con brand e realtà che condividono i nostri valori di
              sostenibilità e creatività.
            </p>
            <div className="flex flex-wrap gap-3">
              {BRAND.partners.map((p) => (
                <span
                  key={p}
                  className="bg-roma-white/10 rounded-pill px-4 py-2 text-roma-white text-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Social + Newsletter */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
          {/* Social */}
          <ScrollReveal>
            <div className="flex gap-4">
              {(["Instagram", "Spotify", "LinkedIn"] as const).map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-roma-dark rounded-full flex items-center justify-center text-roma-white text-xs hover:bg-roma-purple transition-colors"
                >
                  {s.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Newsletter mini */}
          <ScrollReveal delay={0.1} className="flex-1 max-w-sm">
            <div className="bg-roma-dark rounded-card p-4 sm:p-5">
              <p className="text-roma-white text-sm mb-3">Newsletter</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-roma-white/10 rounded-pill px-4 py-2 text-roma-white/40 text-xs">
                  La tua email
                </div>
                <button className="bg-roma-purple text-roma-white rounded-pill px-4 py-2 text-xs font-medium hover:bg-roma-purple-light transition-colors">
                  GO
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal>
          <footer className="border-t border-roma-dark/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-roma-purple rounded-lg flex items-center justify-center">
                <span className="text-roma-white font-bold text-xs">RT</span>
              </div>
              <span className="text-roma-dark text-sm">{BRAND.name}</span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              {footerLinks.map((label, i) => (
                <button
                  key={label}
                  onClick={() =>
                    scrollToSection(
                      footerSectionIds[i] as (typeof SECTIONS)[number]["id"]
                    )
                  }
                  className="text-roma-dark/50 text-sm hover:text-roma-dark transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}
