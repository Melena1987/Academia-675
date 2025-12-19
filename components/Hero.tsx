
import React from 'react';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556860263_academia_675_400x400.png?alt=media&token=7b0e7cfc-f84f-4f75-b031-3d28eb72f220";

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with improved overlay */}
      <div className="absolute inset-0 bg-basketball scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90"></div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-40 md:pt-64 pb-16">
        {/* Logo Badge */}
        <div className="mb-10 animate-bounce-slow">
           <div className="relative inline-block p-1 bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <img src={logoUrl} alt="Academia 675" className="w-24 md:w-32 h-24 md:h-32 object-contain" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[8px] md:text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap tracking-widest shadow-lg">
                OFFICIAL ACADEMY
              </div>
           </div>
        </div>

        <div className="mb-8 inline-flex items-center gap-3 py-2 px-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full">
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
          <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Temporada 2025 / 2026</span>
          <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-[950] text-white leading-[0.9] mb-8 tracking-tighter uppercase">
          EL BALONCESTO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 drop-shadow-2xl italic">
            DIFERENCIAL
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto leading-tight px-4">
          Liderado por <span className="text-orange-400 font-black underline decoration-orange-500/50 underline-offset-8">Berni Rodríguez</span>. Un estilo propio donde la sonrisa del jugador es nuestro mayor éxito.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => setView('registration')}
            className="w-full sm:w-auto px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-[0_15px_60px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1"
          >
            INSCRÍBETE AHORA
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              const el = document.querySelector('#programas');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black text-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <Calendar size={22} />
            MÁS INFORMACIÓN
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
