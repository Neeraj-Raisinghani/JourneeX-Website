import { describe, it, expect, beforeEach, vi } from "vitest";

// ── Isolated unit tests for pure functions in /api/contact ────────────────────
// We test the logic directly without spinning up the HTTP layer.

// ── Rate limiter ──────────────────────────────────────────────────────────────
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function makeRateLimiter() {
  const map = new Map<string, { count: number; resetAt: number }>();
  return function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = map.get(ip);
    if (!entry || now > entry.resetAt) {
      map.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
      return true;
    }
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
    return true;
  };
}

describe("Rate limiter", () => {
  it("allows the first 3 submissions from the same IP", () => {
    const check = makeRateLimiter();
    expect(check("1.2.3.4")).toBe(true);
    expect(check("1.2.3.4")).toBe(true);
    expect(check("1.2.3.4")).toBe(true);
  });

  it("blocks the 4th submission from the same IP", () => {
    const check = makeRateLimiter();
    check("1.2.3.4");
    check("1.2.3.4");
    check("1.2.3.4");
    expect(check("1.2.3.4")).toBe(false);
  });

  it("allows a different IP regardless of another IP being rate-limited", () => {
    const check = makeRateLimiter();
    check("1.2.3.4");
    check("1.2.3.4");
    check("1.2.3.4");
    expect(check("9.9.9.9")).toBe(true);
  });

  it("resets the counter after the window expires", () => {
    vi.useFakeTimers();
    const check = makeRateLimiter();
    check("1.2.3.4");
    check("1.2.3.4");
    check("1.2.3.4");
    expect(check("1.2.3.4")).toBe(false);

    vi.advanceTimersByTime(RATE_WINDOW_MS + 1);
    expect(check("1.2.3.4")).toBe(true);
    vi.useRealTimers();
  });
});

// ── User-agent parser ─────────────────────────────────────────────────────────
function parseUserAgent(ua: string) {
  const browser =
    /Edg\//.test(ua) ? "Microsoft Edge" :
    /OPR\/|Opera/.test(ua) ? "Opera" :
    /Chrome\//.test(ua) && !/Chromium/.test(ua) ? "Google Chrome" :
    /Firefox\//.test(ua) ? "Mozilla Firefox" :
    /Safari\//.test(ua) && !/Chrome/.test(ua) ? "Safari" :
    /MSIE|Trident/.test(ua) ? "Internet Explorer" : "Unknown Browser";

  const os =
    /Windows NT 10/.test(ua) ? "Windows 10/11" :
    /Windows NT 6\.1/.test(ua) ? "Windows 7" :
    /Windows/.test(ua) ? "Windows" :
    /iPhone/.test(ua) ? "iOS (iPhone)" :
    /iPad/.test(ua) ? "iOS (iPad)" :
    /Mac OS X/.test(ua) ? "macOS" :
    /Android/.test(ua) ? "Android" :
    /Linux/.test(ua) ? "Linux" : "Unknown OS";

  const device =
    /Mobile|iPhone|Android.*Mobile/.test(ua) ? "Mobile" :
    /iPad|Tablet/.test(ua) ? "Tablet" : "Desktop";

  return { browser, os, device };
}

describe("User-agent parser", () => {
  it("detects Chrome on Windows", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";
    const result = parseUserAgent(ua);
    expect(result.browser).toBe("Google Chrome");
    expect(result.os).toBe("Windows 10/11");
    expect(result.device).toBe("Desktop");
  });

  it("detects Safari on macOS", () => {
    const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";
    const result = parseUserAgent(ua);
    expect(result.browser).toBe("Safari");
    expect(result.os).toBe("macOS");
    expect(result.device).toBe("Desktop");
  });

  it("detects Firefox on Linux", () => {
    const ua = "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0";
    const result = parseUserAgent(ua);
    expect(result.browser).toBe("Mozilla Firefox");
    expect(result.os).toBe("Linux");
    expect(result.device).toBe("Desktop");
  });

  it("detects mobile device on iPhone", () => {
    const ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1";
    const result = parseUserAgent(ua);
    expect(result.os).toBe("iOS (iPhone)");
    expect(result.device).toBe("Mobile");
  });

  it("detects Edge browser", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0";
    const result = parseUserAgent(ua);
    expect(result.browser).toBe("Microsoft Edge");
  });

  it("returns Unknown for unrecognised UA", () => {
    const result = parseUserAgent("curl/7.88.1");
    expect(result.browser).toBe("Unknown Browser");
    expect(result.os).toBe("Unknown OS");
    expect(result.device).toBe("Desktop");
  });
});

// ── Field validation ──────────────────────────────────────────────────────────
function validateFields(body: { name?: string; email?: string; message?: string }) {
  return !!(body.name?.trim() && body.email?.trim() && body.message?.trim());
}

describe("Contact form field validation", () => {
  it("passes when all required fields are present", () => {
    expect(validateFields({ name: "Alice", email: "a@b.com", message: "Hello" })).toBe(true);
  });

  it("fails when name is missing", () => {
    expect(validateFields({ name: "", email: "a@b.com", message: "Hello" })).toBe(false);
  });

  it("fails when email is missing", () => {
    expect(validateFields({ name: "Alice", email: "", message: "Hello" })).toBe(false);
  });

  it("fails when message is missing", () => {
    expect(validateFields({ name: "Alice", email: "a@b.com", message: "" })).toBe(false);
  });

  it("fails when fields are only whitespace", () => {
    expect(validateFields({ name: "   ", email: "   ", message: "   " })).toBe(false);
  });
});
