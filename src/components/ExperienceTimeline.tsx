"use client";

import { useState } from "react";
import { EXPERIENCES } from "@/lib/data";
import { Calendar, ChevronDown, ChevronUp, Building2 } from "lucide-react";

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(
    EXPERIENCES[0].id,
  );

  return (
    <section id="experience" className="py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
            — Practical Career & Leadership Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Professional Experience & Skillsets
          </h2>
          <p className="text-stone-600 text-base max-w-2xl mt-1">
            Proven track record founding tech companies, leading engineering teams, shipping production-grade B2B systems, and crafting world-class UI/UX product designs.
          </p>
        </div>

        {/* Dual Core Competencies Overview Card for SEO & Search Engine Indexing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e7e1d4] shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-stone-900 text-[#faf7f2] text-xs font-extrabold">⚡</span>
              <h3 className="text-lg font-extrabold text-stone-900">Full-Stack Software Engineering</h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Architecting secure, high-scale web platforms using Next.js 16, TypeScript, Node.js, and PostgreSQL. Specialized in resilient payment engine integrations (Paystack, Flutterwave, Stripe), AI/LLM applications, and cloud microservices.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "REST/GraphQL", "Paystack", "Flutterwave", "Stripe", "AI/LLMs"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded bg-[#efe8dc] border border-[#e0d6c5] text-xs font-semibold text-stone-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e7e1d4] shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-[#854d0e] text-[#faf7f2] text-xs font-extrabold">🎨</span>
              <h3 className="text-lg font-extrabold text-stone-900">Product Design & Design Engineering</h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Transforming complex workflows into elegant, intuitive digital interfaces. Expertise in Figma design systems, interactive prototyping, glassmorphism, responsive micro-animations, and WCAG web accessibility (a11y).
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Figma", "UI/UX Architecture", "Design Systems", "Glassmorphism", "Micro-Animations", "a11y / Accessibility", "Responsive UX"].map((skill) => (
                <span key={skill} className="px-2 py-0.5 rounded bg-[#f4efe6] border border-[#e0d6c5] text-xs font-semibold text-stone-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#e0d6c5] ml-4 sm:ml-8 space-y-8">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot Node */}
                <div
                  className={`absolute -left-2.25 top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    exp.isCurrent
                      ? "bg-stone-900 border-stone-900"
                      : "bg-[#faf7f2] border-[#c8bfb0] group-hover:border-stone-900"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                    isExpanded
                      ? "bg-[#ffffff] border border-[#e7e1d4] shadow-md"
                      : "bg-[#ffffff] border border-[#efe8dc] hover:border-[#e7e1d4] hover:shadow-xs"
                  }`}
                >
                  {/* Top Info Header */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-[10px] font-bold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 text-sm mt-1">
                        <Building2 className="w-3.5 h-3.5 text-stone-500" />
                        <span>{exp.company}</span>
                        {exp.location && (
                          <span className="text-stone-400 text-xs">
                            • {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f4efe6] text-sm text-stone-600">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#efe8dc] text-stone-600 hover:text-stone-900">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#f2ede4] space-y-4 animate-fade-in">
                      <ul className="space-y-2.5">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-700 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="pt-3 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded bg-[#efe8dc] text-stone-800 text-xs font-medium border border-[#e0d6c5]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
