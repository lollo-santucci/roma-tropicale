import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AcademySection from "@/components/sections/AcademySection";

export const metadata: Metadata = {
  title: "Academy — Roma Tropicale",
  description:
    "Corsi, workshop e masterclass sulla cultura plant-based e il design sostenibile.",
  openGraph: {
    title: "Academy — Roma Tropicale",
    description:
      "Corsi, workshop e masterclass sulla cultura plant-based e il design sostenibile.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/academy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AcademyPage() {
  return (
    <PageShell>
      <AcademySection />
    </PageShell>
  );
}
