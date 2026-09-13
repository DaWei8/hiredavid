'use client';

import { Code2, Palette, Layers, Sparkles } from 'lucide-react';

export default function Specializations() {
  const specs = [
    {
      id: "software-eng",
      title: "Software Engineering & Architecture",
      icon: <Code2 className="w-6 h-6 text-blue-600" />,
      description: "Building scalable, resilient web applications with Next.js, TypeScript, and Supabase. Strict adherence to modular file structure under 150 lines per module.",
      points: [
        "Distributed B2B retail & SaaS web platforms",
        "Deterministic calculation engines with zero drift",
        "Row Level Security (RLS) & PostgreSQL indexing",
        "Edge infrastructure on Cloudflare & Vercel"
      ]
    },
    {
      id: "ux-design",
      title: "UX Architecture & Design Systems",
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      description: "Translating complex user journeys into high-converting, pixel-perfect interfaces. Standardized design tokens in Figma cut engineering handoff by 35%.",
      points: [
        "Enterprise Figma component libraries & design tokens",
        "WCAG accessibility & heuristic UX audits",
        "Rapid interactive prototyping & pitch decks",
        "Candidate onboarding drop-off reduction by 25%"
      ]
    },
    {
      id: "fintech-rails",
      title: "Payment Gateways & Financial Rails",
      icon: <Layers className="w-6 h-6 text-blue-700" />,
      description: "Architecting multi-rail payment integrations, dynamic virtual bank accounts, split payouts, and automated invoice reconciliations.",
      points: [
        "Paystack & Flutterwave multi-tier checkout flows",
        "Monnify dynamic virtual bank accounts for instant settlements",
        "Stripe Billing, recurring subscriptions & webhooks",
        "HMAC webhook signature validation & idempotency"
      ]
    },
    {
      id: "ai-llm",
      title: "AI & LLM Solutions Engineering",
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      description: "Deploying intelligent AI features, NLP context pipelines, and messaging bot automation using state-of-the-art LLM APIs.",
      points: [
        "Anthropic Claude (Sonnet) text humanizers & context rules",
        "OpenAI & Google Gemini WhatsApp/Telegram bot workflows",
        "Zod schema validation for structured JSON outputs",
        "LLM context engineering & prompt optimization"
      ]
    }
  ];

  return (
    <section id="specializations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">
            — What I Am Capable Of
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specializations & Core Competencies
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mt-1">
            Bridging technical execution, product design, payment infrastructure, and AI engineering to drive commercial growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {item.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
