"use client";

import Image from "next/image";

export default function TechStack() {
  const skills = [
    { name: "TypeScript", icon: "typescript", color: "3178C6" },
    { name: "Next.js", icon: "nextdotjs", color: "000000" },
    { name: "React", icon: "react", color: "61DAFB" },
    { name: "Python", icon: "python", color: "3776AB" },
    { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
    { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
    { name: "Supabase", icon: "supabase", color: "3FCF8E" },
    { name: "Stripe", icon: "stripe", color: "635BFF" },
    { name: "Anthropic", icon: "anthropic", color: "191919" },
    { name: "OpenAI", icon: "openai", color: "412991" },
    { name: "Google Gemini", icon: "googlegemini", color: "8E75B2" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
    { name: "Figma", icon: "figma", color: "F24E1E" },
    { name: "Docker", icon: "docker", color: "2496ED" },
    { name: "Git", icon: "git", color: "F05032" },
    { name: "AWS", icon: "amazonaws", color: "FF9900" },
    { name: "Jest", icon: "jest", color: "C21325" },
  ];

  return (
    <section id="stack" className="py-10 bg-[#f2ede4] overflow-hidden">
      <div className="max-w-7xl flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <span className="text-xs font-semibold text-stone-500 tracking-widest uppercase">
          Skilled with
        </span>
      </div>

      <div className="relative w-full overflow-hidden py-2">
        <div className="animate-marquee gap-5 items-center">
          {[...skills, ...skills].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-stone-700 text-md font-medium shrink-0"
            >
              <Image
                src={`https://cdn.jsdelivr.net/npm/simple-icons@11/icons/${item.icon}.svg`}
                alt={item.name}
                width={26}
                height={26}
                className="shrink-0 object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    `https://cdn.simpleicons.org/${item.icon}/${item.color}`;
                }}
              />
              <span>{item.name}</span>
              {idx < [...skills, ...skills].length - 1 && (
                <span className="text-stone-400 ml-3">—</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
