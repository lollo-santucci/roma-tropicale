// Feature: roma-tropicale-pages, Property 6: Events section structure
// **Validates: Event page renders all sections from Figma design**

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

describe("Property 6: Events section structure", () => {
  it("renders all main sections: Workshop, Le attività, La Venue", () => {
    const { getByText } = render(<EventsSection />);

    expect(getByText("Workshop")).toBeTruthy();
    expect(getByText("Le attività")).toBeTruthy();
    expect(getByText("La Venue")).toBeTruthy();
  });

  it("renders the festival title", () => {
    const { getByText } = render(<EventsSection />);
    expect(getByText("Primavera Tropicale Festival")).toBeTruthy();
  });

  it("renders event highlights", () => {
    const { getByText } = render(<EventsSection />);
    expect(getByText(/Sonorizzazioni nella natura/)).toBeTruthy();
    expect(getByText(/Green Market/)).toBeTruthy();
  });
});
