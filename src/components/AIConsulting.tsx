"use client";

import { AI_CONSULTING_SERVICES } from "@/lib/data";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Code2,
  LayoutDashboard,
} from "lucide-react";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "ai-automations": <Bot className="w-5 h-5 text-stone-900" />,
  "custom-software": <Code2 className="w-5 h-5 text-stone-900" />,
  dashboards: <LayoutDashboard className="w-5 h-5 text-stone-900" />,
};

export default function AIConsulting() {
  return (
    <section
      id="consulting"
      className="py-24 bg-[#faf7f2] relative border-t border-[#e7e1d4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
              — AI Consultations & Business Scaling
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mt-2 leading-[1.1]">
              Helping local businesses &amp; MSMEs{" "}
              <span className="text-stone-500">scale with AI</span>
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mt-3">
              Beyond product engineering, I offer hands-on AI consultations to
              help local businesses and MSMEs eliminate manual bottlenecks,
              modernize daily workflows, and grow without bloating overhead.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 w-fit px-3.5 py-2 rounded-lg bg-[#efe8dc] border border-[#e0d6c5] text-stone-800 text-xs font-semibold">
            <Building2 className="w-4 h-4 text-stone-700 shrink-0" />
            <span>Built for Local Businesses &amp; MSMEs</span>
          </div>
        </div>

        {/* Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_CONSULTING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-[#ffffff] border border-[#e7e1d4] hover:border-[#c8bfb0] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#efe8dc] border border-[#e0d6c5] flex items-center justify-center mb-5">
                  {SERVICE_ICONS[service.id]}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="pt-4 border-t border-[#efe8dc] space-y-2.5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-stone-700"
                  >
                    <Check className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Consultation CTA Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-stone-900 text-[#faf7f2] border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              AI Operations Consultation
            </p>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Not sure where AI fits in your business operations?
            </h3>
            <p className="text-sm text-stone-300 mt-1.5 leading-relaxed">
              Let&apos;s audit your current workflow and map out high-ROI AI
              automations, custom software, or dashboards tailored to your
              team&apos;s budget and pace.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-lg text-sm font-bold bg-[#faf7f2] text-stone-900 hover:bg-white transition-all shadow-xs inline-flex items-center justify-center gap-2 shrink-0 group"
          >
            BOOK A CONSULTATION
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
