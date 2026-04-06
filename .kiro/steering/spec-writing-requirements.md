---
title: Requirements Specification Writing Standards
inclusion: fileMatch
globs:
  - ".kiro/specs/**/requirements.md"
---

# Requirements Specification Standards

This steering file defines how to write requirements documents that are precise, verifiable, and implementation-ready. Follow these standards every time you generate or edit a `requirements.md` file in `.kiro/specs/`.

For a gold-standard reference, see: `#[[file:.kiro/specs/roma-tropicale-pages/requirements.md]]`

## Document Structure

Every requirements document MUST follow this exact structure in order:

```markdown
# Requirements Document

## Introduction
## Glossary
## Requirements
## Technical Constraints
```

### Introduction

A single paragraph that summarizes WHAT is being built, WHY, and the key architectural decisions. It should be dense enough that a developer reading only the introduction understands the scope.

**Good:**
> Build the 6 remaining pages of the Roma Tropicale website as Next.js App Router routes. Each page uses a shared PageShell component that owns the single `<main>` element, exports Italian metadata, and adapts its section component layout for standalone page rendering.

**Bad:**
> We need to build some new pages for the website and make them look nice.

### Glossary

Define every domain-specific term BEFORE using it in requirements. Terms become a shared vocabulary that makes acceptance criteria concise and unambiguous.

**Rules:**
- Use `PascalCase_With_Underscores` for multi-word terms (e.g., `Section_Component`, `Dark_Card`, `Animation_Primitive`)
- Each term gets a one-sentence definition explaining what it IS and what it DOES
- Define component names, data sources, UI patterns, and view states
- If a requirement would need to explain what something is inline, it belongs in the glossary instead

**Good:**
> - **PageShell**: A shared wrapper component that renders the single `<main>` element containing CustomCursor, Navbar, page children, and FooterSection.
> - **Placeholder_Element**: A styled `<div>` with a defined aspect ratio and background color, used in place of a final image. Placeholder elements have fixed dimensions and do not cause layout shift.

**Bad:**
> - **PageShell**: The shell component
> - **Placeholder**: An image placeholder

### Requirements (WHAT)

Requirements describe what the product does from the user's perspective. They answer WHAT, not HOW.

### Technical Constraints (HOW)

Technical constraints describe implementation decisions that govern HOW the requirements are built. They are separated from requirements because they can change independently (e.g., switching from Framer Motion to CSS animations wouldn't change what the user sees).

Label them `TC-1`, `TC-2`, etc. with descriptive titles.

## Writing Requirements

### User Story

Every requirement MUST start with a user story:

```
**User Story:** As a [role], I want [goal], so that [benefit].
```

**Roles to use:**
- `visitor` — end user browsing the site
- `developer` — someone maintaining or extending the code
- `search engine crawler` — for SEO requirements
- `visitor using assistive technology` — for accessibility requirements
- `mobile visitor` — for responsive/mobile-specific requirements

### Acceptance Criteria

Each requirement has numbered acceptance criteria using formal language:

**Keywords (RFC-style):**
- `SHALL` — mandatory behavior
- `SHALL NOT` — prohibited behavior
- `WHEN` — trigger condition
- `WHILE` — ongoing state condition (e.g., viewport width)
- `IF...THEN` — conditional behavior

**Format:**
```
1. THE [Subject from Glossary] SHALL [do something specific and verifiable]
2. WHEN [condition], THE [Subject] SHALL [behavior]
3. WHILE [state], THE [Subject] SHALL [behavior]
```

**Rules for acceptance criteria:**

1. **One behavior per criterion.** Never combine two SHALL statements with "and". Split them.

2. **Use glossary terms as subjects.** Write `THE Section_Components SHALL` not `THE section components shall`. This creates traceability.

3. **Be specific with values.** Always include exact numbers, class names, sizes, aspect ratios, breakpoints, column counts. Never use vague words like "appropriate", "suitable", "reasonable", "nice", "good".

   Good: `THE archive event cards SHALL display in a 4-column grid on desktop, 2-column on tablet, and single-column on mobile`
   Bad: `THE cards SHALL display in a responsive grid`

4. **Make criteria verifiable.** Every criterion must be testable with a yes/no answer. If you can't verify it, rewrite it.

   Good: `THE project SHALL compile with zero TypeScript errors`
   Bad: `THE code should be well-typed`

5. **Reference data sources explicitly.** Write `THE EventsSection SHALL render archive event data from the Constants_Module ARCHIVE_EVENTS array` not `THE section shall show events`.

### Sub-Requirements

Use sub-requirements (e.g., `8.1`) when a requirement contains a complex element that needs its own acceptance criteria. The parent requirement defines the overall feature; the child defines a specific element within it.

**When to use:**
- A card/item in a list needs its own structural definition
- A view state (e.g., toggle between Home_View and Archive_View) has complex behavior
- A form has multiple fields with individual validation rules

**Format:**
```markdown
### Requirement 8: Events Page Layout
[...parent acceptance criteria...]

### Requirement 8.1: Archive Event Card Structure
[...child acceptance criteria for the card element...]
```

### Cross-Cutting Requirements

Some concerns span all pages. Write these as dedicated requirements instead of repeating criteria in every page requirement:

- **Responsive layout** — breakpoint behavior, padding, typography scaling
- **Animation consistency** — which primitives to use, easing, trigger behavior
- **Accessibility** — semantic HTML, ARIA, keyboard, contrast
- **Link/navigation consistency** — valid routes, fallback behavior
- **Placeholder behavior** — aspect ratios, dimensions, layout stability
- **Definition of Done** — build, lint, type-check, runtime quality gates

### Definition of Done

The LAST requirement in every spec must be a "Definition of Done" with explicit quality gates:

```markdown
### Requirement N: Definition of Done

**User Story:** As a developer, I want a clear set of build and runtime quality gates, so that the delivered feature is free of compilation errors and runtime issues.

#### Acceptance Criteria

1. THE project SHALL compile with zero TypeScript errors
2. THE project SHALL produce zero ESLint errors
3. THE project SHALL build successfully via `next build` without errors
4. THE project SHALL produce zero hydration mismatch warnings in the browser console
5. WHEN each route is requested, THE server SHALL return HTTP 200
```

Adapt the specific checks to the project's stack and the feature's scope.

## Writing Technical Constraints

Technical constraints follow the same numbered acceptance criteria format but are grouped by concern:

```markdown
### TC-1: Server and Client Component Boundaries
1. THE page routes SHALL be server components...
2. THE Section_Components SHALL include "use client" only when...

### TC-2: Animation Implementation
1. THE scroll-triggered animations SHALL use existing Animation_Primitives...

### TC-3: Styling and CSS
1. THE components SHALL use Tailwind CSS utility classes...
```

**Rules:**
- Group by technical concern, not by feature
- Reference specific technologies, class names, patterns
- These constraints apply across ALL requirements — don't repeat them per requirement

## Common Mistakes to Avoid

1. **Vague criteria**: "should look good" → specify exact classes, sizes, aspect ratios
2. **Missing glossary terms**: if you write the same explanation twice, extract it to the glossary
3. **Mixing WHAT and HOW**: "SHALL use useScroll hook" is a technical constraint, not a requirement. The requirement is "SHALL animate on scroll"
4. **No fallback behavior**: always specify what happens when something isn't implemented yet (e.g., link to /contacts as fallback)
5. **Missing responsive behavior**: every layout requirement needs WHILE viewport width conditions
6. **Unnumbered criteria**: every acceptance criterion must be numbered for traceability
7. **Compound criteria**: "SHALL do X and Y" → split into two separate numbered criteria
