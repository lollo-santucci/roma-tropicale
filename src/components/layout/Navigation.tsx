"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import PageCounter from "./PageCounter";
import { useScrollContext } from "./HorizontalScroll";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToSection } = useScrollContext();

  return (
    <>
      {/* Logo placeholder */}
      <button
        onClick={() => scrollToSection("landing")}
        className="fixed top-6 left-6 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-roma-purple flex items-center justify-center"
        aria-label="Home"
      >
        <span className="text-roma-white font-bold text-lg sm:text-xl">RT</span>
      </button>

      {/* Menu / Close button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-50 px-5 py-2.5 sm:px-6 sm:py-3 bg-roma-dark text-roma-white rounded-pill text-sm sm:text-base font-medium tracking-wide transition-opacity hover:opacity-80"
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <PageCounter />
    </>
  );
}
