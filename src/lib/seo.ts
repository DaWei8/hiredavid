import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from "./data";

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://hiredavid.vercel.app/#person",
    "name": PERSONAL_INFO.name,
    "alternateName": [
      "David Sawe",
      "David Sawe Lagos",
      "Full Stack Developer in Nigeria",
      "Full Stack Developer in Lagos",
      "Fullstack Developer Lagos",
      "Senior Software Engineer Lagos",
      "Design Engineer Nigeria",
      "CTO Uselango"
    ],
    "jobTitle": "Senior Full Stack Developer & Design Engineer",
    "description": "David Sawe is a top Senior Full Stack Developer and Design Engineer based in Lagos, Nigeria. Specializing in Next.js, TypeScript, AI integrations, B2B SaaS architecture, and resilient payment systems.",
    "url": "https://hiredavid.vercel.app",
    "email": `mailto:${PERSONAL_INFO.email}`,
    "telephone": PERSONAL_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Lagos, Nigeria"
      },
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Place",
        "name": "Global / Remote"
      }
    ],
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
      "Full Stack Developer in Nigeria",
      "Full Stack Developer in Lagos",
      "Next.js App Router & React Architecture",
      "TypeScript & Node.js Backend Development",
      "AI & LLM Integration (Anthropic Claude, OpenAI GPT-4, Gemini)",
      "Supabase & Row Level Security (RLS)",
      "FinTech & Payment Rails (Paystack, Flutterwave, Monnify, Stripe)",
      "B2B SaaS Engineering & System Architecture",
      "UI/UX Design Engineering & Figma Design Tokens"
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
    "name": "David Sawe | Senior Full Stack Developer & Design Engineer in Lagos, Nigeria",
    "description": "Portfolio of David Sawe — Premier Senior Full Stack Developer & Design Engineer based in Lagos, Nigeria. Building enterprise B2B SaaS, resilient payment gateways, and AI-enabled software.",
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
        "name": "Featured Software Engineering & Design Portfolio",
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
