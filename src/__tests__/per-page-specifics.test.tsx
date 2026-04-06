// Task 9.15: Unit tests for per-page specific requirements
// Requirements: 7.1, 7.4, 7.6, 8.1, 8.2, 8.6, 9.1, 9.2, 9.4, 10.2, 10.3, 11.4, 11.5, 12.1, 12.2, 12.3, 12.4, 12.6

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

vi.mock("@/components/ui/ImageReveal", () => ({
  default: ({ className, aspectRatio }: any) => (
    <div className={`${className ?? ""} ${aspectRatio ?? ""}`} data-testid="image-reveal" />
  ),
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}));

import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import AcademySection from "@/components/sections/AcademySection";
import MerchSection from "@/components/sections/MerchSection";
import MembershipSection from "@/components/sections/MembershipSection";
import ContactsSection from "@/components/sections/ContactsSection";

describe("AboutSection", () => {
  it("renders 3 reference cards with pill buttons", () => {
    const { getByText } = render(<AboutSection />);
    expect(getByText("SCOPRI IL MERCH")).toBeTruthy();
    expect(getByText("ASCOLTA LE PLAYLIST")).toBeTruthy();
    expect(getByText("BECOME A MEMBER")).toBeTruthy();
  });

  it("contains manifesto intro text", () => {
    const { getByText } = render(<AboutSection />);
    expect(getByText(/Roma Tropicale è un movimento urbano/)).toBeTruthy();
  });

  it("has navigation pills HOME and BLOG", () => {
    const { container } = render(<AboutSection />);
    const links = Array.from(container.querySelectorAll("a"));
    const hrefs = links.map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/merch");
    expect(hrefs).toContain("/membership");
  });
});

describe("EventsSection", () => {
  it("has hero placeholder present", () => {
    const { getByLabelText } = render(<EventsSection />);
    expect(getByLabelText("Event hero placeholder")).toBeTruthy();
  });

  it('has toggle buttons "HOME" and "ARCHIVE"', () => {
    const { getByText } = render(<EventsSection />);
    expect(getByText("HOME")).toBeTruthy();
    expect(getByText("ARCHIVE")).toBeTruthy();
  });

  it('"From the archive" label appears in archive view', () => {
    const { getByText, queryByText } = render(<EventsSection />);
    // Initially in home view — no archive label
    expect(queryByText("From the archive")).toBeNull();
    // Switch to archive
    fireEvent.click(getByText("ARCHIVE"));
    expect(getByText("From the archive")).toBeTruthy();
  });
});

describe("AcademySection", () => {
  it("has hero placeholder present", () => {
    const { getByLabelText } = render(<AcademySection />);
    expect(getByLabelText("Academy hero image placeholder")).toBeTruthy();
  });

  it('"SCOPRI I CORSI" links to /contacts', () => {
    const { getByText } = render(<AcademySection />);
    const link = getByText("SCOPRI I CORSI");
    expect(link.closest("a")?.getAttribute("href")).toBe("/contacts");
  });
});

describe("MerchSection", () => {
  it("renders 3 reference cards", () => {
    const { getAllByLabelText } = render(<MerchSection />);
    const cards = getAllByLabelText("Reference card photo placeholder");
    expect(cards).toHaveLength(3);
  });

  it("has descriptive text block", () => {
    const { getByText } = render(<MerchSection />);
    expect(getByText(/Il Merch di Roma Tropicale nasce come una produzione/)).toBeTruthy();
  });
});

describe("MembershipSection", () => {
  it('pricing "4€" is visible', () => {
    const { container } = render(<MembershipSection />);
    // The component renders 4€ as "4" + entity "€"
    expect(container.textContent).toContain("4€");
  });

  it('"SCOPRI DI PIÙ" links to /contacts', () => {
    const { getByText } = render(<MembershipSection />);
    const link = getByText("SCOPRI DI PIÙ");
    expect(link.closest("a")?.getAttribute("href")).toBe("/contacts");
  });
});

describe("ContactsSection", () => {
  it('"say hi (:" heading is present', () => {
    const { getByText } = render(<ContactsSection />);
    expect(getByText("say hi (:")).toBeTruthy();
  });

  it("purple placeholder is present", () => {
    const { getByLabelText } = render(<ContactsSection />);
    expect(getByLabelText("Decorative purple shape")).toBeTruthy();
  });

  it("DarkCard for partnerships is present", () => {
    const { getByText } = render(<ContactsSection />);
    expect(getByText("Collaborazioni & Partnership")).toBeTruthy();
  });

  it("NewsletterForm is present", () => {
    const { getByText } = render(<ContactsSection />);
    expect(getByText("GO")).toBeTruthy();
  });

  it("has 3 social icons", () => {
    const { getByLabelText } = render(<ContactsSection />);
    expect(getByLabelText("Instagram")).toBeTruthy();
    expect(getByLabelText("Spotify")).toBeTruthy();
    expect(getByLabelText("LinkedIn")).toBeTruthy();
  });
});
