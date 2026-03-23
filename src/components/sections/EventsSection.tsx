"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const archiveEvents = [
  {
    title: "Tropical Night",
    date: "15 Dic 2025",
    location: "The Hoxton, Roma",
    description: "Una serata di musica, cocktail plant-based e connessioni verdi.",
  },
  {
    title: "Green Market",
    date: "28 Nov 2025",
    location: "Trastevere",
    description: "Mercatino di prodotti sostenibili e workshop creativi.",
  },
  {
    title: "Plant Swap",
    date: "10 Ott 2025",
    location: "Pigneto",
    description: "Scambia le tue piante e incontra la community.",
  },
  {
    title: "Rooftop Botanico",
    date: "22 Set 2025",
    location: "W Hotel, Roma",
    description: "Aperitivo panoramico tra piante tropicali.",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg overflow-y-auto"
    >
      <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-24 lg:py-16 flex flex-col gap-10 lg:gap-14">
        {/* Hero */}
        <div className="pt-12 relative">
          <div className="bg-roma-bg-alt rounded-card aspect-[16/7] sm:aspect-[16/6] w-full flex items-end p-6 sm:p-10">
            <AnimatedText
              text="I nostri eventi"
              as="h2"
              className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark"
            />
          </div>
        </div>

        {/* Next event CTA */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-roma-dark">
              Stiamo pianificando il prossimo evento
            </p>
            <div className="flex gap-3">
              <button className="bg-roma-dark text-roma-white rounded-pill px-5 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity">
                EVENTI
              </button>
              <button className="border border-roma-dark text-roma-dark rounded-pill px-5 py-2.5 text-sm font-medium hover:bg-roma-dark hover:text-roma-white transition-colors">
                ARCHIVIO
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Archive grid */}
        <div>
          <ScrollReveal>
            <h3 className="text-roma-dark/50 text-sm tracking-widest uppercase mb-6">
              From the archive
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {archiveEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.08}>
                <div className="bg-roma-white rounded-card overflow-hidden group">
                  <div className="bg-roma-bg-alt aspect-[3/4]" />
                  <div className="p-4 sm:p-5">
                    <p className="text-roma-dark/50 text-xs mb-1">{event.date}</p>
                    <h4 className="font-[family-name:var(--font-display)] text-lg text-roma-dark mb-1">
                      {event.title}
                    </h4>
                    <p className="text-roma-dark/50 text-xs mb-2">{event.location}</p>
                    <p className="text-roma-dark/70 text-sm">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
