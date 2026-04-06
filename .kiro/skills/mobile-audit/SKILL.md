---
name: mobile-audit
description: Audit components and pages for mobile-specific issues including overflow, tap targets, text density, navigation, modals, layouts below 390px, and invasive sticky elements.
---

# Mobile Audit

Analyze every component and page for mobile-specific problems. This is not about making things responsive — it's about finding bugs and UX issues that only appear on small screens.

## What to check

### Overflow
- Look for horizontal overflow caused by fixed-width elements, absolute positioning, or content wider than viewport
- Check for `w-screen` or `w-[Xpx]` values that exceed mobile viewport (390px)
- Flag any element with `overflow-x: hidden` on a parent — it might be masking a real overflow bug

### Tap Targets
- All interactive elements (buttons, links, inputs) must have minimum 44x44px touch area
- Check for links/buttons that are too close together (< 8px gap)
- Flag icon-only buttons without adequate padding
- Check that pill buttons have enough height on mobile

### Text Density
- Flag text blocks that exceed 5 lines on a 390px screen without visual breaks
- Check line-height is at least 1.4 for body text on mobile
- Flag font sizes below 12px on mobile
- Check that long words don't cause horizontal overflow (add `break-words` where needed)

### Navigation
- Check that primary navigation is accessible on mobile (not hidden behind desktop-only elements)
- Flag fixed/sticky navbars that take more than 60px of vertical space
- Ensure back/close buttons are reachable by thumb (bottom-left or bottom-right)

### Modals & Overlays
- Check modals are full-screen or bottom-sheet on mobile (not centered floating)
- Flag modals without a clear close mechanism on mobile
- Check that modals don't cause body scroll lock issues

### Layout Collapse
- Test every grid and flex layout at 390px width
- Flag `lg:grid-cols-X` without mobile fallback (`grid-cols-1`)
- Check that column gaps don't create excessive whitespace on mobile
- Flag images without max-width constraints

### Sticky Elements
- Flag sticky headers/footers that combine to take more than 120px of viewport
- Check that sticky elements don't overlap content on scroll
- Flag sticky elements that don't unstick on mobile

## How to report

For each issue found, report:
1. File path and line number
2. What the problem is
3. How to fix it (specific Tailwind class or code change)
4. Priority: critical (breaks layout), high (bad UX), medium (polish)
