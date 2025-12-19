
import React from 'react';
import { Send, ArrowLeft } from 'lucide-react';

interface RegistrationFormProps {
  onBack: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onBack }) => {
  return (
    <div id="inscripcion" className="max-w-4xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest mb-10 hover:gap-4 transition-all"
      >
        <ArrowLeft size={16} /> Volver al inicio
      </button>

      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-black py-16 px-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-orange-500/10 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 relative z-10 uppercase tracking-tighter leading-none">
            Formulario de <br />
            <span className="text-orange-500">Preinscripción</span>
          </h2>
          <p className="text-white/50 font-bold uppercase tracking-widest text-xs relative z-10">Temporada 2025 / 2026</p>
        </div>

        <form className="p-8 md:p-16 grid md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Apellidos*</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Escribe tus apellidos"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Nombre*</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Fecha de Nacimiento*</label>
            <input 
              type="date" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email de contacto*</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="ejemplo@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Teléfono de contacto*</label>
            <input 
              type="tel" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="+34 000 000 000"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Club de procedencia</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Nombre del club"
            />
          </div>

          <div className="md:col-span-2 py-4 border-t border-gray-50 mt-4">
            <label className="flex items-center gap-4 group cursor-pointer">
              <input type="checkbox" className="w-6 h-6 rounded-lg border-2 border-gray-200 text-orange-500 focus:ring-orange-500" />
              <span className="text-gray-600 font-medium select-none group-hover:text-black transition-colors">
                El / La Jugador/a pertenece al grupo <span className="text-blue-600 font-black">Superbasket</span> (Diversidad Funcional)
              </span>
            </label>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Comentarios</label>
            <textarea 
              rows={4}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium resize-none"
              placeholder="Alguna información adicional..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start gap-4 cursor-pointer">
              <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-gray-200 text-orange-500 focus:ring-orange-500" required />
              <span className="text-xs text-gray-400 font-medium leading-relaxed">
                Al enviar este formulario, acepto que la información ingresada se utilizará exclusivamente en el proceso de preinscripción de la Academia 675 para la temporada 2025/2026.
              </span>
            </label>
          </div>

          <div className="md:col-span-2 mt-4">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group">
              ENVIAR PREINSCRIPCIÓN
              <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
