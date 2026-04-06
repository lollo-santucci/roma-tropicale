"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-24 lg:py-40 px-8 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-5xl mx-auto bg-roma-dark rounded-2xl overflow-hidden py-16 sm:py-20 lg:py-24 px-8 sm:px-16"
      >
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <h2 className="text-xl sm:text-2xl font-medium text-roma-white mb-4">
            sign up for our newsletter
          </h2>
          <p className="text-xs text-roma-white/40 leading-relaxed mb-10">
            Scriviamo — raramente — di piante, eventi, vivai,
            appuntamenti da non perdere e piccole scoperte
            botaniche.
          </p>
          <Link
            href={BRAND.newsletterForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 bg-roma-white text-roma-dark text-xs uppercase tracking-widest rounded-pill hover:bg-roma-white/80 transition-colors font-medium"
          >
            Subscribe
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
