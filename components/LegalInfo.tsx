
import React from 'react';
import { ArrowLeft, Shield, Cookie, FileText } from 'lucide-react';

interface LegalInfoProps {
  onBack: () => void;
}

const LegalInfo: React.FC<LegalInfoProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </button>

        <div className="space-y-20">
          {/* PRIVACY POLICY */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-black tracking-tighter uppercase">Política de <span className="text-orange-500">Privacidad</span></h1>
            </div>

            <div className="prose prose-orange max-w-none text-gray-600 leading-relaxed space-y-6">
              <p className="font-medium bg-gray-50 p-6 rounded-2xl border-l-4 border-black italic">
                Club Deportivo Baloncesto 675, en cumplimiento de lo previsto en el Reglamento (UE) 2016/679 (RGPD) y la normativa nacional vigente, informa sobre el tratamiento de datos de carácter personal a través de este sitio Web.
              </p>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-500" /> Identificación del Responsable
                </h3>
                <ul className="space-y-2 ml-4">
                  <li><strong>Titular:</strong> Club Deportivo Baloncesto 675 (CDB67)</li>
                  <li><strong>CIF:</strong> G-93662823</li>
                  <li><strong>Domicilio:</strong> Calle Toquero, número 2, planta 4, puerta E, Málaga</li>
                  <li><strong>Email:</strong> info@proyecto675.com</li>
                  <li><strong>Sitio Web:</strong> www.proyecto675.es</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Finalidad y Naturaleza de los Datos</h3>
                <p>Tratamos los datos recabados a través del formulario de "Contacto" exclusivamente para atender las peticiones de información. La información se limita a datos identificativos (nombre, email, teléfono) y la propia consulta planteada.</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Veracidad de la Información</h3>
                <p>El Usuario garantiza que toda la información facilitada es veraz y exacta, siendo el único responsable de cualquier perjuicio causado por manifestaciones falsas o inexactas.</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Base Legal y Conservación</h3>
                <p>La legitimación se basa en el consentimiento del Usuario al completar los formularios. Los datos se conservarán de forma indefinida hasta que el interesado manifieste su oposición.</p>
              </div>

              <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                <h3 className="text-xl font-black text-orange-600 mb-4 uppercase">Ejercicio de Derechos</h3>
                <p className="mb-4">El Usuario tiene derecho a acceder, rectificar, suprimir, limitar u oponerse al tratamiento de sus datos, así como a la portabilidad de los mismos. Puede ejercer estos derechos mediante:</p>
                <ul className="space-y-2 ml-4 font-bold text-gray-800">
                  <li>Email: info@proyecto675.com</li>
                  <li>Correo postal: Calle Toquero, número 2, planta 4, puerta E, Málaga</li>
                  <li>Formulario de contacto en la web</li>
                </ul>
                <p className="mt-4 text-sm opacity-70">También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Seguridad y Redes Sociales</h3>
                <p>CDB67 utiliza tecnologías actuales para proteger la información de ataques habituales y garantiza la seguridad técnica y organizativa. En redes sociales, CDB67 es responsable de sus perfiles pero no extraerá datos personales sin consentimiento expreso.</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* COOKIES POLICY */}
          <section id="cookies">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black tracking-tighter uppercase">Uso de <span className="text-orange-500">Cookies</span></h2>
            </div>

            <div className="prose prose-orange max-w-none text-gray-600 leading-relaxed space-y-6">
              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">¿Qué son las cookies?</h3>
                <p>Las cookies son pequeños archivos de texto que se descargan en su dispositivo al visitar una web. Permiten reconocer el dispositivo del usuario, recordar preferencias y mejorar la navegación general.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-black text-black mb-2 uppercase text-sm">Cookies Propias</h4>
                  <p className="text-sm">Gestionadas directamente por nuestro sitio web para el funcionamiento básico.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-black text-black mb-2 uppercase text-sm">Cookies de Terceros</h4>
                  <p className="text-sm">Instaladas por servicios externos (Google, HubSpot, etc.) para analítica y marketing.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-black mb-4 uppercase">Cookies utilizadas en este sitio</h3>
                <p>Este sitio web utiliza cookies no necesarias para la navegación, principalmente de terceros:</p>
                <ul className="space-y-4 ml-4">
                  <li className="flex flex-col">
                    <strong className="text-black">Google Analytics (Google Inc.):</strong>
                    <span>Información anónima sobre visitas para evaluaciones estadísticas y optimización del rendimiento.</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-black">HubSpot & Yandex.Metrics:</strong>
                    <span>Herramientas de análisis de comportamiento y gestión de relación con el usuario.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black text-white p-10 rounded-[3rem] shadow-xl">
                <h3 className="text-xl font-black text-orange-500 mb-6 uppercase">¿Cómo gestionar las cookies?</h3>
                <p className="mb-6 opacity-80">Usted puede decidir libremente sobre la implantación de cookies a través de la configuración de su navegador. El rechazo de cookies puede limitar algunas funciones de la web.</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[10px] font-black tracking-widest">
                  <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" className="bg-white/10 p-3 rounded-lg text-center hover:bg-orange-500 transition-colors">CHROME</a>
                  <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" className="bg-white/10 p-3 rounded-lg text-center hover:bg-orange-500 transition-colors">FIREFOX</a>
                  <a href="https://support.apple.com/kb/HT1677?viewlocale=es_ES" target="_blank" className="bg-white/10 p-3 rounded-lg text-center hover:bg-orange-500 transition-colors">SAFARI</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-xs font-black text-gray-300 uppercase tracking-[0.4em]">Última actualización: Mayo 2024</p>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
