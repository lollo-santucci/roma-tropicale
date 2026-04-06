import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Roma Tropicale",
  description:
    "Scopri chi siamo: una community creativa plant-based radicata a Roma.",
  openGraph: {
    title: "About — Roma Tropicale",
    description:
      "Scopri chi siamo: una community creativa plant-based radicata a Roma.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <PageShell showNavbar={false}>
      <AboutSection />
    </PageShell>
  );
}
