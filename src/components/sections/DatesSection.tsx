"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import EditableImage from "@/components/admin/EditableImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EVENT_DATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HOVER_TRANSITION =
  "scale 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms ease-out, box-shadow 900ms cubic-bezier(0.16, 1, 0.3, 1)";

const ACTIVE_TRANSITION = "scale 160ms cubic-bezier(0.23, 1, 0.32, 1)";

const STAGGER = 0.08;
const ENTER_DURATION = 0.55;
const ENTER_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function supportsHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function TicketBadge({ active = false }: { active?: boolean }) {
  return (
    <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3">
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-pill bg-roma-purple px-2.5 py-1",
          "text-[9px] sm:text-[10px] tracking-[0.6px] font-medium uppercase text-roma-white",
          "shadow-[0_3px_12px_-4px_rgba(0,0,0,0.3)]"
        )}
      >
        Biglietto
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          width="9"
          height="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "motion-safe:transition-transform motion-safe:duration-[500ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
            active && "motion-safe:translate-x-[2px]"
          )}
        >
          <path d="M2.75 6h6.5M6.5 3.25 9.25 6 6.5 8.75" />
        </svg>
      </span>
    </div>
  );
}

export default function DatesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pressed, setPressed] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  if (EVENT_DATES.length === 0) return null;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : STAGGER,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: ENTER_DURATION, ease: ENTER_EASE },
    },
  };

  return (
    <div className="py-6 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[40px] lg:text-[44px] text-roma-dark tracking-[-1.2px] leading-[0.95] mb-8 sm:mb-10 lg:mb-12">
            Le date
          </h2>
        </ScrollReveal>

        {/* Desktop — staggered hover scale with sibling de-emphasis */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="hidden lg:grid grid-cols-3 gap-6"
          onMouseLeave={() => setHovered(null)}
        >
          {EVENT_DATES.map((d, i) => {
            const isHovered = hovered === i;
            const isOther = hovered !== null && !isHovered;
            const isPressed = pressed === i;
            const Tag = d.registrationUrl ? "a" : "div";

            const scaleClass = isPressed
              ? "scale-[0.97]"
              : isHovered
                ? "motion-safe:scale-[1.2]"
                : isOther
                  ? "motion-safe:scale-[0.9]"
                  : "";

            return (
              <motion.div key={i} variants={itemVariants}>
                <Tag
                  {...(d.registrationUrl
                    ? {
                        href: d.registrationUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  onMouseEnter={() => {
                    if (supportsHover()) setHovered(i);
                  }}
                  onPointerDown={() => setPressed(i)}
                  onPointerUp={() => setPressed(null)}
                  onPointerCancel={() => setPressed(null)}
                  onPointerLeave={() => setPressed(null)}
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden bg-[#d1d1d1] block transform-gpu",
                    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-roma-purple",
                    d.registrationUrl && "cursor-pointer",
                    scaleClass,
                    isHovered && "z-10",
                    isOther && "opacity-80"
                  )}
                  style={{
                    transition: isPressed ? ACTIVE_TRANSITION : HOVER_TRANSITION,
                    boxShadow: isHovered
                      ? "0 24px 48px -16px rgba(0,0,0,0.25)"
                      : "0 0 0 0 rgba(0,0,0,0)",
                    willChange: "scale, opacity",
                  }}
                >
                  <EditableImage
                    path={`dates[${i}].image`}
                    src={d.image}
                    alt={`Locandina data ${i + 1}`}
                    fill
                  >
                    {d.image ? (
                      <Image
                        src={d.image}
                        alt={`Locandina data ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 0px, 33vw"
                        className="object-cover"
                      />
                    ) : null}
                  </EditableImage>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-roma-purple pointer-events-none mix-blend-multiply"
                    style={{
                      opacity: isOther ? 0.15 : 0,
                      transition: "opacity 650ms ease-out",
                    }}
                  />
                  {d.registrationUrl && <TicketBadge active={isHovered} />}
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile — staggered swipe-snap cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 sm:-mx-10 px-6 sm:px-10 scroll-pl-6 sm:scroll-pl-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {EVENT_DATES.map((d, i) => {
            const Tag = d.registrationUrl ? "a" : "div";
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="snap-start shrink-0 w-[82%] sm:w-[68%]"
              >
                <Tag
                  {...(d.registrationUrl
                    ? {
                        href: d.registrationUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={cn(
                    "aspect-[4/5] relative overflow-hidden bg-[#d1d1d1] block transform-gpu",
                    "transition-[scale] duration-[160ms] ease-out",
                    "motion-safe:active:scale-[0.98]",
                    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-roma-purple"
                  )}
                >
                  <EditableImage
                    path={`dates[${i}].image`}
                    src={d.image}
                    alt={`Locandina data ${i + 1}`}
                    fill
                  >
                    {d.image ? (
                      <Image
                        src={d.image}
                        alt={`Locandina data ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 82vw, 68vw"
                        className="object-cover"
                      />
                    ) : null}
                  </EditableImage>
                  {d.registrationUrl && <TicketBadge />}
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
