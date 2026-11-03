import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieBanner from "@/components/CookieBanner";

const STORAGE_KEY = "journeex_cookie_consent";

describe("CookieBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows the banner when no consent is stored", () => {
    render(<CookieBanner />);
    expect(screen.getByText(/analytics cookies/i)).toBeInTheDocument();
  });

  it("hides the banner when consent is already accepted", () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    render(<CookieBanner />);
    expect(screen.queryByText(/analytics cookies/i)).not.toBeInTheDocument();
  });

  it("hides the banner when consent is already declined", () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    render(<CookieBanner />);
    expect(screen.queryByText(/analytics cookies/i)).not.toBeInTheDocument();
  });

  it("stores 'accepted' and hides banner when Accept is clicked", () => {
    render(<CookieBanner />);
    fireEvent.click(screen.getByText("Accept"));
    expect(localStorage.getItem(STORAGE_KEY)).toBe("accepted");
    expect(screen.queryByText(/analytics cookies/i)).not.toBeInTheDocument();
  });

  it("stores 'declined' and hides banner when Decline is clicked", () => {
    render(<CookieBanner />);
    fireEvent.click(screen.getByText("Decline"));
    expect(localStorage.getItem(STORAGE_KEY)).toBe("declined");
    expect(screen.queryByText(/analytics cookies/i)).not.toBeInTheDocument();
  });
});
