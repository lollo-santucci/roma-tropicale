"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { SECTIONS, type SectionId } from "@/lib/constants";

const SPRING_CONFIG = { damping: 30, stiffness: 200, mass: 1 };

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const rawX = useMotionValue(0);
  const springX = useSpring(rawX, SPRING_CONFIG);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Detect horizontal mode (lg breakpoint = 1024px)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsHorizontal(e.matches);
      if (!e.matches) {
        rawX.set(0);
      }
    };
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [rawX]);

  // Calculate max scroll
  const getMaxScroll = useCallback(() => {
    if (!containerRef.current) return 0;
    const totalWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    return -(totalWidth - viewportWidth);
  }, []);

  // Update active section based on scroll position
  const updateActiveSection = useCallback(
    (x: number) => {
      const vw = window.innerWidth;
      const index = Math.round(Math.abs(x) / vw);
      const clamped = Math.max(0, Math.min(index, SECTIONS.length - 1));
      setActiveSection(clamped);
    },
    []
  );

  // Wheel handler for horizontal scroll
  useEffect(() => {
    if (!isHorizontal) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const current = rawX.get();
      const maxScroll = getMaxScroll();
      const next = Math.max(maxScroll, Math.min(0, current - delta));

      rawX.set(next);
      updateActiveSection(next);

      // Debounce scroll end
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      isScrolling.current = true;
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isHorizontal, rawX, getMaxScroll, updateActiveSection]);

  // Touch handler for horizontal scroll
  useEffect(() => {
    if (!isHorizontal) return;

    let touchStartX = 0;
    let touchStartScrollX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartScrollX = rawX.get();
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      const delta = touchX - touchStartX;
      const maxScroll = getMaxScroll();
      const next = Math.max(maxScroll, Math.min(0, touchStartScrollX + delta));
      rawX.set(next);
      updateActiveSection(next);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isHorizontal, rawX, getMaxScroll, updateActiveSection]);

  const scrollToSection = useCallback(
    (sectionId: SectionId) => {
      const index = SECTIONS.findIndex((s) => s.id === sectionId);
      if (index === -1) return;

      if (isHorizontal) {
        const target = -(index * window.innerWidth);
        rawX.set(target);
        setActiveSection(index);
      } else {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(index);
      }
    },
    [isHorizontal, rawX]
  );

  return {
    containerRef,
    springX,
    isHorizontal,
    activeSection,
    scrollToSection,
  };
}
