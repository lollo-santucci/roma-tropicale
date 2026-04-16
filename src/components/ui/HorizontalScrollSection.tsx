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
      <div ref={containerRef} className={`sticky top-0 h-screen flex flex-col justify-start pt-20 overflow-hidden px-10 sm:px-20 lg:px-32 z-10 ${transparent ? "" : "bg-roma-bg"}`}>
        {/* Header */}
        <div className="mb-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8">
              <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] text-roma-dark tracking-[-1.2px] leading-[34px] shrink-0">
                {title}
              </h2>
              <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={200}
                height={61}
                className="hidden lg:block shrink-0"
              />
              <p className="text-roma-dark text-base sm:text-lg lg:text-2xl">
                {description}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal scroll track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex gap-5"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
