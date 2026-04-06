"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function AnimatedText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("flex flex-wrap", className?.includes("text-right") && "justify-end", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
