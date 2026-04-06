---
name: design-system-guard
description: Enforce design system tokens, prevent color/spacing drift, ensure consistent component variants, and block hardcoded values that bypass the design system.
---

# Design System Guard

Prevent visual drift by enforcing the project's design system. No hardcoded colors, no invented spacing, no one-off variants. Every visual decision must trace back to a token.

## Rules

### Colors
- ONLY use `roma-*` color tokens: `roma-bg`, `roma-bg-alt`, `roma-dark`, `roma-purple`, `roma-purple-light`, `roma-white`
- NEVER use raw hex (`#8B5CF6`), rgb, hsl, or Tailwind default colors (`bg-gray-200`, `text-blue-500`)
- Opacity variants are OK: `text-roma-dark/50`, `bg-roma-purple/20`
- If a new color is truly needed, add it to `globals.css` as a CSS variable first, then map in `@theme inline`

### Spacing
- Use Tailwind's spacing scale or the project's custom tokens
- NEVER use arbitrary pixel values for spacing unless matching a specific design spec
- Consistent section padding: `px-6 sm:px-10 lg:px-16`
- Consistent section vertical: `py-12 sm:py-16 lg:py-24`

### Typography
- Font: Inter only, via `font-[family-name:var(--font-display)]` for display text
- NEVER import or use other fonts
- Heading scale: `text-2xl` / `text-3xl` / `text-4xl` / `text-5xl` with responsive variants
- Body: `text-sm` or `text-base`
- Labels: `text-xs uppercase tracking-widest`

### Border Radius
- Buttons, pills, tags: `rounded-pill` (9999px)
- Cards, containers: `rounded-card` (1.5rem)
- NEVER use `rounded-lg`, `rounded-xl`, `rounded-2xl` or arbitrary values

### Components
- Buttons: use `PillButton` component with `variant` prop — NEVER create inline button styles
- Cards: use `DarkCard` component — NEVER create one-off dark containers
- Headers: use `SectionHeader` or `AnimatedText` — NEVER create inline heading styles
- Forms: use `NewsletterForm` component
- Always use `cn()` from `@/lib/utils` for conditional classes — NEVER concatenate strings

### Shadows & Borders
- The design system has no shadows — NEVER add `shadow-*` classes
- Borders should use `border-roma-dark/10` or similar token-based values
- NEVER use `border-gray-200` or other default Tailwind borders

### Transitions
- Global transitions on `a, button`: `color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease`
- Use `transition-all` or `transition-colors` — NEVER specify custom transition properties inline
- Animation easing: `[0.33, 1, 0.68, 1]` — NEVER use Framer Motion presets

## When reviewing code

For each violation found:
1. Identify the hardcoded value
2. Show the correct token or component to use instead
3. Fix it — don't just flag it

## Common violations to catch
- `bg-[#d9d9d9]` → should be `bg-roma-bg-alt`
- `text-[#666]` → should be `text-roma-dark/40` or similar
- `rounded-lg` → should be `rounded-card`
- Inline button styles → should use `PillButton`
- `className="bg-black text-white rounded-full px-4 py-2"` → should use `PillButton variant="primary"`
