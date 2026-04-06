---
title: Tech Stack & Constraints
inclusion: always
---

# Tech Stack

## Core

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.1 | Framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Language (strict mode) |
| Tailwind CSS | 4 | Styling (`@tailwindcss/postcss` v4) |
| Framer Motion | 12.38.0 | Scroll animations, parallax, reveals |
| Lenis | 1.3.20 | Smooth scroll (installed, not yet integrated) |

## Utilities

- **clsx + tailwind-merge** → combined in `cn()` helper at `#[[file:src/lib/utils.ts]]`
- **ESLint 9** with `next/core-web-vitals` and `next/typescript` configs
- **PostCSS** with `@tailwindcss/postcss` plugin

## Configuration

- **Path alias**: `@/*` → `./src/*` (configured in `#[[file:tsconfig.json]]`)
- **Tailwind config**: inline in `#[[file:src/app/globals.css]]` via `@theme inline` — there is NO `tailwind.config.js/ts` file
- **Next.js config**: `#[[file:next.config.ts]]` is currently empty
- **TypeScript**: strict mode enabled, target ES2017, module esnext

## Current State

- Homepage fully built with animations
- 6 sub-pages exist as placeholder section components in `src/components/sections/` — no App Router routes created yet
- All data is hardcoded in `#[[file:src/lib/constants.ts]]` with `as const` assertions — no API, no CMS, no backend
- Newsletter form is mock (prevents default, no submission handler)
- Social links are placeholder `"#"` values

## Performance Guidelines

- **Server vs Client Components**: minimize `"use client"` — only needed for hooks, event handlers, Framer Motion. `FooterSection` is a server component example
- **Images**: use `next/image` with explicit `width`/`height` and `priority` for above-fold content (as in HeroSection logo)
- **Dynamic imports**: consider `next/dynamic` for heavy animation sections to reduce initial bundle
- **Scroll hooks limit**: AssetsSection already uses 13 independent `useScroll` hooks — avoid extending this pattern without virtualization
- **SVG optimization**: logo SVGs are large (~343KB) — consider optimizing when adding more assets
