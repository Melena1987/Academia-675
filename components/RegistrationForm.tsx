
import React, { useState } from 'react';
import { Send, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { db } from '../firebase.ts';
import emailjs from '@emailjs/browser';
// Fix: Import individual functions from firebase/firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface RegistrationFormProps {
  onBack: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    apellidos: '',
    nombre: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    club: '',
    isSuperbasket: false,
    comentarios: '',
    acceptedTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedTerms) return;

    setLoading(true);
    try {
      // 1. Guardar en Firebase
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        createdAt: serverTimestamp(),
        type: 'academia'
      });

      // 2. Enviar email vía EmailJS
      try {
        const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID;
        const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          await emailjs.send(
            serviceId,
            templateId,
            {
              titulo_formulario: "Preinscripción Academia",
              nombre: formData.nombre,
              apellidos: formData.apellidos,
              email: formData.email,
              telefono: formData.telefono,
              fecha_nacimiento: formData.fechaNacimiento,
              club: formData.club || "-",
              extra_info: formData.isSuperbasket ? "Sí, Grupo Superbasket" : "No",
              comentarios: formData.comentarios || "Sin comentarios"
            },
            publicKey
          );
        }
      } catch (emailError) {
        console.error("Error al enviar email via EmailJS:", emailError);
        // No interrumpimos el éxito visual ya que los datos están en Firebase
      }

      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error al enviar preinscripción:", error);
      alert("Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.");
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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-in zoom-in duration-500">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-gray-100 flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">¡SOLICITUD RECIBIDA!</h2>
          <p className="text-gray-500 text-xl max-w-lg mb-12 font-medium">
            Hemos registrado tu preinscripción correctamente. Nos pondremos en contacto contigo a través del email facilitado muy pronto.
          </p>
          <button 
            onClick={onBack}
            className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-orange-500 transition-all transform hover:scale-105"
          >
            VOLVER AL INICIO
          </button>
        </div>
      </div>
    );
  }

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

        <form className="p-8 md:p-16 grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Apellidos*</label>
            <input 
              name="apellidos"
              type="text" 
              value={formData.apellidos}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Escribe tus apellidos"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Nombre*</label>
            <input 
              name="nombre"
              type="text" 
              value={formData.nombre}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Fecha de Nacimiento*</label>
            <input 
              name="fechaNacimiento"
              type="date" 
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email de contacto*</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="ejemplo@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Teléfono de contacto*</label>
            <input 
              name="telefono"
              type="tel" 
              value={formData.telefono}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="+34 000 000 000"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Club de procedencia</label>
            <input 
              name="club"
              type="text" 
              value={formData.club}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium"
              placeholder="Nombre del club"
            />
          </div>

          <div className="md:col-span-2 py-4 border-t border-gray-50 mt-4">
            <label className="flex items-center gap-4 group cursor-pointer">
              <input 
                name="isSuperbasket"
                type="checkbox" 
                checked={formData.isSuperbasket}
                onChange={handleChange}
                className="w-6 h-6 rounded-lg border-2 border-gray-200 text-orange-500 focus:ring-orange-500" 
              />
              <span className="text-gray-600 font-medium select-none group-hover:text-black transition-colors">
                El / La Jugador/a pertenece al grupo <span className="text-blue-600 font-black">Superbasket</span> (Diversidad Funcional)
              </span>
            </label>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Comentarios</label>
            <textarea 
              name="comentarios"
              rows={4}
              value={formData.comentarios}
              onChange={handleChange}
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium resize-none"
              placeholder="Alguna información adicional..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="flex items-start gap-4 cursor-pointer">
              <input 
                name="acceptedTerms"
                type="checkbox" 
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-200 text-orange-500 focus:ring-orange-500" 
                required 
              />
              <span className="text-xs text-gray-400 font-medium leading-relaxed">
                Al enviar este formulario, acepto que la información ingresada se utilizará exclusivamente en el proceso de preinscripción de la Academia 675 para la temporada 2025/2026.
              </span>
            </label>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit"
              disabled={loading || !formData.acceptedTerms}
              className={`w-full py-6 rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3 group ${
                loading ? 'bg-gray-400 cursor-wait' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'
              } text-white`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  ENVIANDO...
                </>
              ) : (
                <>
                  ENVIAR PREINSCRIPCIÓN
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;