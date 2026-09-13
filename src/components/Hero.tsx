'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { ArrowRight, Download, Sparkles, Code2, ShieldCheck, Cpu, Globe, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const badges = [
    "SENIOR DESIGN ENGINEER",
    "CTO & FOUNDING ENGINEER",
    "FULL STACK + AI SOLUTIONS",
    "PAYMENT RAILS ARCHITECT"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-100 h-75 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-6 max-w-4xl">
          
          {/* Top Identifier Badge */}
          <div className="inline-flex items-center gap-3 w-fit px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>DAVID SAWE — {PERSONAL_INFO.headline}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            FULL STACK DEVELOPER <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              + AI SOLUTIONS
            </span>
          </h1>

          {/* Subheading & Core Value Pitch */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
            {PERSONAL_INFO.summary}
          </p>

          {/* Specialty Monospace Tag Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-slate-300">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-emerald-500/40 transition-colors"
              >
                — {badge}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all flex items-center gap-2 group hover:scale-[1.02]"
            >
              <span>CONTACT ME —</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/90 transition-all flex items-center gap-2"
            >
              <span>VIEW FEATURED WORK ↗</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Key Metrics / Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 mt-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">14+</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Shipped Commercial Products</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">1st Class</div>
              <div className="text-xs font-mono text-slate-400 mt-1">B.Tech Computer Science (FUTA)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">&lt; 150 Lines</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Strict Modular Code Architecture</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-mono">4+ Payment Rails</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Paystack, Flutterwave, Monnify, Stripe</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
