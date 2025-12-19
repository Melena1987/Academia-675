
import React from 'react';
import { ArrowRight, Zap, Target } from 'lucide-react';
import { ViewState } from '../App.tsx';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556860263_academia_675_400x400.png?alt=media&token=7b0e7cfc-f84f-4f75-b031-3d28eb72f220";

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-basketball scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90"></div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-40 md:pt-64 pb-16">
        {/* Logo Badge */}
        <div className="mb-10">
           <div className="relative inline-block p-1 bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-in zoom-in duration-1000">
              <img src={logoUrl} alt="Academia 675" className="w-24 md:w-32 h-24 md:h-32 object-contain" />
           </div>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-[950] text-white leading-[0.9] mb-8 tracking-tighter uppercase">
          EL BALONCESTO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 drop-shadow-2xl italic">
            DIFERENCIAL
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-tight px-4">
          Liderado por <span className="text-orange-400 font-black">Berni Rodríguez</span>. Formación técnica de élite y valores en Málaga.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => setView('registration')}
            className="w-full sm:w-auto px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-lg shadow-[0_15px_60px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1"
          >
            <Target size={22} className="group-hover:scale-110 transition-transform" />
            UNIRSE A LA ACADEMIA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => setView('technique')}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            <Zap size={22} className="text-orange-500 group-hover:scale-110 transition-transform" />
            TÉCNICA INDIVIDUAL
          </button>
        </div>

        {/* Feature Tags */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/40 uppercase tracking-[0.25em] text-[10px] font-black">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
            MINIBASKET (2-12 AÑOS)
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
            SUPERBASKET (COGNITIVA)
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
            METODOLOGÍA 675
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
