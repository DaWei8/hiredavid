import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { generatePersonJsonLd, generateWebSiteJsonLd, generateProfilePageJsonLd } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hiredavid.vercel.app"),
  title: {
    default: "David Sawe — Senior Full Stack Developer & Design Engineer in Lagos, Nigeria",
    template: "%s | David Sawe (Lagos, Nigeria)"
  },
  description: "David Sawe is a Senior Full Stack Developer & Design Engineer in Lagos, Nigeria. Specializing in Next.js, TypeScript, AI integrations, enterprise B2B SaaS, and resilient payment gateways (Paystack, Flutterwave, Stripe). Available for Senior, Lead, and CTO roles.",
  keywords: [
    "Full Stack Developer in Nigeria",
    "Full Stack Developer in Lagos",
    "Fullstack Developer Lagos",
    "Fullstack Developer Nigeria",
    "Senior Software Engineer Lagos",
    "Software Engineer in Lagos Nigeria",
    "Design Engineer Lagos",
    "Hire Full Stack Developer Nigeria",
    "David Sawe",
    "David Sawe Lagos",
    "Next.js Developer Lagos",
    "TypeScript Architect Nigeria",
    "AI LLM Engineer Lagos",
    "CTO Uselango",
    "Paystack Flutterwave Stripe Developer Lagos"
  ],
  authors: [{ name: "David Sawe", url: "https://github.com/DaWei8" }],
  creator: "David Sawe",
  publisher: "David Sawe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiredavid.vercel.app",
    title: "David Sawe — Senior Full Stack Developer & Design Engineer | Lagos, Nigeria",
    description: "Senior Full Stack Developer & Design Engineer in Lagos, Nigeria. 6+ years experience architecting Next.js, Node.js, AI LLM products, UI/UX design systems, and resilient payment gateways (Paystack, Flutterwave, Stripe).",
    siteName: "David Sawe Portfolio — Full Stack & Design Engineer",
    images: [
      {
        url: "https://hiredavid.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "David Sawe — Senior Full Stack Developer & Design Engineer in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Sawe — Senior Full Stack Developer & Design Engineer | Lagos, Nigeria",
    description: "Senior Full Stack Developer & Design Engineer in Lagos, Nigeria. Architecting Next.js, Node.js, AI integrations, UI/UX systems, and payment engines.",
    creator: "@DaWei8",
    images: ["https://hiredavid.vercel.app/opengraph-image"],
  },
  alternates: {
    canonical: "https://hiredavid.vercel.app",
    types: {
      "text/plain": "/llms.txt",
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = generatePersonJsonLd();
  const websiteJsonLd = generateWebSiteJsonLd();
  const profilePageJsonLd = generateProfilePageJsonLd();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <link rel="icon" href="/image.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/image.png" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png" />
        <link rel="author" href="/llms.txt" />
      </head>
      <body className="min-h-screen bg-[#faf7f2] text-stone-900 antialiased selection:bg-[#e7e1d4] selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}
