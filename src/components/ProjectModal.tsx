"use client";

import { Project } from "@/lib/data";
import { GithubIcon } from "./Icons";
import { X, ExternalLink, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#faf7f2] border border-[#e0d6c5] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0d6c5] bg-[#f4efe6]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-xs font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 text-xs text-stone-900 font-semibold">
                ★ Featured
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#efe8dc] text-stone-600 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {project.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#e0d6c5] bg-[#f4efe6] shadow-xs mb-2">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2">
              {project.title}
            </h3>
            {project.role && (
              <div className="text-xs text-stone-600 font-semibold mb-4">
                ROLE: {project.role}
              </div>
            )}
            <p className="text-stone-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.detailedOverview && (
            <div className="p-4 rounded-xl bg-[#f4efe6] border border-[#e0d6c5] space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Technical Overview & Architecture
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>
          )}

          {project.impact && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f4efe6] border border-[#e0d6c5] text-stone-900 text-sm">
              <CheckCircle className="w-4 h-4 shrink-0 text-stone-800 mt-0.5" />
              <div>
                <strong className="block uppercase text-stone-900 text-xs font-bold">
                  Key Commercial Impact:
                </strong>
                {project.impact}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[#e0d6c5] flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-[#faf7f2] text-sm font-bold hover:bg-stone-800 transition-colors shadow-xs"
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#efe8dc] text-stone-800 hover:bg-[#e4dccb] border border-[#e0d6c5] text-sm font-semibold transition-colors"
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
