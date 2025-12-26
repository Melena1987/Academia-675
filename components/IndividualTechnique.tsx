
import React, { useState } from 'react';
import { Send, Target, Zap, Trophy, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { db } from '../firebase.ts';
// Fix: Import individual functions from firebase/firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface IndividualTechniqueProps {
  onBack: () => void;
}

const IndividualTechnique: React.FC<IndividualTechniqueProps> = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    apellidos: '',
    nombre: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    comentarios: '',
    acceptedTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'technique_requests'), {
        ...formData,
        createdAt: serverTimestamp(),
        type: 'tecnica_individual'
      });
      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error al enviar solicitud técnica:", error);
      alert("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  if (success) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center animate-in zoom-in duration-500 min-h-screen">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 flex flex-col items-center">
          <div className="w-24 h-24 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-[900] text-white mb-6 uppercase tracking-tighter">¡SOLICITUD DE TÉCNICA RECIBIDA!</h2>
          <p className="text-white/50 text-xl max-w-lg mb-12 font-medium">
            Tus datos han sido registrados. Berni y el equipo técnico revisarán tu solicitud para la temporada 2025/2026.
          </p>
          <button 
            onClick={onBack}
            className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            VOLVER AL INICIO
          </button>
        </div>
      </div>
    );
  }

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
                Si tienes entre <span className="text-white font-bold">11 y 18 años</span> y quieres dar ese salto de calidad, <span className="text-white font-bold">Berni Rodríguez y Alfonso Sánchez</span> te esperan para mejorar tus fundamentos en la pista.
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
                  <p className="text-sm">Un sistema en el que todos ganan: el jugador evolucuna y el club recibe un talento más pulido.</p>
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Apellidos*</label>
                  <input 
                    name="apellidos"
                    type="text" 
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" 
                    placeholder="Rodríguez..." 
                    required 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nombre*</label>
                  <input 
                    name="nombre"
                    type="text" 
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" 
                    placeholder="Berni..." 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fecha de Nacimiento*</label>
                <input 
                  name="fechaNacimiento"
                  type="date" 
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email de contacto*</label>
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" 
                  placeholder="email@ejemplo.com" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Teléfono*</label>
                <input 
                  name="telefono"
                  type="tel" 
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors" 
                  placeholder="+34..." 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Comentarios</label>
                <textarea 
                  name="comentarios"
                  rows={3} 
                  value={formData.comentarios}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border-b-2 border-gray-100 px-0 py-3 focus:border-orange-500 focus:outline-none font-bold transition-colors resize-none" 
                  placeholder="Indica tu club actual o posición..."
                ></textarea>
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    name="acceptedTerms"
                    type="checkbox" 
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-200 text-orange-500 focus:ring-orange-500" 
                    required 
                  />
                  <span className="text-[10px] text-gray-400 font-bold uppercase leading-tight group-hover:text-gray-600 transition-colors">
                    Al enviar este formulario, acepto que la información ingresada se utilizará en el proceso de preinscripción de técnica individual.
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                disabled={loading || !formData.acceptedTerms}
                className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3 group ${
                  loading ? 'bg-gray-400 cursor-wait' : 'bg-orange-500 hover:bg-black shadow-orange-500/20'
                } text-white`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    ENVIANDO SOLICITUD...
                  </>
                ) : (
                  <>
                    ENVIAR SOLICITUD
                    <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualTechnique;
