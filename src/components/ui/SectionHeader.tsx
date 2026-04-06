"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  as = "h1",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(className)}>
      {label && (
        <ScrollReveal>
          <span className="text-roma-dark/50 text-sm tracking-widest uppercase">
            {label}
          </span>
        </ScrollReveal>
      )}
      <AnimatedText
        text={heading}
        as={as}
        className={cn(
          "font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark",
          label && "mt-4"
        )}
      />
    </div>
  );
}
