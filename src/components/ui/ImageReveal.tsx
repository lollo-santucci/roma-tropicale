"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  className?: string;
  aspectRatio?: string;
}

export default function ImageReveal({
  className,
  aspectRatio = "aspect-[4/3]",
}: ImageRevealProps) {
  return (
    <motion.div
      className={cn("overflow-hidden rounded-card", className)}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className={cn("bg-roma-bg-alt w-full", aspectRatio)} />
    </motion.div>
  );
}
