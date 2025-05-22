
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatbotFAB from './components/ChatbotFAB';
import { DEVELOPER_PROFILE, SECTION_IDS } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="flex-grow">
        <HeroSection id={SECTION_IDS.home} />
        <AboutSection id={SECTION_IDS.about} profileContext={DEVELOPER_PROFILE.about} />
        <ProjectsSection id={SECTION_IDS.projects} projects={DEVELOPER_PROFILE.projects} />
        <SkillsSection id={SECTION_IDS.skills} skills={DEVELOPER_PROFILE.skills} />
        <ContactSection id={SECTION_IDS.contact} />
      </main>
      <Footer />
      <ChatbotFAB developerContext={DEVELOPER_PROFILE} />
    </div>
  );
};

export default App;
    