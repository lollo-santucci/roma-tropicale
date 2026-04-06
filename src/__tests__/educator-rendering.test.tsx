// Feature: roma-tropicale-pages, Property 10: Educator rendering from constants
// **Validates: Requirements 9.6**

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

vi.mock("@/components/ui/SectionHeader", () => ({
  default: ({ label, heading, as: Tag = "h1", className }: any) => (
    <div className={className}>
      {label && <span>{label}</span>}
      <Tag>{heading}</Tag>
    </div>
  ),
}));

vi.mock("@/components/ui/PillButton", () => ({
  default: ({ children, href, variant, className, onClick }: any) =>
    href ? <a href={href} className={`${variant} ${className}`}>{children}</a> : <button onClick={onClick} className={`${variant} ${className}`}>{children}</button>,
}));

import AcademySection from "@/components/sections/AcademySection";
import { EDUCATORS } from "@/lib/constants";

describe("Property 10: Educator rendering from constants", () => {
  EDUCATORS.forEach((educator) => {
    it(`renders educator name: "${educator.name}"`, () => {
      const { getByText } = render(<AcademySection />);

      expect(getByText(educator.name)).toBeTruthy();
    });
  });

  it("renders circular placeholders for educators (rounded-full class)", () => {
    const { container } = render(<AcademySection />);

    const circularPlaceholders = container.querySelectorAll(".rounded-full");

    // At least as many circular placeholders as educators
    expect(circularPlaceholders.length).toBeGreaterThanOrEqual(EDUCATORS.length);
  });
});
