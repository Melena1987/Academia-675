
import React from 'react';

const Sponsors: React.FC = () => {
  const unicajaLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556571195_Fundacion-Unicaja-2024-Logo_VP_Color_RGB_400x400.png?alt=media&token=d8125b63-8edd-4aa9-a595-f5f4be2d6bd5";

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase mb-4">NUESTROS ALIADOS</h2>
          <p className="text-3xl font-black text-black uppercase tracking-tighter">IMPULSANDO EL <span className="text-orange-500 italic">FUTURO</span></p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Main Sponsor: Fundación Unicaja */}
        <div className="flex flex-col items-center mb-24">
          <div className="group relative">
             <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/10 to-orange-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
             <div className="relative px-12 md:px-24 py-12 bg-white rounded-[3rem] border border-gray-100 shadow-2xl flex flex-col items-center justify-center transition-all group-hover:translate-y-[-8px] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
                <img 
                  src={unicajaLogo} 
                  alt="Fundación Unicaja" 
                  className="h-32 md:h-48 w-auto object-contain mb-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gray-200"></div>
                  <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase whitespace-nowrap">Patrocinador Principal</span>
                  <div className="w-12 h-px bg-gray-200"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Other Logos - Grid for future sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center">
           {[1, 2, 3, 4, 5].map((i) => (
             <div key={i} className="h-28 flex items-center justify-center bg-white border border-gray-100 rounded-3xl p-6 transition-all grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:shadow-xl hover:border-orange-500/20 group cursor-default">
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest text-center group-hover:text-orange-500 transition-colors">
                  LOGO <br /> COLABORADOR
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto px-4">
          <div className="p-8 md:p-12 bg-black rounded-[3rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
            <p className="text-white/70 italic text-xl md:text-2xl leading-relaxed relative z-10 font-medium">
              "Junto con el resto de clubes y academias, las instituciones y las demás acciones del Proyecto 675, situamos a nuestra ciudad como un referente del baloncesto internacional."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
