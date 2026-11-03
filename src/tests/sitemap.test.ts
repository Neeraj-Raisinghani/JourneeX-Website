import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";

const BASE_URL = "https://journeex.neerajraisinghani.com";

describe("Sitemap", () => {
  it("returns an array of URL entries", () => {
    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
  });

  it("includes the homepage with priority 1", () => {
    const entries = sitemap();
    const home = entries.find((e) => e.url === `${BASE_URL}/`);
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });

  it("includes all core pages", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    const expected = ["/about", "/product", "/faq", "/changelog", "/contact", "/privacy", "/terms"];
    for (const path of expected) {
      expect(urls).toContain(`${BASE_URL}${path}`);
    }
  });

  it("does not include /api routes", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.every((u) => !u.includes("/api/"))).toBe(true);
  });

  it("gives /product a higher priority than standard pages", () => {
    const entries = sitemap();
    const product = entries.find((e) => e.url === `${BASE_URL}/product`);
    const faq = entries.find((e) => e.url === `${BASE_URL}/faq`);
    expect(product?.priority).toBeGreaterThan(faq?.priority ?? 0);
  });

  it("all entries have valid absolute URLs", () => {
    const entries = sitemap();
    for (const entry of entries) {
      expect(entry.url).toMatch(/^https:\/\//);
    }
  });
});
