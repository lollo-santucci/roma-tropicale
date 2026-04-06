// Feature: roma-tropicale-pages, Property 17: ContactsSection footer links from FOOTER_LINKS
// **Validates: Requirements 12.5**

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
vi.mock("@/components/ui/ImageReveal", () => ({
  default: ({ className, aspectRatio }: any) => <div className={`${className} ${aspectRatio}`} />,
}));
vi.mock("@/components/ui/SectionHeader", () => ({
  default: ({ label, heading, as: Tag = "h1", className }: any) => (
    <div className={className}>{label && <span>{label}</span>}<Tag>{heading}</Tag></div>
  ),
}));
vi.mock("@/components/ui/PillButton", () => ({
  default: ({ children, href, variant, className, onClick }: any) =>
    href ? <a href={href} className={`${variant} ${className}`}>{children}</a> : <button onClick={onClick} className={`${variant} ${className}`}>{children}</button>,
}));
vi.mock("@/components/ui/DarkCard", () => ({
  default: ({ title, description, children, className }: any) => (
    <div className={`bg-roma-dark rounded-card ${className}`}>{title && <h3>{title}</h3>}{description && <p>{description}</p>}{children}</div>
  ),
}));
vi.mock("@/components/ui/NewsletterForm", () => ({
  default: ({ variant, className }: any) => <form data-variant={variant} className={className} />,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));
vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

import ContactsSection from "@/components/sections/ContactsSection";
import { FOOTER_LINKS } from "@/lib/constants";

describe("Property 17: ContactsSection footer links from FOOTER_LINKS", () => {
  it.each(FOOTER_LINKS.map((link) => [link.label, link.href] as const))(
    "ContactsSection contains a footer link with label '%s' and href '%s'",
    (label, href) => {
      const { getAllByText } = render(<ContactsSection />);
      const elements = getAllByText(label);
      const matchingLink = elements.find(
        (el) => el.closest("a")?.getAttribute("href") === href
      );

      expect(matchingLink).toBeTruthy();
    }
  );
});
