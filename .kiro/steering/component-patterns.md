---
title: Component Conventions & Composition
inclusion: fileMatch
globs:
  - "src/components/**/*.tsx"
---

# Component Patterns

## Organization

| Directory | Purpose | Examples |
|-----------|---------|----------|
| `src/components/ui/` | Reusable animation primitives | AnimatedText, ScrollReveal, ImageReveal, ParallaxImage |
| `src/components/landing/` | Homepage sections | Navbar, HeroSection, AssetsSection, HighlightsSection |
| `src/components/sections/` | Sub-page content | AboutSection, EventsSection, AcademySection |
| `src/components/layout/` | Persistent UI | CustomCursor |

## Component Template

```tsx
"use client"; // Only if using hooks, Framer Motion, or browser APIs

import { cn } from "@/lib/utils";

interface MyComponentProps {
  className?: string;
  // ...other props
}

export default function MyComponent({ className }: MyComponentProps) {
  return (
    <section className={cn("px-6 sm:px-10 lg:px-16 py-24 lg:py-16", className)}>
      {/* content */}
    </section>
  );
}
```

## Rules

1. **Default export** for every component
2. **`"use client"`** only when needed (hooks, Framer Motion, event handlers, browser APIs). FooterSection demonstrates a server component — no `"use client"`
3. **Props**: TypeScript interface, optional `className` with `cn()` passthrough
4. **Imports**: always `@/` prefix, never relative `../`
5. **Data**: import from `#[[file:src/lib/constants.ts]]`, never hardcode brand data inline
6. **Section pattern**: `<section id="sectionId" className="...">` with consistent padding `px-6 sm:px-10 lg:px-16 py-24 lg:py-16`

## Image Handling

- **Placeholders**: solid `bg-roma-bg-alt` divs (current state for most images)
- **Real images**: use `next/image` with explicit `width`/`height` props
- **Above-fold**: add `priority` prop (as in HeroSection logo)

```tsx
import Image from "next/image";

<Image
  src="/imgs/logo-romatropicale.svg"
  alt="Roma Tropicale"
  width={200}
  height={200}
  priority
/>
```

## Button Patterns (from existing code)

- **Primary**: `bg-roma-dark text-roma-white rounded-pill px-5 py-2.5 text-sm`
- **Purple CTA**: `bg-roma-purple text-roma-white rounded-pill hover:bg-roma-purple-light`
- **Outlined**: `border border-roma-dark text-roma-dark rounded-pill hover:bg-roma-dark hover:text-roma-white`

## Homepage Composition

Reference: `#[[file:src/app/page.tsx]]`

```tsx
<main>
  <CustomCursor />
  <Navbar />
  <HeroSection />
  <AssetsSection />
  <HighlightsSection />
  <NewsletterSection />
  <FooterSection />
</main>
```
