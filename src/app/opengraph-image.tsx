import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "David Sawe — Senior Full Stack Developer & Design Engineer in Lagos, Nigeria";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#faf7f2",
          padding: "50px 56px",
          fontFamily: "sans-serif",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#e7e1d4 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.6,
          }}
        />

        {/* Top Branding Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "14px",
                backgroundColor: "#1c1917",
                color: "#faf7f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "800",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
              }}
            >
              DS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: "800", color: "#1c1917", letterSpacing: "-0.5px" }}>
                David Sawe
              </span>
              <span style={{ fontSize: "16px", fontWeight: "600", color: "#78716c" }}>
                Lagos, Nigeria • hiredavid.vercel.app
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#efe8dc",
              border: "1px solid #e0d6c5",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "15px",
              fontWeight: "700",
              color: "#44403c",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "9999px", backgroundColor: "#16a34a" }} />
            Open for Senior & CTO Roles
          </div>
        </div>

        {/* Main Title & Core Mission Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "1080px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "44px",
              fontWeight: "900",
              color: "#1c1917",
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            Senior Full Stack Developer & Design Engineer
          </div>
          <div style={{ fontSize: "20px", color: "#57534e", lineHeight: 1.45 }}>
            Bridging pixel-perfect UI/UX design with high-scale backend systems, AI integrations (LLMs), enterprise SaaS, and resilient payment engines.
          </div>
        </div>

        {/* Two Pillar Breakdown: Full-Stack vs Product Design */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            width: "100%",
            zIndex: 10,
          }}
        >
          {/* Pillar 1: Full-Stack Engineering */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#1c1917",
              color: "#faf7f2",
              padding: "20px 24px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#e7e1d4", textTransform: "uppercase", letterSpacing: "1px" }}>
              ⚡ Full-Stack Engineering
            </div>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#faf7f2" }}>
              Next.js 16 • TypeScript • Node.js • Supabase • PostgreSQL
            </div>
            <div style={{ fontSize: "14px", color: "#a8a29e", lineHeight: 1.35 }}>
              Architecting microservices, AI integrations, REST/GraphQL APIs, and payment systems (Paystack, Flutterwave, Stripe).
            </div>
          </div>

          {/* Pillar 2: Product Design & UI/UX */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              border: "1.5px solid #e7e1d4",
              color: "#1c1917",
              padding: "20px 24px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#854d0e", textTransform: "uppercase", letterSpacing: "1px" }}>
              🎨 Product Design & UI/UX
            </div>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#1c1917" }}>
              Design Systems • Wireframing • Figma • Micro-Animations
            </div>
            <div style={{ fontSize: "14px", color: "#57534e", lineHeight: 1.35 }}>
              Crafting intuitive user journeys, responsive glassmorphism interfaces, web accessibility, and high-conversion UX design.
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
            borderTop: "1px solid #e7e1d4",
            paddingTop: "16px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#78716c",
          }}
        >
          <span>https://hiredavid.vercel.app</span>
          <span>sawedavid7@gmail.com</span>
          <span>Nigeria & Remote Worldwide</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
