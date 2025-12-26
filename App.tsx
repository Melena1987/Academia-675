
import React, { useState, useEffect, useCallback } from 'react';
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
// Fix: Import types separately to avoid resolution issues in some environments
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { Loader2 } from 'lucide-react';

export type ViewState = 'home' | 'legal' | 'registration' | 'technique' | 'admin_login' | 'admin_dashboard';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Map paths to ViewState
  const getViewStateFromPath = (path: string): ViewState => {
    if (path === '/inscripcion') return 'registration';
    if (path === '/tecnica') return 'technique';
    if (path === '/legal') return 'legal';
    if (path === '/admin') return 'admin_login';
    return 'home';
  };

  // Map ViewState to paths
  const getPathFromViewState = (view: ViewState): string => {
    switch (view) {
      case 'registration': return '/inscripcion';
      case 'technique': return '/tecnica';
      case 'legal': return '/legal';
      case 'admin_login':
      case 'admin_dashboard': return '/admin';
      default: return '/';
    }
  };

  const [view, setViewInternal] = useState<ViewState>(() => 
    getViewStateFromPath(window.location.pathname)
  );

  const setView = useCallback((newView: ViewState) => {
    const path = getPathFromViewState(newView);
    if (window.location.pathname !== path) {
      window.history.pushState({ view: newView }, '', path);
    }
    setViewInternal(newView);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const pathView = getViewStateFromPath(window.location.pathname);
      setViewInternal(pathView);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      
      // Auto-switch between login and dashboard if on /admin path
      if (window.location.pathname === '/admin') {
        if (currentUser) {
          setViewInternal('admin_dashboard');
        } else {
          setViewInternal('admin_login');
        }
      }
    });
    return () => unsubscribe();
  }, []);

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

  // Final view determination based on auth for admin path
  const currentView = (view === 'admin_login' || view === 'admin_dashboard') 
    ? (user ? 'admin_dashboard' : 'admin_login')
    : view;

  return (
    <div className="flex flex-col min-h-screen">
      {currentView !== 'admin_dashboard' && (
        <Navbar isScrolled={isScrolled} setView={setView} currentView={currentView} />
      )}
      
      <main className="flex-grow">
        {currentView === 'home' && (
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

        {currentView === 'registration' && (
          <div className="pt-24 bg-[#f8f8f8] min-h-screen pb-24">
            <RegistrationForm onBack={() => setView('home')} />
          </div>
        )}

        {currentView === 'technique' && (
          <div className="pt-20 bg-black min-h-screen">
            <IndividualTechnique onBack={() => setView('home')} />
          </div>
        )}

        {currentView === 'legal' && (
          <LegalInfo onBack={() => setView('home')} />
        )}

        {currentView === 'admin_login' && (
          <AdminLogin onBack={() => setView('home')} />
        )}

        {currentView === 'admin_dashboard' && (
          user ? (
            <AdminDashboard onLogout={() => setView('home')} />
          ) : (
            <AdminLogin onBack={() => setView('home')} />
          )
        )}
      </main>

      {currentView !== 'admin_dashboard' && (
        <Footer setView={setView} />
      )}
      <CookieBanner />
    </div>
  );
};

export default App;
