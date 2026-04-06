import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="bg-roma-bg flex flex-col gap-[150px] items-center justify-center pt-[120px] sm:pt-[200px] pb-[50px] px-6 sm:px-[60px]"
    >
      {/* Logo */}
      <Image
        src="/imgs/logo-romatropicale.svg"
        alt="Roma Tropicale"
        width={200}
        height={214}
        className="w-[150px] sm:w-[200px] h-auto"
      />

      {/* Nav links */}
      <nav className="flex items-start justify-between w-full text-roma-dark text-[14px]">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:opacity-60 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
