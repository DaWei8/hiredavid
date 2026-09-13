'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/lib/data';
import { X, FileText, Mail, ArrowRight } from 'lucide-react';

interface ExitIntentModalProps {
  onOpenResume: () => void;
}

export default function ExitIntentModal({ onOpenResume }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hiredavid_exit_dismissed') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (hasDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#faf7f2] border border-[#e0d6c5] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#efe8dc] text-stone-500 hover:text-stone-900 hover:bg-[#e4dcce] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="space-y-5 text-center sm:text-left">
          
          <div className="w-12 h-12 rounded-2xl bg-[#efe8dc] text-stone-900 border border-[#e0d6c5] flex items-center justify-center mx-auto sm:mx-0">
            <Mail className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-bold text-stone-500 tracking-wider uppercase">
              BEFORE YOU GO 👋
            </span>
            <h3 className="text-2xl font-extrabold text-stone-900 mt-1">
              Let&apos;s build something great together.
            </h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
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
              className="w-full p-3.5 rounded-xl bg-[#ffffff] border border-[#e7e1d4] hover:border-stone-400 text-stone-800 hover:text-stone-950 text-sm font-semibold flex items-center justify-between transition-all group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-stone-900" />
                <span>View / Download David&apos;s Resume (PDF)</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20David%20Sawe`}
              onClick={handleClose}
              className="w-full p-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-bold flex items-center justify-between transition-all shadow-sm"
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
              className="text-xs text-stone-500 hover:text-stone-800 underline"
            >
              No thanks, I&apos;ll keep browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
