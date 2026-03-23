"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BRAND } from "@/lib/constants";

const highlights = [
  "Community Events",
  "Plant-Based Workshops",
  "Creative Academy",
  "Exclusive Merch",
];

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg relative overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col px-6 sm:px-10 lg:px-16 py-24 lg:py-16 justify-between">
        {/* Top: Logo + tagline */}
        <div className="flex flex-col gap-6 pt-12">
          {/* Logo placeholder */}
          <ScrollReveal>
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-roma-purple rounded-card flex items-center justify-center">
              <span className="text-roma-white font-bold text-3xl sm:text-4xl font-[family-name:var(--font-display)]">
                RT
              </span>
            </div>
          </ScrollReveal>

          <AnimatedText
            text={BRAND.description}
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-roma-dark max-w-2xl"
          />

          <ScrollReveal delay={0.3}>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-roma-dark/60 text-base sm:text-lg hover:text-roma-purple transition-colors"
            >
              {BRAND.email}
            </a>
          </ScrollReveal>
        </div>

        {/* Moodboard grid */}
        <ScrollReveal delay={0.2} className="my-8 lg:my-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`bg-roma-bg-alt rounded-card ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
          {highlights.map((h, i) => (
            <ScrollReveal key={h} delay={0.1 * i}>
              <div className="bg-roma-dark text-roma-white rounded-pill px-5 py-2.5 text-sm sm:text-base whitespace-nowrap">
                {h}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter card */}
        <ScrollReveal delay={0.3} className="mt-8">
          <div className="bg-roma-dark rounded-card p-6 sm:p-8 max-w-md">
            <p className="text-roma-white text-lg sm:text-xl font-[family-name:var(--font-display)] mb-3">
              Stay in the loop
            </p>
            <p className="text-roma-white/60 text-sm mb-4">
              Iscriviti alla newsletter per rimanere aggiornato su eventi e novità.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-roma-white/10 rounded-pill px-4 py-2.5 text-roma-white/40 text-sm">
                La tua email
              </div>
              <button className="bg-roma-purple text-roma-white rounded-pill px-5 py-2.5 text-sm font-medium hover:bg-roma-purple-light transition-colors">
                ISCRIVITI
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll arrow */}
        <ScrollReveal delay={0.5} className="mt-8 flex justify-center lg:justify-start">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-roma-dark/40 text-2xl"
          >
            ↓
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
