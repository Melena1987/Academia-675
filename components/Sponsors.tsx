
import React from 'react';

const Sponsors: React.FC = () => {
  const unicajaLogo = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556571195_Fundacion-Unicaja-2024-Logo_VP_Color_RGB_400x400.png?alt=media&token=d8125b63-8edd-4aa9-a595-f5f4be2d6bd5";

  const partnerLogos = [
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_ausol-23_400x400.jpg?alt=media&token=0f8f2112-e794-4281-9cdb-33fa0e416642",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_Captura-de-pantalla-2016-01-28-a-las-19.00.55_400x400.jpg?alt=media&token=bd8e03c7-b3aa-45ce-a448-e7583b5216f8",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_images_400x400.png?alt=media&token=c965d757-3ae7-40c3-8bad-791af301cd2c",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_images-1_400x400.png?alt=media&token=e181dee2-9559-4618-85d1-70549412571c",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_Eit5fDxHGJzhvbjRPQ0T_400x400.jpg?alt=media&token=f030a1b3-a0ef-49eb-b95f-be653988748a",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_images-2_400x400.png?alt=media&token=adf7bbff-70d3-47de-97a3-45c1160379b0",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_logo-QUIRON-SALUD_400x400.webp?alt=media&token=4325e840-5ae1-46c1-aa4a-ff29698f224d",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_logo-pen_arroya_400x400.png?alt=media&token=e6f9a214-8893-4185-8e09-d3eaf266421c",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_logodark-blanco_400x400.png?alt=media&token=2d0f29d8-c8f8-4590-8abc-08e19ccc085a",
    "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1766739387262_mapfre_2_400x400.png?alt=media&token=a3078b11-cce6-4cef-b203-6d2201fc8d86"
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase mb-4">NUESTROS ALIADOS</h2>
          <p className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">IMPULSANDO EL <span className="text-orange-500 italic">FUTURO</span></p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Main Sponsor: Fundación Unicaja */}
        <div className="flex flex-col items-center mb-24">
          <div className="group relative w-full max-w-2xl">
             <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/10 to-orange-500/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
             <div className="relative px-12 md:px-24 py-12 bg-white rounded-[3rem] border border-gray-100 shadow-2xl flex flex-col items-center justify-center transition-all group-hover:translate-y-[-8px] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
                <img 
                  src={unicajaLogo} 
                  alt="Fundación Unicaja" 
                  className="h-32 md:h-48 w-auto object-contain mb-8 transition-transform duration-500"
                />
                <div className="flex items-center gap-6">
                  <div className="w-12 h-px bg-gray-200"></div>
                  <span className="text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase whitespace-nowrap">Patrocinador Principal</span>
                  <div className="w-12 h-px bg-gray-200"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Other Logos - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center">
           {partnerLogos.map((url, i) => {
             const isWhiteLogo = url.includes('logodark-blanco');
             return (
               <div key={i} className="h-32 md:h-40 flex items-center justify-center bg-white border border-gray-100 rounded-3xl p-6 transition-all shadow-sm hover:shadow-xl hover:border-orange-500/20 group overflow-hidden">
                  <img 
                    src={url} 
                    alt={`Patrocinador ${i + 1}`} 
                    className={`max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 
                      ${isWhiteLogo 
                        ? 'brightness-0 opacity-40 group-hover:opacity-100' 
                        : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                      }`}
                  />
               </div>
             );
           })}
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
