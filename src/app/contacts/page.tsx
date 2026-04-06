import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import ContactsSection from "@/components/sections/ContactsSection";

export const metadata: Metadata = {
  title: "Contatti — Roma Tropicale",
  description:
    "Contattaci per collaborazioni, partnership o semplicemente per dire ciao.",
  openGraph: {
    title: "Contatti — Roma Tropicale",
    description:
      "Contattaci per collaborazioni, partnership o semplicemente per dire ciao.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  alternates: {
    canonical: "/contacts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactsPage() {
  return (
    <PageShell>
      <ContactsSection />
    </PageShell>
  );
}
