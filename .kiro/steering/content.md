---
title: Content, Language & Data Management
inclusion: fileMatch
globs:
  - "src/lib/constants.ts"
  - "src/components/**/*.tsx"
---

# Content & Data

## Language

- **User-facing content**: Italian
- **Code, UI labels, component names**: English

## Data Source

All structured data lives in `#[[file:src/lib/constants.ts]]` with `as const` assertions and derived types.

### Available Constants

| Export | Type | Content |
|--------|------|---------|
| `SECTIONS` | Array of 7 | Section IDs and labels (Home, About, Events...) |
| `SectionId` | Union type | Derived from `SECTIONS` |
| `BRAND` | Object | name, tagline, email, description, about, socials, partners |
| `NAV_LINKS` | Array of 6 | Navigation labels and hrefs |
| `HIGHLIGHTS` | Array of 6 | Featured content cards (Italian titles + descriptions) |
| `MARQUEE_ITEMS` | Array of 4 | Ticker items with text and href |

## Adding New Content

Follow the existing pattern:

```ts
// In constants.ts
export const NEW_DATA = [
  { title: "...", description: "..." },
] as const;

export type NewDataItem = (typeof NEW_DATA)[number];
```

```tsx
// In component
import { NEW_DATA } from "@/lib/constants";
```

## Content to Consolidate

Some section components define data arrays locally that should eventually move to `constants.ts`:
- `archiveEvents` in EventsSection
- `products` in MerchSection
- `educators` in AcademySection
- `benefits` in MembershipSection

## Placeholder State

- **Social links**: all `"#"` placeholders in `BRAND.socials`
- **Newsletter form**: mock (`onSubmit={(e) => e.preventDefault()}`)
- **Images**: most use placeholder `<div>` elements with `bg-roma-bg-alt`
