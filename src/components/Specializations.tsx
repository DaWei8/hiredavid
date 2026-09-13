'use client';

import { Code2, Palette, ShieldAlert, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function Specializations() {
  const specs = [
    {
      id: "software-eng",
      title: "Software Engineering & Architecture",
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      accent: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
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
      icon: <Palette className="w-6 h-6 text-cyan-400" />,
      accent: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
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
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      accent: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
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
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      accent: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30",
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
    <section id="specializations" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
            — WHAT I AM CAPABLE OF
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specializations & Core Competencies
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-1">
            Bridging technical execution, product design, payment infrastructure, and AI engineering to drive commercial growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl bg-linear-to-br ${item.accent} border ${item.border} backdrop-blur-xl hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between shadow-xl`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {item.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
