"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Asset = {
  type: "image" | "video";
  src: string;
  label: string;
  top: string;
  left: string;
  w: string;
  ratio: string;       // aspect-ratio, e.g. "3/4", "1/1", "16/9"
  rotate?: number;
  zIndex?: number;
  scrollScale?: [number, number, number];
  scrollRotate?: [number, number];
  radius?: string;
};

// ── Desktop layout (lg+): 13 items, 4-col scattered collage ──
// w = quanto è largo (% del container)
// ratio = che forma ha (larghezza/altezza)
const ASSETS_DESKTOP: Asset[] = [
  { type: "video", src: "/landing/landing-08.mp4", label: "Plants", top: "0%", left: "5%", w: "22%", ratio: "5/9", rotate: -1, scrollScale: [0.5, 1.3, 0.7], scrollRotate: [-3, 2], radius: "0" },
  { type: "image", src: "/landing/landing-02.jpg", label: "Garden", top: "2%", left: "30%", w: "18%", ratio: "3/4", rotate: 1, scrollScale: [0.95, 1, 0.9], scrollRotate: [2, -1] },
  { type: "image", src: "/landing/landing-03.jpg", label: "Pool", top: "0%", left: "55%", w: "20%", ratio: "3/4", scrollScale: [0.88, 1.02, 0.96], scrollRotate: [0, 5] },
  { type: "image", src: "/landing/landing-04.jpg", label: "Portrait", top: "5%", left: "78%", w: "18%", ratio: "3/4", rotate: 2, scrollScale: [0.92, 1.08, 0.94], scrollRotate: [4, -2] },
  { type: "image", src: "/landing/landing-01.jpg", label: "Event", top: "35%", left: "0%", w: "20%", ratio: "3/4", scrollScale: [0.9, 1, 1.06], scrollRotate: [-2, 3] },
  { type: "image", src: "/landing/landing-05.jpg", label: "Nature", top: "30%", left: "22%", w: "16%", ratio: "3/4", rotate: -2, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-4, 1] },
  { type: "image", src: "/landing/landing-06.jpg", label: "Studio", top: "32%", left: "42%", w: "22%", ratio: "3/4", rotate: 1, scrollScale: [0.88, 1, 1.1], scrollRotate: [1, -45] },
  { type: "image", src: "/landing/landing-07.jpg", label: "Workshop", top: "28%", left: "68%", w: "16%", ratio: "2/3", scrollScale: [0.92, 1.06, 0.98], scrollRotate: [0, -2] },
  { type: "video", src: "/landing/landing-09.mp4", label: "People", top: "38%", left: "86%", w: "14%", ratio: "2/3", rotate: -1, scrollScale: [0.96, 1, 0.88], scrollRotate: [-1, 4] },
  { type: "image", src: "/landing/landing-01.jpg", label: "Tropical", top: "62%", left: "8%", w: "18%", ratio: "3/4", rotate: 2, scrollScale: [0.9, 1.08, 1], scrollRotate: [3, -2] },
  { type: "video", src: "/landing/landing-11.mov", label: "Reel", top: "65%", left: "30%", w: "15%", ratio: "3/4", scrollScale: [0.94, 1, 1.04], scrollRotate: [-2, 2] },
  { type: "image", src: "/landing/landing-03.jpg", label: "Interior", top: "60%", left: "50%", w: "20%", ratio: "3/4", rotate: -1, scrollScale: [0.88, 1.06, 0.94], scrollRotate: [2, -4] },
  { type: "image", src: "/landing/landing-04.jpg", label: "Market", top: "66%", left: "74%", w: "22%", ratio: "4/5", rotate: 1, scrollScale: [0.92, 1, 1.08], scrollRotate: [-3, 3] },
];

// ── Mobile/Tablet layout (<1024px): fewer items, 2-col layout ──
const ASSETS_MOBILE: Asset[] = [
  { type: "video", src: "/landing/landing-08.mp4", label: "Event", top: "0%", left: "2%", w: "clamp(150px, 46%, 250px)", ratio: "5/9", scrollScale: [0.4, 1.2, 0.95], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-03.jpg", label: "Pool", top: "2%", left: "55%", w: "46%", ratio: "1/1", scrollScale: [1.05, 0.6, 0.96], scrollRotate: [0, 3], radius: "0" },
  { type: "image", src: "/landing/landing-06.jpg", label: "Studio", top: "40%", left: "5%", w: "44%", ratio: "3/4", rotate: 1, scrollScale: [0.8, 1, 0.8], scrollRotate: [1, -3], radius: "0" },
  { type: "image", src: "/landing/landing-07.jpg", label: "Plants", top: "25%", left: "58%", w: "37%", ratio: "1/1", scrollScale: [0.9, 0.9, 1.06], scrollRotate: [0, 100], radius: "50%" },
  { type: "image", src: "/landing/landing-04.jpg", label: "Portrait", top: "66%", left: "0%", w: "46%", ratio: "4/5", rotate: -1, scrollScale: [1, 0.8, 0.94], scrollRotate: [2, -1], radius: "0" },
  { type: "image", src: "/landing/landing-05.jpg", label: "Nature", top: "46%", left: "52%", w: "46%", ratio: "1/1", rotate: 1, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-01.jpg", label: "Workshop", top: "95%", left: "53%", w: "44%", ratio: "4/5", scrollScale: [1, 0.8, 0.98], scrollRotate: [0, -2], radius: "0" },
  { type: "video", src: "/landing/landing-09.mp4", label: "People", top: "75%", left: "30%", w: "clamp(150px, 44%, 230px)", ratio: "5/9", rotate: -1, scrollScale: [0.4, 1.5, 1], scrollRotate: [-1, 2], radius: "0" },
];

function AssetItem({
  asset,
  index,
}: {
  asset: Asset;
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
        aspectRatio: asset.ratio,
        borderRadius: asset.radius ?? "0.75rem",
        rotate: combinedRotate,
        zIndex: asset.zIndex ?? index,
        y,
        scale,
        opacity,
      }}
      className="absolute overflow-hidden bg-roma-bg-alt"
    >
      {asset.type === "video" ? (
        <video
          src={asset.src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={asset.src}
          alt={asset.label}
          fill
          className="object-cover"
        />
      )}
    </motion.div>
  );
}

export default function AssetsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const assets = isDesktop ? ASSETS_DESKTOP : ASSETS_MOBILE;

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
    <section ref={sectionRef} className="relative px-6 sm:px-10 py-10 sm:py-16 overflow-visible" suppressHydrationWarning>
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

      {/* Collage container */}
      <div
        className="relative w-full max-w-6xl mx-auto"
        style={{ height: isDesktop ? "clamp(600px, 120vw, 1400px)" : "clamp(500px, 200vw, 1200px)" }}
      >
        {assets.map((asset, i) => (
          <AssetItem key={`${asset.src}-${i}`} asset={asset} index={i} />
        ))}
      </div>
    </section>
  );
}
