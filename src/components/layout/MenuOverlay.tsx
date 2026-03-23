"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS, type SectionId } from "@/lib/constants";
import { useScrollContext } from "./HorizontalScroll";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const linkVariants = {
  closed: { opacity: 0, y: 30 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const { scrollToSection, activeSection } = useScrollContext();

  const handleClick = (id: SectionId) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-roma-bg/95 backdrop-blur-sm flex items-center justify-center"
        >
          <nav className="flex flex-col gap-4 sm:gap-6 text-center">
            {SECTIONS.map((section, i) => (
              <motion.button
                key={section.id}
                custom={i}
                variants={linkVariants}
                initial="closed"
                animate="open"
                onClick={() => handleClick(section.id)}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] transition-colors ${
                  activeSection === i
                    ? "text-roma-purple"
                    : "text-roma-dark hover:text-roma-purple-light"
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
