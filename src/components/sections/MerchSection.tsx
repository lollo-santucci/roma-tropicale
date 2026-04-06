"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";
import { PRODUCTS } from "@/lib/constants";

export default function MerchSection() {
  return (
    <section
      id="merch"
      className="bg-roma-bg px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div>
          <AnimatedText
            text="Il merch di Roma Tropicale"
            as="h1"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-roma-dark/70 text-base sm:text-lg mt-4 max-w-xl">
              Prodotti esclusivi in edizione limitata. Sostenibili, creativi, tropicali.
            </p>
          </ScrollReveal>
        </div>

        {/* Products grid — 2x2 on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div
                  className="bg-roma-bg-alt rounded-card aspect-[3/4]"
                  role="img"
                  aria-label={`${product.name} photo placeholder`}
                />
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-roma-dark">
                  {product.name}
                </h3>
                <p className="text-roma-dark/60 text-sm">{product.description}</p>
                <PillButton variant="primary" href="/contacts" className="self-start">
                  ORDINA ORA
                </PillButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
