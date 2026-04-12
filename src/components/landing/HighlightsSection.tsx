"use client";

import { motion } from "framer-motion";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";
import { HIGHLIGHTS } from "@/lib/constants";

const PLACEHOLDER_COLORS = [
  "bg-emerald-100",
  "bg-amber-100",
  "bg-rose-100",
  "bg-sky-100",
  "bg-violet-100",
  "bg-lime-100",
];

function HighlightCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-[280px] sm:w-[300px] lg:w-[430px] 2xl:w-[600px] shrink-0"
    >
      <div
        className={`w-full aspect-square overflow-hidden ${PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]}`}
      >
        <div className="w-full h-full flex items-end p-4">
          <span className="text-roma-dark/15 text-[10px] uppercase tracking-wider">
            Image
          </span>
        </div>
      </div>
      <div className="w-full h-px bg-roma-dark/20 my-3" />
      <h3 className="text-sm font-bold text-roma-dark mb-1">{title}</h3>
      <p className="text-xs text-roma-dark/50 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function HighlightsSection() {
  return (
    <HorizontalScrollSection
      id="highlights"
      title="Highlights"
      description="i nostri articoli preferiti, i prossimi eventi, ispirazioni botaniche, workshop a cui non puoi mancare!"
      transparent
    >
      {HIGHLIGHTS.map((item, i) => (
        <HighlightCard
          key={i}
          title={item.title}
          description={item.description}
          index={i}
        />
      ))}
    </HorizontalScrollSection>
  );
}
