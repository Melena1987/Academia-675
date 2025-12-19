
import React, { useState } from 'react';
import { ChevronDown, Calendar, Clock, Shirt, CreditCard } from 'lucide-react';

const AcademiaInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const sections = [
    {
      title: "Plazos de la Academia",
      icon: <Calendar className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <p className="text-xs font-black text-orange-600 uppercase mb-1">Inicio Escuela</p>
              <p className="text-xl font-bold text-gray-900">1 de Septiembre, 2025</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs font-black text-gray-400 uppercase mb-1">Fin Escuela</p>
              <p className="text-xl font-bold text-gray-900">19 de Junio, 2026</p>
            </div>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl shadow-xl">
            <h5 className="font-black text-orange-500 mb-2 uppercase tracking-widest text-sm">Preinscripción</h5>
            <p className="text-lg">Comienza el <span className="font-black">1 DE MAYO DE 2025</span> para todos los jugadores/as.</p>
            <p className="mt-2 text-white/60 text-sm italic">* Las plazas se asignarán por orden de llegada. Confirmación vía email.</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            El período de actividad en las instalaciones de <strong>El Oasis by Fundación Unicaja (Churriana)</strong> coincide con la temporada de competición. Entrenamientos mantenidos durante Navidad, Semana Blanca y Semana Santa.
          </p>
        </div>
      )
    },
    {
      title: "Categorías y Sesiones",
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div className="grid gap-4">
          {[
            { name: "Pequebasket", age: "2-6 años", sessions: "2 sesiones por semana" },
            { name: "Babybasket", age: "7-8 años", sessions: "2 sesiones por semana" },
            { name: "Preminibasket", age: "9-10 años", sessions: "3 sesiones + partido" },
            { name: "Minibasket", age: "11-12 años", sessions: "3 sesiones + partido" },
            { name: "Infantil", age: "13-14 años", sessions: "3 sesiones + partido" },
            { name: "Superbasket", age: "6-18 años", sessions: "2 sesiones por semana" }
          ].map((cat, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-orange-500/30 transition-all shadow-sm group">
              <div>
                <span className="text-orange-500 font-black text-lg block">{cat.name}</span>
                <span className="text-gray-400 text-xs font-bold uppercase">{cat.age}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-900 font-bold text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">{cat.sessions}</span>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Equipamiento",
      icon: <Shirt className="w-6 h-6" />,
      content: (
        <div className="text-center py-8">
          <Shirt className="w-16 h-16 text-orange-500 mx-auto mb-6 opacity-20" />
          <p className="text-gray-700 font-medium leading-relaxed">
            La organización y uniformidad tienen una especial relevancia en el Programa de la Academia 675. 
            Reforzamos el sentimiento de equipo y unidad para la consecución de los objetivos deportivos y personales.
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest">
            Pack Oficial Obligatorio
          </div>
        </div>
      )
    },
    {
      title: "Cuotas y Matrícula",
      icon: <CreditCard className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl shadow-lg flex justify-between items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Matrícula Obligatoria</p>
              <h4 className="text-3xl font-black">35€ <span className="text-lg font-normal opacity-60">/ jugador</span></h4>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <CreditCard />
            </div>
          </div>
          
          <div className="space-y-3">
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-700">Pequebasket / Superbasket</span>
                <span className="text-xl font-black text-gray-900">30€/mes</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-700">Babybasket</span>
                <span className="text-xl font-black text-gray-900">35€/mes</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-700 text-sm">Preminibasket / Minibasket / Infantil</span>
                <span className="text-xl font-black text-gray-900">40€/mes</span>
             </div>
          </div>
        </div>
      )
    }
  ];

  const handleToggle = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  return (
    <div id="info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Detalles de la Academia</h2>
        <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Accordion List for both Desktop and Mobile */}
        <div className="lg:col-span-5 space-y-4">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <button
                onClick={() => handleToggle(idx)}
                className={`w-full flex items-center justify-between p-6 rounded-3xl transition-all text-left ${
                  activeTab === idx 
                  ? 'bg-black text-white shadow-2xl scale-[1.02]' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${activeTab === idx ? 'text-orange-500' : 'text-gray-300'}`}>
                    {section.icon}
                  </div>
                  <span className="font-black text-lg tracking-tight">{section.title}</span>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${activeTab === idx ? 'rotate-180 text-orange-500' : ''}`} />
              </button>

              {/* Mobile Inline Content: Visible only when active and on mobile/tablet */}
              {activeTab === idx && (
                <div className="lg:hidden mt-4 bg-white p-6 rounded-[2rem] shadow-xl border border-gray-50 animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                    {sections[idx].title}
                  </h3>
                  {sections[idx].content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Content Panel: Visible only on large screens */}
        <div className="hidden lg:block lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-50 relative overflow-hidden min-h-[500px]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10">
              {activeTab !== null ? (
                <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
                    {sections[activeTab].title}
                  </h3>
                  {sections[activeTab].content}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-300 pt-20">
                  <Clock size={64} className="mb-4 opacity-20" />
                  <p className="text-xl font-black uppercase tracking-widest">Selecciona una sección</p>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AcademiaInfo;
