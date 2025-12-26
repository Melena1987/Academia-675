
import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase.ts';
// Fix: Import types separately and ensure individual functions are exported from modular paths
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  deleteDoc, 
  updateDoc 
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { 
  Users, 
  Zap, 
  LogOut, 
  Download, 
  Calendar, 
  Phone, 
  Mail, 
  MessageSquare,
  Trophy,
  Loader2,
  AlertCircle,
  Trash2,
  Edit2,
  X,
  Check
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'academia' | 'tecnica'>('academia');
  const [registrations, setRegistrations] = useState<DocumentData[]>([]);
  const [techniqueRequests, setTechniqueRequests] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // States for editing
  const [editingItem, setEditingItem] = useState<DocumentData | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const qAcademia = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
    const qTecnica = query(collection(db, 'technique_requests'), orderBy('createdAt', 'desc'));

    let academiaLoaded = false;
    let tecnicaLoaded = false;

    const checkLoaded = () => {
      if (academiaLoaded && tecnicaLoaded) {
        setLoading(false);
      }
    };

    const unsubAcademia = onSnapshot(qAcademia, 
      (snapshot) => {
        setRegistrations(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        academiaLoaded = true;
        checkLoaded();
      },
      (err) => {
        console.error("Error cargando academia:", err);
        setError("Error al conectar con la base de datos de inscripciones.");
        setLoading(false);
      }
    );

    const unsubTecnica = onSnapshot(qTecnica, 
      (snapshot) => {
        setTechniqueRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        tecnicaLoaded = true;
        checkLoaded();
      },
      (err) => {
        console.error("Error cargando técnica:", err);
        setError("Error al conectar con la base de datos de técnica individual.");
        setLoading(false);
      }
    );

    return () => {
      unsubAcademia();
      unsubTecnica();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este registro? Esta acción no se puede deshacer.")) return;
    
    setActionLoading(true);
    const collectionName = activeTab === 'academia' ? 'registrations' : 'technique_requests';
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (err) {
      console.error("Error eliminando documento:", err);
      alert("Error al eliminar el registro.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setActionLoading(true);
    const collectionName = activeTab === 'academia' ? 'registrations' : 'technique_requests';
    try {
      const { id, ...data } = editingItem;
      await updateDoc(doc(db, collectionName, id), data);
      setEditingItem(null);
    } catch (err) {
      console.error("Error actualizando documento:", err);
      alert("Error al actualizar el registro.");
    } finally {
      setActionLoading(false);
    }
  };

  const currentData = activeTab === 'academia' ? registrations : techniqueRequests;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 text-white">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        <p className="text-white/40 font-black uppercase tracking-widest text-xs">Sincronizando base de datos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white animate-in fade-in duration-500">
      {/* Sidebar / Header */}
      <nav className="bg-black border-b border-white/5 px-6 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-white rounded-xl p-1">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1762556860263_academia_675_400x400.png?alt=media&token=7b0e7cfc-f84f-4f75-b031-3d28eb72f220" 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <h1 className="text-xl font-black uppercase tracking-tighter">ADMIN <span className="text-orange-500 italic">675</span></h1>
            <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Panel de Control</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-red-500/20 text-white/60 hover:text-red-500 border border-white/10 rounded-xl transition-all font-black text-xs uppercase tracking-widest"
          >
            Cerrar Sesión <LogOut size={16} />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {error && (
          <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center gap-4 text-red-500">
            <AlertCircle className="shrink-0" />
            <p className="font-bold">{error}</p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Users size={64} />
            </div>
            <p className="text-white/40 font-black text-[10px] uppercase tracking-widest mb-2">Total Academia</p>
            <h4 className="text-5xl font-black">{registrations.length}</h4>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform text-orange-500">
              <Zap size={64} />
            </div>
            <p className="text-white/40 font-black text-[10px] uppercase tracking-widest mb-2">Total Técnica</p>
            <h4 className="text-5xl font-black">{techniqueRequests.length}</h4>
          </div>
          <div className="bg-orange-500 p-8 rounded-[2rem] relative overflow-hidden group text-white shadow-2xl shadow-orange-500/20">
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <Trophy size={64} />
            </div>
            <p className="text-white/60 font-black text-[10px] uppercase tracking-widest mb-2">Total Solicitudes</p>
            <h4 className="text-5xl font-black">{registrations.length + techniqueRequests.length}</h4>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 mb-8 max-w-md">
          <button 
            onClick={() => setActiveTab('academia')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${activeTab === 'academia' ? 'bg-orange-500 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
          >
            <Users size={16} /> ACADEMIA
          </button>
          <button 
            onClick={() => setActiveTab('tecnica')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${activeTab === 'tecnica' ? 'bg-orange-500 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
          >
            <Zap size={16} /> TÉCNICA
          </button>
        </div>

        {/* List Content */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <h3 className="text-2xl font-black uppercase tracking-tighter">
              {activeTab === 'academia' ? 'Registros Academia' : 'Solicitudes Técnica Individual'}
            </h3>
            <div className="flex gap-4">
               <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-black text-xs tracking-widest transition-all">
                  Exportar CSV <Download size={16} />
               </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-black uppercase tracking-widest text-white/30">
                  <th className="px-8 py-6">Fecha</th>
                  <th className="px-8 py-6">Jugador/a</th>
                  <th className="px-8 py-6">Contacto</th>
                  <th className="px-8 py-6">Detalles</th>
                  <th className="px-8 py-6">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center text-white/20 font-bold uppercase tracking-widest">
                      {loading ? 'Cargando datos...' : 'No hay registros todavía'}
                    </td>
                  </tr>
                ) : (
                  currentData.map((item) => (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center gap-3 text-white/40">
                          <Calendar size={14} />
                          <span className="font-medium">
                            {item.createdAt?.toDate ? item.createdAt.toDate().toLocaleDateString('es-ES') : 'Pendiente'}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-black text-lg text-white group-hover:text-orange-500 transition-colors uppercase leading-tight">
                            {item.apellidos}, {item.nombre}
                          </span>
                          <span className="text-xs text-white/40 font-bold">Nac: {item.fechaNacimiento}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1">
                          <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-white/60 hover:text-orange-500 text-sm transition-colors">
                            <Mail size={12} /> {item.email}
                          </a>
                          <a href={`tel:${item.telefono}`} className="flex items-center gap-2 text-white/60 hover:text-orange-500 text-sm transition-colors">
                            <Phone size={12} /> {item.telefono}
                          </a>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1">
                          {activeTab === 'academia' && (
                            <>
                              <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md inline-block w-fit">
                                Club: {item.club || 'Ninguno'}
                              </span>
                              {item.isSuperbasket && (
                                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md inline-block w-fit">
                                  SUPERBASKET
                                </span>
                              )}
                            </>
                          )}
                          {activeTab === 'tecnica' && (
                            <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md inline-block w-fit">
                              Técnica Individual
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           <button 
                             onClick={() => setEditingItem(item)}
                             className="p-3 bg-white/5 hover:bg-orange-500 hover:text-white rounded-xl border border-white/10 transition-all text-white/40"
                             title="Editar"
                           >
                             <Edit2 size={16} />
                           </button>
                           <button 
                             onClick={() => handleDelete(item.id)}
                             disabled={actionLoading}
                             className="p-3 bg-white/5 hover:bg-red-500 hover:text-white rounded-xl border border-white/10 transition-all text-white/40 disabled:opacity-50"
                             title="Eliminar"
                           >
                             <Trash2 size={16} />
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal Overlay */}
      {editingItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#111] border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl">
             <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <Edit2 className="text-orange-500" size={20} /> Editar Registro
                </h3>
                <button 
                  onClick={() => setEditingItem(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
             </div>
             
             <form onSubmit={handleUpdate} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Nombre</label>
                      <input 
                        type="text" 
                        value={editingItem.nombre}
                        onChange={(e) => setEditingItem({...editingItem, nombre: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Apellidos</label>
                      <input 
                        type="text" 
                        value={editingItem.apellidos}
                        onChange={(e) => setEditingItem({...editingItem, apellidos: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Email</label>
                      <input 
                        type="email" 
                        value={editingItem.email}
                        onChange={(e) => setEditingItem({...editingItem, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Teléfono</label>
                      <input 
                        type="text" 
                        value={editingItem.telefono}
                        onChange={(e) => setEditingItem({...editingItem, telefono: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                      />
                   </div>
                   {activeTab === 'academia' && (
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Club</label>
                        <input 
                          type="text" 
                          value={editingItem.club || ''}
                          onChange={(e) => setEditingItem({...editingItem, club: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                        />
                     </div>
                   )}
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Fecha Nacimiento</label>
                      <input 
                        type="date" 
                        value={editingItem.fechaNacimiento}
                        onChange={(e) => setEditingItem({...editingItem, fechaNacimiento: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Comentarios</label>
                   <textarea 
                     value={editingItem.comentarios || ''}
                     onChange={(e) => setEditingItem({...editingItem, comentarios: e.target.value})}
                     rows={3}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-white font-medium resize-none"
                   ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                   <button 
                     type="button"
                     onClick={() => setEditingItem(null)}
                     className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest transition-all"
                   >
                     Cancelar
                   </button>
                   <button 
                     type="submit"
                     disabled={actionLoading}
                     className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                   >
                     {actionLoading ? <Loader2 className="animate-spin" size={16} /> : <><Check size={16} /> Guardar Cambios</>}
                   </button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
