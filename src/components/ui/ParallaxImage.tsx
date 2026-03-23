"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  className?: string;
  speed?: number;
  aspectRatio?: string;
}

export default function ParallaxImage({
  className,
  speed = 0.2,
  aspectRatio = "aspect-[4/3]",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={cn("overflow-hidden rounded-card", className)}>
      <motion.div
        style={{ y }}
        className={cn("bg-roma-bg-alt w-full scale-110", aspectRatio)}
      />
    </div>
  );
}
