---
title: Design System — Colors, Typography, Spacing
inclusion: fileMatch
globs:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# Design System

All design tokens are defined in `#[[file:src/app/globals.css]]` as CSS custom properties, mapped to Tailwind via `@theme inline`.

## Colors

| Token | CSS Variable | Hex | Tailwind Class | Usage |
|-------|-------------|-----|----------------|-------|
| Background | `--roma-bg` | #f5f5f5 | `bg-roma-bg` | Page background |
| Background Alt | `--roma-bg-alt` | #e8e8e8 | `bg-roma-bg-alt` | Cards, placeholders, image fills |
| Dark | `--roma-dark` | #1a1a1a | `bg-roma-dark`, `text-roma-dark` | Text, dark sections, primary buttons |
| Purple | `--roma-purple` | #8B5CF6 | `bg-roma-purple`, `text-roma-purple` | Accent, CTAs, brand highlight |
| Purple Light | `--roma-purple-light` | #A78BFA | `bg-roma-purple-light` | Hover states, secondary accent |
| White | `--roma-white` | #ffffff | `text-roma-white` | Text on dark backgrounds |

**Rules:**
- Never use raw hex colors — always use `roma-*` Tailwind classes
- Never invent new color names — extend the palette in `globals.css` if needed
- Selection styling: purple background, white text (already configured globally)

## Typography

- **Font**: Inter via `next/font/google`, loaded as CSS variable `--font-inter`
- **Tailwind variables**: `--font-body` and `--font-display` (both map to Inter)
- **Display text pattern**: `font-[family-name:var(--font-display)]`

```tsx
// Heading
<h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl text-roma-dark">

// Body
<p className="text-sm sm:text-base text-roma-dark/70">

// Uppercase label
<span className="text-xs uppercase tracking-widest text-roma-dark/50">
```

## Border Radius

- `rounded-pill` → 9999px (buttons, tags, pill shapes)
- `rounded-card` → 1.5rem (cards, dark CTA sections)

## Button Variants

```tsx
// Primary (black pill)
<button className="bg-roma-dark text-roma-white rounded-pill px-5 py-2.5 text-sm hover:opacity-90">

// Purple CTA
<button className="bg-roma-purple text-roma-white rounded-pill px-5 py-2.5 text-sm hover:bg-roma-purple-light">

// Outlined
<button className="border border-roma-dark text-roma-dark rounded-pill px-5 py-2.5 text-sm hover:bg-roma-dark hover:text-roma-white">
```

## Custom Utilities

- **`cn()`** from `#[[file:src/lib/utils.ts]]`: always use for conditional/merged classes, never raw string concatenation
- **`scrollbar-hide`**: hides scrollbar on overflow containers
- **`animate-marquee`**: 20s linear infinite translateX(-50%) for ticker

## Global Styles

- `a, button` have `transition: color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease`
- `html` has `scroll-behavior: smooth`
- `body` uses `bg-roma-bg`, `text-roma-dark`, `font-family: var(--font-body)`
