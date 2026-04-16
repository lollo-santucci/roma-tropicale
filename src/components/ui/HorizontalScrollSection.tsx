"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface HorizontalScrollSectionProps {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
  transparent?: boolean;
}

export default function HorizontalScrollSection({
  id,
  title,
  description,
  children,
  transparent = false,
}: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxTranslateRef = useRef(0);
  const [sectionHeight, setSectionHeight] = useState("300vh");

  useEffect(() => {
    function measure() {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const clientW = containerRef.current.clientWidth;
        const padL = parseFloat(
          getComputedStyle(containerRef.current).paddingLeft
        );
        maxTranslateRef.current = Math.max(
          0,
          trackWidth - clientW + padL + padL
        );
        const h = window.innerHeight + maxTranslateRef.current;
        setSectionHeight(`${h}px`);
      }
    }
    measure();
    window.addEventListener("resize", measure);

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => -v * maxTranslateRef.current);

  return (
    <section id={id} ref={sectionRef} className="relative" style={{ height: sectionHeight }}>
      <div ref={containerRef} className={`sticky top-0 h-screen flex flex-col justify-start pt-14 sm:pt-16 lg:pt-20 overflow-hidden px-6 sm:px-10 lg:px-16 z-10 ${transparent ? "" : "bg-roma-bg"}`}>
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start w-full gap-3 lg:gap-12">
              <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] lg:text-[44px] text-roma-dark tracking-[-1.2px] leading-[0.95] shrink-0">
                {title}
              </h2>
              <div className="flex items-end gap-6 lg:max-w-[52ch]">
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={120}
                  height={36}
                  className="hidden lg:block shrink-0 self-center"
                />
                <p className="text-roma-dark text-base sm:text-lg leading-snug text-pretty">
                  {description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex gap-4 sm:gap-5 items-start"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
