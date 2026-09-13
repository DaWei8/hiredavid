'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f2ede4] border-t border-[#e0d6c5] py-10 text-sm text-stone-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} David Sawe. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-1 transition-colors">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-1 transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-stone-900 flex items-center gap-1 transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-stone-300 text-stone-500 hover:text-stone-900 hover:border-stone-400 bg-[#faf7f2] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
