'use client';

import { PERSONAL_INFO } from '@/lib/data';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Terminal, ArrowUp, Bot, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Left Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold tracking-tight">hire<span className="text-emerald-400">david</span></div>
              <div className="text-[10px] text-slate-500">David Sawe — Senior Design Engineer</div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Work</a>
            <a href="#specializations" className="hover:text-emerald-400 transition-colors">Capabilities</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* AI Discoverability & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors text-[11px]"
              title="LLM & AI Crawler Index"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              <span>llms.txt</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} David Sawe. All rights reserved. First Class Honours B.Tech Computer Science (FUTA).
          </div>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-300 flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
