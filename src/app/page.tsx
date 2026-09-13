'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Specializations from '@/components/Specializations';
import Projects from '@/components/Projects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationCertifications from '@/components/EducationCertifications';
import ContactSection from '@/components/ContactSection';
import ExitIntentModal from '@/components/ExitIntentModal';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Header Bar */}
      <Header onOpenResume={() => setResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />

      {/* Infinite Tech Stack Ticker & Category Matrix */}
      <TechStack />

      {/* Capabilities & Specializations */}
      <Specializations />

      {/* Featured Projects & Case Studies */}
      <Projects />

      {/* Career & Experience Timeline */}
      <ExperienceTimeline />

      {/* Academic Honours & Certifications */}
      <EducationCertifications />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Exit Intent Popup Modal */}
      <ExitIntentModal onOpenResume={() => setResumeModalOpen(true)} />

      {/* Printable Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </main>
  );
}
