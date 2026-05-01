"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAdmin, useEditableValue } from "@/components/admin/AdminContext";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  editablePath?: string;
}

export default function AnimatedText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  editablePath,
}: AnimatedTextProps) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { enabled, update } = useAdmin();
  const editableValue = useEditableValue<string>(editablePath ?? "", text);
  const effective = editablePath ? editableValue : text;
  const words = effective.split(" ");

  useEffect(() => {
    if (!enabled || !editablePath) return;
    const el = ref.current;
    if (!el) return;
    if (el.innerText !== effective) el.innerText = effective;
  }, [enabled, editablePath, effective]);

  if (enabled && editablePath) {
    return (
      <Tag
        ref={ref as never}
        className={cn(
          className,
          "outline-dashed outline-1 outline-yellow-500/60 hover:outline-yellow-500 focus:outline-blue-500 focus:outline-2 rounded-sm"
        )}
        contentEditable
        suppressContentEditableWarning
        data-admin-path={editablePath}
        onBlur={(e) => update(editablePath, (e.currentTarget as HTMLElement).innerText)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            (e.currentTarget as HTMLElement).blur();
          }
        }}
      >
        {effective}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={cn("flex flex-wrap", className?.includes("text-right") && "justify-end", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em] pb-[0.2em] -mb-[0.2em]">
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
