// Feature: roma-tropicale-pages, Property 8: Merch product card completeness
// **Validates: Requirements 10.4, 10.5, 10.6**

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

vi.mock("@/components/ui/ImageReveal", () => ({
  default: ({ className, aspectRatio }: any) => <div className={`${className} ${aspectRatio}`} />,
}));

vi.mock("@/components/ui/PillButton", () => ({
  default: ({ children, href, variant, className, onClick }: any) =>
    href ? <a href={href} className={`${variant} ${className}`}>{children}</a> : <button onClick={onClick} className={`${variant} ${className}`}>{children}</button>,
}));

import MerchSection from "@/components/sections/MerchSection";
import { MERCH_REF_CARDS } from "@/lib/constants";

describe("Property 8: Merch product card completeness", () => {
  it("renders merch description text", () => {
    const { getByText } = render(<MerchSection />);
    expect(getByText(/Il Merch di Roma Tropicale nasce come una produzione/)).toBeTruthy();
  });

  MERCH_REF_CARDS.forEach((card) => {
    it(`renders reference card with label "${card.label}"`, () => {
      const { getByText } = render(<MerchSection />);
      expect(getByText(card.label)).toBeTruthy();
    });
  });
});
