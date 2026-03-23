"use client";

import HorizontalScroll from "@/components/layout/HorizontalScroll";
import Navigation from "@/components/layout/Navigation";
import { SECTIONS } from "@/lib/constants";

const SECTION_COLORS = [
  "bg-roma-bg",
  "bg-roma-bg-alt",
  "bg-roma-bg",
  "bg-roma-bg-alt",
  "bg-roma-bg",
  "bg-roma-bg-alt",
  "bg-roma-bg",
];

export default function Home() {
  return (
    <HorizontalScroll>
      <Navigation />
      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-screen flex-shrink-0 min-h-screen flex items-center justify-center ${SECTION_COLORS[i]}`}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl text-roma-dark">
            {section.label}
          </h2>
        </section>
      ))}
    </HorizontalScroll>
  );
}
