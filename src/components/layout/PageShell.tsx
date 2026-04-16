import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";

interface PageShellProps {
  children: React.ReactNode;
  showNavbar?: boolean;
}

export default function PageShell({ children, showNavbar = true }: PageShellProps) {
  return (
    <main>
      {showNavbar && <Navbar />}
      {children}
      <FooterSection />
    </main>
  );
}
