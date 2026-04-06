"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageReveal from "@/components/ui/ImageReveal";
import PillButton from "@/components/ui/PillButton";
import DarkCard from "@/components/ui/DarkCard";
import { BRAND, TEAM_MEMBERS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-roma-bg-alt px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-12 lg:gap-16">
        {/* Page Header */}
        <SectionHeader
          label="About us"
          heading="Siamo una community creativa plant-based radicata a Roma"
          as="h1"
          className="pt-12"
        />

        {/* Manifesto + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <p className="text-roma-dark/70 text-base sm:text-lg leading-relaxed">
              {BRAND.tagline}. Organizziamo eventi, workshop e attività creative
              che connettono persone attraverso la cultura plant-based, il design
              e la sostenibilità. Il nostro obiettivo è costruire una rete di
              connessioni verdi nella città eterna.
            </p>
          </ScrollReveal>
          <div role="img" aria-label="Brand photo placeholder">
            <ImageReveal
              className="w-full"
              aspectRatio="aspect-[3/4]"
            />
          </div>
        </div>

        {/* Navigation Pills */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-3">
            <PillButton href="/events">EVENTS</PillButton>
            <PillButton href="/academy">ACADEMY</PillButton>
            <PillButton href="/membership">MEMBERSHIP</PillButton>
          </div>
        </ScrollReveal>

        {/* Team & Network */}
        <div>
          <SectionHeader heading="Team & Network" as="h2" className="mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TEAM_MEMBERS.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.05}>
                <div className="flex flex-col gap-3">
                  <div
                    className="bg-roma-bg rounded-card aspect-square"
                    role="img"
                    aria-label="Team member photo placeholder"
                  />
                  <p className="text-roma-dark font-medium text-sm">
                    {m.name}
                  </p>
                  <p className="text-roma-dark/50 text-xs">{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Partners */}
        <ScrollReveal>
          <DarkCard title="Collaborazioni & Partner">
            <div className="flex flex-wrap gap-6 items-center mt-4">
              {BRAND.partners.map((p) => (
                <div
                  key={p}
                  className="bg-roma-white/10 rounded-pill px-5 py-2 text-roma-white text-sm"
                >
                  {p}
                </div>
              ))}
            </div>
          </DarkCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
