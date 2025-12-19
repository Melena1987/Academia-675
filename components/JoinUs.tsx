
import React from 'react';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';
import { ViewState } from '../App.tsx';

interface JoinUsProps {
  setView: (view: ViewState) => void;
}

const JoinUs: React.FC<JoinUsProps> = ({ setView }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#fcfcfc] to-transparent opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            ¿ESTÁS LISTO PARA <br />
            <span className="text-orange-500 italic">DAR EL PASO?</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg uppercase font-bold tracking-widest">
            Elige el programa que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Academia Card */}
          <div className="group relative bg-white rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl transition-all hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-colors"></div>
            
            <div className="flex flex-col h-full">
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase tracking-tighter">La Academia</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                Nuestra escuela base para categorías Minibasket y Superbasket. Formación integral, valores y mucha diversión.
              </p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => setView('registration')}
                  className="w-full flex items-center justify-between px-8 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-orange-500 transition-all group/btn"
                >
                  Preinscripción Academia
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Technique Card */}
          <div className="group relative bg-[#151515] border border-white/5 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl transition-all hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-colors"></div>
            
            <div className="flex flex-col h-full">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-500 mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Técnica Individual</h3>
              <p className="text-white/40 text-lg leading-relaxed mb-10 font-medium">
                Sesiones de perfeccionamiento de alto rendimiento para jugadores de 11 a 18 años. El complemento perfecto para tu club.
              </p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => setView('technique')}
                  className="w-full flex items-center justify-between px-8 py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all group/btn"
                >
                  Solicitar Plaza Técnica
                  <Target size={20} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
