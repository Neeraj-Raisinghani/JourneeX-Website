"use client";
import { useState } from "react";
import Link from "next/link";

type HoverCtaLinkProps = {
  href: string;
  variant: "fill" | "outline";
  style: React.CSSProperties;
  baseBorderColor?: string;
  hoverBorderColor?: string;
  children: React.ReactNode;
};

export default function HoverCtaLink({ href, variant, style, baseBorderColor, hoverBorderColor, children }: HoverCtaLinkProps) {
  const [hover, setHover] = useState(false);

  const computedStyle: React.CSSProperties = { ...style };
  if (variant === "fill") {
    computedStyle.opacity = hover ? 0.75 : 1;
  } else if (hoverBorderColor && baseBorderColor) {
    // Always set an explicit borderColor (never undefined) so the browser
    // never falls back to the `border` shorthand's baked-in color or the
    // CSS initial value (currentColor) when toggling off hover.
    computedStyle.borderColor = hover ? hoverBorderColor : baseBorderColor;
  }

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={computedStyle} {...handlers}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} style={computedStyle} {...handlers}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} style={computedStyle} {...handlers}>
      {children}
    </Link>
  );
}
