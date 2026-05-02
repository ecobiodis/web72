import { useState, useEffect } from 'react';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signOut,
  collection,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  OperationType,
  handleFirestoreError
} from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { 
  LogOut, 
  Plus, 
  Trash2, 
  Save, 
  ExternalLink, 
  LayoutDashboard,
  X,
  Lock,
  Globe,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
  order: number;
}

export const Dashboard = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [user, setUser] = useState<User | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setIsAdmin(u.email === 'ecobiodis@gmail.com');
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as PortfolioItem[];
        setPortfolio(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'portfolio');
      }
    );
    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const addItem = async () => {
    try {
      await addDoc(collection(db, 'portfolio'), {
        title: 'Nouveau Projet',
        category: 'Catégorie',
        url: 'https://',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        order: portfolio.length
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'portfolio');
    }
  };

  const updateItem = async (id: string, updates: Partial<PortfolioItem>) => {
    try {
      await updateDoc(doc(db, 'portfolio', id), updates);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `portfolio/${id}`);
    }
  };

  const deleteItem = async (id: string) => {
    if (!window.confirm("Supprimer ce projet ?")) return;
    try {
      await deleteDoc(doc(db, 'portfolio', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `portfolio/${id}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
              <LayoutDashboard size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Dashboard Client</h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Gérez votre contenu web</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
            </div>
          ) : !user ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Lock size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Accès Réservé</h3>
              <p className="text-slate-500 mb-8 font-medium italic">Connectez-vous pour gérer votre site.</p>
              <button 
                onClick={handleLogin}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl flex items-center gap-3 mx-auto"
              >
                Se connecter avec Google
              </button>
            </div>
          ) : !isAdmin ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Lock size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Accès Refusé</h3>
              <p className="text-slate-500 mb-8 font-medium">Vous n'avez pas les droits d'administration pour ce site.</p>
              <button onClick={handleLogout} className="text-red-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 mx-auto">
                <LogOut size={16} /> Déconnexion
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Profile Bar */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <img src={user.photoURL || ''} alt="" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-tight">{user.displayName}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-all"
                  title="Déconnexion"
                >
                  <LogOut size={20} />
                </button>
              </div>

              {/* Portfolio Management */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Globe size={18} className="text-brand-500" />
                    <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm">Portfolio Réalisations</h3>
                  </div>
                  <button 
                    onClick={addItem}
                    className="bg-brand-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-700 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Plus size={14} /> Ajouter
                  </button>
                </div>

                <div className="grid gap-4">
                  {portfolio.map((item) => (
                    <div key={item.id} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="col-span-1">
                          <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-xl" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <input 
                            type="text" 
                            value={item.title}
                            onChange={(e) => updateItem(item.id, { title: e.target.value })}
                            className="w-full font-black text-slate-900 uppercase tracking-tight text-sm bg-transparent border-b border-transparent focus:border-brand-500 outline-none"
                            placeholder="Titre du projet"
                          />
                          <input 
                            type="text" 
                            value={item.category}
                            onChange={(e) => updateItem(item.id, { category: e.target.value })}
                            className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest bg-transparent border-b border-transparent focus:border-brand-500 outline-none"
                            placeholder="Catégorie"
                          />
                          <input 
                            type="text" 
                            value={item.url}
                            onChange={(e) => updateItem(item.id, { url: e.target.value })}
                            className="w-full text-[10px] text-slate-400 bg-transparent border-b border-transparent focus:border-brand-500 outline-none"
                            placeholder="URL Vercel"
                          />
                        </div>
                        <div className="col-span-1 flex items-center justify-end gap-2">
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-100 text-slate-400 rounded-lg">
                            <ExternalLink size={18} />
                          </a>
                          <button 
                            onClick={() => deleteItem(item.id)}
                            className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {portfolio.length === 0 && (
                    <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-2xl">
                      <p className="text-slate-400 font-bold italic text-sm">Aucun projet dans le portfolio.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Maintenance / Settings */}
              <div className="p-6 bg-slate-900 rounded-3xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Settings size={20} className="text-brand-500" />
                  <h3 className="font-black uppercase tracking-widest text-sm">Paramètres Avancés</h3>
                </div>
                <p className="text-xs text-slate-400 font-medium mb-6">Ces réglages affectent directement la structure technique de votre site.</p>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 opacity-50 cursor-not-allowed">
                    <span className="text-[10px] font-black uppercase tracking-widest">Hébergement Vercel</span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Connecté
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 opacity-50 cursor-not-allowed">
                    <span className="text-[10px] font-black uppercase tracking-widest">Indexation Google Search Console</span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div> Actif
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 text-center bg-white">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">WEB48H Dashboard v1.0 • Sécurisé par Firebase</p>
        </div>
      </motion.div>
    </div>
  );
};
