import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import MerchSection from "@/components/sections/MerchSection";

export const metadata: Metadata = {
  title: "Merch — Roma Tropicale",
  description:
    "Scopri il merch esclusivo di Roma Tropicale: cappelli, t-shirt e accessori sostenibili.",
  openGraph: {
    title: "Merch — Roma Tropicale",
    description:
      "Scopri il merch esclusivo di Roma Tropicale: cappelli, t-shirt e accessori sostenibili.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/merch",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MerchPage() {
  return (
    <PageShell>
      <MerchSection />
    </PageShell>
  );
}
