"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { type SectionId } from "@/lib/constants";

interface ScrollContextValue {
  activeSection: number;
  scrollToSection: (id: SectionId) => void;
  isHorizontal: boolean;
}

const ScrollContext = createContext<ScrollContextValue>({
  activeSection: 0,
  scrollToSection: () => {},
  isHorizontal: false,
});

export const useScrollContext = () => useContext(ScrollContext);

interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const { containerRef, springX, isHorizontal, activeSection, scrollToSection } =
    useHorizontalScroll();

  return (
    <ScrollContext.Provider value={{ activeSection, scrollToSection, isHorizontal }}>
      {isHorizontal ? (
        <div className="fixed inset-0 overflow-hidden">
          <motion.div
            ref={containerRef}
            style={{ x: springX }}
            className="flex h-screen"
          >
            {children}
          </motion.div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </ScrollContext.Provider>
  );
}
