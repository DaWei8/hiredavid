"use client";

import { useState } from "react";
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS } from "@/lib/data";
import { X, Printer, Copy, Check, Mail, MapPin, Download } from "lucide-react";

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
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${PERSONAL_INFO.degree} — ${PERSONAL_INFO.institution} (First Class Honours, 2024)
${PERSONAL_INFO.nysc}

WORK EXPERIENCE
${EXPERIENCES.map((e) => `${e.role} | ${e.company} (${e.period})\n${e.highlights.map((h) => `- ${h}`).join("\n")}`).join("\n\n")}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in print:p-0 print:static print:bg-white print:text-black"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#faf7f2] border border-[#e0d6c5] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#e0d6c5] bg-[#f4efe6] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-900">
              david-sawe-CV.pdf
            </span>
            <span className="px-2 py-0.5 rounded bg-[#efe8dc] text-stone-800 text-[10px] font-bold border border-[#e0d6c5]">
              VERIFIED CV
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/david-sawe-CV.pdf"
              download="david-sawe-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-stone-900 text-stone-50 text-xs font-bold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handleCopyCV}
              className="px-3 py-1.5 rounded-lg bg-[#faf7f2] text-stone-700 hover:bg-[#efe8dc] text-xs flex items-center gap-1.5 border border-[#e0d6c5] transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-stone-900" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#faf7f2] text-stone-700 hover:bg-[#efe8dc] text-xs flex items-center gap-1.5 border border-[#e0d6c5] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#efe8dc] text-stone-500 hover:text-stone-900 hover:bg-[#e4dcce] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-stone-800 print:text-slate-900 print:bg-white print:p-0">
          {/* Header CV */}
          <div className="border-b border-[#e0d6c5] pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-stone-950 print:text-black tracking-tight">
              DAVID SAWE
            </h1>
            <div className="text-sm text-stone-700 print:text-slate-900 mt-1 font-semibold">
              Senior Design Engineer & Technology Director | Full Stack + AI
              Engineer
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500 print:text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {PERSONAL_INFO.location}
              </span>
              <span>GitHub: github.com/DaWei8</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-stone-900 print:text-black font-extrabold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-stone-600 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-stone-900 print:text-black font-extrabold mb-2">
              EDUCATION & QUALIFICATIONS
            </h2>
            <div className="text-sm space-y-1">
              <div className="font-bold text-stone-900 print:text-black">
                {PERSONAL_INFO.degree}
              </div>
              <div className="text-stone-600 print:text-slate-600">
                {PERSONAL_INFO.institution} • {PERSONAL_INFO.honours}
              </div>
              <div className="text-stone-600 print:text-slate-600">
                {PERSONAL_INFO.nysc}
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-stone-900 print:text-black font-extrabold mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between text-sm">
                    <span className="font-bold text-stone-900 print:text-black">
                      {exp.role} — {exp.company}
                    </span>
                    <span className="text-stone-500 print:text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-sm text-stone-600 print:text-slate-800">
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
            <h2 className="text-xs uppercase tracking-widest text-stone-900 print:text-black font-extrabold mb-2">
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <ul className="list-disc pl-4 text-sm text-stone-600 print:text-slate-800 space-y-1">
              {CERTIFICATIONS.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.title}</strong> — {c.issuer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
