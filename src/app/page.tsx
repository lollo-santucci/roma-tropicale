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
      <div className="pt-20 md:pt-0">
        <HighlightsSection />
      </div>
      <NewsletterSection />
    </PageShell>
  );
}
