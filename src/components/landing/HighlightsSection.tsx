"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HorizontalScrollSection from "@/components/ui/HorizontalScrollSection";
import { HIGHLIGHTS } from "@/lib/constants";

function HighlightCard({
  title,
  description,
  href,
  image,
  index,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-[240px] sm:w-[260px] lg:w-[320px] 2xl:w-[400px] shrink-0"
    >
      <Link href={href} className="block group">
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, (max-width: 1536px) 320px, 400px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="w-full h-px bg-roma-dark/20 my-3" />
        <h3 className="text-sm font-bold text-roma-dark mb-1 group-hover:text-roma-purple transition-colors">{title}</h3>
        <p className="text-xs text-roma-dark/50 leading-relaxed">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}

export default function HighlightsSection() {
  return (
    <HorizontalScrollSection
      id="highlights"
      title="highlights"
      description="i nostri articoli preferiti, i prossimi eventi, ispirazioni botaniche, workshop a cui non puoi mancare!"
      transparent
    >
      {HIGHLIGHTS.map((item, i) => (
        <HighlightCard
          key={i}
          title={item.title}
          description={item.description}
          href={item.href}
          image={item.image}
          index={i}
        />
      ))}
    </HorizontalScrollSection>
  );
}
