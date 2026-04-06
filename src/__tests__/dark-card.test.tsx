// Feature: roma-tropicale-pages, Property 5: DarkCard structural rendering
// **Validates: Requirements 5.1, TC-4.3**

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import fc from "fast-check";
import DarkCard from "@/components/ui/DarkCard";

const titleArb = fc.option(fc.string({ minLength: 1 }), { nil: undefined });
const descriptionArb = fc.option(fc.string({ minLength: 1 }), { nil: undefined });
const hasChildrenArb = fc.boolean();

describe("Property 5: DarkCard structural rendering", () => {
  it("renders correct container classes and conditionally renders title, description, and children", () => {
    fc.assert(
      fc.property(
        fc.record({ title: titleArb, description: descriptionArb, hasChildren: hasChildrenArb }),
        ({ title, description, hasChildren }) => {
          const childrenText = "test-children-content";
          const { container } = render(
            <DarkCard title={title} description={description}>
              {hasChildren ? <span>{childrenText}</span> : undefined}
            </DarkCard>
          );

          const root = container.firstElementChild as HTMLElement;

          // Container always has bg-roma-dark and rounded-card
          expect(root.className).toContain("bg-roma-dark");
          expect(root.className).toContain("rounded-card");

          // Title: heading with text-roma-white when provided, absent otherwise
          const heading = root.querySelector("h3");
          if (title !== undefined) {
            expect(heading).not.toBeNull();
            expect(heading!.className).toContain("text-roma-white");
            expect(heading!.textContent).toBe(title);
          } else {
            expect(heading).toBeNull();
          }

          // Description: paragraph with text-roma-white/60 when provided, absent otherwise
          const paragraph = root.querySelector("p");
          if (description !== undefined) {
            expect(paragraph).not.toBeNull();
            expect(paragraph!.className).toContain("text-roma-white/60");
            expect(paragraph!.textContent).toBe(description);
          } else {
            expect(paragraph).toBeNull();
          }

          // Children: rendered inside container when provided
          if (hasChildren) {
            expect(root.textContent).toContain(childrenText);
          } else {
            expect(root.textContent).not.toContain(childrenText);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
