// Feature: roma-tropicale-pages, Property 4: PillButton variant rendering
// **Validates: Requirements 5.2, 13.5, 15.4, TC-4.2**

import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import fc from "fast-check";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import PillButton from "@/components/ui/PillButton";

const variantArb = fc.constantFrom("primary" as const, "purple" as const, "outlined" as const);
const hrefArb = fc.constantFrom(undefined, "/about", "/events", "/academy", "/merch");
const childrenArb = fc.string({ minLength: 1, maxLength: 30 });

const variantClasses: Record<string, string[]> = {
  primary: ["bg-roma-dark", "text-roma-white"],
  purple: ["bg-roma-purple", "text-roma-white"],
  outlined: ["border", "border-roma-dark", "text-roma-dark"],
};

describe("Property 4: PillButton variant rendering", () => {
  it("renders correct element type, classes, and min-height for all variant × href × children combos", () => {
    fc.assert(
      fc.property(
        fc.record({ variant: variantArb, href: hrefArb, children: childrenArb }),
        ({ variant, href, children }) => {
          const { container } = render(
            <PillButton variant={variant} href={href}>
              {children}
            </PillButton>
          );

          const el = href
            ? container.querySelector("a")
            : container.querySelector("button");

          // Element type: <a> when href provided, <button> when absent
          expect(el).not.toBeNull();

          if (href) {
            expect(el!.tagName).toBe("A");
            expect(el!.getAttribute("href")).toBe(href);
          } else {
            expect(el!.tagName).toBe("BUTTON");
          }

          // rounded-pill class present
          expect(el!.className).toContain("rounded-pill");

          // min-height 44px class present
          expect(el!.className).toContain("min-h-[44px]");

          // Correct variant classes
          for (const cls of variantClasses[variant]) {
            expect(el!.className).toContain(cls);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
