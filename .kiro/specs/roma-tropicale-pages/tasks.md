# Implementation Plan: Roma Tropicale Pages

## Overview

Build the 6 remaining pages of the Roma Tropicale website as Next.js App Router routes. The implementation follows a bottom-up dependency order: constants consolidation → shared UI components → PageShell → homepage refactor → page routes → section component adaptations → per-page refinements → testing → build verification.

## Tasks

- [x] 1. Consolidate constants and data models
  - [x] 1.1 Add new data arrays to `src/lib/constants.ts`
    - Add `ARCHIVE_EVENTS` array with `title`, `date`, `location`, `description` fields and `as const` assertion
    - Add `PRODUCTS` array (4 items) with `name`, `description` fields and `as const` assertion
    - Add `EDUCATORS` array with `name` fields and `as const` assertion
    - Add `MEMBERSHIP_BENEFITS` string array with `as const` assertion
    - Add `TEAM_MEMBERS` array (3 members) with `name`, `role` fields and `as const` assertion
    - Add `FOOTER_LINKS` array (4 links: About, Events, Academy, Contact) with `label`, `href` fields and `as const` assertion
    - Export inferred types: `ArchiveEvent`, `Product`, `Educator`, `TeamMember`, `FooterLink`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 1.2 Write parametric invariant test for constants data shape integrity
    - **Property 3: Constants data shape integrity**
    - Iterate over each constant array and verify all entries have required non-empty fields
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6**

- [x] 2. Create shared UI components
  - [x] 2.1 Create `src/components/ui/PillButton.tsx`
    - Implement `PillButtonProps` interface with `variant` (primary | purple | outlined), `href`, `onClick`, `children`, `className`
    - Render `<Link>` when `href` is provided, `<button>` when absent
    - Apply variant-specific classes: primary → `bg-roma-dark text-roma-white`, purple → `bg-roma-purple text-roma-white`, outlined → `border border-roma-dark text-roma-dark`
    - Enforce `min-h-[44px]` touch target, `rounded-pill`, uppercase `text-sm tracking-widest font-medium`
    - No `"use client"` directive — presentational component
    - _Requirements: 5.2, 13.5, 15.4, TC-4.2_

  - [x] 2.2 Write property-based test for PillButton variant rendering
    - **Property 4: PillButton variant rendering**
    - Use fast-check to generate all variant × href × children combinations
    - Verify element type (`<a>` vs `<button>`), `rounded-pill` class, min-height 44px, correct variant classes
    - **Validates: Requirements 5.2, 13.5, 15.4, TC-4.2**

  - [x] 2.3 Create `src/components/ui/DarkCard.tsx`
    - Implement `DarkCardProps` interface with optional `title`, `description`, `children`, `className`
    - Render `<div>` with `bg-roma-dark rounded-card p-6 sm:p-8`
    - Conditionally render title (`text-roma-white font-display text-xl sm:text-2xl`) and description (`text-roma-white/60 text-sm`)
    - Render children slot for custom content
    - Server component — no `"use client"` directive
    - _Requirements: 5.1, TC-4.3_

  - [x] 2.4 Write property-based test for DarkCard structural rendering
    - **Property 5: DarkCard structural rendering**
    - Use fast-check to generate optional title/description/children combinations
    - Verify container has `bg-roma-dark` and `rounded-card`, conditional rendering of title/description/children
    - **Validates: Requirements 5.1, TC-4.3**

  - [x] 2.5 Create `src/components/ui/SectionHeader.tsx`
    - Implement `SectionHeaderProps` interface with optional `label`, required `heading`, optional `as` (h1 | h2 | h3, default h1), optional `className`
    - `"use client"` directive — wraps `AnimatedText` and `ScrollReveal`
    - Render optional label via `ScrollReveal` with `text-roma-dark/50 text-sm tracking-widest uppercase`
    - Render heading via `AnimatedText` at the specified heading level
    - _Requirements: 5.3_

  - [x] 2.6 Create `src/components/ui/NewsletterForm.tsx`
    - Implement `NewsletterFormProps` interface with optional `variant` (compact | full), optional `className`
    - `"use client"` directive — has `onSubmit` handler
    - `variant="compact"` → inline row: email input + "GO" purple pill button
    - `variant="full"` → centered column: heading, description, email input, "Subscribe" button
    - Both variants use `rounded-pill` inputs, `aria-label="Email"` on input, `e.preventDefault()` on submit
    - _Requirements: 5.4, 15.6_

- [x] 3. Create PageShell layout component
  - [x] 3.1 Create `src/components/layout/PageShell.tsx`
    - Server component — no `"use client"` directive
    - Implement `PageShellProps` with `children: React.ReactNode`
    - Render `<main>` wrapping: `CustomCursor`, `Navbar`, `{children}`, `FooterSection`
    - Import CustomCursor from `@/components/layout/CustomCursor`
    - Import Navbar from `@/components/landing/Navbar`
    - Import FooterSection from `@/components/landing/FooterSection`
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 3.2 Write property-based test for PageShell structural invariant
    - **Property 1: PageShell structural invariant**
    - Use fast-check to generate arbitrary React children, render PageShell, verify single `<main>`, correct ordering of CustomCursor/Navbar before children and FooterSection after
    - **Validates: Requirements 1.1, 1.2**

- [x] 4. Refactor homepage to use PageShell
  - [x] 4.1 Modify `src/app/page.tsx` to use PageShell
    - Remove direct imports of `CustomCursor`, `Navbar`, `FooterSection`
    - Remove the manual `<main>` wrapper
    - Import `PageShell` from `@/components/layout/PageShell`
    - Wrap `HeroSection`, `AssetsSection`, `HighlightsSection`, `NewsletterSection` as children of `PageShell`
    - _Requirements: 1.4_

- [x] 5. Checkpoint — Verify foundation
  - Ensure all shared components compile, homepage renders correctly with PageShell. Ask the user if questions arise.

- [x] 6. Create page routes with metadata
  - [x] 6.1 Create `src/app/about/page.tsx`
    - Server component exporting `metadata` with title "About — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/about"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><AboutSection /></PageShell>`
    - _Requirements: 2.1, 3.1, 3.7_

  - [x] 6.2 Create `src/app/events/page.tsx`
    - Server component exporting `metadata` with title "Eventi — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/events"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><EventsSection /></PageShell>`
    - _Requirements: 2.2, 3.2, 3.7_

  - [x] 6.3 Create `src/app/academy/page.tsx`
    - Server component exporting `metadata` with title "Academy — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/academy"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><AcademySection /></PageShell>`
    - _Requirements: 2.3, 3.3, 3.7_

  - [x] 6.4 Create `src/app/merch/page.tsx`
    - Server component exporting `metadata` with title "Merch — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/merch"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><MerchSection /></PageShell>`
    - _Requirements: 2.4, 3.4, 3.7_

  - [x] 6.5 Create `src/app/membership/page.tsx`
    - Server component exporting `metadata` with title "Membership — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/membership"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><MembershipSection /></PageShell>`
    - _Requirements: 2.5, 3.5, 3.7_

  - [x] 6.6 Create `src/app/contacts/page.tsx`
    - Server component exporting `metadata` with title "Contatti — Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, `alternates.canonical: "/contacts"`, `robots: { index: true, follow: true }`
    - Render `<PageShell><ContactsSection /></PageShell>`
    - _Requirements: 2.6, 3.6, 3.7_

  - [x] 6.7 Write parametric invariant test for page metadata completeness
    - **Property 2: Page metadata completeness**
    - Iterate over all 6 page metadata exports, verify: non-empty title ending with "— Roma Tropicale", Italian description, openGraph with `locale: "it_IT"`, canonical URL matching route, robots with `index: true` and `follow: true`
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7**

- [x] 7. Adapt section components for standalone pages
  - [x] 7.1 Adapt `src/components/sections/AboutSection.tsx`
    - Remove `w-screen flex-shrink-0` and `overflow-y-auto` from root `<section>`
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `teamMembers` array (6 members) with `TEAM_MEMBERS` import from constants (3 members)
    - Replace inline `values` pills with `PillButton` components linking to `/events`, `/academy`, `/membership`
    - Replace inline dark card for partners with `DarkCard` component using `BRAND.partners`
    - Replace inline header with `SectionHeader` — `as="h1"` for page heading, `as="h2"` for "Team & Network" subsection
    - Use `ImageReveal` for the 3:4 placeholder alongside manifesto text
    - Add `role="img"` and `aria-label` to all placeholder elements
    - Desktop: 2-column grid (`md:grid-cols-2`) for manifesto + image; team in `grid-cols-1 sm:grid-cols-3`
    - _Requirements: 6.1, 6.2, 6.3, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 4.7, 5.5, 3.8, 15.1, 15.2_

  - [x] 7.2 Adapt `src/components/sections/EventsSection.tsx`
    - Remove `w-screen flex-shrink-0` and `overflow-y-auto` from root `<section>`
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `archiveEvents` array with `ARCHIVE_EVENTS` import from constants
    - Add `useState<"home" | "archive">("home")` toggle state
    - Replace inline toggle buttons with `PillButton` components: "HOME" (primary when active, outlined when inactive), "ARCHIVE" (vice versa)
    - Implement conditional rendering: `{view === "home" ? <HomeView /> : <ArchiveView />}`
    - Home view: hero area with upcoming event content, dark-bg placeholder `aspect-[16/7]` desktop / `aspect-[16/9]` mobile, italic text overlay
    - Archive view: "From the archive" label + 4-col grid of archive cards with colored backgrounds (`bg-amber-100`, `bg-emerald-100`, `bg-orange-100`, `bg-lime-100`)
    - Use `AnimatedText as="h1"` for the page heading, proper heading hierarchy
    - Add `role="img"` and `aria-label` to all placeholder elements
    - Archive cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
    - _Requirements: 6.1, 6.2, 6.3, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.1.1, 8.1.2, 8.1.3, 8.1.4, 8.1.5, 4.7, 5.5, 3.8, 15.1, 15.2_

  - [x] 7.3 Adapt `src/components/sections/AcademySection.tsx`
    - Remove `w-screen flex-shrink-0` and `overflow-y-auto` from root `<section>`
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `educators` array with `EDUCATORS` import from constants
    - Replace inline header with `SectionHeader` — `as="h1"` for "learn." heading, `as="h2"` for subsections
    - Add hero area with `ImageReveal` placeholder `aspect-[16/9]` and "tera" branding text
    - Add two side-by-side content blocks: "cos'è Academy Tropicale" and "Iconic Essentials" with `grid-cols-1 md:grid-cols-2`
    - Add "cosa include il corso" section with course inclusion list
    - Educators: `flex flex-wrap gap-6` with circular placeholders (`rounded-full`) + names
    - "SCOPRI I CORSI" button → `PillButton` linking to `/contacts` as fallback
    - Add `role="img"` and `aria-label` to all placeholder elements
    - _Requirements: 6.1, 6.2, 6.3, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 4.7, 5.5, 3.8, 15.1, 15.2, 16.3_

  - [x] 7.4 Adapt `src/components/sections/MerchSection.tsx`
    - Remove `w-screen flex-shrink-0` and `overflow-y-auto` from root `<section>`
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `products` array (3 items) with `PRODUCTS` import from constants (4 items)
    - Change grid from `lg:grid-cols-3` to `grid-cols-1 sm:grid-cols-2` (2x2 layout)
    - Replace inline heading with `SectionHeader as="h1"` or `AnimatedText as="h1"`
    - Replace inline "ORDINA ORA" buttons with `PillButton variant="primary" href="/contacts"`
    - Add `role="img"` and `aria-label` to product placeholder elements
    - _Requirements: 6.1, 6.2, 6.3, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 4.7, 5.5, 3.8, 15.1, 15.2, 16.3_

  - [x] 7.5 Adapt `src/components/sections/MembershipSection.tsx`
    - Remove `w-screen flex-shrink-0` and `overflow-y-auto` from root `<section>`
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `benefits` array with `MEMBERSHIP_BENEFITS` import from constants
    - Change `AnimatedText as="h2"` to `as="h1"` for the page heading
    - Replace inline "SCOPRI DI PIÙ" button with `PillButton variant="purple" href="/contacts"`
    - Desktop: `flex-col lg:flex-row` split layout; mobile: single column stack
    - Add `role="img"` and `aria-label` to the 3:4 placeholder element
    - _Requirements: 6.1, 6.2, 6.3, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 4.7, 5.5, 3.8, 15.1, 15.2, 16.3_

  - [x] 7.6 Adapt `src/components/sections/ContactsSection.tsx`
    - Remove `overflow-y-auto` from root `<section>` (no `w-screen flex-shrink-0` present currently)
    - Standardize padding to `px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24`
    - Replace inline `footerLinks` array with `FOOTER_LINKS` import from constants
    - Change `AnimatedText as="h2"` to `as="h1"` for "say hi (:" heading
    - Replace inline newsletter mini card with `NewsletterForm variant="compact"`
    - Replace inline dark card for partnerships with `DarkCard` component
    - Social icons: use `BRAND.socials` for `href` values, add `aria-label` for each platform (Instagram, Spotify, LinkedIn)
    - Use SVG icons from `public/icons/` for social links instead of text abbreviations
    - Add `role="img"` and `aria-label` to the purple decorative placeholder
    - _Requirements: 6.1, 6.2, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 4.7, 5.5, 3.8, 15.1, 15.2, 15.5, 15.6, 16.4_

- [x] 8. Checkpoint — Verify all pages render correctly
  - Ensure all section components compile, all 7 routes render without errors. Ask the user if questions arise.

- [x] 9. Testing setup and property tests
  - [x] 9.1 Install test dependencies and configure Vitest
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check` as dev dependencies
    - Create `vitest.config.ts` with jsdom environment, path aliases matching tsconfig
    - Create test setup file for `@testing-library/jest-dom` matchers
    - _Requirements: 18.1_

  - [x] 9.2 Write property-based test for Events toggle state consistency
    - **Property 6: Events toggle state consistency**
    - Use fast-check to generate random sequences of "home"/"archive" toggle clicks
    - Verify exactly one view visible at a time, correct view matches last toggle
    - **Validates: Requirements 8.3, 8.4, 8.5**

  - [x] 9.3 Write parametric invariant test for archive event card completeness
    - **Property 7: Archive event card completeness**
    - For each `ARCHIVE_EVENTS` entry, render EventsSection in archive view, verify card contains title, date, location, description, placeholder with `aspect-[3/4]`, non-white background
    - **Validates: Requirements 8.1.1, 8.1.2, 8.1.5, 8.7**

  - [x] 9.4 Write parametric invariant test for merch product card completeness
    - **Property 8: Merch product card completeness**
    - For each `PRODUCTS` entry, verify card contains name, description, placeholder with `aspect-[3/4]`, "ORDINA ORA" link with `href="/contacts"`
    - **Validates: Requirements 10.4, 10.5, 10.6**

  - [x] 9.5 Write parametric invariant test for membership benefits rendering
    - **Property 9: Membership benefits rendering from constants**
    - For each `MEMBERSHIP_BENEFITS` entry, verify text appears in rendered MembershipSection
    - **Validates: Requirements 11.3, 11.6**

  - [x] 9.6 Write parametric invariant test for educator rendering
    - **Property 10: Educator rendering from constants**
    - For each `EDUCATORS` entry, verify name appears alongside circular placeholder in AcademySection
    - **Validates: Requirements 9.6**

  - [x] 9.7 Write parametric invariant test for section structural invariants
    - **Property 11: Section component structural invariants**
    - For each section component, verify root is `<section>`, no `w-screen`/`flex-shrink-0` classes, uses `px-6 sm:px-10 lg:px-16` padding
    - **Validates: Requirements 6.1, 6.2, 15.1**

  - [x] 9.8 Write property-based test for placeholder element accessibility
    - **Property 12: Placeholder element accessibility and dimensions**
    - Render each section, query all `role="img"` elements, verify `aria-label` present and non-empty, aspect-ratio class present, correct rounding class (rounded-full for persons, rounded-card for photos)
    - **Validates: Requirements 15.2, 17.1, 17.2, 17.3, 17.4, 17.5**

  - [x] 9.9 Write parametric invariant test for internal link validity
    - **Property 13: Internal link validity**
    - Render each page, query all internal links, verify href matches valid App Router routes, no `"#"` for internal navigation
    - **Validates: Requirements 16.1, 16.2**

  - [x] 9.10 Write parametric invariant test for social media link accessibility
    - **Property 14: Social media link accessibility and correctness**
    - Query social links in ContactsSection, verify `aria-label` for each platform, `href` matches `BRAND.socials` values
    - **Validates: Requirements 15.5, 16.4**

  - [x] 9.11 Write parametric invariant test for single h1 per route
    - **Property 15: Single h1 per route**
    - For each of the 7 routes, render the page and verify exactly one `<h1>` element
    - **Validates: Requirements 3.8, 18.5**

  - [x] 9.12 Write parametric invariant test for footer links from NAV_LINKS
    - **Property 16: Footer links from NAV_LINKS**
    - For each `NAV_LINKS` entry, verify FooterSection contains a link with matching label and href
    - **Validates: Requirements 16.5**

  - [x] 9.13 Write parametric invariant test for ContactsSection footer links
    - **Property 17: ContactsSection footer links from FOOTER_LINKS**
    - For each `FOOTER_LINKS` entry, verify ContactsSection internal footer contains link with matching label and href
    - **Validates: Requirements 12.5**

  - [x] 9.14 Write unit tests for SectionHeader and NewsletterForm
    - Test SectionHeader renders heading at correct level (h1, h2, h3), optional label
    - Test NewsletterForm compact variant renders inline email + "GO" button
    - Test NewsletterForm full variant renders heading, description, email, "Subscribe" button
    - Test both variants have `aria-label="Email"` on input
    - _Requirements: 5.3, 5.4, 15.6_

  - [x] 9.15 Write unit tests for per-page specific requirements
    - AboutSection: exactly 3 team members, manifesto text, navigation pills to /events /academy /membership
    - EventsSection: hero placeholder aspect ratio, toggle buttons present, "From the archive" label
    - AcademySection: hero 16:9, two content blocks, course inclusion list
    - MerchSection: exactly 4 products, descriptive text block
    - MembershipSection: pricing visible, "SCOPRI DI PIÙ" links to /contacts
    - ContactsSection: "say hi (:" heading, purple placeholder, DarkCard, NewsletterForm, 3 social icons
    - _Requirements: 7.1, 7.4, 7.6, 8.1, 8.2, 8.6, 9.1, 9.2, 9.4, 10.2, 10.3, 11.4, 11.5, 12.1, 12.2, 12.3, 12.4, 12.6_

- [x] 10. Build verification and final checkpoint
  - [x] 10.1 Verify TypeScript compilation
    - Run `npx tsc --noEmit` and ensure zero errors
    - _Requirements: 18.1_

  - [x] 10.2 Verify ESLint passes
    - Run `npx eslint .` and ensure zero errors
    - _Requirements: 18.2_

  - [x] 10.3 Verify `next build` succeeds
    - Run `npx next build` and ensure all 7 routes build without errors
    - _Requirements: 18.3_

  - [x] 10.4 Final checkpoint
    - Ensure all tests pass, all routes build, no TypeScript or ESLint errors. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints at tasks 5, 8, and 10.4 ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All section components remain `"use client"` since they use Framer Motion animation primitives
- PageShell and page routes are server components
- `FooterSection` is unchanged — it already imports `NAV_LINKS` from constants
