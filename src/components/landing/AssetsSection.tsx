"use client";

import { Suspense, useRef, lazy } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AssetEditor = process.env.NODE_ENV === "development"
  ? lazy(() => import("./AssetEditor"))
  : null;

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

// ── Desktop layout (lg+): scattered collage ──
const ASSETS_DESKTOP: Asset[] = [
  { type: "image", src: "/landing/landing-02.jpg", label: "Garden", top: "1.4%", left: "44%", w: "18%", ratio: "3/4", rotate: 1, scrollScale: [1.2, 1, 0.4], scrollRotate: [2, -1], radius: "0" },
  { type: "video", src: "/landing/landing-08.mp4", label: "Plants", top: "2.5%", left: "6.1%", w: "22%", ratio: "5/9", rotate: -1, scrollScale: [0.5, 1.3, 0.7], scrollRotate: [-3, 2], radius: "0" },
  { type: "image", src: "/landing/landing-03.jpg", label: "Pool", top: "4.1%", left: "73.1%", w: "20%", ratio: "3/4", scrollScale: [0.4, 1.1, 1], scrollRotate: [0, 5], radius: "0" },
  { type: "image", src: "/landing/landing-04.jpg", label: "Market", top: "27.1%", left: "33.7%", w: "28.1%", ratio: "5/9", rotate: 1, zIndex: 9, scrollScale: [0.92, 1, 1.08], scrollRotate: [-3, 3] },
  { type: "image", src: "/landing/landing-07.jpg", label: "Workshop", top: "31.2%", left: "67.8%", w: "10.7%", ratio: "1/1", rotate: 0, scrollScale: [0.92, 1.06, 0.98], scrollRotate: [0, -100], radius: "50%" },
  { type: "video", src: "/landing/landing-11.mov", label: "Reel", top: "33.8%", left: "38.9%", w: "19.1%", ratio: "5/9", zIndex: 10, scrollScale: [0.8, 1.3, 1], scrollRotate: [0, 0], radius: "0" },
  { type: "image", src: "/landing/landing-05.jpg", label: "Nature", top: "43%", left: "9.9%", w: "16%", ratio: "3/4", rotate: -2, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-4, 1], radius: "0" },
  { type: "video", src: "/landing/landing-09.mp4", label: "People", top: "43.4%", left: "76.2%", w: "18.4%", ratio: "5/9", rotate: -1, scrollScale: [0.96, 1, 0.88], scrollRotate: [-1, 4], radius: "0" },
  { type: "image", src: "/landing/landing-06.jpg", label: "Studio", top: "68.1%", left: "7.7%", w: "22%", ratio: "3/4", rotate: 1, scrollScale: [1.1, 0.8, 1], scrollRotate: [1, -2], radius: "0" },
  { type: "image", src: "/landing/landing-04.jpg", label: "Portrait", top: "76.5%", left: "41.2%", w: "15.3%", ratio: "3/4", rotate: 2, scrollScale: [0.92, 1.08, 0.94], scrollRotate: [4, -2], radius: "0" },
  { type: "image", src: "/landing/landing-01.jpg", label: "Event", top: "78.2%", left: "68.7%", w: "16%", ratio: "3/4", scrollScale: [1, 1, 1], scrollRotate: [-2, 3], radius: "0" },
  { type: "image", src: "/landing/landing-01.jpg", label: "Tropical", top: "79.5%", left: "69.5%", w: "14.3%", ratio: "3/4", rotate: 2, scrollScale: [1, 0.6, 0.8], scrollRotate: [3, -2], radius: "0" },
];

// ── Tablet layout (640px–1023px) ──
const ASSETS_TABLET: Asset[] = [
  { type: "video", src: "/landing/landing-08.mp4", label: "Event", top: "2.3%", left: "9.6%", w: "32.2%", ratio: "5/9", scrollScale: [0.4, 1.2, 0.95], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-03.jpg", label: "Pool", top: "4.6%", left: "58.2%", w: "45%", ratio: "1/1", rotate: 5, scrollScale: [1.05, 0.6, 0.96], scrollRotate: [0, 3], radius: "0" },
  { type: "image", src: "/landing/landing-07.jpg", label: "Plants", top: "30.1%", left: "55.8%", w: "30%", ratio: "1/1", scrollScale: [0.9, 0.9, 1.06], scrollRotate: [0, 100], radius: "50%" },
  { type: "image", src: "/landing/landing-04.jpg", label: "Portrait", top: "45.2%", left: "19.8%", w: "29.5%", ratio: "4/5", rotate: -1, scrollScale: [1, 0.8, 0.94], scrollRotate: [2, -1], radius: "0" },
  { type: "image", src: "/landing/landing-05.jpg", label: "Nature", top: "52.6%", left: "73.7%", w: "24.2%", ratio: "1/1", rotate: 1, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-06.jpg", label: "Studio", top: "75.5%", left: "7.4%", w: "20.8%", ratio: "3/4", rotate: 1, scrollScale: [0.8, 1, 0.8], scrollRotate: [1, -3], radius: "0" },
  { type: "image", src: "/landing/landing-01.jpg", label: "Workshop", top: "72.5%", left: "58.6%", w: "27.2%", ratio: "4/5", scrollScale: [1, 0.8, 0.98], scrollRotate: [0, -2], radius: "0" },
  { type: "video", src: "/landing/landing-09.mp4", label: "People", top: "50.8%", left: "36.2%", w: "31.8%", ratio: "5/9", rotate: -1, scrollScale: [0.4, 1.2, 1], scrollRotate: [-1, 2], radius: "0" },
];

// ── Mobile layout (<640px) ──
const ASSETS_MOBILE: Asset[] = [
  { type: "video", src: "/landing/landing-08.mp4", label: "Event", top: "0%", left: "2%", w: "clamp(150px, 46%, 250px)", ratio: "5/9", scrollScale: [0.4, 1.2, 0.95], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-03.jpg", label: "Pool", top: "2%", left: "55%", w: "46%", ratio: "1/1", scrollScale: [1.05, 0.6, 0.96], scrollRotate: [0, 3], radius: "0" },
  { type: "image", src: "/landing/landing-06.jpg", label: "Studio", top: "40%", left: "5%", w: "44%", ratio: "3/4", rotate: 1, scrollScale: [0.8, 1, 0.8], scrollRotate: [1, -3], radius: "0" },
  { type: "image", src: "/landing/landing-07.jpg", label: "Plants", top: "25%", left: "58%", w: "37%", ratio: "1/1", scrollScale: [0.9, 0.9, 1.06], scrollRotate: [0, 100], radius: "50%" },
  { type: "image", src: "/landing/landing-04.jpg", label: "Portrait", top: "66%", left: "0%", w: "46%", ratio: "4/5", rotate: -1, scrollScale: [1, 0.8, 0.94], scrollRotate: [2, -1], radius: "0" },
  { type: "image", src: "/landing/landing-05.jpg", label: "Nature", top: "46%", left: "52%", w: "46%", ratio: "1/1", rotate: 1, scrollScale: [0.95, 1.04, 0.92], scrollRotate: [-2, 1], radius: "0" },
  { type: "image", src: "/landing/landing-01.jpg", label: "Workshop", top: "95%", left: "53%", w: "44%", ratio: "4/5", scrollScale: [1, 0.8, 0.98], scrollRotate: [0, -2], radius: "0" },
  { type: "video", src: "/landing/landing-09.mp4", label: "People", top: "75%", left: "30%", w: "clamp(150px, 44%, 230px)", ratio: "5/9", rotate: -1, scrollScale: [0.4, 1.3, 1], scrollRotate: [-1, 2], radius: "0" },
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
          sizes="25vw"
          className="object-cover"
        />
      )}
    </motion.div>
  );
}

function AssetsCollage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const assets = isDesktop ? ASSETS_DESKTOP : isTablet ? ASSETS_TABLET : ASSETS_MOBILE;

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

function AssetsSectionInner() {
  const searchParams = useSearchParams();
  const isEditing = process.env.NODE_ENV === "development" && searchParams.get("edit") !== null;

  if (isEditing && AssetEditor) {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading editor...</div>}>
        <AssetEditor desktopAssets={ASSETS_DESKTOP} tabletAssets={ASSETS_TABLET} mobileAssets={ASSETS_MOBILE} />
      </Suspense>
    );
  }

  return <AssetsCollage />;
}

export default function AssetsSection() {
  return (
    <Suspense>
      <AssetsSectionInner />
    </Suspense>
  );
}
