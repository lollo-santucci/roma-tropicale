"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

// Scattered collage layout — each item has position, size, and scroll-driven effects
// scrollScale: [start, mid, end] scale values as scroll progresses
// scrollRotate: [start, end] rotation in degrees as scroll progresses
const ASSETS: {
  type: "image" | "video";
  label: string;
  top: string;
  left: string;
  w: string;
  h: string;
  rotate?: number;
  zIndex?: number;
  scrollScale?: [number, number, number];
  scrollRotate?: [number, number];
}[] = [
  { type: "image", label: "Plants", top: "0%", left: "5%", w: "22%", h: "280px", rotate: -1, scrollScale: [0.9, 1.05, 0.95], scrollRotate: [-3, 2] },
  { type: "image", label: "Garden", top: "2%", left: "30%", w: "18%", h: "240px", rotate: 1, scrollScale: [0.95, 1, 0.9], scrollRotate: [2, -1] },
  { type: "image", label: "Pool", top: "0%", left: "55%", w: "20%", h: "260px", scrollScale: [0.88, 1.02, 0.96], scrollRotate: [0, 5] },
  { type: "image", label: "Portrait", top: "5%", left: "78%", w: "18%", h: "250px", rotate: 2, scrollScale: [0.92, 1.08, 0.94], scrollRotate: [4, -2] },
  { type: "video", label: "Event", top: "35%", left: "0%", w: "20%", h: "260px", scrollScale: [0.9, 1, 1.06], scrollRotate: [-2, 3] },
  { type: "image", label: "Nature", top: "30%", left: "22%", w: "16%", h: "220px", rotate: -2, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-4, 1] },
  { type: "image", label: "Studio", top: "32%", left: "42%", w: "22%", h: "280px", rotate: 1, scrollScale: [0.88, 1, 1.1], scrollRotate: [1, -45] },
  { type: "image", label: "Workshop", top: "28%", left: "68%", w: "16%", h: "230px", scrollScale: [0.92, 1.06, 0.98], scrollRotate: [0, -2] },
  { type: "image", label: "People", top: "38%", left: "86%", w: "14%", h: "200px", rotate: -1, scrollScale: [0.96, 1, 0.88], scrollRotate: [-1, 4] },
  { type: "image", label: "Tropical", top: "62%", left: "8%", w: "18%", h: "250px", rotate: 2, scrollScale: [0.9, 1.08, 1], scrollRotate: [3, -2] },
  { type: "video", label: "Reel", top: "65%", left: "30%", w: "15%", h: "200px", scrollScale: [0.94, 1, 1.04], scrollRotate: [-2, 2] },
  { type: "image", label: "Interior", top: "60%", left: "50%", w: "20%", h: "270px", rotate: -1, scrollScale: [0.88, 1.06, 0.94], scrollRotate: [2, -4] },
  { type: "image", label: "Market", top: "66%", left: "74%", w: "22%", h: "240px", rotate: 1, scrollScale: [0.92, 1, 1.08], scrollRotate: [-3, 3] },
];

function AssetItem({
  asset,
  index,
}: {
  asset: (typeof ASSETS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    asset.scrollScale ?? [0.92, 1, 0.96]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    asset.scrollRotate ?? [0, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const baseRotate = asset.rotate ?? 0;
  const combinedRotate = useTransform(rotate, (r) => baseRotate + r);

  return (
    <motion.div
      ref={ref}
      style={{
        top: asset.top,
        left: asset.left,
        width: asset.w,
        height: asset.h,
        rotate: combinedRotate,
        zIndex: asset.zIndex ?? index,
        y,
        scale,
        opacity,
      }}
      className="absolute rounded-xl overflow-hidden bg-roma-bg-alt"
    >
      {asset.type === "video" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-roma-dark/5">
          <div className="w-10 h-10 rounded-full bg-roma-white/80 flex items-center justify-center shadow-sm">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-roma-dark border-b-[6px] border-b-transparent ml-0.5" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-roma-dark/[0.03] flex items-end p-3">
          <span className="text-roma-dark/15 text-[10px] uppercase tracking-wider">
            {asset.label}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function AssetsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.4]);
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.06, 0.06, 0]
  );

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-10 overflow-hidden">
      {/* Background watermark logo — fixed to viewport center */}
      <motion.div
        style={{ scale: logoScale, opacity: logoOpacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      >
        <Image
          src="/imgs/logo-romatropicale.svg"
          alt=""
          width={600}
          height={660}
          className="w-[300px] sm:w-[450px] lg:w-[600px] h-auto select-none"
        />
      </motion.div>

      {/* Collage container — relative with fixed aspect ratio */}
      <div className="relative w-full max-w-6xl mx-auto" style={{ height: "clamp(600px, 120vw, 1400px)" }}>
        {ASSETS.map((asset, i) => (
          <AssetItem key={i} asset={asset} index={i} />
        ))}
      </div>
    </section>
  );
}
