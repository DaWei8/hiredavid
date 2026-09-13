"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./Icons";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(
    null,
  );

  const categories = [
    "All",
    "Full Stack & B2B",
    "AI & LLM",
    "FinTech & Payments",
    "UI/UX & Design",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-[#f4efe6] relative border-t border-[#e0d6c5] overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#e6dbc8]/50 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#dcd0bb]/60 rounded-full blur-3xl pointer-events-none animate-blob-delay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
              — Featured Portfolio & Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 max-w-xl tracking-tight mt-2">
              Some interesting things I&apos;ve built
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-[#faf7f2] font-bold shadow-xs"
                    : "bg-[#faf7f2] text-stone-600 hover:text-stone-900 border border-[#e0d6c5]"
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
              className="p-4 sm:p-3 rounded-2xl bg-[#ffffff] border border-[#e7e1d4] hover:border-[#c8bfb0] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Preview Image */}
                {project.image ? (
                  <div
                    onClick={() => setActiveProjectModal(project)}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#e7e1d4] bg-[#f4efe6] group-hover:shadow-md transition-all cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-stone-900 text-[#faf7f2] text-xs font-bold shadow-xs backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        View Case Study
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveProjectModal(project)}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#e7e1d4] bg-[#f4efe6] flex flex-col items-center justify-center p-4 cursor-pointer group-hover:bg-[#ebe4d6] transition-colors"
                  >
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider text-center">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-stone-500 mt-1">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#efe8dc] text-stone-700 text-[11px] font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded bg-[#efe8dc] border border-[#e0d6c5] text-stone-900 text-[10px] font-bold">
                      LIVE PRODUCT
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3
                  onClick={() => setActiveProjectModal(project)}
                  className="text-xl font-bold text-stone-900 mb-1.5 group-hover:text-stone-700 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                {project.role && (
                  <div className="text-[11px] text-stone-600 font-semibold mb-2">
                    {project.role}
                  </div>
                )}
                <p className="text-sm text-stone-600 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#efe8dc] text-stone-800 text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-[#efe8dc] text-stone-600 text-[10px]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[#f2ede4] flex items-center justify-between text-sm">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-stone-900 hover:text-stone-700 font-semibold flex items-center gap-1 group/btn"
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
                      className="text-stone-500 hover:text-stone-900 flex items-center gap-1 text-sm font-medium"
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
                      className="text-slate-400 hover:text-slate-700"
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
