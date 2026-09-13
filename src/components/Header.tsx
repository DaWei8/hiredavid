"use client";

import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e7e1d4] py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-extrabold text-stone-900 tracking-tight group"
          >
            <Image
              src="/image.png"
              alt="Hire David Logo"
              className="w-8 h-8 rounded-sm object-cover border border-[#e0d6c5] shadow-xs group-hover:border-stone-400 transition-colors shrink-0"
            />
            <span>Hire David</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-sm font-bold text-[#faf7f2] bg-stone-900 hover:bg-stone-800 rounded-lg transition-all shadow-xs"
            >
              Download Resume
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#f4efe6] border border-[#e0d6c5] shadow-lg space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-stone-700 hover:text-stone-900 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-700"
            >
              LinkedIn ↗
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm text-stone-700"
            >
              GitHub ↗
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-2 px-4 py-2.5 text-sm font-bold text-[#faf7f2] bg-stone-900 rounded-lg"
            >
              Download Resume
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
