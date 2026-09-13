'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationCertifications from '@/components/EducationCertifications';
import ContactSection from '@/components/ContactSection';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf7f2] text-stone-900 selection:bg-[#e7e1d4] selection:text-stone-900">
      <Header onOpenResume={() => setResumeModalOpen(true)} />
      <Hero onOpenResume={() => setResumeModalOpen(true)} />
      <TechStack />
      <Projects />
      <ExperienceTimeline />
      <EducationCertifications />
      <ContactSection />
      <Footer />
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
