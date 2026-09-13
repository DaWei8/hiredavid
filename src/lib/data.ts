export interface Project {
  id: string;
  title: string;
  category: 'Full Stack & B2B' | 'AI & LLM' | 'FinTech & Payments' | 'UI/UX & Design';
  description: string;
  detailedOverview?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  role?: string;
  impact?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  location?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  detail?: string;
}

export const PERSONAL_INFO = {
  name: "David Sawe",
  handle: "@DaWei8",
  headline: "Senior Design Engineer & Technology Director",
  subheading: "Full Stack Developer + AI Solutions Engineer",
  tagline: "I specialize in architecting end-to-end web applications, resilient payment systems, and intelligent AI integrations for sustainable business growth.",
  summary: "Senior Design Engineer and Technology Director with deep experience across full-stack engineering, interface architecture, and product strategy. Proven track record architecting and deploying end-to-end B2B platforms, SaaS products, and distributed web applications with Next.js, TypeScript, and Supabase. Adept at translating complex commercial requirements into resilient technical blueprints, data schemas, and clean, modular systems strictly under 150 lines per module.",
  email: "Sawedavid7@gmail.com",
  secondaryEmail: "davidsawee@outlook.com",
  phone: "+234 705 340 0122",
  phoneRaw: "07053400122",
  location: "Lagos, Nigeria",
  github: "https://github.com/DaWei8",
  linkedin: "https://linkedin.com/in/david-sawe-38b67a211",
  degree: "Bachelor of Technology (B.Tech), Computer Science",
  institution: "Federal University of Technology, Akure (FUTA)",
  honours: "First Class Honours (Class of 2024)",
  nysc: "National Youth Service Corps (NYSC) - Completed",
  availability: "Available for Senior/Lead Full-Stack, Design Engineering & CTO Roles",
};

export const FUN_FACTS = [
  "Top 1% nationally in OSINT research — if it's anywhere on the open web, I can track it down.",
  "Engineered a 1-of-1 proprietary method for fetching real-time online sentiment without paid X/Twitter APIs.",
  "Deep understanding of financial markets, on-chain DeFi analytics, and tokenomics model design."
];

export const SKILL_CATEGORIES = {
  languages: ["TypeScript", "JavaScript", "Python", "HTML5/CSS3", "Java", "Dart"],
  frameworks: ["Next.js (App Router)", "React", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  aiAndLlm: ["Anthropic API (Claude)", "OpenAI API (GPT-4)", "Gemini API", "LangChain", "Zod Schema Validation", "Context Engineering"],
  fintechAndPayments: ["Paystack", "Flutterwave", "Monnify Virtual Accounts", "Stripe Billing & Webhooks", "Split Payouts"],
  databasesAndCloud: ["PostgreSQL", "Supabase (RLS)", "MongoDB", "Firebase Auth", "Cloudflare (DNS/R2)", "Vercel", "REST APIs", "GraphQL"],
  testingAndSecurity: ["Jest", "Vitest", "Row Level Security (RLS)", "RBAC", "BurpSuite Security Auditing", "HMAC Webhook Verification"],
  designAndPrototyping: ["Figma", "Framer", "Design Systems", "Design Tokens", "Rapid Prototyping", "UX Research", "Heuristic Audits"],
  devopsAndTools: ["Git", "GitHub Actions", "CI/CD Pipelines", "Docker", "Playwright", "AWS", "Azure"]
};

export const PROJECTS: Project[] = [
  {
    id: "uselango",
    title: "Uselango Retail Access Platform",
    category: "Full Stack & B2B",
    description: "Enterprise B2B platform connecting FMCG manufacturers with retail distribution networks across Nigeria.",
    detailedOverview: "Architected end-to-end B2B infrastructure with multi-tier user access, Supabase Row Level Security (RLS), dynamic invoice generation, and edge hosting on Cloudflare & Vercel.",
    tags: ["Next.js", "TypeScript", "Supabase RLS", "Flutterwave", "Paystack", "Cloudflare"],
    liveUrl: "https://uselango.com",
    githubUrl: "https://github.com/DaWei8",
    featured: true,
    role: "Founding Engineer & CTO",
    impact: "Automated FMCG invoice settlements & escrow for 100+ distribution routes.",
    image: "/projects/uselango.png"
  },
  {
    id: "testbloq",
    title: "Testbloq AI Proctoring & Grading",
    category: "UI/UX & Design",
    description: "AI-powered candidate assessment, remote proctoring, and automated evaluation platform.",
    detailedOverview: "Designed end-to-end Figma UI/UX architecture, layout tokens, accessibility guidelines, and interactive walkthrough scripts that reduced candidate drop-off by 25%.",
    tags: ["Figma", "Design Systems", "UX Research", "React", "AI Proctoring"],
    liveUrl: "https://testbloq.com",
    githubUrl: "https://github.com/DaWei8",
    featured: true,
    role: "Lead Product Designer",
    impact: "Reduced onboarding friction & drop-offs by 25%.",
    image: "/projects/testbloq.png"
  },
  {
    id: "taxculate",
    title: "Taxculate U.S. Tax Compliance Platform",
    category: "Full Stack & B2B",
    description: "U.S. tax calculation engine and SaaS platform with zero calculation drift across filing tiers.",
    detailedOverview: "Built deterministic math calculation engines validated by Jest unit tests. Integrated Stripe subscriptions, tier-based billing, dynamic tax summary dashboards, and audited API boundaries.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe Billing"],
    liveUrl: "https://taxculate.com",
    githubUrl: "https://github.com/DaWei8/taxculate",
    featured: true,
    role: "Full Stack Developer",
    impact: "Handled multi-state US tax filings with 100% calculation accuracy.",
    image: "/projects/taxculate.png"
  },
  {
    id: "stem",
    title: "STEM Software Testing & Engineering Manager",
    category: "Full Stack & B2B",
    description: "Smart workspace to design, model, and test software architecture before building with Rust/WASM simulation.",
    detailedOverview: "Architected a deterministic software design environment featuring a Visual Logic Engine, unified variable registry, WASM-compiled Rust logic simulation core, and automated security path auditing.",
    tags: ["Next.js", "TypeScript", "Rust", "WASM", "Supabase", "System Architecture"],
    liveUrl: "https://stem-arch.vercel.app/",
    githubUrl: "https://github.com/DaWei8",
    featured: true,
    role: "System Architect & Fullstack Developer",
    impact: "Deterministic logic validation and instant manifest/boilerplate exports for mission-critical software.",
    image: "/projects/stem.png"
  },
  {
    id: "phasely",
    title: "Phasely AI Learning Planner",
    category: "AI & LLM",
    description: "AI-powered personalized learning schedule creator with Google Calendar integration and Telegram reminders.",
    detailedOverview: "Architected an intelligent learning management SaaS that transforms user goals into structured study calendars, featuring drag-and-drop schedule management, Telegram reminders, Google Calendar sync, and habit progress analytics.",
    tags: ["Next.js", "TypeScript", "AI Planning", "Google Calendar API", "Telegram Bot API", "Tailwind CSS"],
    liveUrl: "https://phasely.vercel.app/",
    githubUrl: "https://github.com/DaWei8",
    featured: true,
    role: "Fullstack Developer",
    impact: "Empowering learners worldwide with structured AI study schedules and automated habit tracking.",
    image: "/projects/phasely.png"
  },
  {
    id: "fidesagro",
    title: "Fidesagro Digital Agro Platform",
    category: "FinTech & Payments",
    description: "Digital agricultural commerce system providing automated reconciliation for high-volume agro settlements.",
    detailedOverview: "Engineered real-time product cataloging, interactive weight/volume selection tools, and Monnify dynamic virtual bank accounts for instant bank transfer reconciliations.",
    tags: ["Next.js", "TypeScript", "Monnify APIs", "Paystack", "PostgreSQL", "Supabase"],
    liveUrl: "https://fidesagro.com",
    githubUrl: "https://github.com/DaWei8",
    featured: true,
    role: "Founding Engineer",
    impact: "Zero reconciliation errors on multi-million Naira produce transactions.",
    image: "/projects/fidesagro.png"
  },
  {
    id: "bitchant",
    title: "BitChant DeFi Analytics",
    category: "UI/UX & Design",
    description: "On-chain crypto analytics interface & tokenomics intelligence dashboard.",
    detailedOverview: "Designed high-density financial data charts, wallet portfolio views, and token flow visualizations in Figma and Photoshop.",
    tags: ["Figma", "DeFi Analytics", "Figjam", "Crypto UX", "Design Systems"],
    liveUrl: "https://www.behance.net/gallery/168303103/Bitchant",
    githubUrl: "https://www.behance.net/gallery/168303103/Bitchant",
    featured: false,
    role: "Product Designer",
    image: "/projects/bitchant.png"
  },
  {
    id: "servvmarketplace",
    title: "ServvMarketplace",
    category: "Full Stack & B2B",
    description: "Services marketplace platform connecting verified vendors with local clients.",
    detailedOverview: "Full-stack web application featuring user accounts, vendor profiles, booking management, and REST API backend.",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    liveUrl: "https://servvmarketplace.netlify.app/",
    githubUrl: "https://github.com/DaWei8/Servv",
    featured: false,
    role: "Full Stack Developer"
  },
  {
    id: "gemspread",
    title: "Gemspread Digital Publishing System",
    category: "UI/UX & Design",
    description: "High-converting web layouts and design component library for publishing brand.",
    detailedOverview: "Created modular design tokens and responsive landing page templates that accelerated client sprint turnaround.",
    tags: ["Figma", "Design Tokens", "Next.js", "HTML/CSS"],
    liveUrl: "https://publishing.gemspread.com/",
    githubUrl: "https://publishing.gemspread.com/",
    featured: false,
    role: "Website Designer",
    image: "/projects/gemspread.png"
  },
  {
    id: "readtoimpact",
    title: "Read to Impact EdTech",
    category: "UI/UX & Design",
    description: "EdTech web portal interface focused on literacy acceleration & social impact.",
    detailedOverview: "Designed clean typography hierarchy, accessible color palettes, and structured user journeys for student engagement.",
    tags: ["Figma", "Photoshop", "Figjam", "Responsive Web"],
    liveUrl: "https://www.behance.net/gallery/168286213/Landing-Page-Design",
    githubUrl: "https://www.behance.net/gallery/168286213/Landing-Page-Design",
    featured: false,
    role: "UI/UX Designer",
    image: "/projects/readtoimpact.png"
  },
  {
    id: "deaconfx",
    title: "Deacon FX Case Study",
    category: "UI/UX & Design",
    description: "Comprehensive UX case study for a modern foreign exchange trading mobile app.",
    detailedOverview: "Conducted usability testing, interactive wireframing, and user flow optimization to streamline currency pair execution.",
    tags: ["Figma", "UX Case Study", "Trading UI", "Mobile UX"],
    liveUrl: "https://www.behance.net/gallery/173220427/DFx-UX-Case-study",
    githubUrl: "https://www.behance.net/gallery/173220427/DFx-UX-Case-study",
    featured: false,
    role: "Product Designer",
    image: "/projects/deaconfx.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "uselango-exp",
    company: "Uselango",
    role: "Founding Engineer & Chief Technology Officer",
    period: "March 2026 – Present",
    isCurrent: true,
    location: "Lagos, Nigeria",
    highlights: [
      "Architected the core B2B retail access platform connecting consumer goods producers with retail distribution networks across Nigeria.",
      "Built full-stack architecture using Next.js, TypeScript, and Supabase, enforcing strict Row Level Security (RLS) to protect transactional records.",
      "Formulated end-to-end Product Requirement Documents (PRDs), database schemas, and application tracking workflows for multi-tier user accounts.",
      "Integrated Flutterwave and Paystack payment rails for automated invoice settlements, merchant escrow, and direct payout routing.",
      "Configured edge infrastructure on Cloudflare and Vercel, ensuring sub-second response times, DNS resilience, and high availability."
    ],
    technologies: ["Next.js", "TypeScript", "Supabase RLS", "Paystack", "Flutterwave", "Cloudflare", "Vercel"]
  },
  {
    id: "fidesagro-exp",
    company: "Fidesagro",
    role: "Founding Engineer",
    period: "January 2026 – Present",
    isCurrent: true,
    location: "Lagos, Nigeria",
    highlights: [
      "Engineered the core digital agricultural commerce platform, delivering scalable product cataloging and real-time inventory systems.",
      "Designed custom, modular order checkout flows and interactive weight/volume selection components to reduce buyer friction.",
      "Implemented Monnify dynamic virtual bank accounts and Paystack checkout, providing automated reconciliation for high-volume agro settlements.",
      "Hardened transactional integrity with automated unit testing suites, HMAC webhook signature verification, and idempotent background job processing.",
      "Optimized database queries and indexed PostgreSQL schemas in Supabase, maintaining fast search and filter performance across product catalogs."
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Monnify", "Paystack", "Supabase", "Jest"]
  },
  {
    id: "avemas-exp",
    company: "Avemas Studio",
    role: "Chief Executive Officer & Team Lead",
    period: "December 2025 – Present",
    isCurrent: true,
    location: "Lagos, Nigeria",
    highlights: [
      "Direct agency operations, client strategy, and technical delivery across multi-client web applications using Next.js, React, and Tailwind CSS.",
      "Created modular, reusable UI design systems and design tokens in Figma, cutting engineering handoff and build cycles by 35%.",
      "Enforced clean code conventions across client repositories, prioritizing modular file architecture with modules kept strictly under 150 lines.",
      "Architected custom billing integrations for agency software clients using Stripe Billing and Flutterwave for cross-border transactions.",
      "Supervise multi-disciplinary design and engineering teams across end-to-end client product roadmaps and release cycles."
    ],
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "Stripe Billing", "Figma Design Systems"]
  },
  {
    id: "taxculate-exp",
    company: "Taxculate",
    role: "Full Stack Developer",
    period: "January 2025 – February 2026",
    isCurrent: false,
    location: "Remote",
    highlights: [
      "Engineered a U.S. tax calculation and compliance web platform using Next.js, TypeScript, Tailwind CSS, and Supabase.",
      "Developed deterministic tax calculation engines validated by rigorous unit tests, handling complex filing tiers with zero calculation drift.",
      "Implemented end-to-end Stripe billing integration with recurring subscriptions, tiered pricing models, and webhook payment validation.",
      "Built secure user authentication and role-based access control (RBAC), safeguarding sensitive taxpayer data behind audited API boundaries.",
      "Designed landing pages, onboarding wizards, and interactive tax summary dashboards that improved self-serve signup conversion."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe API", "Jest"]
  },
  {
    id: "testbloq-exp",
    company: "Testbloq",
    role: "Lead Product Designer",
    period: "September 2024 – February 2026",
    isCurrent: false,
    location: "Remote",
    highlights: [
      "Directed end-to-end UX/UI product architecture for an AI-powered assessment, proctoring, and grading platform.",
      "Built comprehensive design systems, interactive Figma prototypes, and layout tokens matching strict accessibility (WCAG) standards.",
      "Authored technical walkthrough scripts, product specifications, and user journey documentation for engineering implementation.",
      "Executed continuous user research and heuristic reviews, cutting candidate onboarding drop-offs and test-setup friction by 25%.",
      "Partnered with executive leadership to create interactive pitch decks and product demos for institutional stakeholder buy-in."
    ],
    technologies: ["Figma", "Design Tokens", "UX Research", "Accessibility (WCAG)", "Framer"]
  },
  {
    id: "nvisionhr-exp",
    company: "NvisionHR",
    role: "Frontend Developer",
    period: "February 2024 – August 2024",
    isCurrent: false,
    location: "Lagos, Nigeria",
    highlights: [
      "Spearheaded the development of high-performance human resource management web portals and self-service dashboards using Next.js & React, improving page load speeds by 30%.",
      "Integrated complex RESTful API endpoints with client-side state managers, delivering real-time leave tracking and payroll data views.",
      "Built dynamic data tables featuring multi-column sorting, paginated record sets, and CSV export capabilities.",
      "Conducted cross-browser compatibility testing and mobile responsiveness audits, ensuring consistent performance across all viewports.",
      "Collaborated in sprint planning, translating Figma design mockups into pixel-perfect, accessible web interfaces."
    ],
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "RESTful APIs"]
  },
  {
    id: "velocit8-exp",
    company: "Velocit8",
    role: "Frontend Developer",
    period: "August 2023 – January 2024",
    isCurrent: false,
    location: "Remote",
    highlights: [
      "Shipped client-facing web applications focusing on performance optimization, responsive layouts, and cross-browser stability.",
      "Refactored monolithic legacy UI components into clean, modular structures, improving maintainability and page load speeds.",
      "Implemented version-controlled workflows with Git, managing feature branches, issue tracking, and peer pull requests.",
      "Collaborated with backend developers to integrate third-party APIs and validate payload formats for consistent data rendering.",
      "Optimized web assets, font loading, and script delivery, achieving improved Google Lighthouse performance scores."
    ],
    technologies: ["JavaScript", "React", "Git", "Lighthouse", "REST APIs"]
  },
  {
    id: "zacrac-exp",
    company: "Zacrac",
    role: "Product Designer",
    period: "February 2023 – September 2023",
    isCurrent: false,
    location: "Remote",
    highlights: [
      "Spearheaded user research, workflow wireframing, and interactive UI prototyping for enterprise data analytics products.",
      "Collaborated directly with business analysts to map data pipelines into intuitive analytics dashboards and graphical reports.",
      "Standardized design components, grid systems, and typography rules in Figma to establish product visual consistency.",
      "Delivered complete developer-ready handoff specs with precise spacing, interaction states, and design token annotations."
    ],
    technologies: ["Figma", "Data Visualization", "User Research", "Wireframing"]
  },
  {
    id: "maze-exp",
    company: "Maze Softwares",
    role: "UI/UX Designer",
    period: "August 2021 – January 2023",
    isCurrent: false,
    location: "Lagos, Nigeria",
    highlights: [
      "Designed responsive web layouts, complex dashboard interfaces, and interactive software prototypes across 15+ client projects.",
      "Standardized design token architectures and multi-tier Figma design libraries, accelerating engineering implementation timelines.",
      "Conducted heuristic evaluations, competitive benchmarking, and workflow auditing to optimize core interaction funnels."
    ],
    technologies: ["Figma", "UI Libraries", "Prototyping", "Design Systems"]
  },
  {
    id: "xerax-exp",
    company: "Xerax Labs",
    role: "Frontend Developer Intern",
    period: "2020 – 2021",
    isCurrent: false,
    location: "Lagos, Nigeria",
    highlights: [
      "Built responsive web interfaces and user-facing components using JavaScript, HTML5, and CSS3.",
      "Assisted senior developers in debugging layout inconsistencies and standardizing responsive viewport behaviors.",
      "Integrated REST API endpoints with client views, handling dynamic data binding and form input validations."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Git"]
  },
  {
    id: "coven-exp",
    company: "Coven Labs",
    role: "Data Science & Machine Learning Intern",
    period: "2018 – 2019",
    isCurrent: false,
    highlights: [
      "Performed data ingestion, data cleaning, and exploratory data analysis across structured datasets using Python and Pandas.",
      "Built and evaluated baseline supervised machine learning models using Scikit-Learn for predictive classification tasks.",
      "Generated data visualizations and summary charts using Matplotlib and Seaborn to communicate findings to project leads."
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Project Management MSME: ISO 9001:2015 Quality Management System (QMS)",
    issuer: "MSME International Certification",
    detail: "Certified in Quality Management Systems, audit standards, and operational process control."
  },
  {
    title: "Human Resource Management",
    issuer: "MSME Certified",
    detail: "Certified in organizational structure, team leadership, and workplace management."
  },
  {
    title: "Product Design Certification",
    issuer: "Future Academy Africa",
    detail: "Advanced product discovery, user research, wireframing, and interactive design prototyping."
  },
  {
    title: "Soft Skills Certification",
    issuer: "Jobberman Nigeria",
    detail: "Professional communication, strategic leadership, agile collaboration, and critical problem solving."
  }
];
