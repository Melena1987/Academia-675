
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight, Heart, Lock } from 'lucide-react';
import { ViewState } from '../App.tsx';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556860263_academia_675_400x400.png?alt=media&token=7b0e7cfc-f84f-4f75-b031-3d28eb72f220";

  const handleLinkClick = (view: ViewState, hash?: string) => {
    setView(view);
    if (view === 'home' && hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl p-1.5 shadow-2xl">
                 <img src={logoUrl} alt="Academia 675" className="w-full h-full object-contain" />
              </div>
              <span className="text-4xl font-black text-white tracking-tighter uppercase">
                ACADEMIA <span className="text-orange-500 italic">675</span>
              </span>
            </div>
            <p className="text-white/40 text-xl max-w-md leading-relaxed font-medium">
              Un proyecto nacido de la pasión de Berni Rodríguez para situar a Málaga como el epicentro del baloncesto formativo mundial.
            </p>
            <div className="flex gap-5 mt-10">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-orange-500 mb-8 uppercase tracking-[0.3em] text-xs">NAVEGACIÓN</h4>
            <ul className="space-y-5 font-bold text-white/50 text-base">
              <li><button onClick={() => handleLinkClick('home', '#academia')} className="hover:text-white transition-colors flex items-center gap-2">La Academia <ArrowUpRight size={14} className="opacity-30" /></button></li>
              <li><button onClick={() => setView('technique')} className="hover:text-white transition-colors flex items-center gap-2">Técnica Individual <ArrowUpRight size={14} className="opacity-30" /></button></li>
              <li><button onClick={() => handleLinkClick('home', '#programas')} className="hover:text-white transition-colors flex items-center gap-2">Metodología 675 <ArrowUpRight size={14} className="opacity-30" /></button></li>
              <li><button onClick={() => setView('registration')} className="hover:text-white transition-colors flex items-center gap-2">Inscripciones <ArrowUpRight size={14} className="opacity-30" /></button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-orange-500 mb-8 uppercase tracking-[0.3em] text-xs">DIRECTO</h4>
            <address className="not-italic space-y-5 text-white/50 font-bold text-base">
              <p className="flex flex-col">
                <span className="text-white/20 text-[10px] uppercase mb-1">Sede Central</span>
                Málaga, España
              </p>
              <p className="flex flex-col">
                <span className="text-white/20 text-[10px] uppercase mb-1">Email Oficial</span>
                <a href="mailto:info@academia675.com" className="hover:text-white transition-colors">info@academia675.com</a>
              </p>
              <p className="flex flex-col">
                <span className="text-white/20 text-[10px] uppercase mb-1">Teléfono</span>
                <a href="tel:+34623047953" className="hover:text-white transition-colors">+34 623 047 953</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar Adjusted for Mobile - Single Legal Button */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-10 text-white/20 font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left w-full md:w-auto order-2 md:order-1">
            <div className="flex items-center gap-2">
              <p className="text-[9px] md:text-[10px]">© {new Date().getFullYear()} ACADEMIA 675 MALAGA. ALL RIGHTS RESERVED.</p>
              <button onClick={() => setView('admin_login')} className="text-white/5 hover:text-white/20 transition-colors">
                <Lock size={8} />
              </button>
            </div>
            <p className="flex items-center gap-1.5 text-[9px] md:text-[10px] transition-colors">
              Web hecha con <Heart size={10} className="fill-orange-500 text-orange-500 inline" /> por 
              <a href="https://www.melenamarketing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors text-white/40">
                Melena Marketing
              </a>
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end w-full md:w-auto order-1 md:order-2">
             <button 
               onClick={() => setView('legal')} 
               className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all text-[9px] md:text-[10px] text-white/40 hover:text-white whitespace-nowrap"
             >
               AVISO LEGAL, PRIVACIDAD Y COOKIES
               <ArrowUpRight size={12} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
