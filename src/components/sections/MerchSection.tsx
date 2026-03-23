"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const products = [
  {
    name: "Bucket Hat",
    description: "Cappello bucket con logo Roma Tropicale ricamato.",
  },
  {
    name: "Cappello Patch",
    description: "Baseball cap con patch tropicale in edizione limitata.",
  },
  {
    name: "T-shirt",
    description: "T-shirt in cotone organico con grafica tropicale.",
  },
];

export default function MerchSection() {
  return (
    <section
      id="merch"
      className="w-screen flex-shrink-0 min-h-screen bg-roma-bg overflow-y-auto"
    >
      <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-24 lg:py-16 flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div className="pt-12">
          <AnimatedText
            text="Il merch di Roma Tropicale"
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-roma-dark/70 text-base sm:text-lg mt-4 max-w-xl">
              Prodotti esclusivi in edizione limitata. Sostenibili, creativi, tropicali.
            </p>
          </ScrollReveal>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="bg-roma-bg-alt rounded-card aspect-[3/4]" />
                <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-roma-dark">
                  {product.name}
                </h3>
                <p className="text-roma-dark/60 text-sm">{product.description}</p>
                <button className="bg-roma-dark text-roma-white rounded-pill px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity self-start">
                  ORDINA ORA
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
