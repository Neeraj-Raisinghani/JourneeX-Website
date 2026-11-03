import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const playfairBold = await readFile(
    join(process.cwd(), "public/fonts/PlayfairDisplay-Black.ttf")
  );

  const playfairItalic = await readFile(
    join(process.cwd(), "public/fonts/PlayfairDisplay-Italic.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0c0c0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Playfair, Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background ghost text */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-20px",
            fontSize: "280px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontFamily: "Playfair, Georgia, serif",
            userSelect: "none",
          }}
        >
          J
        </div>

        {/* Top row — logo + tagline pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              fontFamily: "Playfair, Georgia, serif",
            }}
          >
            JourneeX
          </div>
        </div>

        {/* Centre — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontFamily: "Playfair, Georgia, serif",
            }}
          >
            Write your day.
          </div>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontFamily: "Playfair, Georgia, serif",
            }}
          >
            Hear it back.
          </div>
        </div>

        {/* Bottom row — description + URL */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
                maxWidth: "520px",
              }}
            >
              A personal AI journal that reads what you write and
              reflects it back. Warm, human, and honest.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <div
              style={{
                background: "#f5e642",
                color: "#0c0c0a",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                padding: "10px 24px",
              }}
            >
              journeex.neerajraisinghani.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Playfair", data: playfairBold, weight: 900, style: "normal" },
        { name: "Playfair", data: playfairItalic, weight: 400, style: "italic" },
      ],
    }
  );
}
