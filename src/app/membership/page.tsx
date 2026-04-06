import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import MembershipSection from "@/components/sections/MembershipSection";

export const metadata: Metadata = {
  title: "Membership — Roma Tropicale",
  description:
    "Entra a far parte del club: eventi esclusivi, sconti e community privata.",
  openGraph: {
    title: "Membership — Roma Tropicale",
    description:
      "Entra a far parte del club: eventi esclusivi, sconti e community privata.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/membership",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MembershipPage() {
  return (
    <PageShell>
      <MembershipSection />
    </PageShell>
  );
}
