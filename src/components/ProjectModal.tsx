'use client';

import { Project } from '@/lib/data';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs font-mono text-amber-400">
                <Sparkles className="w-3.5 h-3.5" /> Featured
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            {project.role && (
              <div className="text-xs font-mono text-emerald-400 mb-4">
                ROLE: {project.role}
              </div>
            )}
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.detailedOverview && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Technical Overview & Architecture
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>
          )}

          {project.impact && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              <div>
                <strong className="block font-mono uppercase text-emerald-400">Key Commercial Impact:</strong>
                {project.impact}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-mono text-xs font-bold hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>VISIT LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 font-mono text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPO / SPECS</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
