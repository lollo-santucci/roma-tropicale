import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import EventsSection from "@/components/sections/EventsSection";

export const metadata: Metadata = {
  title: "Eventi — Roma Tropicale",
  description:
    "Scopri i nostri eventi passati e futuri: serate, mercatini e workshop green a Roma.",
  openGraph: {
    title: "Eventi — Roma Tropicale",
    description:
      "Scopri i nostri eventi passati e futuri: serate, mercatini e workshop green a Roma.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/events",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EventsPage() {
  return (
    <PageShell>
      <EventsSection />
    </PageShell>
  );
}
