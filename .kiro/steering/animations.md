---
title: Animation Patterns — Framer Motion & Scroll
inclusion: fileMatch
globs:
  - "src/components/**/*.tsx"
---

# Animation Patterns

The animation system is the heart of the site's personality. Consistency in easing, timing, and behavior is critical.

## Shared Easing

```ts
const ease = [0.33, 1, 0.68, 1]; // Used in every animation component
```

Always use this cubic bezier. Never use Framer Motion presets like `"easeOut"` or `"easeInOut"`.

## Animation Primitives

### AnimatedText (`#[[file:src/components/ui/AnimatedText.tsx]]`)
Word-by-word staggered reveal. Splits text into words, each slides up from `y: "100%"` to `y: 0`.

- **Props**: `text`, `as` (element tag), `className`, `delay`
- **Trigger**: `whileInView` with `viewport: { once: true, amount: 0.5 }`
- **Stagger**: 0.05s per word
- **Duration**: 0.8s per word

### ScrollReveal (`#[[file:src/components/ui/ScrollReveal.tsx]]`)
Directional fade-in wrapper. Fades in + translates from a configurable direction.

- **Props**: `direction` (up/down/left/right), `delay`, `duration`, `className`, `children`
- **Default offset**: 40px
- **Trigger**: `whileInView` with `viewport: { once: true, amount: 0.3 }`
- **Default duration**: 0.8s

### ImageReveal (`#[[file:src/components/ui/ImageReveal.tsx]]`)
Clip-path wipe animation from left to right.

- **Props**: `className`, `aspectRatio`
- **Current state**: renders a placeholder div, not an actual image
- **Clip-path**: `inset(0 100% 0 0)` → `inset(0 0% 0 0)`

### ParallaxImage (`#[[file:src/components/ui/ParallaxImage.tsx]]`)
Scroll-driven Y-axis parallax via `useScroll`/`useTransform`.

- **Props**: `className`, `aspectRatio`, `speed` (default 0.2)
- **Scroll offset**: `["start end", "end start"]`
- **Transform**: maps scrollYProgress [0,1] to Y range based on speed
- **Current state**: renders a placeholder div

## Complex Scroll Patterns

### Horizontal Scroll (HighlightsSection)
Vertical scroll drives horizontal translation. Container is 300vh, inner content is sticky. Uses `useTransform` with dynamic measurement of track width.

### Scattered Collage (AssetsSection)
13 media items, each with independent `useScroll` hook. Per-item `scrollScale` and `scrollRotate` transforms create organic parallax. Don't extend this pattern without virtualization.

### Marquee (HeroSection)
CSS-only infinite scroll: 4x array duplication with `animate-marquee` keyframe. No Framer Motion.

## Custom Cursor (`#[[file:src/components/layout/CustomCursor.tsx]]`)
Spring-animated dot following mouse position.

- **Spring config**: `damping: 25, stiffness: 300, mass: 0.5`
- **Desktop only**: hidden on touch devices (`pointer: coarse` media query), `hidden lg:block`
- **Style**: purple border, `mix-blend-difference`, fixed `z-[100]`, `pointer-events-none`

## Rules

1. **All animations use `once: true`** — never re-trigger on scroll back
2. **All animated components are Client Components** — must have `"use client"` directive
3. **Always use the shared easing** `[0.33, 1, 0.68, 1]`
4. **Reuse existing primitives** (AnimatedText, ScrollReveal, ImageReveal, ParallaxImage) before creating new animation components
