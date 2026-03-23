import { SECTIONS } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      {/* Placeholder sections for testing */}
      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundColor:
              i % 2 === 0 ? "var(--roma-bg)" : "var(--roma-bg-alt)",
          }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl">
            {section.label}
          </h2>
        </section>
      ))}
    </main>
  );
}
