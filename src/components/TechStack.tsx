'use client';

import { useState } from 'react';
import { SKILL_CATEGORIES } from '@/lib/data';
import { Code, Cpu, CreditCard, Database, Shield, Layout, Wrench, Sparkles } from 'lucide-react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<keyof typeof SKILL_CATEGORIES>('languages');

  const tickerSkills = [
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "NEXT" },
    { name: "React", icon: "REACT" },
    { name: "Python", icon: "PY" },
    { name: "Node.js", icon: "NODE" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "Supabase RLS", icon: "SUPA" },
    { name: "Paystack", icon: "PAY" },
    { name: "Flutterwave", icon: "FLW" },
    { name: "Monnify", icon: "MON" },
    { name: "Stripe Billing", icon: "STRP" },
    { name: "Anthropic Claude", icon: "AI" },
    { name: "OpenAI GPT-4", icon: "GPT" },
    { name: "Google Gemini", icon: "GEM" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "Figma", icon: "FIG" },
    { name: "Docker", icon: "DOC" },
    { name: "Jest / Vitest", icon: "TEST" },
  ];

  const categoryIcons = {
    languages: <Code className="w-4 h-4 text-emerald-400" />,
    frameworks: <Layout className="w-4 h-4 text-cyan-400" />,
    aiAndLlm: <Sparkles className="w-4 h-4 text-purple-400" />,
    fintechAndPayments: <CreditCard className="w-4 h-4 text-amber-400" />,
    databasesAndCloud: <Database className="w-4 h-4 text-blue-400" />,
    testingAndSecurity: <Shield className="w-4 h-4 text-rose-400" />,
    designAndPrototyping: <Cpu className="w-4 h-4 text-pink-400" />,
    devopsAndTools: <Wrench className="w-4 h-4 text-teal-400" />,
  };

  const categoryLabels = {
    languages: "Languages",
    frameworks: "Frameworks & UI",
    aiAndLlm: "AI & LLM Stack",
    fintechAndPayments: "Payment Rails",
    databasesAndCloud: "Databases & Cloud",
    testingAndSecurity: "Security & Testing",
    designAndPrototyping: "Design Systems",
    devopsAndTools: "DevOps & Tools",
  };

  return (
    <section id="stack" className="py-16 bg-[#060910] border-y border-slate-800/60 overflow-hidden">
      
      {/* Marquee Ticker Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
          — SKILLED WITH & TECHNOLOGIES
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-3 bg-slate-900/30 border-y border-slate-800/40">
        <div className="animate-marquee gap-6 items-center">
          {[...tickerSkills, ...tickerSkills].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 text-slate-300 font-mono text-xs font-medium shrink-0 transition-colors shadow-sm"
            >
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Skill Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {(Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-slate-800 text-white border border-emerald-500/50 shadow-md shadow-emerald-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/50'
              }`}
            >
              {categoryIcons[cat]}
              <span>{categoryLabels[cat]}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SKILL_CATEGORIES[activeTab].map((skill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-800/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              <span className="font-mono text-sm text-slate-200 group-hover:text-white transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
