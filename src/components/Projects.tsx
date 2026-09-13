'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/data';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { ExternalLink, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack & B2B', 'AI & LLM', 'FinTech & Payments', 'UI/UX & Design'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#060910] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-widest uppercase">
              — FEATURED PORTFOLIO & CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Some interesting things I&apos;ve built
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono text-[11px]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                      LIVE PRODUCT
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                {project.role && (
                  <div className="text-[11px] font-mono text-emerald-400 mb-2">
                    {project.role}
                  </div>
                )}
                <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-800/60 text-slate-500 font-mono text-[10px]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group/btn"
                >
                  <span>Details & Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1"
                      title="Visit Live URL"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white"
                      title="View GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
