// Validates: EventsActive renders from provided event data, and the `archived`
// flag hides live-only affordances (workshop CTAs + trailing "from the archive").

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
  useReducedMotion: () => false,
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
  default: ({ children, href }: any) =>
    href ? <a href={href}>{children}</a> : <button>{children}</button>,
}));

vi.mock("@/components/ui/HorizontalScrollSection", () => ({
  default: ({ title, children }: any) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  ),
}));

import { EventsActive } from "@/components/sections/EventsSection";
import primavera from "@/content/events-archive/primavera-tropicale-2026.json";

describe("archived event page", () => {
  it("renders the section from the provided snapshot data", () => {
    const { getByText } = render(<EventsActive event={primavera as any} archived />);
    expect(getByText(primavera.texts.title)).toBeTruthy();
    expect(getByText(primavera.workshops[0].title)).toBeTruthy();
  });

  it("hides workshop CTAs and the archive section when archived", () => {
    const { queryByText } = render(<EventsActive event={primavera as any} archived />);
    expect(queryByText("iscriviti")).toBeNull();
    expect(queryByText("scopri di più")).toBeNull();
    expect(queryByText(/from the archive/i)).toBeNull();
  });

  it("shows workshop CTAs on the live (non-archived) render", () => {
    const { queryAllByText } = render(<EventsActive event={primavera as any} />);
    expect(queryAllByText("iscriviti").length).toBeGreaterThan(0);
  });
});
