
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  isScrolled: boolean;
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556860263_academia_675_400x400.png?alt=media&token=7b0e7cfc-f84f-4f75-b031-3d28eb72f220";

  const handleLinkClick = (view: ViewState, hash?: string) => {
    setView(view);
    setIsOpen(false);
    if (view === 'home' && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navItems = [
    { label: 'LA ACADEMIA', view: 'home' as ViewState, hash: '#academia' },
    { label: 'METODOLOGÍA', view: 'home' as ViewState, hash: '#programas' },
    { label: 'TÉCNICA', view: 'technique' as ViewState },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-black/95 backdrop-blur-xl py-2 shadow-2xl border-b border-white/5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        {!isScrolled && currentView === 'home' && (
          <div className="hidden md:flex justify-between items-center mb-3 text-[10px] text-white/50 border-b border-white/5 pb-3">
            <div className="flex gap-6">
              <a href="tel:+34623047953" className="flex items-center gap-2 hover:text-orange-500 transition-colors uppercase tracking-widest font-bold">
                <Phone size={12} className="text-orange-500" /> +34 623 047 953
              </a>
              <a href="mailto:info@academia675.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors uppercase tracking-widest font-bold">
                <Mail size={12} className="text-orange-500" /> info@academia675.com
              </a>
            </div>
            <div className="flex gap-4">
              <Instagram size={14} className="cursor-pointer hover:text-orange-500 transition-all hover:scale-110" />
              <Twitter size={14} className="cursor-pointer hover:text-orange-500 transition-all hover:scale-110" />
              <Facebook size={14} className="cursor-pointer hover:text-orange-500 transition-all hover:scale-110" />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <button onClick={() => handleLinkClick('home')} className="flex items-center gap-3 group">
             <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl overflow-hidden p-1 shadow-lg group-hover:scale-105 transition-transform text-left">
               <img src={logoUrl} alt="Academia 675 Logo" className="w-full h-full object-contain" />
             </div>
             <span className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none uppercase text-left">
                ACADEMIA <span className="text-orange-500 italic">675</span>
             </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.view, item.hash)}
                className={`text-[10px] font-black tracking-[0.2em] relative group py-2 transition-colors ${currentView === item.view && (!item.hash || window.location.hash === item.hash) ? 'text-orange-500' : 'text-white/70 hover:text-orange-500'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all group-hover:w-full ${currentView === item.view ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
            <button 
              onClick={() => handleLinkClick('registration')} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-[10px] font-black shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 tracking-[0.2em]"
            >
              PREINSCRIPCIÓN
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white p-2">
          <X size={40} />
        </button>
        <div className="mb-10 p-4 bg-white rounded-3xl w-24 h-24">
           <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
        </div>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleLinkClick(item.view, item.hash)}
            className="text-3xl font-[900] text-white hover:text-orange-500 transition-colors tracking-tighter"
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={() => handleLinkClick('registration')}
          className="mt-8 bg-orange-500 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-orange-500/30"
        >
          INSCRÍBETE AHORA
        </button>
      </div>
    </header>
  );
};

export default Navbar;
