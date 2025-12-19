
import React from 'react';
import { Quote, Sparkles, Heart, Smile, Users, ShieldCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
  const unicajaLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556571195_Fundacion-Unicaja-2024-Logo_VP_Color_RGB_400x400.png?alt=media&token=d8125b63-8edd-4aa9-a595-f5f4be2d6bd5";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 py-1 px-4 bg-orange-100 text-orange-600 text-[10px] font-black tracking-[0.4em] uppercase rounded-full mb-8">
            <ShieldCheck size={14} /> EL ORIGEN
          </div>
          <h2 className="text-5xl md:text-7xl font-[900] mb-12 text-gray-900 leading-[0.95] tracking-tighter uppercase">
            ACADEMIA <br />
            <span className="text-orange-500 italic">675</span>
          </h2>
          
          <div className="space-y-8 text-gray-700 text-xl leading-relaxed font-medium">
            <p className="text-balance">
              <span className="font-black text-black">Berni Rodríguez</span>, jugador y capitán de Unicaja durante 13 temporadas y Campeón del Mundo con España, junto con su padre, <span className="font-black text-black">Bernardo Rodríguez García</span>, vinculado a las categorías inferiores de Unicaja Baloncesto Málaga durante décadas, han desarrollado el <span className="text-orange-600 font-bold">Sistema Metodológico 675</span>.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-100 pl-8 py-2">
              Un proyecto creado para complementar el baloncesto malagueño, que consiste en un <strong>Plan de Metodología innovador y diferencial</strong> en baloncesto para categorías <span className="text-black font-bold">Minibasket (2-12 años)</span> y <span className="text-black font-bold">Superbasket</span> (jugadores/as con diversidad funcional cognitiva, 6 años en adelante).
            </p>

            <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border-2 border-dashed border-gray-200 relative overflow-hidden my-12 group transition-all hover:bg-white hover:border-orange-200">
              <Quote className="absolute -top-6 -right-6 w-32 h-32 text-gray-100 group-hover:text-orange-50 transition-colors" />
              <p className="relative z-10 font-black text-gray-900 text-2xl md:text-3xl leading-tight tracking-tight">
                "Implementamos una filosofía que suponga una seña de identidad de Málaga, basada en una fusión entre el <span className="text-orange-500">estilo tradicional</span> y las <span className="text-orange-500">últimas innovaciones</span>."
              </p>
            </div>

            <p className="text-lg">
              Nuestro objetivo es situar a nuestra ciudad como un referente del baloncesto nacional e internacional, contribuyendo junto con el resto de clubes y academias a un estilo propio y exclusivo.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-16 lg:mt-0">
          <div className="absolute -inset-10 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-[4rem] blur-3xl"></div>
          <div className="relative bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-gray-200 border border-gray-100">
            <div className="flex flex-col items-center text-center mb-12">
               <div className="w-20 h-2 bg-orange-500 rounded-full mb-6"></div>
               <h4 className="text-2xl font-black uppercase tracking-widest text-black">PILARES DEL ÉXITO</h4>
            </div>

            <div className="space-y-14">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform group-hover:bg-orange-500">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-black text-2xl mb-2">Valores</h5>
                  <p className="text-gray-500 text-base leading-snug">Base fundamental sobre la que se cimentará el éxito deportivo y personal de nuestros jugadores/as.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/30 group-hover:scale-110 transition-transform group-hover:bg-black">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-black text-2xl mb-2 text-orange-600 group-hover:text-black transition-colors">Espíritu de Equipo</h5>
                  <p className="text-gray-500 text-base leading-snug">La fuerza del colectivo como motor de crecimiento individual.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform group-hover:bg-orange-500">
                  <Smile className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-black text-2xl mb-2">Diversión</h5>
                  <p className="text-gray-500 text-base leading-snug font-bold italic">
                    "La sonrisa de los jugadores/as será el principal indicador de la correcta evolución del Programa."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-10 border-t border-gray-100 text-center">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] mb-6">CON EL APOYO DE</p>
              <div className="p-4 bg-gray-50 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl transition-all cursor-default flex items-center justify-center overflow-hidden border border-transparent hover:border-gray-100">
                <img 
                  src={unicajaLogo} 
                  alt="Fundación Unicaja" 
                  className="h-20 w-auto object-contain transition-transform group-hover:scale-110 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
