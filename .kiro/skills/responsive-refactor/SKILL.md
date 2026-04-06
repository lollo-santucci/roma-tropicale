---
name: responsive-refactor
description: Rewrite components to be structurally responsive using mobile-first patterns, vertical stacking, progressive spacing, fluid images, collapsible grids, and thumb-reachable CTAs.
---

# Responsive Refactor

This skill rewrites components to be structurally responsive. It doesn't audit — it transforms. Every change follows mobile-first principles.

## Core Principles

### 1. Mobile-first class ordering
Always write base (mobile) classes first, then layer breakpoints:
```
className="px-6 sm:px-10 lg:px-16"  // ✓ mobile-first
className="lg:px-16 sm:px-10 px-6"  // ✗ desktop-first thinking
```

### 2. Stack vertically by default
Multi-column layouts must be single-column on mobile:
```tsx
// ✓ Correct
className="flex flex-col lg:flex-row"

// ✗ Wrong — forces horizontal on mobile
className="flex flex-row"
```

### 3. Progressive spacing
Spacing increases with viewport:
```tsx
// Sections
className="py-12 sm:py-16 lg:py-24"

// Gaps
className="gap-6 sm:gap-8 lg:gap-12"

// Padding
className="px-6 sm:px-10 lg:px-16"
```

### 4. Fluid images
Images must be constrained and responsive:
```tsx
// ✓ Fluid with aspect ratio
className="w-full aspect-[3/4]"

// ✓ Fixed width that shrinks
className="w-full max-w-[560px]"

// ✗ Hard fixed width that overflows
className="w-[560px]"
```

### 5. Grids that collapse
Every grid must have a mobile-friendly column count:
```tsx
// ✓
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

// ✗ No mobile fallback
className="grid grid-cols-4"
```

### 6. Typography scaling
Headings must scale down on mobile:
```tsx
className="text-2xl sm:text-3xl lg:text-5xl"
```
Body text minimum 14px on mobile (`text-sm` = 14px or `text-base` = 16px).

### 7. CTAs always reachable
- Primary CTA buttons must be full-width on mobile: `w-full sm:w-auto`
- Important actions should be in the bottom half of the screen
- Don't hide CTAs behind scroll on mobile

### 8. Hide, don't squeeze
Some elements should be hidden on mobile rather than squeezed:
```tsx
// Decorative elements
className="hidden lg:block"

// Secondary info
className="hidden sm:flex"
```

## When refactoring

1. Start from the outermost container and work inward
2. Replace all fixed widths (`w-[Xpx]`) with fluid alternatives (`w-full max-w-[Xpx]`)
3. Add missing breakpoint variants to every spacing/sizing class
4. Ensure every `flex-row` has a `flex-col` mobile default
5. Test that content reflows naturally at 390px, 640px, 768px, 1024px
