import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ilsitodi.romatropicale.com"),
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
  verification: {
    google: "Y5p-k-dv0Tr5sFbvrrxd3ePHBtn6C8SLFZvsaz_zqXA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
