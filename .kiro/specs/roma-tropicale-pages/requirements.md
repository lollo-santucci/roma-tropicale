# Requirements Document

## Introduction

Build the 6 remaining pages of the Roma Tropicale website (/about, /events, /academy, /merch, /membership, /contacts) as Next.js App Router routes. Each page uses a shared PageShell component that owns the single `<main>` element, exports Italian metadata, and adapts its section component layout for standalone page rendering. All hardcoded data is consolidated into `src/lib/constants.ts`, and repeated UI patterns are extracted into shared reusable components. The existing homepage is refactored to use PageShell for consistency.

## Glossary

- **PageShell**: A shared wrapper component that renders the single `<main>` element containing CustomCursor, Navbar, page children, and FooterSection. PageShell owns the `<main>` — page routes pass children only.
- **Section_Component**: A React component in `src/components/sections/` that renders the main content for a specific page.
- **Constants_Module**: The file `src/lib/constants.ts` where all structured data arrays are defined as named exports.
- **Shared_Component**: A reusable React component in `src/components/ui/` that encapsulates a UI pattern used across multiple pages.
- **Page_Metadata**: A Next.js `Metadata` export containing title, description, openGraph, canonical URL, and robots fields in Italian.
- **Pill_Button**: A rounded-full button using `rounded-pill` border radius (9999px), with a minimum touch target height of 44px.
- **Dark_Card**: A container with dark background and rounded corners used for prominent CTA sections.
- **Animation_Primitive**: An existing reusable animation component (AnimatedText, ScrollReveal, ImageReveal, ParallaxImage) that provides scroll-triggered, non-re-triggering animations.
- **Placeholder_Element**: A styled `<div>` with a defined aspect ratio and background color, used in place of a final image or illustration. Placeholder elements have fixed dimensions and do not cause layout shift.
- **Home_View**: The default view on the Events page showing the upcoming event hero area.
- **Archive_View**: The alternate view on the Events page showing past event cards from the archive.

## Requirements

### Requirement 1: PageShell Shared Wrapper

**User Story:** As a developer, I want a single shared page wrapper component, so that the layout structure (CustomCursor, Navbar, main, FooterSection) is defined once and reused by every page.

#### Acceptance Criteria

1. THE PageShell SHALL render a single `<main>` element that wraps the page children between Navbar and FooterSection
2. THE PageShell SHALL render CustomCursor and Navbar before the children, and FooterSection after the children, all inside the `<main>` element
3. WHEN a page route uses PageShell, THE page route SHALL pass its section content as children — the page route SHALL NOT render its own `<main>` element
4. THE existing homepage (`src/app/page.tsx`) SHALL be refactored to use PageShell instead of manually composing CustomCursor, Navbar, and FooterSection

### Requirement 2: App Router Page Creation

**User Story:** As a visitor, I want to navigate to /about, /events, /academy, /merch, /membership, and /contacts, so that I can access each section of the Roma Tropicale site as a standalone page.

#### Acceptance Criteria

1. WHEN a visitor navigates to /about, THE page route SHALL render AboutSection as children of PageShell
2. WHEN a visitor navigates to /events, THE page route SHALL render EventsSection as children of PageShell
3. WHEN a visitor navigates to /academy, THE page route SHALL render AcademySection as children of PageShell
4. WHEN a visitor navigates to /merch, THE page route SHALL render MerchSection as children of PageShell
5. WHEN a visitor navigates to /membership, THE page route SHALL render MembershipSection as children of PageShell
6. WHEN a visitor navigates to /contacts, THE page route SHALL render ContactsSection as children of PageShell

### Requirement 3: Page Metadata and SEO

**User Story:** As a search engine crawler, I want each page to have unique Italian metadata with complete SEO fields, so that the site is properly indexed with correct titles, descriptions, and structured data.

#### Acceptance Criteria

1. THE About page SHALL export Page_Metadata with title "About — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
2. THE Events page SHALL export Page_Metadata with title "Eventi — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
3. THE Academy page SHALL export Page_Metadata with title "Academy — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
4. THE Merch page SHALL export Page_Metadata with title "Merch — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
5. THE Membership page SHALL export Page_Metadata with title "Membership — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
6. THE Contacts page SHALL export Page_Metadata with title "Contatti — Roma Tropicale", an Italian description, openGraph fields with locale "it_IT", and a canonical URL
7. THE Page_Metadata for each page SHALL include robots fields allowing indexing and following
8. THE Section_Components SHALL use a structured heading hierarchy with exactly one `<h1>` (or equivalent primary heading) per page, followed by `<h2>` and `<h3>` as needed

### Requirement 4: Data Consolidation into Constants

**User Story:** As a developer, I want all page content data centralized in constants.ts, so that content is easy to find, update, and type-check.

#### Acceptance Criteria

1. THE Constants_Module SHALL contain an `ARCHIVE_EVENTS` array with title, date, location, and description fields for each past event
2. THE Constants_Module SHALL contain a `PRODUCTS` array with name and description fields for each merch product
3. THE Constants_Module SHALL contain an `EDUCATORS` array with name fields for each academy educator
4. THE Constants_Module SHALL contain a `MEMBERSHIP_BENEFITS` array with string entries for each membership benefit
5. THE Constants_Module SHALL contain a `TEAM_MEMBERS` array with name and role fields for each team member
6. THE Constants_Module SHALL contain a `FOOTER_LINKS` array with label and href fields for the contacts page footer links
7. WHEN a Section_Component renders list data, THE Section_Component SHALL import the data from Constants_Module instead of defining the data locally

### Requirement 5: Shared Reusable UI Components

**User Story:** As a developer, I want repeated UI patterns extracted into shared components, so that visual consistency is maintained and code duplication is eliminated.

#### Acceptance Criteria

1. WHEN multiple pages use a dark rounded card with heading, description, and optional CTA, THE Shared_Component library SHALL provide a DarkCard component with title, description, children, and className props
2. WHEN multiple pages use pill-shaped navigation buttons, THE Shared_Component library SHALL provide a PillButton component with variant (primary, purple, outlined), href, and children props
3. WHEN multiple pages use a section header with uppercase label and large heading, THE Shared_Component library SHALL provide a SectionHeader component with label, heading, and className props
4. WHEN multiple pages use a newsletter signup form, THE Shared_Component library SHALL provide a NewsletterForm component with compact and full variants
5. THE Section_Components SHALL use the extracted Shared_Components instead of duplicating the UI patterns inline

### Requirement 6: Section Component Adaptation for Standalone Pages

**User Story:** As a developer, I want section components adapted from horizontal-scroll panels to full standalone pages, so that they render correctly as App Router pages.

#### Acceptance Criteria

1. THE Section_Components SHALL remove `w-screen` and `flex-shrink-0` classes that were designed for horizontal scroll layout
2. THE Section_Components SHALL use consistent section padding across all pages
3. THE Section_Components SHALL use existing Animation_Primitives (AnimatedText, ScrollReveal, ImageReveal, ParallaxImage) for scroll-triggered animations

### Requirement 7: About Page Layout

**User Story:** As a visitor, I want the About page to present the brand manifesto, team, and partners in a clear structured layout.

#### Acceptance Criteria

1. THE AboutSection SHALL display the full brand manifesto text as a long-form Italian paragraph
2. THE AboutSection SHALL display a two-column layout on desktop: text content on the left and a Placeholder_Element with aspect ratio 3:4 on the right
3. WHILE the viewport width is below 768px, THE AboutSection SHALL stack the two-column layout into a single column
4. THE AboutSection SHALL display exactly 3 team members, each with a Placeholder_Element (square aspect ratio), name, and role
5. THE AboutSection SHALL display a partner logos section showing brand collaboration partners as pill-shaped labels
6. THE AboutSection SHALL display Pill_Button navigation elements linking to /events, /academy, and /membership pages

### Requirement 8: Events Page Layout

**User Story:** As a visitor, I want the Events page to show upcoming events and an archive, so that I can see what happened and what is coming.

#### Acceptance Criteria

1. THE EventsSection SHALL display a full-width hero area with a dark-background Placeholder_Element (aspect ratio 16:7 on desktop, 16:9 on mobile) and italic text overlay
2. THE EventsSection SHALL display a toggle area with two Pill_Buttons labeled "HOME" (filled) and "ARCHIVE" (outlined)
3. WHEN the visitor activates the "HOME" toggle, THE EventsSection SHALL display the Home_View containing the upcoming event hero content
4. WHEN the visitor activates the "ARCHIVE" toggle, THE EventsSection SHALL display the Archive_View containing past event cards — the Home_View content SHALL be hidden
5. THE toggle SHALL be a client-side state switch — both views render on the same page without triggering navigation
6. THE EventsSection SHALL display a "From the archive" section label above the archive event cards
7. THE EventsSection SHALL render archive event data from the Constants_Module `ARCHIVE_EVENTS` array

### Requirement 8.1: Archive Event Card Structure

**User Story:** As a visitor, I want each archive event card to show the event details clearly.

#### Acceptance Criteria

1. THE archive event card SHALL contain a Placeholder_Element with aspect ratio 3:4 and a colored background
2. THE archive event card SHALL display the event date, title, location, and description as separate text elements
3. THE archive event card SHALL use rounded corners consistent with the design system
4. THE archive event cards SHALL display in a 4-column grid on desktop, 2-column on tablet, and single-column on mobile
5. THE archive event cards SHALL use distinct non-white background color classes (e.g., warm yellows, greens, oranges) to create a colorful poster-style appearance

### Requirement 9: Academy Page Layout

**User Story:** As a visitor, I want the Academy page to explain the educational program, courses, and educators.

#### Acceptance Criteria

1. THE AcademySection SHALL display a hero area containing a Placeholder_Element (aspect ratio 16:9) and partner branding text ("tera")
2. THE AcademySection SHALL display two side-by-side content blocks on desktop: "cos'è Academy Tropicale" and "Iconic Essentials", each with descriptive text and a Placeholder_Element
3. WHILE the viewport width is below 768px, THE AcademySection SHALL stack the two content blocks vertically
4. THE AcademySection SHALL display a "cosa include il corso" section with a list of course inclusion details
5. THE AcademySection SHALL display educator profiles in a horizontal scrollable or wrapping layout, each with a circular Placeholder_Element and name
6. THE AcademySection SHALL render educator data from the Constants_Module `EDUCATORS` array

### Requirement 10: Merch Page Layout

**User Story:** As a visitor, I want the Merch page to display available merchandise in a browsable grid.

#### Acceptance Criteria

1. THE MerchSection SHALL display products in a 2-column grid on desktop and single-column on mobile
2. THE MerchSection SHALL display 4 products to fill the 2x2 grid
3. THE MerchSection SHALL display a descriptive text block about limited editions and sustainability
4. THE MerchSection SHALL display an "ORDINA ORA" Pill_Button for each product that links to the /contacts page as a fallback until e-commerce is implemented
5. THE MerchSection SHALL render product data from the Constants_Module `PRODUCTS` array
6. THE product cards SHALL each contain a Placeholder_Element with aspect ratio 3:4 and a background color

### Requirement 11: Membership Page Layout

**User Story:** As a visitor, I want the Membership page to explain benefits and pricing so I can decide whether to join.

#### Acceptance Criteria

1. THE MembershipSection SHALL display a split layout on desktop: text content on the left and a single Placeholder_Element (aspect ratio 3:4) on the right
2. WHILE the viewport width is below 768px, THE MembershipSection SHALL stack the layout into a single column
3. THE MembershipSection SHALL display benefits as a bullet list
4. THE MembershipSection SHALL display pricing information inline with the benefits section
5. THE MembershipSection SHALL display a single "SCOPRI DI PIÙ" purple Pill_Button that links to the /contacts page as a fallback until the membership signup flow is implemented
6. THE MembershipSection SHALL render benefit data from the Constants_Module `MEMBERSHIP_BENEFITS` array

### Requirement 12: Contacts Page Layout

**User Story:** As a visitor, I want the Contacts page to show contact information, partnerships, and a newsletter signup.

#### Acceptance Criteria

1. THE ContactsSection SHALL display a "say hi (:" heading with the brand email in large text on the left side
2. THE ContactsSection SHALL display a decorative Placeholder_Element (approximately 64px wide, 96px tall) positioned on the right side of the header area, using the brand purple background color
3. THE ContactsSection SHALL display a Dark_Card for "Collaborazioni & Partnership" containing partner pills and a CTA
4. THE ContactsSection SHALL display a newsletter signup section using the NewsletterForm Shared_Component
5. THE ContactsSection SHALL display a footer area with 4 horizontal navigation links (About, Events, Academy, Contact) linking to their respective routes
6. THE ContactsSection SHALL display social media icons (Instagram, Spotify, LinkedIn) as clickable elements

### Requirement 13: Responsive Layout

**User Story:** As a mobile visitor, I want all pages to be responsive, so that the site is usable on phones, tablets, and desktops.

#### Acceptance Criteria

1. THE Section_Components SHALL use a mobile-first responsive padding pattern with increasing padding at `sm` and `lg` breakpoints
2. THE Section_Components SHALL use responsive typography scales: headings increasing at `sm` and `lg` breakpoints, body text increasing at `sm` breakpoint
3. WHILE the viewport width is below 640px, THE Section_Components SHALL stack multi-column grid layouts into a single column
4. WHILE the viewport width is below 768px, THE Navbar SHALL remain hidden — this preserves the existing `hidden md:block` behavior already implemented in the Navbar component
5. THE Pill_Buttons SHALL maintain a minimum touch target height of 44px on all viewports
6. THE Placeholder_Elements SHALL maintain their defined aspect ratios at all viewport widths without causing layout shift

### Requirement 14: Animation Consistency

**User Story:** As a visitor, I want consistent scroll-triggered animations across all pages, so that the site feels cohesive.

#### Acceptance Criteria

1. THE Section_Components SHALL use existing Animation_Primitives (AnimatedText for headings, ScrollReveal for content blocks, ImageReveal for photos) instead of creating custom animation logic
2. THE scroll-triggered animations SHALL use a shared easing curve consistent with the existing Animation_Primitives
3. THE scroll-triggered animations SHALL trigger once and not re-trigger when scrolling back

### Requirement 15: Accessibility

**User Story:** As a visitor using assistive technology, I want the site to be navigable and understandable, so that I can access all content regardless of ability.

#### Acceptance Criteria

1. THE Section_Components SHALL use semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<footer>`, `<header>`) appropriate to their content
2. THE Placeholder_Elements SHALL include descriptive `alt` text (via `role="img"` and `aria-label`) indicating what the placeholder represents (e.g., "Team member photo placeholder")
3. THE interactive elements (buttons, links) SHALL be keyboard-focusable and operable via Enter or Space key
4. THE Pill_Buttons rendered as links SHALL use `<a>` (or Next.js `<Link>`) elements; Pill_Buttons rendered as actions SHALL use `<button>` elements
5. THE social media icon links SHALL include accessible labels (via `aria-label`) identifying the destination (e.g., "Instagram", "Spotify", "LinkedIn")
6. THE newsletter form inputs SHALL have associated `<label>` elements or `aria-label` attributes
7. THE color combinations used for text on backgrounds SHALL maintain sufficient contrast for readability

### Requirement 16: Link and Navigation Consistency

**User Story:** As a visitor, I want all links and buttons to navigate to valid destinations, so that I never encounter broken or placeholder navigation.

#### Acceptance Criteria

1. THE internal navigation links across all pages SHALL use consistent route paths matching the App Router structure (/about, /events, /academy, /merch, /membership, /contacts)
2. THE CTA buttons that navigate to internal pages SHALL use valid internal route paths — no placeholder `"#"` values for internal navigation
3. WHEN a CTA button triggers an action that is not yet implemented (e.g., "SCOPRI I CORSI" on Academy), THE button SHALL link to the /contacts page as a fallback
4. THE social media links SHALL use the URLs defined in the Constants_Module `BRAND.socials` object
5. THE footer navigation links in PageShell SHALL use the `NAV_LINKS` array from Constants_Module for consistent paths

### Requirement 17: Placeholder and Performance

**User Story:** As a visitor, I want pages to load quickly without visual jank, and as a developer, I want placeholder elements to behave predictably and be ready for future image replacement.

#### Acceptance Criteria

1. THE Placeholder_Elements SHALL have a defined aspect ratio (e.g., 3:4, 16:9, 1:1) specified via CSS aspect-ratio classes
2. THE Placeholder_Elements SHALL render a solid background color from the design system color palette
3. THE Placeholder_Elements SHALL have explicit dimensions (via aspect ratio classes and width constraints) to prevent cumulative layout shift during page load or when replaced with actual images in the future
4. WHEN a Placeholder_Element represents a person (team member, educator), THE Placeholder_Element SHALL use a circular or rounded shape consistent with the section design
5. WHEN a Placeholder_Element represents a photo or illustration, THE Placeholder_Element SHALL use rounded corners consistent with the design system (`rounded-card`)
6. IF an image or asset fails to load, THEN THE Section_Component SHALL display the Placeholder_Element background color without breaking the layout

### Requirement 18: Definition of Done

**User Story:** As a developer, I want a clear set of build and runtime quality gates, so that the delivered pages are free of compilation errors, hydration issues, and broken routes.

#### Acceptance Criteria

1. THE project SHALL compile with zero TypeScript errors when running the TypeScript compiler
2. THE project SHALL produce zero ESLint errors when running the linter
3. THE project SHALL build successfully via `next build` without errors for all pages
4. THE project SHALL produce zero hydration mismatch warnings in the browser console at runtime
5. WHEN each of the 7 routes (/, /about, /events, /academy, /merch, /membership, /contacts) is requested, THE server SHALL return HTTP 200 and the rendered page SHALL contain exactly one `<h1>` element with the expected primary heading for that page

---

## Technical Constraints

The following constraints govern implementation choices. They describe HOW the requirements above are built, and are separated from the WHAT of the product requirements.

### TC-1: Server and Client Component Boundaries

1. THE page routes and PageShell SHALL be server components to minimize client-side JavaScript sent to the browser
2. THE Section_Components SHALL include the `"use client"` directive only when the component uses React hooks, browser event handlers, or Framer Motion
3. WHEN a Section_Component does not use any client-side features, THE Section_Component SHALL remain a server component

### TC-2: Animation Implementation

1. THE scroll-triggered animations SHALL be implemented using the existing Animation_Primitives (AnimatedText, ScrollReveal, ImageReveal, ParallaxImage) which depend on Framer Motion
2. THE Animation_Primitives SHALL use a shared easing curve for visual consistency

### TC-3: Placeholder Implementation

1. THE Placeholder_Elements SHALL use CSS `aspect-ratio` utility classes (e.g., `aspect-[3/4]`, `aspect-[16/9]`) to maintain dimensions
2. THE Placeholder_Elements SHALL use Tailwind background color classes from the design system palette (e.g., `bg-roma-bg-alt`, `bg-roma-purple/20`)

### TC-4: Styling and CSS

1. THE Section_Components SHALL use Tailwind CSS utility classes for all styling — no custom CSS files per component
2. THE Pill_Buttons SHALL use `rounded-pill` (9999px border radius) from the design system
3. THE Dark_Cards SHALL use `rounded-card` and `bg-roma-dark` from the design system
