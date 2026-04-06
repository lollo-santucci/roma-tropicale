import PageShell from "@/components/layout/PageShell";
import HeroSection from "@/components/landing/HeroSection";
import AssetsSection from "@/components/landing/AssetsSection";
import HighlightsSection from "@/components/landing/HighlightsSection";
import NewsletterSection from "@/components/landing/NewsletterSection";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AssetsSection />
      <HighlightsSection />
      <NewsletterSection />
    </PageShell>
  );
}
