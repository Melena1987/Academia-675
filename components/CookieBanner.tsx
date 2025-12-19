
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent-675');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent-675', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-700">
      <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-2xl text-white shrink-0 shadow-lg shadow-orange-500/20">
            <Cookie size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">¿Una galleta?</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico de forma anónima. 
              <a href="#" className="text-orange-500 font-bold ml-1 hover:underline">Más info</a>
            </p>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white/20 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="flex-1 bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-xl"
          >
            ACEPTAR TODAS
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="px-6 border border-white/10 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            SÓLO NECESARIAS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
