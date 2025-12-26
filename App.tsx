
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Philosophy from './components/Philosophy.tsx';
import AcademiaInfo from './components/AcademiaInfo.tsx';
import RegistrationForm from './components/RegistrationForm.tsx';
import IndividualTechnique from './components/IndividualTechnique.tsx';
import Sponsors from './components/Sponsors.tsx';
import JoinUs from './components/JoinUs.tsx';
import Footer from './components/Footer.tsx';
import LegalInfo from './components/LegalInfo.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import AdminLogin from './components/Admin/Login.tsx';
import AdminDashboard from './components/Admin/Dashboard.tsx';
import { auth } from './firebase.ts';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Loader2 } from 'lucide-react';

export type ViewState = 'home' | 'legal' | 'registration' | 'technique' | 'admin_login' | 'admin_dashboard';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Persist view state in localStorage to survive reloads
  const [view, setView] = useState<ViewState>(() => {
    const savedView = localStorage.getItem('app_view');
    return (savedView as ViewState) || 'home';
  });
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('app_view', view);
  }, [view]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      
      // Auto-redirect if logged in and on login page
      if (currentUser && view === 'admin_login') {
        setView('admin_dashboard');
      }
      // If not logged in and trying to access dashboard, send to login
      if (!currentUser && view === 'admin_dashboard') {
        setView('admin_login');
      }
    });
    return () => unsubscribe();
  }, [view]);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="text-orange-500 animate-spin w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {view !== 'admin_dashboard' && (
        <Navbar isScrolled={isScrolled} setView={setView} currentView={view} />
      )}
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            <section id="academia" className="py-24 bg-white text-black overflow-hidden">
               <Philosophy />
            </section>
            <section id="programas" className="py-24 bg-[#fcfcfc] text-black border-y border-gray-100">
               <AcademiaInfo />
            </section>
            <JoinUs setView={setView} />
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

        {view === 'admin_login' && (
          <AdminLogin onBack={() => setView('home')} />
        )}

        {view === 'admin_dashboard' && (
          user ? (
            <AdminDashboard onLogout={() => setView('home')} />
          ) : (
            <AdminLogin onBack={() => setView('home')} />
          )
        )}
      </main>

      {view !== 'admin_dashboard' && (
        <Footer setView={setView} />
      )}
      <CookieBanner />
    </div>
  );
};

export default App;
