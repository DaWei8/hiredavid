'use client';

import { useState } from 'react';
import { EXPERIENCES } from '@/lib/data';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-16">
          <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
            — PRACTICAL CAREER & LEADERSHIP EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-1">
            Proven track record founding tech companies, leading engineering teams, and shipping production-grade B2B systems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-8">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Node */}
                <div className={`absolute -left-2.25 top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.isCurrent
                    ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                    : 'bg-slate-900 border-slate-600 group-hover:border-emerald-400'
                }`} />

                {/* Card Container */}
                <div className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isExpanded
                    ? 'bg-slate-900/80 border border-slate-700/80 shadow-xl'
                    : 'bg-slate-900/40 border border-slate-800/60 hover:bg-slate-900/60'
                }`}>
                  
                  {/* Top Info Header */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-sm mt-1">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.company}</span>
                        {exp.location && (
                          <span className="text-slate-500 text-xs">• {exp.location}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 font-mono text-xs text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-4 animate-fade-in">
                      <ul className="space-y-2.5">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="pt-3 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700/60"
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
