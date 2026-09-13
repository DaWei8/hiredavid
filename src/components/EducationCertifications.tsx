"use client";

/* eslint-disable @next/next/no-img-element */

import { PERSONAL_INFO, CERTIFICATIONS } from "@/lib/data";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function EducationCertifications() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f4efe6] relative border-t border-[#e0d6c5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: About */}
          <div className="space-y-6">
            <img
              src="/image.png"
              alt="Hire David Logo"
              className="w-56 h-56 rounded-lg object-cover  group-hover:border-stone-400 transition-colors shrink-0"
            />
            <div>
              <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2">
                About <span className="text-stone-500">David Sawe</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-stone-600 leading-relaxed">
                Full-stack developer and design engineer with a passion for
                building efficient, elegant solutions. I bring a Computer
                Science background and generalist approach to every layer of the
                stack — from high-security PostgreSQL data schemas to
                pixel-perfect client experiences.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                As a naturally curious builder, I am constantly exploring
                cutting-edge AI technologies, context engineering pipelines, and
                financial payment rails to create real commercial value.
              </p>
            </div>
          </div>

          {/* Right: Education & Certs */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
                Education
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2">
                Credentials
              </h2>
            </div>

            {/* Degree */}
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e7e1d4] shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#efe8dc] border border-[#e0d6c5] flex items-center justify-center text-stone-900">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-xs font-bold">
                  FIRST CLASS HONOURS
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-1">
                {PERSONAL_INFO.degree}
              </h3>
              <div className="text-sm text-stone-600 font-medium mb-3">
                {PERSONAL_INFO.institution} • 2024
              </div>
              <div className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-stone-800" />
                <span>{PERSONAL_INFO.nysc}</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#ffffff] border border-[#e7e1d4] flex items-center gap-3 shadow-xs"
                >
                  <Award className="w-4 h-4 text-stone-700 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-stone-800">
                      {cert.title}
                    </span>
                    <span className="text-xs text-stone-400 ml-2">
                      — {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
