"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { MARQUEE_ITEMS, BRAND } from "@/lib/constants";

function Marquee() {
  const repeated = Array(10).fill(MARQUEE_ITEMS).flat();

  return (
    <div className="w-full z-20 overflow-hidden bg-roma-dark py-3.5 lg:absolute lg:top-0 lg:left-0 lg:right-0">
      <div className="flex whitespace-nowrap animate-marquee-fast lg:animate-marquee">
        {repeated.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="mx-8 text-sm sm:text-base text-roma-white hover:text-roma-white/80 tracking-wider shrink-0"
            {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {item.text}
            <span className="ml-12 text-roma-white/40">•</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

const SOCIALS = [
  { name: "Instagram", icon: "/icons/instagram.svg", href: BRAND.socials.instagram },
  { name: "Spotify", icon: "/icons/spotify.svg", href: BRAND.socials.spotify },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: BRAND.socials.linkedin },
] as const;

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-roma-dark flex items-center justify-center hover:bg-roma-purple transition-colors"
          aria-label={social.name}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={16}
            height={16}
            className="w-4 h-4 invert"
          />
        </a>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="lg:h-screen relative overflow-hidden">
      {/* ── Mobile/Tablet: vertical flow ── */}
      <div className="lg:hidden">
        {/* Top fold: fits in viewport */}
        <div className="flex flex-col justify-between h-[92dvh] pt-[env(safe-area-inset-top)]">
          {/* 1. Marquee */}
          <Marquee />

          {/* 2. Description */}
          <div className="px-6 sm:px-10 pt-4">
            <p className="text-sm sm:text-base text-roma-dark leading-relaxed">
              A plant based creative studio & community
            </p>
          </div>

          {/* 3. Video loop */}
          <div className="flex flex-1 items-center justify-center px-6 sm:px-10">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              <video
                src="/videos/logo-romatropicale-3d.mov"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-[700px] sm:w-[500px] h-auto mix-blend-multiply"
              />
            </motion.div>
          </div>

          {/* 4. Row: Ciao + pills left, social icons right */}
          <div className="flex items-end justify-between px-6 sm:px-10 pb-6">
            <div>
              <p className="text-sm sm:text-base text-roma-dark mb-4">
                Ciao ✿
              </p>
              <div className="flex flex-col gap-6">
                <PillButton href="/blog" rotate={-10}>Blog</PillButton>
                <PillButton href="/membership" rotate={10}>Membership</PillButton>
              </div>
            </div>
            <SocialIcons className="flex flex-col gap-2.5" />
          </div>
        </div>

        {/* Below fold */}
        {/* 5. About description */}
        <div className="px-6 sm:px-10 pt-10 pb-2">
          <p className="text-sm sm:text-base text-roma-dark/90 leading-relaxed">
            {BRAND.about}
          </p>
        </div>

        {/* 6. Email */}
        <div className="px-6 sm:px-10 pt-2 pb-10">
          <p className="text-sm font-semibold text-roma-dark/80 mb-0.5">
            EMAIL US
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            className="text-xl sm:text-2xl font-regular text-roma-dark hover:text-roma-purple transition-colors"
          >
            {BRAND.email}
          </a>
        </div>
      </div>

      {/* ── Desktop (lg+): absolute layout ── */}
      <div className="hidden lg:block h-screen px-24">
        <Marquee />

        {/* Top-left: description */}
        <div className="absolute top-24 left-24 z-10 max-w-[500px]">
          <p className="text-xl text-roma-dark leading-relaxed">
            A plant based creative studio & community
          </p>
        </div>

        {/* Top-right: social icons */}
        <SocialIcons className="absolute top-24 right-24 z-10 flex flex-col gap-2.5" />

        {/* Center: Logo video */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <video
              src="/videos/logo-romatropicale-3d.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/imgs/logo-romatropicale.svg"
              className="w-[500px] xl:w-[600px] 2xl:w-[800px] h-auto mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Left: Ciao + pill buttons */}
        <div className="absolute left-24 top-3/4 -translate-y-1/2 z-10">
          <p className="text-base text-roma-dark mb-6">
            Ciao ✿
          </p>
          <div className="flex flex-col gap-10">
            <PillButton href="/blog" rotate={-10}>Blog</PillButton>
            <PillButton href="/membership" rotate={10}>Membership</PillButton>
          </div>
        </div>

        {/* Right: about description + email */}
        <div className="absolute right-24 top-3/5 -translate-y-1/2 z-10 flex flex-col items-end max-w-[350px]">
          <p className="text-lg text-roma-dark/90 leading-relaxed mb-6 text-right">
            {BRAND.about}
          </p>
          <p className="text-lg font-semibold text-roma-dark/80 mb-0.5 text-right">
            EMAIL US
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            className="text-4xl font-regular text-roma-dark hover:text-roma-purple transition-colors text-right"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </section>
  );
}
