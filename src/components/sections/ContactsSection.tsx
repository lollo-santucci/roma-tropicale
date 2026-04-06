"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DarkCard from "@/components/ui/DarkCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="min-h-screen bg-roma-bg px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="min-h-screen flex flex-col justify-between">
        {/* Top: say hi */}
        <div className="pt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end">
          <div className="flex-1">
            <AnimatedText
              text="say hi (:"
              as="h1"
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
            <div
              className="w-16 h-24 bg-roma-purple rounded-full"
              role="img"
              aria-label="Decorative purple shape"
            />
          </div>
        </div>

        {/* Collaborations card */}
        <ScrollReveal className="my-8 lg:my-12">
          <DarkCard
            title="Collaborazioni & Partnership"
            description="Lavoriamo con brand e realtà che condividono i nostri valori di sostenibilità e creatività."
            className="max-w-2xl"
          >
            <div className="flex flex-wrap gap-3 mt-6">
              {BRAND.partners.map((p) => (
                <span
                  key={p.name}
                  className="bg-roma-white/10 rounded-pill px-4 py-2 text-roma-white text-sm"
                >
                  {p.name}
                </span>
              ))}
            </div>
          </DarkCard>
        </ScrollReveal>

        {/* Social + Newsletter */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
          {/* Social */}
          <ScrollReveal>
            <div className="flex gap-4">
              <a
                href={BRAND.socials.instagram}
                aria-label="Instagram"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-roma-dark rounded-full flex items-center justify-center hover:bg-roma-purple transition-colors"
              >
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
              </a>
              <a
                href={BRAND.socials.spotify}
                aria-label="Spotify"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-roma-dark rounded-full flex items-center justify-center hover:bg-roma-purple transition-colors"
              >
                <Image src="/icons/spotify.svg" alt="" width={20} height={20} />
              </a>
              <a
                href={BRAND.socials.linkedin}
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-roma-dark rounded-full flex items-center justify-center hover:bg-roma-purple transition-colors"
              >
                <Image src="/icons/linkedin.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </ScrollReveal>

          {/* Newsletter compact */}
          <ScrollReveal delay={0.1} className="flex-1 max-w-sm">
            <DarkCard className="p-4 sm:p-5">
              <p className="text-roma-white text-sm mb-3">Newsletter</p>
              <NewsletterForm variant="compact" />
            </DarkCard>
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
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-roma-dark/50 text-sm hover:text-roma-dark transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}
