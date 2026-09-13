"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#faf7f2] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-md bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-xs bg-stone-900 animate-pulse" />
            David Sawe
          </div>
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-[1.08]">
            Design & Full Stack Engineer{" "}
            <span className="text-stone-500">+ AI Solutions</span>
          </h1>

          {/* Short Description */}
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-4 rounded-lg text-sm font-bold text-[#faf7f2] bg-stone-900 hover:bg-stone-800 shadow-xs transition-all flex items-center gap-2 group"
            >
              CONTACT ME
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-6 py-4 rounded-lg text-sm font-semibold text-stone-800 bg-[#ffffff] border border-[#e7e1d4] hover:border-[#c8bfb0] shadow-xs transition-all"
            >
              FEATURED WORK ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
