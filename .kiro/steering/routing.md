---
title: App Router & Page Structure
inclusion: fileMatch
globs:
  - "src/app/**/*"
---

# Routing

## Current State

Only one route exists: `#[[file:src/app/page.tsx]]` (homepage).

6 routes need to be created:

| Route | Component | Design Reference |
|-------|-----------|-----------------|
| `/about` | `src/components/sections/AboutSection.tsx` | `design/about.png` |
| `/events` | `src/components/sections/EventsSection.tsx` | `design/events.png` |
| `/academy` | `src/components/sections/AcademySection.tsx` | `design/academy.png` |
| `/merch` | `src/components/sections/MerchSection.tsx` | `design/scopri il merch.png` |
| `/membership` | `src/components/sections/MembershipSection.tsx` | `design/become a member.png` |
| `/contacts` | `src/components/sections/ContactsSection.tsx` | `design/contacts.png` |

## Page Creation Pattern

New pages should follow the homepage structure:

```tsx
// src/app/about/page.tsx
import { Metadata } from "next";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/landing/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/landing/FooterSection";

export const metadata: Metadata = {
  title: "About — Roma Tropicale",
  description: "...",
};

export default function AboutPage() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
```

## Important Notes

- The **root layout** (`#[[file:src/app/layout.tsx]]`) handles global metadata, font loading, `lang="it"`, and html/body — never duplicate these in pages
- Each page should export its own `metadata` object with `title`, `description`, and `openGraph`
- Section components in `sections/` were originally built for a horizontal-scroll layout (note `w-screen flex-shrink-0`) — they will need adaptation for standalone page use
- Navigation links are defined in `#[[file:src/lib/constants.ts]]` as `NAV_LINKS`
- Lenis smooth scroll is installed but not yet integrated — should be added as a provider in root layout or a client wrapper
