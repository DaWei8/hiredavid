'use client';

import { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS } from '@/lib/data';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCV = () => {
    const text = `
DAVID SAWE
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${PERSONAL_INFO.degree} — ${PERSONAL_INFO.institution} (First Class Honours, 2024)
${PERSONAL_INFO.nysc}

WORK EXPERIENCE
${EXPERIENCES.map(e => `${e.role} | ${e.company} (${e.period})\n${e.highlights.map(h => `- ${h}`).join('\n')}`).join('\n\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:static print:bg-white print:text-black">
      <div
        className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-900/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-white">David_Sawe_Resume.pdf</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
              VERIFIED CV
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCV}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 font-mono text-xs flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-emerald-400 text-slate-950 font-mono text-xs font-bold hover:bg-emerald-300 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 print:text-slate-900 print:bg-white print:p-0">
          
          {/* Header CV */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-white print:text-black font-mono tracking-tight">
              DAVID SAWE
            </h1>
            <div className="text-xs font-mono text-emerald-400 print:text-emerald-700 mt-1">
              Senior Design Engineer & Technology Director | Full Stack + AI Engineer
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-400 print:text-slate-600 mt-3">
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>Phone: {PERSONAL_INFO.phone}</span>
              <span>Location: {PERSONAL_INFO.location}</span>
              <span>GitHub: github.com/DaWei8</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-700 font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-700 font-bold mb-2">
              EDUCATION & QUALIFICATIONS
            </h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-white print:text-black">{PERSONAL_INFO.degree}</div>
              <div className="text-slate-400 print:text-slate-600">{PERSONAL_INFO.institution} • {PERSONAL_INFO.honours}</div>
              <div className="text-slate-400 print:text-slate-600">{PERSONAL_INFO.nysc}</div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-700 font-bold mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between text-xs font-mono">
                    <span className="font-bold text-white print:text-black">{exp.role} — {exp.company}</span>
                    <span className="text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-300 print:text-slate-800">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-700 font-bold mb-2">
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <ul className="list-disc pl-4 text-xs text-slate-300 print:text-slate-800 space-y-1">
              {CERTIFICATIONS.map((c, idx) => (
                <li key={idx}><strong>{c.title}</strong> — {c.issuer}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
