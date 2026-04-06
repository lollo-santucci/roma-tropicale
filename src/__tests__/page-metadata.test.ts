// Feature: roma-tropicale-pages, Property 2: Page metadata completeness
// **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7**

import { metadata as aboutMeta } from "@/app/about/page";
import { metadata as eventsMeta } from "@/app/events/page";
import { metadata as academyMeta } from "@/app/academy/page";
import { metadata as merchMeta } from "@/app/merch/page";
import { metadata as membershipMeta } from "@/app/membership/page";
import { metadata as contactsMeta } from "@/app/contacts/page";
import type { Metadata } from "next";

const pages: { route: string; metadata: Metadata }[] = [
  { route: "/about", metadata: aboutMeta },
  { route: "/events", metadata: eventsMeta },
  { route: "/academy", metadata: academyMeta },
  { route: "/merch", metadata: merchMeta },
  { route: "/membership", metadata: membershipMeta },
  { route: "/contacts", metadata: contactsMeta },
];

describe("Property 2: Page metadata completeness", () => {
  it.each(pages)(
    "$route has a non-empty title ending with '— Roma Tropicale'",
    ({ metadata }) => {
      expect(typeof metadata.title).toBe("string");
      expect((metadata.title as string).length).toBeGreaterThan(0);
      expect((metadata.title as string).endsWith("— Roma Tropicale")).toBe(
        true
      );
    }
  );

  it.each(pages)("$route has a non-empty description", ({ metadata }) => {
    expect(typeof metadata.description).toBe("string");
    expect((metadata.description as string).length).toBeGreaterThan(0);
  });

  it.each(pages)(
    "$route has openGraph with locale it_IT and matching title/description",
    ({ metadata }) => {
      const og = metadata.openGraph as Record<string, unknown>;
      expect(og).toBeDefined();
      expect(og.locale).toBe("it_IT");
      expect(og.title).toBe(metadata.title);
      expect(og.description).toBe(metadata.description);
    }
  );

  it.each(pages)(
    "$route has alternates.canonical matching the route path",
    ({ route, metadata }) => {
      const alternates = metadata.alternates as Record<string, unknown>;
      expect(alternates).toBeDefined();
      expect(alternates.canonical).toBe(route);
    }
  );

  it.each(pages)(
    "$route has robots with index: true and follow: true",
    ({ metadata }) => {
      const robots = metadata.robots as Record<string, unknown>;
      expect(robots).toBeDefined();
      expect(robots.index).toBe(true);
      expect(robots.follow).toBe(true);
    }
  );
});
