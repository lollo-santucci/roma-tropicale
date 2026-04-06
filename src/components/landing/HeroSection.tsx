"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { MARQUEE_ITEMS, BRAND } from "@/lib/constants";

function Marquee() {
  const repeated = [
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden bg-roma-dark py-3.5">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="mx-8 text-sm sm:text-base text-roma-white hover:text-roma-white/80 tracking-wider shrink-0"
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

export default function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden px-10 sm:px-16 lg:px-24">
      <Marquee />

      {/* Top-left: description */}
      <div className="absolute top-24 left-10 sm:left-16 lg:left-24 z-10 max-w-[500px]">
        <p className="text-sm sm:text-base md:text-xl text-roma-dark leading-relaxed">
          A plant based creative studio & community
        </p>
      </div>

      {/* Top-right: social icons stacked vertically */}
      <div className="absolute top-24 right-10 sm:right-16 lg:right-24 z-10 flex flex-col gap-2.5">
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

      {/* Center: Logo SVG */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image
            src="/videos/logo-romatropicale-3d.svg"
            alt="Roma Tropicale"
            width={280}
            height={300}
            priority
            className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto"
          />
        </motion.div>
      </div>

      {/* Left: Ciao 🌸 + pill buttons */}
      <div className="absolute left-10 sm:left-16 lg:left-24 top-3/4 -translate-y-1/2 z-10">
        <p className="text-sm sm:text-base text-roma-dark mb-6">
          Ciao ✿
        </p>
        <div className="flex flex-col gap-8 md:gap-10">
          <PillButton href="/blog" rotate={-10}>Blog</PillButton>
          <PillButton href="/membership" rotate={10}>Membership</PillButton>
        </div>
      </div>

      {/* Right: about description + email */}
      <div className="absolute right-10 sm:right-16 lg:right-24 top-3/5 -translate-y-1/2 z-10 hidden sm:flex flex-col items-end max-w-[350px]">
        <p className="text-sm sm:text-lg text-roma-dark/90 leading-relaxed mb-6 text-right">
          {BRAND.about}
        </p>
        <p className="text-base sm:text-lg font-semibold text-roma-dark/80 mb-0.5 text-right">
          EMAIL US
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="text-lg sm:text-4xl font-semibold text-roma-dark hover:text-roma-purple transition-colors text-right"
        >
          {BRAND.email}
        </a>
      </div>

    </section>
  );
}
