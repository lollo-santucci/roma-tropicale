---
title: Responsive Design & Mobile-First Patterns
inclusion: fileMatch
globs:
  - "src/components/**/*.tsx"
---

# Responsive Design

Mobile-first approach using standard Tailwind breakpoints.

## Breakpoints

| Prefix | Min-width | Usage |
|--------|-----------|-------|
| (base) | 0px | Mobile default |
| `sm:` | 640px | Tablet portrait |
| `md:` | 768px | Tablet landscape |
| `lg:` | 1024px | Desktop |

## Spacing Patterns

```tsx
// Section padding (consistent across all sections)
className="px-6 sm:px-10 lg:px-16 py-24 lg:py-16"

// Contained sections (newsletter, cards)
className="px-8 sm:px-12"
```

## Typography Scale

```tsx
// Page headings
className="text-3xl sm:text-4xl lg:text-5xl"

// Section headings
className="text-2xl sm:text-3xl lg:text-4xl"

// Body text
className="text-sm sm:text-base"

// Labels/captions
className="text-xs sm:text-sm"
```

## Desktop-Only Elements

- **Navbar**: `hidden md:block` — uses absolute positioning with scattered/rotated links
- **CustomCursor**: `hidden lg:block` — disabled on touch devices via `pointer: coarse` media query
- **HeroSection right-side text**: `hidden sm:flex` (hidden on mobile)

## Grid Patterns

```tsx
// Standard content grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"

// Full-width with constrained cards
className="grid grid-cols-1 lg:grid-cols-4 gap-4"
```

## Horizontal Scroll Cards

```tsx
// Fixed-width cards in flex container
className="w-[280px] sm:w-[300px] flex-shrink-0"
```

## Key Considerations

- Hero section uses `absolute` positioning extensively — all content blocks are `absolute` with responsive left/right offsets
- Images should be responsive using `w-full` with aspect-ratio constraints
- Touch targets: minimum 44px for mobile interactive elements
