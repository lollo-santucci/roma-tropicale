import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      {children}
      <FooterSection />
    </main>
  );
}
