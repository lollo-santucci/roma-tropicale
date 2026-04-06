---
title: Project Structure & Conventions
inclusion: always
---

# Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, font, html/body)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Design tokens + Tailwind @theme inline
│   └── icon.svg                  # Favicon
├── components/
│   ├── ui/                       # Reusable animation primitives
│   │   ├── AnimatedText.tsx      # Word-by-word staggered reveal
│   │   ├── ScrollReveal.tsx      # Directional fade-in on scroll
│   │   ├── ImageReveal.tsx       # Clip-path wipe reveal
│   │   └── ParallaxImage.tsx     # Scroll-driven Y parallax
│   ├── landing/                  # Homepage sections
│   │   ├── Navbar.tsx            # Floating nav (appears/hides on scroll)
│   │   ├── HeroSection.tsx       # Hero with logo, marquee, CTAs
│   │   ├── AssetsSection.tsx     # Scattered photo collage
│   │   ├── HighlightsSection.tsx # Horizontal scroll carousel
│   │   ├── NewsletterSection.tsx # Email signup (dark card)
│   │   └── FooterSection.tsx     # Logo + nav links
│   ├── sections/                 # Sub-page content (placeholder state)
│   │   ├── AboutSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── AcademySection.tsx
│   │   ├── MerchSection.tsx
│   │   ├── MembershipSection.tsx
│   │   ├── ContactsSection.tsx
│   │   └── LandingSection.tsx
│   └── layout/                   # Persistent UI elements
│       └── CustomCursor.tsx      # Spring-animated cursor (desktop only)
├── lib/
│   ├── constants.ts              # All brand data, nav links, highlights
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
└── hooks/                        # Custom hooks (reserved, currently empty)

public/
├── imgs/                         # Brand assets (logo SVG)
├── icons/                        # Social icons (instagram, spotify, linkedin SVGs)
└── videos/                       # Animated assets (3D logo SVG)

design/                           # 7 reference PNGs (one per page)
```

## Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`, `ScrollReveal.tsx`)
- **Utilities/hooks**: camelCase (`constants.ts`, `utils.ts`)
- **Routes**: kebab-case (`/about`, `/events`, `/academy`)
- **CSS variables**: kebab-case with `roma-` prefix (`--roma-purple`)

## Import Conventions

- Always use `@/` prefix for imports — never relative `../`
- Components use **default export**
- Utilities and constants use **named export**

```tsx
// Correct
import HeroSection from "@/components/landing/HeroSection";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Wrong
import HeroSection from "../../components/landing/HeroSection";
```
