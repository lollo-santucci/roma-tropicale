import HeroSection from "@/components/landing/HeroSection";
import AssetsSection from "@/components/landing/AssetsSection";
import HighlightsSection from "@/components/landing/HighlightsSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import FooterSection from "@/components/landing/FooterSection";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AssetsSection />
      <HighlightsSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
