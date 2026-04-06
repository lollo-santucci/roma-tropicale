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
import { PRODUCTS } from "@/lib/constants";

describe("Property 8: Merch product card completeness", () => {
  PRODUCTS.forEach((product) => {
    it(`renders complete card for product "${product.name}"`, () => {
      const { getByText, getAllByText } = render(<MerchSection />);

      // Verify name and description are rendered
      expect(getByText(product.name)).toBeTruthy();
      expect(getByText(product.description)).toBeTruthy();

      // Verify "ORDINA ORA" links exist with href="/contacts"
      const ordinaLinks = getAllByText("ORDINA ORA");
      const matchingLink = ordinaLinks.find(
        (el) => el.closest("a")?.getAttribute("href") === "/contacts"
      );
      expect(matchingLink).toBeTruthy();
    });
  });
});
