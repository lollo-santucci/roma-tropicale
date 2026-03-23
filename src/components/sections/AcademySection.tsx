"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageReveal from "@/components/ui/ImageReveal";

const educators = [
  "Luca R.",
  "Marta B.",
  "Giulia F.",
  "Andrea P.",
  "Sara M.",
  "Davide C.",
  "Elena T.",
  "Marco V.",
];

export default function AcademySection() {
  return (
    <section
      id="academy"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg-alt overflow-y-auto"
    >
      <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-24 lg:py-16 flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div className="pt-12 flex flex-col lg:flex-row gap-8 items-start lg:items-end">
          <div className="flex-1">
            <ScrollReveal>
              <span className="text-roma-purple font-bold text-sm tracking-widest uppercase">
                Academy Tropicale
              </span>
            </ScrollReveal>
            <AnimatedText
              text="learn."
              as="h2"
              className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-8xl text-roma-dark mt-2"
            />
          </div>
          {/* Orchid placeholder */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-roma-purple/20 rounded-full flex items-center justify-center">
            <span className="text-roma-purple text-4xl">🌺</span>
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ScrollReveal>
            <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
              L&apos;Academy Tropicale è il nostro programma educativo dedicato alla
              cultura plant-based, al design sostenibile e alla creatività. Workshop
              pratici, corsi intensivi e masterclass con i migliori professionisti del
              settore.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <button className="bg-roma-dark text-roma-white rounded-pill px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity">
              SCOPRI I CORSI
            </button>
          </ScrollReveal>
        </div>

        {/* Il nostro Organico */}
        <div>
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-roma-dark mb-6">
              Il nostro Organico
            </h3>
          </ScrollReveal>
          <ImageReveal className="w-full max-w-2xl" aspectRatio="aspect-[16/9]" />
        </div>

        {/* Educators grid */}
        <div>
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-roma-dark mb-6">
              I nostri Educatori Creativi
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {educators.map((name, i) => (
              <ScrollReveal key={name} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-roma-bg rounded-full w-20 h-20 sm:w-24 sm:h-24" />
                  <p className="text-roma-dark text-sm font-medium text-center">
                    {name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
