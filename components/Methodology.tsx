
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16">
        <h2 className="text-orange-500 font-black tracking-[0.3em] text-sm mb-4 uppercase">SISTEMA METODOLÓGICO 675</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Nuestra Seña de Identidad</h3>
        <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed mb-12">
           Implementamos una filosofía basada en la fusión del estilo tradicional malagueño con herramientas de vanguardia, creando una metodología diferencial que nos posiciona como referente internacional.
        </p>
      </div>

      <div className="relative">
         {/* Background pattern */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent hidden lg:block"></div>
         
         <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group hover:border-orange-500/50 transition-all">
               <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-orange-500/20 transition-all">01</div>
               <h4 className="text-2xl font-black mb-4">Legado Histórico</h4>
               <p className="text-white/40 text-sm">Respeto por el estilo tradicional que ha dado tantos éxitos al baloncesto de Málaga.</p>
            </div>
            <div className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group hover:border-orange-500/50 transition-all">
               <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-orange-500/20 transition-all">02</div>
               <h4 className="text-2xl font-black mb-4">Vanguardia</h4>
               <p className="text-white/40 text-sm">Integración de las últimas innovaciones técnicas y tecnológicas del momento.</p>
            </div>
            <div className="p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 group hover:border-orange-500/50 transition-all">
               <div className="text-6xl font-black text-white/5 mb-6 group-hover:text-orange-500/20 transition-all">03</div>
               <h4 className="text-2xl font-black mb-4">Compromiso ODS</h4>
               <p className="text-white/40 text-sm">Alineados con los Objetivos de Desarrollo Sostenible para una sociedad mejor.</p>
            </div>
         </div>
      </div>

      <div className="mt-20 p-8 bg-orange-500 rounded-3xl text-black flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto transform hover:scale-[1.01] transition-all cursor-default">
         <div className="text-left">
            <h4 className="text-2xl font-black mb-2">Descarga nuestra guía</h4>
            <p className="font-bold opacity-80">Conoce en detalle el Proyecto 675 y su compromiso social.</p>
         </div>
         <button className="bg-black text-white px-8 py-4 rounded-xl font-black tracking-widest text-sm hover:scale-105 transition-all">
            DESCARGAR PDF
         </button>
      </div>
    </div>
  );
};

export default Methodology;
