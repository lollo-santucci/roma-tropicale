"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
      className="w-[280px] sm:w-[300px] shrink-0"
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxTranslateRef = useRef(0);

  useEffect(() => {
    function measure() {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const clientW = containerRef.current.clientWidth;
        const padL = parseFloat(
          getComputedStyle(containerRef.current).paddingLeft
        );
        // Scroll until last card + padding hits the right clip edge
        maxTranslateRef.current = Math.max(
          0,
          trackWidth - clientW + padL + padL
        );
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => -v * maxTranslateRef.current);

  return (
    <section id="highlights" ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div ref={containerRef} className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-12">
        {/* Header */}
        <div className="mb-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
              <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-1.2px] leading-[34px] shrink-0">
                Highlights
              </h2>
              <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={200}
                height={61}
                className="hidden lg:block shrink-0"
              />
              <p className="text-roma-dark text-base sm:text-lg lg:text-2xl">
                i nostri articoli preferiti, i prossimi eventi, ispirazioni
                botaniche, workshop a cui non puoi mancare!
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll track driven by vertical scroll */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-5"
        >
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard
              key={i}
              title={item.title}
              description={item.description}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
