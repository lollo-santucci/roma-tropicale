// Feature: roma-tropicale-pages, Property 7: Event workshop and activity cards
// **Validates: Workshop cards and activity cards render from constants**

import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

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

vi.mock("@/components/ui/PillButton", () => ({
  default: ({ children, href, variant, className, onClick }: any) =>
    href ? <a href={href} className={`${variant} ${className}`}>{children}</a> : <button onClick={onClick} className={`${variant} ${className}`}>{children}</button>,
}));

import EventsSection from "@/components/sections/EventsSection";
import { EVENT_WORKSHOPS, EVENT_ACTIVITIES, EVENT_VENUE_CARDS } from "@/lib/constants";

describe("Property 7: Event workshop and activity cards", () => {
  it("renders workshop photo placeholders", () => {
    const { getAllByLabelText } = render(<EventsSection />);
    const cards = getAllByLabelText("Workshop photo placeholder");
    expect(cards).toHaveLength(EVENT_WORKSHOPS.length);
  });

  it("renders activity cards with names", () => {
    const { getAllByLabelText } = render(<EventsSection />);
    const cards = getAllByLabelText("Activity photo placeholder");
    expect(cards).toHaveLength(EVENT_ACTIVITIES.length);
  });

  it("renders venue cards", () => {
    const { getAllByLabelText } = render(<EventsSection />);
    const cards = getAllByLabelText("Venue photo placeholder");
    expect(cards).toHaveLength(EVENT_VENUE_CARDS.length);
  });
});
