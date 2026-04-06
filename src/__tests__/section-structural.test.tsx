// Feature: roma-tropicale-pages, Property 11: Section component structural invariants
// **Validates: Requirements 6.1, 6.2, 15.1**

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

import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import AcademySection from "@/components/sections/AcademySection";
import MerchSection from "@/components/sections/MerchSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ContactsSection from "@/components/sections/ContactsSection";

const sections: [string, React.ComponentType][] = [
  ["AboutSection", AboutSection],
  ["EventsSection", EventsSection],
  ["AcademySection", AcademySection],
  ["MerchSection", MerchSection],
  ["MembershipSection", MembershipSection],
  ["ContactsSection", ContactsSection],
];

describe("Property 11: Section component structural invariants", () => {
  it.each(sections)(
    "%s root is <section>, has no w-screen/flex-shrink-0, and has px-6",
    (_name, Component) => {
      const { container } = render(<Component />);
      const root = container.firstElementChild!;

      expect(root.tagName.toLowerCase()).toBe("section");
      expect(root.className).not.toMatch(/\bw-screen\b/);
      expect(root.className).not.toMatch(/\bflex-shrink-0\b/);
      expect(root.className).toMatch(/\bpx-6\b/);
    }
  );
});
