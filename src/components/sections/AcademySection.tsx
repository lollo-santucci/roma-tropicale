"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import PillButton from "@/components/ui/PillButton";
import { EDUCATORS } from "@/lib/constants";

export default function AcademySection() {
  return (
    <section
      id="academy"
      className="bg-roma-bg-alt px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-12 lg:gap-16">
        {/* Header: SectionHeader + orchid placeholder */}
        <div className="pt-12 flex flex-col lg:flex-row gap-8 items-start lg:items-end">
          <div className="flex-1">
            <SectionHeader
              label="Academy Tropicale"
              heading="learn."
              as="h1"
            />
          </div>
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 bg-roma-purple/20 rounded-full flex items-center justify-center"
            role="img"
            aria-label="Orchid decorative placeholder"
          >
            <span className="text-roma-purple text-4xl">🌺</span>
          </div>
        </div>

        {/* Hero: ImageReveal 16:9 + "tera" branding */}
        <div className="relative">
          <div role="img" aria-label="Academy hero image placeholder">
            <ImageReveal className="w-full" aspectRatio="aspect-[16/9]" />
          </div>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-roma-dark/50 text-sm tracking-widest uppercase">
              tera
            </p>
          </ScrollReveal>
        </div>

        {/* Two side-by-side content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: cos'è Academy Tropicale */}
          <div className="flex flex-col gap-4">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-roma-dark">
                cos&apos;è Academy Tropicale
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
                L&apos;Academy Tropicale è il nostro programma educativo dedicato alla
                cultura plant-based, al design sostenibile e alla creatività. Workshop
                pratici, corsi intensivi e masterclass con i migliori professionisti del
                settore.
              </p>
            </ScrollReveal>
            <div role="img" aria-label="Academy Tropicale course photo placeholder">
              <ImageReveal className="w-full" aspectRatio="aspect-[3/4]" />
            </div>
          </div>

          {/* Right: Iconic Essentials */}
          <div className="flex flex-col gap-4">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-roma-dark">
                Iconic Essentials
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
                Un percorso intensivo sulle basi della cultura tropicale urbana:
                dalla cura delle piante al design degli spazi verdi, passando per
                la sostenibilità e la creatività.
              </p>
            </ScrollReveal>
            <div role="img" aria-label="Iconic Essentials course photo placeholder">
              <ImageReveal className="w-full" aspectRatio="aspect-[3/4]" />
            </div>
          </div>
        </div>

        {/* Cosa include il corso */}
        <div>
          <SectionHeader heading="cosa include il corso" as="h2" className="mb-6" />
          <ScrollReveal>
            <ul className="list-disc list-inside text-roma-dark/70 text-base sm:text-lg leading-relaxed space-y-2">
              <li>Workshop pratici con educatori professionisti</li>
              <li>Materiali e strumenti inclusi</li>
              <li>Accesso alla community esclusiva</li>
              <li>Certificato di partecipazione</li>
              <li>Supporto post-corso dedicato</li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Educators */}
        <div>
          <SectionHeader
            heading="I nostri Educatori Creativi"
            as="h2"
            className="mb-6"
          />
          <div className="flex flex-wrap gap-6">
            {EDUCATORS.map((educator, i) => (
              <ScrollReveal key={educator.name} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="bg-roma-bg rounded-full w-20 h-20 sm:w-24 sm:h-24"
                    role="img"
                    aria-label={`${educator.name} educator photo placeholder`}
                  />
                  <p className="text-roma-dark text-sm font-medium text-center">
                    {educator.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <PillButton href="/contacts">SCOPRI I CORSI</PillButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
