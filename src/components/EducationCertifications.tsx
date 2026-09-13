'use client';

import { PERSONAL_INFO, CERTIFICATIONS, FUN_FACTS } from '@/lib/data';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Zap, BookOpen } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="about" className="py-24 bg-[#060910] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Education & Certifications */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
                — ACADEMIC & CREDENTIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Education & Certifications
              </h2>
            </div>

            {/* University Degree Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-emerald-950/30 to-slate-900/80 border border-emerald-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap className="w-24 h-24 text-emerald-400" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                  FIRST CLASS HONOURS
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                {PERSONAL_INFO.degree}
              </h3>
              <div className="text-sm font-mono text-emerald-300 mb-4">
                {PERSONAL_INFO.institution} • 2024
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Mastered core Computer Science domains including Distributed Systems, Socket Programming, Compiler Design, Object-Oriented Software Architecture, Time & Space Complexity Analysis, and Agile SDLC.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{PERSONAL_INFO.nysc}</span>
              </div>
            </div>

            {/* Certifications List */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Certifications & Badges
              </h3>
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-mono text-slate-400">
                      {cert.issuer}
                    </div>
                    {cert.detail && (
                      <p className="text-xs text-slate-400 mt-1">
                        {cert.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Bio & Fun Facts */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400 tracking-widest uppercase">
                — GENERALIST PROBLEM SOLVER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                About David Sawe
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Full-stack developer and design engineer with a passion for building efficient, elegant solutions. I bring a Computer Science background and generalist approach to every layer of the stack — from high-security PostgreSQL data schemas to pixel-perfect client experiences.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                As a naturally curious builder, I am constantly exploring cutting-edge AI technologies, context engineering pipelines, and financial payment rails to create real commercial value. My entrepreneurial mindset keeps me focused on shipping robust, maintainable code kept strictly under 150 lines per module.
              </p>
            </div>

            {/* Fun Facts Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-slate-900/90 to-cyan-950/20 border border-cyan-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>DISTINCTIVE CAPABILITIES & FUN FACTS</span>
              </div>
              <div className="space-y-3">
                {FUN_FACTS.map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <p className="text-xs text-slate-200 leading-relaxed font-mono">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
