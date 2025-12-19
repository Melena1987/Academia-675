
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import AcademiaInfo from './components/AcademiaInfo';
import RegistrationForm from './components/RegistrationForm';
import IndividualTechnique from './components/IndividualTechnique';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import LegalInfo from './components/LegalInfo';
import CookieBanner from './components/CookieBanner';

export type ViewState = 'home' | 'legal' | 'registration' | 'technique';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} setView={setView} currentView={view} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            <section id="academia" className="py-24 bg-white text-black overflow-hidden">
               <Philosophy />
            </section>
            <section id="programas" className="py-24 bg-[#fcfcfc] text-black">
               <AcademiaInfo />
            </section>
            <Sponsors />
          </>
        )}

        {view === 'registration' && (
          <div className="pt-24 bg-[#f8f8f8] min-h-screen pb-24">
            <RegistrationForm onBack={() => setView('home')} />
          </div>
        )}

        {view === 'technique' && (
          <div className="pt-20 bg-black min-h-screen">
            <IndividualTechnique onBack={() => setView('home')} />
          </div>
        )}

        {view === 'legal' && (
          <LegalInfo onBack={() => setView('home')} />
        )}
      </main>

      <Footer setView={setView} />
      <CookieBanner />
    </div>
  );
};

export default App;
