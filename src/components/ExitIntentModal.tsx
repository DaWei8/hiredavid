'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data';
import { X, FileText, Calendar, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface ExitIntentModalProps {
  onOpenResume: () => void;
}

export default function ExitIntentModal({ onOpenResume }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check session storage
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('hiredavid_exit_dismissed');
      if (dismissed) {
        setHasDismissed(true);
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasDismissed) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hiredavid_exit_dismissed', 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0f172a] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop behind modal */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-5 text-center sm:text-left">
          
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto sm:mx-0">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase">
              BEFORE YOU GO 👋
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Let&apos;s build something great together.
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Are you looking for a Senior Full-Stack Engineer, Technology Director, or AI Systems Architect for your next project?
            </p>
          </div>

          {/* Quick Actions List */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => {
                handleClose();
                onOpenResume();
              }}
              className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View / Download David&apos;s Resume (PDF)</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20David%20Sawe`}
              onClick={handleClose}
              className="w-full p-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono text-xs font-bold flex items-center justify-between transition-all shadow-lg shadow-emerald-500/20"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span>Send Direct Email to David</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleClose}
              className="text-xs font-mono text-slate-500 hover:text-slate-300 underline"
            >
              No thanks, I&apos;ll keep browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
