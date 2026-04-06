// Feature: roma-tropicale-pages, Property 7: Archive event card completeness
// **Validates: Requirements 8.1.1, 8.1.2, 8.1.5, 8.7**

import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

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

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock("@/components/ui/ImageReveal", () => ({
  default: ({ className, aspectRatio }: any) => <div className={`${className} ${aspectRatio}`} />,
}));

vi.mock("@/components/ui/PillButton", () => ({
  default: ({ children, href, variant, className, onClick }: any) =>
    href ? <a href={href} className={`${variant} ${className}`}>{children}</a> : <button onClick={onClick} className={`${variant} ${className}`}>{children}</button>,
}));

import EventsSection from "@/components/sections/EventsSection";
import { ARCHIVE_EVENTS } from "@/lib/constants";

describe("Property 7: Archive event card completeness", () => {
  ARCHIVE_EVENTS.forEach((event) => {
    it(`renders complete card for archive event "${event.title}"`, () => {
      const { getByText } = render(<EventsSection />);

      // Switch to archive view
      fireEvent.click(getByText("ARCHIVE"));

      // Verify title, date, location, description are all rendered
      expect(getByText(event.title)).toBeTruthy();
      expect(getByText(event.date)).toBeTruthy();
      expect(getByText(event.location)).toBeTruthy();
      expect(getByText(event.description)).toBeTruthy();
    });
  });

  it("archive cards have colored backgrounds (not just bg-roma-bg-alt)", () => {
    const { getByText, container } = render(<EventsSection />);

    // Switch to archive view
    fireEvent.click(getByText("ARCHIVE"));

    const coloredBgs = container.querySelectorAll(
      '[class*="bg-amber-100"], [class*="bg-emerald-100"], [class*="bg-orange-100"], [class*="bg-lime-100"]'
    );

    // There should be at least as many colored backgrounds as archive events
    expect(coloredBgs.length).toBeGreaterThanOrEqual(ARCHIVE_EVENTS.length);
  });
});
