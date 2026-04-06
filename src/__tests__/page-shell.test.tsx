// Feature: roma-tropicale-pages, Property 1: PageShell structural invariant
// **Validates: Requirements 1.1, 1.2**

import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import fc from "fast-check";

vi.mock("@/components/layout/CustomCursor", () => ({
  default: () => <div data-testid="custom-cursor" />,
}));
vi.mock("@/components/landing/Navbar", () => ({
  default: () => <nav data-testid="navbar" />,
}));
vi.mock("@/components/landing/FooterSection", () => ({
  default: () => <footer data-testid="footer-section" />,
}));

import PageShell from "@/components/layout/PageShell";

describe("Property 1: PageShell structural invariant", () => {
  it("renders exactly one <main>, with CustomCursor and Navbar before children and FooterSection after", () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }),
        (childText) => {
          const { container } = render(
            <PageShell>
              <div data-testid="children">{childText}</div>
            </PageShell>
          );

          // Exactly one <main> element
          const mains = container.querySelectorAll("main");
          expect(mains).toHaveLength(1);

          const main = mains[0];

          // Verify ordering inside <main> using data-testid positions
          const allTestIds = main.querySelectorAll("[data-testid]");
          const order = Array.from(allTestIds).map((el) =>
            el.getAttribute("data-testid")
          );

          const cursorIdx = order.indexOf("custom-cursor");
          const navbarIdx = order.indexOf("navbar");
          const childrenIdx = order.indexOf("children");
          const footerIdx = order.indexOf("footer-section");

          // All elements must be present
          expect(cursorIdx).toBeGreaterThanOrEqual(0);
          expect(navbarIdx).toBeGreaterThanOrEqual(0);
          expect(childrenIdx).toBeGreaterThanOrEqual(0);
          expect(footerIdx).toBeGreaterThanOrEqual(0);

          // CustomCursor and Navbar appear before children
          expect(cursorIdx).toBeLessThan(childrenIdx);
          expect(navbarIdx).toBeLessThan(childrenIdx);

          // FooterSection appears after children
          expect(footerIdx).toBeGreaterThan(childrenIdx);
        }
      ),
      { numRuns: 100 }
    );
  });
});
