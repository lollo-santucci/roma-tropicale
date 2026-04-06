// Feature: roma-tropicale-pages, Property 6: Events toggle state consistency
// **Validates: Requirements 8.3, 8.4, 8.5**

import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import fc from "fast-check";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
  useMotionValue: () => ({ set: () => {}, get: () => 0 }),
  useSpring: () => ({ set: () => {}, get: () => 0 }),
}));

vi.mock("@/components/ui/AnimatedText", () => ({
  default: ({ text, as: Tag = "h2", className }: any) => <Tag className={className}>{text}</Tag>,
}));

vi.mock("@/components/ui/ScrollReveal", () => ({
  default: ({ children, className }: any) => <div className={className}>{children}</div>,
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

import EventsSection from "@/components/sections/EventsSection";

const toggleClickArb = fc.array(
  fc.constantFrom("home" as const, "archive" as const),
  { minLength: 1, maxLength: 20 }
);

describe("Property 6: Events toggle state consistency", () => {
  it("displays exactly one view matching the last toggle click for any sequence of clicks", () => {
    fc.assert(
      fc.property(toggleClickArb, (clicks) => {
        const { getByText, queryByText, unmount } = render(<EventsSection />);

        // Execute each click in the sequence
        for (const click of clicks) {
          const buttonText = click === "home" ? "HOME" : "ARCHIVE";
          fireEvent.click(getByText(buttonText));
        }

        const lastClick = clicks[clicks.length - 1];

        if (lastClick === "home") {
          // Home view: the planning text should be visible
          expect(queryByText("Stiamo pianificando il prossimo evento")).not.toBeNull();
          // Archive view: "From the archive" should NOT be visible
          expect(queryByText("From the archive")).toBeNull();
        } else {
          // Archive view: "From the archive" should be visible
          expect(queryByText("From the archive")).not.toBeNull();
          // Home view: the planning text should NOT be visible
          expect(queryByText("Stiamo pianificando il prossimo evento")).toBeNull();
        }

        // Cleanup to avoid DOM leaks between property runs
        unmount();
      }),
      { numRuns: 50 }
    );
  });
});
