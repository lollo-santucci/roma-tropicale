import { notFound } from "next/navigation";
import Link from "next/link";
import { RAW_CONTENT } from "@/lib/content";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import AcademySection from "@/components/sections/AcademySection";
import MerchSection from "@/components/sections/MerchSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ContactsSection from "@/components/sections/ContactsSection";
import HeroSection from "@/components/landing/HeroSection";
import HighlightsSection from "@/components/landing/HighlightsSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import FooterSection from "@/components/landing/FooterSection";
import AdminEditView from "./AdminEditView";

const RENDERERS: Record<string, () => React.ReactNode> = {
  landing: () => (
    <>
      <HeroSection />
      <HighlightsSection />
      <NewsletterSection />
      <FooterSection />
    </>
  ),
  about: () => <AboutSection />,
  events: () => <EventsSection />,
  academy: () => <AcademySection />,
  merch: () => <MerchSection />,
  membership: () => <MembershipSection />,
  contacts: () => <ContactsSection />,
  shared: () => (
    <>
      <HeroSection />
      <FooterSection />
    </>
  ),
};

const VALID_SLUGS = Object.keys(RENDERERS);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function AdminSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in RENDERERS) || !(slug in RAW_CONTENT)) notFound();

  const initial = RAW_CONTENT[slug as keyof typeof RAW_CONTENT] as unknown as Record<string, unknown>;
  const render = RENDERERS[slug];

  return (
    <>
      <div className="sticky top-0 z-[900] flex items-center gap-3 border-b border-black/10 bg-white/90 px-4 py-2 text-xs backdrop-blur">
        <Link href="/admin-tropicale" className="text-black/60 hover:text-black">
          ← Tutte le sezioni
        </Link>
        <span className="text-black/30">/</span>
        <span className="font-medium">{slug}</span>
      </div>
      <AdminEditView slug={slug} initial={initial}>
        {render()}
      </AdminEditView>
    </>
  );
}
