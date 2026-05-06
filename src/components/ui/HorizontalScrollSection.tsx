"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface HorizontalScrollSectionProps {
  id?: string;
  title: string;
  description: string;
  children: ReactNode;
  transparent?: boolean;
}

function SectionHeader({
  title,
  description,
}: Pick<HorizontalScrollSectionProps, "title" | "description">) {
  return (
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
  );
}

export default function HorizontalScrollSection({
  id,
  title,
  description,
  children,
  transparent = false,
}: HorizontalScrollSectionProps) {
  return (
    <div id={id}>
      <MobileScroll
        title={title}
        description={description}
        transparent={transparent}
        className="lg:hidden"
      >
        {children}
      </MobileScroll>
      <DesktopScroll
        title={title}
        description={description}
        transparent={transparent}
        className="hidden lg:block"
      >
        {children}
      </DesktopScroll>
    </div>
  );
}

interface VariantProps
  extends Omit<HorizontalScrollSectionProps, "id"> {
  className?: string;
}

function MobileScroll({
  title,
  description,
  children,
  transparent,
  className,
}: VariantProps) {
  return (
    <section
      className={cn(
        "pt-12 sm:pt-14 pb-10 sm:pb-12",
        transparent ? "" : "bg-roma-bg",
        className
      )}
    >
      <div className="px-6 sm:px-10 mb-6 sm:mb-8">
        <SectionHeader title={title} description={description} />
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 px-6 sm:px-10 scroll-pl-6 sm:scroll-pl-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>*]:snap-start">
        {children}
      </div>
    </section>
  );
}

function DesktopScroll({
  title,
  description,
  children,
  transparent,
  className,
}: VariantProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxTranslateRef = useRef(0);
  const [sectionHeight, setSectionHeight] = useState("100vh");

  useEffect(() => {
    function measure() {
      if (!trackRef.current || !containerRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const clientW = containerRef.current.clientWidth;
      if (clientW === 0) return; // hidden — skip
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
    <section
      ref={sectionRef}
      className={cn("relative", className)}
      style={{ height: sectionHeight }}
    >
      <div
        ref={containerRef}
        className={cn(
          "sticky top-0 h-screen flex flex-col justify-start pt-14 sm:pt-16 lg:pt-20 overflow-hidden px-6 sm:px-10 lg:px-16 z-10",
          transparent ? "" : "bg-roma-bg"
        )}
      >
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <SectionHeader title={title} description={description} />
        </div>
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
