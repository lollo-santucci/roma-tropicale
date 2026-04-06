---
title: Accessibility Requirements
inclusion: fileMatch
globs:
  - "src/components/**/*.tsx"
---

# Accessibility

## Current Baseline

- `<html lang="it">` set in root layout
- Semantic HTML: `<section>` with `id`, `<footer>`, `<nav>`
- Social links have `aria-label` attributes
- Framer Motion animations use `once: true` (no infinite re-triggers)
- CustomCursor is supplemental — native cursor still works (`pointer-events-none`)

## Required Patterns

### Links

```tsx
// External links
<a href="..." target="_blank" rel="noopener noreferrer" aria-label="Descriptive label">

// Icon-only links (social)
<a href="..." aria-label="Seguici su Instagram" target="_blank" rel="noopener noreferrer">
  <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
</a>
```

### Images

- Meaningful images: descriptive `alt` text
- Decorative images: `alt=""`
- Logo images: `alt="Roma Tropicale"`

### Forms

```tsx
<input
  type="email"
  placeholder="e-mail"
  required
  aria-label="Indirizzo email"
  className="... focus:outline-none focus:border-roma-white/50"
/>
```

### Buttons

- Always include visible text label or `aria-label`
- Ensure minimum 44px touch target on mobile

## Color Contrast

| Combination | Status |
|------------|--------|
| `roma-dark` (#1a1a1a) on `roma-bg` (#f5f5f5) | WCAG AA pass |
| `roma-purple` (#8B5CF6) on `roma-dark` (#1a1a1a) | WCAG AA pass |
| `roma-white` on `roma-dark` | WCAG AAA pass |
| `roma-dark/50` on `roma-bg` | Caution — may fail AA for small text |

## Known Gaps (to address)

- No **skip-to-content** link
- No **`prefers-reduced-motion`** media query handling for animations
- No **focus-visible** ring styles for keyboard navigation
- Marquee has no pause mechanism for screen readers
