
import React from 'react';
import { Send, Target, Zap, Trophy, ArrowLeft } from 'lucide-react';

interface IndividualTechniqueProps {
  onBack: () => void;
}

const IndividualTechnique: React.FC<IndividualTechniqueProps> = ({ onBack }) => {
  return (
    <section id="tecnica-individual" className="pb-24 bg-black text-white relative overflow-hidden animate-in fade-in duration-700">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} /> Volver al inicio
          </button>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-[900] mb-6 tracking-tighter uppercase leading-none">
            TÉCNICA <br />
            <span className="text-orange-500 italic">INDIVIDUAL</span>
          </h2>
          <div className="inline-block py-2 px-6 bg-white/5 border border-white/10 rounded-full text-orange-400 font-bold tracking-[0.2em] text-sm">
            TEMPORADA 2025 / 2026
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content Area */}
          <div className="space-y-10">
            <div className="relative">
              <span className="absolute -left-4 top-0 w-1 h-12 bg-orange-500"></span>
              <p className="text-2xl md:text-4xl font-bold leading-tight">
                En el baloncesto actual las acciones individuales marcan la diferencia. <br />
                <span className="text-orange-500 font-black">¿Quieres ser diferencial?</span>
              </p>
            </div>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Si tienes entre <span className="text-white font-bold">11 y 18 años</span> y quieres dar ese salto de calidad, <span className="text-white font-bold">Berni Rodríguez, Alfonso Sánchez y Bernardo Rodríguez</span> te esperan para mejorar tus fundamentos en la pista.
              </p>
              
              <div className="grid gap-6 mt-12">
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-8 h-8 text-orange-500 shrink-0" />
                  <p className="text-sm">Sesiones innovadoras que te convertirán en un mejor jugador/a para tu equipo, el complemento ideal a tu club.</p>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Zap className="w-8 h-8 text-orange-500 shrink-0" />
                  <p className="text-sm">Nueva metodología donde maximizamos tu potencial individual bajo una dinámica de alto rendimiento.</p>
                </div>
                <div className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Trophy className="w-8 h-8 text-orange-500 shrink-0" />
                  <p className="text-sm">Un sistema en el que todos ganan: el jugador evoluciona y el club recibe un talento más pulido.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(249,115,22,0.15)] text-black relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center rotate-12 shadow-xl">
              <Zap className="text-white w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">SOLICITUD DE ACCESO</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Apellidos*</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" placeholder="Rodríguez..." required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nombre*</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" placeholder="Berni..." required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fecha de Nacimiento*</label>
                <input type="date" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" required />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email de contacto*</label>
                <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" placeholder="email@ejemplo.com" required />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Teléfono*</label>
                <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" placeholder="+34..." required />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Comentarios</label>
                <textarea rows={3} className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors resize-none" placeholder="Indica tu club actual o posición..."></textarea>
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-gray-200 text-orange-500 focus:ring-orange-500" required />
                  <span className="text-[10px] text-gray-400 font-bold uppercase leading-tight group-hover:text-gray-600 transition-colors">
                    Al enviar este formulario, acepto que la información ingresada se utilizará en el proceso de preinscripción de técnica individual.
                  </span>
                </label>
              </div>

              <button className="w-full bg-orange-500 hover:bg-black text-white py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group">
                ENVIAR SOLICITUD
                <Send size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTechnique;
