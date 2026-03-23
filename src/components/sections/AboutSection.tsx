"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { BRAND } from "@/lib/constants";

const values = [
  "Plant-Based",
  "Community",
  "Sustainability",
  "Creativity",
  "Inclusivity",
  "Local",
];

const teamMembers = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  name: `Member ${i + 1}`,
  role: "Creative",
}));

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg-alt overflow-y-auto"
    >
      <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-24 lg:py-16 flex flex-col gap-12 lg:gap-16">
        {/* Header */}
        <div className="pt-12">
          <ScrollReveal>
            <span className="text-roma-dark/50 text-sm tracking-widest uppercase">
              About us
            </span>
          </ScrollReveal>
          <AnimatedText
            text="Siamo una community creativa plant-based radicata a Roma"
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark max-w-3xl mt-4"
          />
        </div>

        {/* Description + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
              {BRAND.tagline}. Organizziamo eventi, workshop e attività creative che
              connettono persone attraverso la cultura plant-based, il design e la
              sostenibilità. Il nostro obiettivo è costruire una rete di connessioni
              verdi nella città eterna.
            </p>
          </ScrollReveal>
          <ImageReveal className="w-full" aspectRatio="aspect-[3/4]" />
        </div>

        {/* Values pills */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {values.map((v) => (
              <span
                key={v}
                className="bg-roma-dark text-roma-white rounded-pill px-4 py-2 text-sm sm:text-base"
              >
                {v}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Team */}
        <div>
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-roma-dark mb-6">
              Team & Network
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {teamMembers.map((m) => (
              <ScrollReveal key={m.id} delay={m.id * 0.05}>
                <div className="flex flex-col gap-3">
                  <div className="bg-roma-bg rounded-card aspect-square" />
                  <p className="text-roma-dark font-medium text-sm">{m.name}</p>
                  <p className="text-roma-dark/50 text-xs">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Partners */}
        <ScrollReveal className="pb-8">
          <div className="bg-roma-dark rounded-card p-6 sm:p-8">
            <p className="text-roma-white/60 text-sm tracking-widest uppercase mb-4">
              Collaborazioni & Partner
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {BRAND.partners.map((p) => (
                <div
                  key={p}
                  className="bg-roma-white/10 rounded-pill px-5 py-2 text-roma-white text-sm"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
