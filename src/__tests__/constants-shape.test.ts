// Feature: roma-tropicale-pages, Property 3: Constants data shape integrity
// **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6**

import { describe, it, expect } from "vitest";
import {
  ARCHIVE_EVENTS,
  PRODUCTS,
  EDUCATORS,
  MEMBERSHIP_BENEFITS,
  TEAM_MEMBERS,
  FOOTER_LINKS,
} from "@/lib/constants";

describe("Property 3: Constants data shape integrity", () => {
  describe("ARCHIVE_EVENTS", () => {
    it.each(ARCHIVE_EVENTS.map((e, i) => [i, e]))(
      "entry %i (%o) has non-empty title, date, location, description",
      (_index, event) => {
        expect(typeof event.title).toBe("string");
        expect(event.title.length).toBeGreaterThan(0);

        expect(typeof event.date).toBe("string");
        expect(event.date.length).toBeGreaterThan(0);

        expect(typeof event.location).toBe("string");
        expect(event.location.length).toBeGreaterThan(0);

        expect(typeof event.description).toBe("string");
        expect(event.description.length).toBeGreaterThan(0);
      }
    );
  });

  describe("PRODUCTS", () => {
    it.each(PRODUCTS.map((p, i) => [i, p]))(
      "entry %i (%o) has non-empty name and description",
      (_index, product) => {
        expect(typeof product.name).toBe("string");
        expect(product.name.length).toBeGreaterThan(0);

        expect(typeof product.description).toBe("string");
        expect(product.description.length).toBeGreaterThan(0);
      }
    );
  });

  describe("EDUCATORS", () => {
    it.each(EDUCATORS.map((e, i) => [i, e]))(
      "entry %i (%o) has non-empty name",
      (_index, educator) => {
        expect(typeof educator.name).toBe("string");
        expect(educator.name.length).toBeGreaterThan(0);
      }
    );
  });

  describe("MEMBERSHIP_BENEFITS", () => {
    it.each(MEMBERSHIP_BENEFITS.map((b, i) => [i, b]))(
      "entry %i (%j) is a non-empty string",
      (_index, benefit) => {
        expect(typeof benefit).toBe("string");
        expect(benefit.length).toBeGreaterThan(0);
      }
    );
  });

  describe("TEAM_MEMBERS", () => {
    it.each(TEAM_MEMBERS.map((m, i) => [i, m]))(
      "entry %i (%o) has non-empty name and role",
      (_index, member) => {
        expect(typeof member.name).toBe("string");
        expect(member.name.length).toBeGreaterThan(0);

        expect(typeof member.role).toBe("string");
        expect(member.role.length).toBeGreaterThan(0);
      }
    );
  });

  describe("FOOTER_LINKS", () => {
    it.each(FOOTER_LINKS.map((l, i) => [i, l]))(
      'entry %i (%o) has non-empty label and href starting with "/"',
      (_index, link) => {
        expect(typeof link.label).toBe("string");
        expect(link.label.length).toBeGreaterThan(0);

        expect(typeof link.href).toBe("string");
        expect(link.href.startsWith("/")).toBe(true);
      }
    );
  });
});
