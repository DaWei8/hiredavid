import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from "./data";

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hiredavid.vercel.app/#person",
    "name": PERSONAL_INFO.name,
    "alternateName": ["DaWei8", "David Sawe Lagos", "David Sawe CTO"],
    "jobTitle": PERSONAL_INFO.headline,
    "description": PERSONAL_INFO.summary,
    "url": "https://hiredavid.vercel.app",
    "email": `mailto:${PERSONAL_INFO.email}`,
    "telephone": PERSONAL_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": PERSONAL_INFO.institution,
      "degree": PERSONAL_INFO.degree,
      "award": PERSONAL_INFO.honours
    },
    "sameAs": [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      "https://hiredavid.vercel.app"
    ],
    "knowsAbout": [
      "Full-Stack Web Engineering",
      "TypeScript & Next.js App Router",
      "AI & LLM Integration (Anthropic, OpenAI, Gemini)",
      "Supabase & Row Level Security (RLS)",
      "Financial APIs & Payment Rails (Paystack, Flutterwave, Monnify, Stripe)",
      "System Architecture & Data Modeling",
      "UI/UX Design Systems & Figma",
      "B2B SaaS Product Development"
    ],
    "worksFor": EXPERIENCES.filter(e => e.isCurrent).map(e => ({
      "@type": "Organization",
      "name": e.company,
      "roleName": e.role
    }))
  };
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hiredavid.vercel.app/#website",
    "url": "https://hiredavid.vercel.app",
    "name": "David Sawe — Senior Design Engineer & Technology Director",
    "description": PERSONAL_INFO.tagline,
    "publisher": {
      "@id": "https://hiredavid.vercel.app/#person"
    },
    "inLanguage": "en-US"
  };
}

export function generateProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://hiredavid.vercel.app/#person"
    },
    "hasPart": [
      {
        "@type": "ItemList",
        "name": "Featured Projects & AI Applications",
        "itemListElement": PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.title,
            "description": proj.description,
            "applicationCategory": proj.category,
            "url": proj.liveUrl || proj.githubUrl
          }
        }))
      }
    ]
  };
}
