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
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#e7e1d4 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
            opacity: 0.6,
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                backgroundColor: "#1c1917",
                color: "#faf7f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              }}
            >
              DS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: "800", color: "#1c1917" }}>
                David Sawe
              </span>
              <span style={{ fontSize: "18px", fontWeight: "600", color: "#78716c" }}>
                hiredavid.vercel.app
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#efe8dc",
              border: "1px solid #e0d6c5",
              padding: "10px 20px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#44403c",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#16a34a",
              }}
            />
            Available for Senior & CTO Roles
          </div>
        </div>

        {/* Hero Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "950px",
            zIndex: 10,
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              fontWeight: "700",
              color: "#854d0e",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Lagos, Nigeria • Senior Full Stack & Design Engineer
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              color: "#1c1917",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Design & Full Stack Engineer + AI Solutions
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#57534e",
              lineHeight: 1.4,
              marginTop: "4px",
            }}
          >
            Architecting scalable web applications, AI integrations, payment engines (Paystack, Flutterwave, Stripe), and slick user interfaces.
          </div>
        </div>

        {/* Bottom Tech Stack Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 10,
          }}
        >
          {["Next.js", "TypeScript", "Node.js", "AI / LLMs", "Supabase", "Tailwind CSS"].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: "#1c1917",
                color: "#faf7f2",
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
