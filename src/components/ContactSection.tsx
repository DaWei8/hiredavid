"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result.error || "Failed to send email. Please try again.",
        );
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0b0602] text-stone-100 relative overflow-hidden border-t border-stone-800"
    >
      {/* Background Line Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38353325_1px,transparent_1px),linear-gradient(to_bottom,#38353325_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-stone-400 text-base mt-2">
            Available for Full-Stack Engineering & Product Design roles.
          </p>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => copyToClipboard(PERSONAL_INFO.email)}
            className="flex items-center gap-2 px-4 py-2.5 lowercase rounded-md bg-[#292524] border border-stone-700 hover:border-stone-500 text-sm text-stone-200 shadow-sm transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-stone-300" />
            <span>{PERSONAL_INFO.email}</span>
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-stone-400" />
            )}
          </button>
          <span className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#292524] border border-stone-700 text-sm text-stone-200 shadow-sm">
            <MapPin className="w-4 h-4 text-stone-400" />
            {PERSONAL_INFO.location}
          </span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#292524] border border-stone-700 hover:border-stone-500 text-sm text-stone-200 shadow-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-stone-200" /> GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#292524] border border-stone-700 hover:border-stone-500 text-sm text-stone-200 shadow-sm transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-stone-200" /> LinkedIn
          </a>
        </div>

        {/* Dark Form Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#292524] border border-stone-700/80 shadow-xl">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-100 mx-auto flex items-center justify-center border border-stone-600">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">
                Message Sent!
              </h3>
              <p className="text-sm text-stone-400">
                I&apos;ll get back to you within 12 hours at
                sawedavid7@gmail.com.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-stone-200 font-semibold hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-md bg-red-950/80 border border-red-800 text-red-300 text-xs font-medium">
                  {errorMessage}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-md bg-[#1c1917] border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-300 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-3 rounded-md bg-[#1c1917] border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-300 text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5"
                >
                  Project Details / Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, timeline, or engineering role..."
                  className="w-full px-4 py-3 rounded-md bg-[#1c1917] border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-md bg-stone-100 hover:bg-white text-stone-950 text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending email...</span>
                ) : (
                  <>
                    <span>Send Message</span> <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
