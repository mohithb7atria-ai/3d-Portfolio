import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ProgressRail from './components/ProgressRail';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import PrinciplesEducation from './components/PrinciplesEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#05070a] text-[#dfe7e0]">
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. 3D Background Canvas */}
      <ThreeCanvas />

      {/* 3. Atmosphere Overlays */}
      <div id="vignette" />
      <div id="grain" />

      {/* 4. Custom Cursor */}
      <CustomCursor />

      {/* 5. Fixed Furniture */}
      <Navbar />
      <ProgressRail />

      {/* 6. Page Content */}
      <main className="relative z-10 max-w-[1600px] mx-auto">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <PrinciplesEducation />
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
