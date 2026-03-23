import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roma Tropicale — Plant-Based Creative Studio & Community",
  description:
    "Rooted in Rome, creating green connections around. Events, workshops, academy, and merch.",
  keywords: [
    "Roma Tropicale",
    "plant-based",
    "community",
    "Roma",
    "events",
    "workshop",
    "academy",
    "sustainable",
  ],
  authors: [{ name: "Roma Tropicale" }],
  openGraph: {
    title: "Roma Tropicale — Plant-Based Creative Studio & Community",
    description:
      "Rooted in Rome, creating green connections around. Events, workshops, academy, and merch.",
    type: "website",
    locale: "it_IT",
    siteName: "Roma Tropicale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roma Tropicale — Plant-Based Creative Studio & Community",
    description:
      "Rooted in Rome, creating green connections around. Events, workshops, academy, and merch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
