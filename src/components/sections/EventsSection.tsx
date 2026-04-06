"use client";

import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import { ARCHIVE_EVENTS } from "@/lib/constants";

const CARD_COLORS = [
  "bg-amber-100",
  "bg-emerald-100",
  "bg-orange-100",
  "bg-lime-100",
] as const;

export default function EventsSection() {
  const [view, setView] = useState<"home" | "archive">("home");

  return (
    <section
      id="events"
      className="bg-roma-bg px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-10 lg:gap-14">
        {/* Page heading */}
        <AnimatedText
          text="I nostri eventi"
          as="h1"
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark"
        />

        {/* Hero placeholder */}
        <ScrollReveal>
          <div className="relative">
            <div
              className="bg-roma-dark rounded-card aspect-[16/9] lg:aspect-[16/7] w-full"
              role="img"
              aria-label="Event hero placeholder"
            />
            <p className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 font-[family-name:var(--font-display)] text-lg sm:text-xl lg:text-2xl text-roma-white italic">
              stiamo pianificando il prossimo evento
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle buttons */}
        <ScrollReveal>
          <div className="flex gap-3">
            <PillButton
              variant={view === "home" ? "primary" : "outlined"}
              onClick={() => setView("home")}
            >
              HOME
            </PillButton>
            <PillButton
              variant={view === "archive" ? "primary" : "outlined"}
              onClick={() => setView("archive")}
            >
              ARCHIVE
            </PillButton>
          </div>
        </ScrollReveal>

        {/* Conditional view rendering */}
        {view === "home" ? (
          /* Home View */
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-roma-dark">
                Stiamo pianificando il prossimo evento
              </p>
            </div>
          </ScrollReveal>
        ) : (
          /* Archive View */
          <div>
            <ScrollReveal>
              <h2 className="text-roma-dark/50 text-sm tracking-widest uppercase mb-6">
                From the archive
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {ARCHIVE_EVENTS.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 0.08}>
                  <div className="bg-roma-white rounded-card overflow-hidden group">
                    <div
                      className={`aspect-[3/4] ${CARD_COLORS[i % CARD_COLORS.length]} rounded-t-card`}
                      role="img"
                      aria-label="Event poster placeholder"
                    />
                    <div className="p-4 sm:p-5">
                      <p className="text-roma-dark/50 text-xs mb-1">
                        {event.date}
                      </p>
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-roma-dark mb-1">
                        {event.title}
                      </h3>
                      <p className="text-roma-dark/50 text-xs mb-2">
                        {event.location}
                      </p>
                      <p className="text-roma-dark/70 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
