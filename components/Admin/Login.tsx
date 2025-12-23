
import React, { useState } from 'react';
import { ArrowLeft, Lock, Loader2, LogIn } from 'lucide-react';
import { auth } from '../../firebase.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface AdminLoginProps {
  onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error(err);
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 animate-in fade-in duration-500 bg-black">
      <div className="max-w-md w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 font-black text-xs uppercase tracking-[0.2em] mb-12 hover:text-orange-500 transition-all"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </button>

        <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-orange-500/20">
              <Lock size={32} />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter text-center">
              ACCESO <span className="text-orange-500">ADMIN</span>
            </h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">Área restringida</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-all text-white font-medium"
                placeholder="admin@academia675.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-orange-500 focus:outline-none transition-all text-white font-medium"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold p-4 rounded-xl text-center">
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-3 group ${
                loading ? 'bg-gray-700' : 'bg-orange-500 hover:bg-white hover:text-black'
              } text-white`}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  ENTRAR
                  <LogIn size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
