// Task 9.14: Unit tests for SectionHeader and NewsletterForm
// Requirements: 5.3, 5.4, 15.6

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

import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterForm from "@/components/ui/NewsletterForm";

describe("SectionHeader", () => {
  it("renders heading as h1 by default", () => {
    const { container } = render(<SectionHeader heading="Test Heading" />);
    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1!.textContent).toBe("Test Heading");
  });

  it('renders heading as h1 when as="h1"', () => {
    const { container } = render(<SectionHeader heading="H1 Heading" as="h1" />);
    expect(container.querySelector("h1")).not.toBeNull();
    expect(container.querySelector("h2")).toBeNull();
  });

  it('renders heading as h2 when as="h2"', () => {
    const { container } = render(<SectionHeader heading="H2 Heading" as="h2" />);
    expect(container.querySelector("h2")).not.toBeNull();
    expect(container.querySelector("h1")).toBeNull();
  });

  it("renders optional label when provided", () => {
    const { getByText } = render(<SectionHeader heading="Heading" label="My Label" />);
    expect(getByText("My Label")).toBeTruthy();
  });

  it("does NOT render label when not provided", () => {
    const { queryByText } = render(<SectionHeader heading="Heading Only" />);
    // The only text should be the heading itself
    expect(queryByText("Heading Only")).not.toBeNull();
    // No label span should exist — check there's no tracking-widest uppercase span
    const { container } = render(<SectionHeader heading="No Label" />);
    const spans = container.querySelectorAll("span");
    const labelSpans = Array.from(spans).filter((s) =>
      s.className.includes("tracking-widest")
    );
    expect(labelSpans).toHaveLength(0);
  });
});

describe("NewsletterForm", () => {
  it('compact variant renders email input and "GO" button', () => {
    const { getByPlaceholderText, getByText } = render(<NewsletterForm variant="compact" />);
    expect(getByPlaceholderText("La tua email")).toBeTruthy();
    expect(getByText("GO")).toBeTruthy();
  });

  it('full variant renders heading "Newsletter", description, email input, "Subscribe" button', () => {
    const { getByText, getByPlaceholderText } = render(<NewsletterForm variant="full" />);
    expect(getByText("Newsletter")).toBeTruthy();
    expect(getByText(/Scriviamo/)).toBeTruthy();
    expect(getByPlaceholderText("La tua email")).toBeTruthy();
    expect(getByText("Subscribe")).toBeTruthy();
  });

  it('compact variant input has aria-label="Email"', () => {
    const { getByLabelText } = render(<NewsletterForm variant="compact" />);
    expect(getByLabelText("Email")).toBeTruthy();
  });

  it('full variant input has aria-label="Email"', () => {
    const { getByLabelText } = render(<NewsletterForm variant="full" />);
    expect(getByLabelText("Email")).toBeTruthy();
  });

  it("form onSubmit prevents default", () => {
    const { container } = render(<NewsletterForm variant="compact" />);
    const form = container.querySelector("form")!;
    const event = new Event("submit", { bubbles: true, cancelable: true });
    const prevented = !form.dispatchEvent(event);
    expect(prevented).toBe(true);
  });
});
