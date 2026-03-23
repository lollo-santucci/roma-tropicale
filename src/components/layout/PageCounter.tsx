"use client";

import { useScrollContext } from "./HorizontalScroll";
import { SECTIONS } from "@/lib/constants";

export default function PageCounter() {
  const { activeSection } = useScrollContext();
  const current = String(activeSection + 1).padStart(2, "0");
  const total = String(SECTIONS.length).padStart(2, "0");

  return (
    <div className="hidden lg:block fixed bottom-8 left-8 z-50 font-[family-name:var(--font-display)] text-sm text-roma-dark/60 tracking-widest">
      <span className="text-roma-dark">{current}</span>
      <span> / {total}</span>
    </div>
  );
}
