// Feature: roma-tropicale-pages, Property 16: Footer links from NAV_LINKS
// **Validates: Requirements 16.5**

import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

import FooterSection from "@/components/landing/FooterSection";
import { FOOTER_LINKS } from "@/lib/constants";

describe("Property 16: Footer links from NAV_LINKS", () => {
  it.each(FOOTER_LINKS.map((link) => [link.label, link.href] as const))(
    "FooterSection contains a link with label '%s' and href '%s'",
    (label, href) => {
      const { getByText } = render(<FooterSection />);
      const link = getByText(label);

      expect(link).toBeTruthy();
      expect(link.closest("a")?.getAttribute("href")).toBe(href);
    }
  );
});
