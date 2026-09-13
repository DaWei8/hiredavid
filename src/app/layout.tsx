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
    default: "David Sawe — Senior Design Engineer & Technology Director",
    template: "%s | David Sawe"
  },
  description: "Senior Design Engineer & Technology Director specializing in full-stack engineering (Next.js, TypeScript, Supabase), AI & LLM solutions, resilient payment rails (Paystack, Stripe, Monnify), and product design architecture.",
  keywords: [
    "David Sawe",
    "David Sawe Lagos",
    "Senior Design Engineer",
    "Technology Director Lagos",
    "Full Stack Developer Nigeria",
    "CTO Uselango",
    "Next.js Developer Lagos",
    "TypeScript Architect",
    "Supabase RLS Expert",
    "AI LLM Engineer",
    "Paystack Flutterwave Stripe Integration",
    "FUTA Computer Science First Class"
  ],
  authors: [{ name: "David Sawe", url: "https://github.com/DaWei8" }],
  creator: "David Sawe",
  publisher: "David Sawe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://hiredavid.vercel.app",
    title: "David Sawe — Senior Design Engineer & Technology Director",
    description: "Senior Design Engineer & Technology Director. Building enterprise B2B SaaS, resilient payment gateways, and AI-enabled products.",
    siteName: "Hire David Sawe",
    firstName: "David",
    lastName: "Sawe",
    username: "DaWei8",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Sawe — Senior Design Engineer & Technology Director",
    description: "Full Stack Engineer + AI Solutions. Architecting high-scale Next.js, Supabase, Payment Systems & LLM products.",
    creator: "@DaWei8",
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
        <link rel="author" href="/llms.txt" />
      </head>
      <body className="min-h-screen bg-[#faf7f2] text-stone-900 antialiased selection:bg-[#e7e1d4] selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}
