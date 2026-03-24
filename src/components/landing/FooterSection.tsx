import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-roma-bg-alt py-20 sm:py-28 px-8 sm:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <Image
          src="/imgs/logo-romatropicale.svg"
          alt="Roma Tropicale"
          width={200}
          height={220}
          className="w-[150px] sm:w-[200px] h-auto mb-12"
        />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-widest text-roma-dark/40 hover:text-roma-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
