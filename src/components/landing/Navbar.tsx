"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const highlights = document.getElementById("highlights");
    const footer = document.getElementById("footer");
    if (!highlights && !footer) return;

    const visibilityMap: Record<string, boolean> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.isIntersecting;
        });
        const anyVisible = Object.values(visibilityMap).some(Boolean);
        setVisible(!anyVisible);
      },
      { threshold: 0 }
    );

    if (highlights) observer.observe(highlights);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-[350px] h-[150px]">
        <Link
          href="/events"
          className="absolute top-[10%] left-[45%] text-2xl text-roma-dark hover:text-roma-purple transition-all -rotate-[20deg] hover:rotate-0"
        >
          Events
        </Link>
        <Link
          href="/academy"
          className="absolute top-[40%] right-[15%] text-2xl text-roma-dark hover:text-roma-purple transition-all rotate-[10deg] hover:rotate-0"
        >
          Academy
        </Link>
        <Link
          href="/about"
          className="absolute top-[42%] left-[28%] text-2xl text-roma-dark hover:text-roma-purple transition-all -rotate-[5deg] hover:rotate-0"
        >
          About
        </Link>
        <Link
          href="/contacts"
          className="absolute bottom-[15%] left-[38%] text-2xl text-roma-dark hover:text-roma-purple transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
