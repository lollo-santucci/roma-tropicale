---
title: Product Vision & Identity
inclusion: always
---

# Roma Tropicale — Product

## Vision

Roma Tropicale is an urban movement of plant lovers in Rome — a creative studio and community platform. It's not an e-commerce or a blog: it's a community hub that connects events, education, merch, and membership around urban green culture.

**Tagline:** "rooted in Rome, creating green connections around"
**Contact:** ciao@romatropicale.com
**Tone:** playful, organic, contemporary — never corporate
**Content language:** Italian

## Target Audience

- Plant lovers in Rome, 20-35, creatives, community-oriented
- Brand partners: Deliveroo, Spritz, Tara, The Hoxton, W Hotels, WWF, Elho, Plant Circle, Peppermint

## Pages & Their Purpose

Each page has a corresponding design reference in `design/`.

### 1. Landing (`/`)
Hero with animated 3D logo, scattered photo collage with scroll-driven parallax, marquee ticker, horizontal highlights carousel, newsletter signup card (dark), footer with 3D logo.
- Reference: `design/landing page.png`
- Implemented: `#[[file:src/app/page.tsx]]`

### 2. About (`/about`)
Brand manifesto with long-form Italian text + community photos. "Team & Network" section with 3 key figures (photo cards with roles). "Brands we collaborate with" section featuring partner logos in a grid. Pill buttons for navigation (events, academy, membership).
- Reference: `design/about.png`
- Component: `#[[file:src/components/sections/AboutSection.tsx]]`

### 3. Events (`/events`)
Full-width event photo hero with italic text overlay ("stiamo pianificando il prossimo evento"). "From the archive" section with colorful graphic poster cards for past events (yellow, green, orange tones). Each card has event title + short description. HOME/ARCHIVE toggle buttons (pill, dark).
- Reference: `design/events.png`
- Component: `#[[file:src/components/sections/EventsSection.tsx]]`

### 4. Academy (`/academy`)
Hero with botanical illustration + partner branding ("tera"). Two content blocks: "cos'è Academy Tropicale" and "Iconic Essentials" — each with descriptive text and side-by-side photos. "Cosa include il corso" detailed list at the bottom. Educator profiles in a horizontal photo strip.
- Reference: `design/academy.png`
- Component: `#[[file:src/components/sections/AcademySection.tsx]]`

### 5. Merch (`/merch`)
"Il merch di Roma Tropicale" title + descriptive text about limited editions and sustainability. 2x2 product grid (bucket hats, tees) with lifestyle photography. Each product has an "ORDINA ORA" dark pill button. Purple navigation dots on the right.
- Reference: `design/scopri il merch.png`
- Component: `#[[file:src/components/sections/MerchSection.tsx]]`

### 6. Membership (`/membership`)
"Entra a far parte del club!" heading. Benefits listed as bullet points (events access, plant swap, workshops, exclusive content). Pricing info and dates. Single community photo. "SCOPRI DI PIÙ" purple pill CTA.
- Reference: `design/become a member.png`
- Component: `#[[file:src/components/sections/MembershipSection.tsx]]`

### 7. Contacts (`/contacts`)
Split layout: "say hi (:" + large email on the left, tagline + purple 3D teardrop shape on the right. Dark rounded card for "Collaborazioni & Partnership" with CTA. Social icons (IG, Spotify, LinkedIn) aligned vertically on the right edge. Newsletter signup section. Footer with 3D logo centered, 4 nav links spread horizontally.
- Reference: `design/contacts.png`
- Component: `#[[file:src/components/sections/ContactsSection.tsx]]`

## Recurring Visual Patterns

These patterns appear across all page designs and must be maintained:

- **3D purple logo** as decorative element in every page footer
- **Dark rounded cards** (`rounded-card`, `bg-roma-dark`) for prominent CTAs (newsletter, collaborations)
- **Asymmetric layout**: text on the left, images on the right (or scattered/collage)
- **Black pill buttons** with white text as primary CTA
- **Purple pill buttons** for secondary/accent actions
- **Generous whitespace** between sections
- **Real photography** of events/people/plants — never stock, always community-sourced
- **Colorful graphic posters** (yellow, green, orange) for past event cards
- **Social icons** (IG, Spotify, LinkedIn) aligned vertically on the right edge
- **Minimal footer**: only 4 links (About, Events, Academy, Contact) spread horizontally
- **Scattered/rotated elements**: intentional playful asymmetry (e.g., rotated nav links in Navbar)
