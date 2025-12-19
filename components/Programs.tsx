
import React from 'react';
import { Sparkles, Accessibility } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Nuestros Programas</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Metodología adaptada a todas las realidades, con un enfoque inclusivo y vanguardista.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-gray-200 transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="text-orange-500 w-10 h-10 opacity-20" />
          </div>
          <div className="p-12">
            <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="text-2xl font-black">MINI</span>
            </div>
            <h3 className="text-4xl font-black mb-4 group-hover:text-orange-500 transition-colors">Minibasket</h3>
            <p className="text-orange-500 font-bold mb-6">De 2 a 12 años</p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Iniciación y perfeccionamiento a través del juego y la técnica, construyendo una base sólida de fundamentos.
            </p>
            <ul className="space-y-3 mb-10 text-gray-500">
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Formación Técnica</li>
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Desarrollo Motriz</li>
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Competición Sana</li>
            </ul>
            <button className="w-full py-4 bg-black text-white rounded-2xl font-black hover:bg-orange-500 transition-colors">
              SABER MÁS
            </button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-gray-200 transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0 p-8">
            <Accessibility className="text-blue-500 w-10 h-10 opacity-20" />
          </div>
          <div className="p-12">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-8">
               <span className="text-2xl font-black">SUPER</span>
            </div>
            <h3 className="text-4xl font-black mb-4 group-hover:text-blue-600 transition-colors">Superbasket</h3>
            <p className="text-blue-500 font-bold mb-6">Diversidad Funcional Cognitiva</p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Baloncesto adaptado para jugadores/as a partir de los 6 años, enfocándonos en la inclusión y el bienestar.
            </p>
            <ul className="space-y-3 mb-10 text-gray-500">
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Atención Personalizada</li>
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Integración Social</li>
              <li className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Apoyo Terapéutico</li>
            </ul>
            <button className="w-full py-4 bg-black text-white rounded-2xl font-black hover:bg-blue-600 transition-colors">
              SABER MÁS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
