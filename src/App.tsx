import { 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Smartphone, 
  Layout, 
  Zap, 
  AlertCircle, 
  ArrowRight,
  Plus,
  Minus,
  Quote,
  Star,
  ExternalLink,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "+212662825890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:bg-brand-600 transition-all duration-500 group-hover:rotate-6">W</div>
          <span className="font-black text-3xl tracking-tighter text-slate-900">WEB72</span>
        </div>
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          <a href="#offres" className="hover:text-brand-600 transition-colors">Offres</a>
          <a href="#process" className="hover:text-brand-600 transition-colors">Processus</a>
          <a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-brand-600 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="relative pt-48 pb-32 px-6 bg-grid overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-[800px] h-[800px] bg-indigo-400/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Livraison garantie en 72h
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.88] mb-8 tracking-tighter">
            VOTRE SITE <br />
            <span className="text-gradient">PRO</span> EN <br />
            72 HEURES.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
            Plombiers, électriciens, dentistes, artisans... <br />
            <span className="text-slate-900 font-bold">Ne laissez plus vos clients appeler vos concurrents par manque de visibilité.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-600 text-white px-10 py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-700 transition-all shadow-[0_20px_40px_-10px_rgba(2,109,198,0.4)] group relative overflow-hidden"
            >
              <MessageCircle size={24} />
              LANCER MON PROJET
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                ].map((url, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                    <img src={`${url}?auto=format&fit=crop&w=100&h=100&q=80`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-500 gap-0.5"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">+150 PROS AU MAROC</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <motion.div 
            style={{ y: y1 }} 
            className="relative z-20 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[1px] border-white/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="Exemple de site premium" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          {/* Floating Element 1 */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-10 -right-4 z-30 w-72 hidden xl:block"
          >
            <div className="glass p-6 rounded-[2rem] flex items-center gap-4 animate-float">
              <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-200">
                <Smartphone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</p>
                <p className="text-sm font-bold text-slate-800">100% Mobile Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 -left-10 z-30 w-64 hidden xl:block"
          >
            <div className="glass p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-200">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rapidité</p>
                <p className="text-sm font-bold text-slate-800">Livré en 72 Heures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-32 px-6 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
              alt="Analyse SEO décevante" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 z-20 glass p-10 rounded-[2.5rem] max-w-xs text-center border-slate-200">
            <p className="text-6xl font-black text-red-600 mb-2 tracking-tighter">0</p>
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed">Appels reçus via Google <br />cette semaine</p>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
            POURQUOI VOTRE <br />
            <span className="text-red-600">CONCURRENCE</span> <br />
            GAGNE ?
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-medium leading-relaxed">
            Le bouche-à-oreille ne suffit plus au Maroc. <br />
            <span className="text-slate-900 font-bold underline decoration-red-500/30 underline-offset-4">Si on ne vous trouve pas sur Google, vous n'existez pas.</span>
          </p>
          <div className="space-y-6">
            {[
              { 
                title: "80% des clients vérifient en ligne", 
                desc: "Avant de vous appeler, ils cherchent votre nom. Pas de site = Pas de confiance." 
              },
              { 
                title: "Les appels WhatsApp vont ailleurs", 
                desc: "Vos concurrents captent tous les nouveaux clients grâce à leur présence digitale." 
              },
              { 
                title: "Image de marque vieillissante", 
                desc: "Un artisan sans site moderne paraît moins fiable qu'une entreprise structurée." 
              }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-brand-600/5 blur-[150px]"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
          LA SOLUTION <br />
          <span className="text-brand-500">CLÉ EN MAIN.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          On s'occupe de tout : design, technique, hébergement. <br />
          <span className="text-white">Vous n'avez qu'à répondre aux messages WhatsApp.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Clock size={40} />, title: "72H CHRONO", desc: "Livraison éclair garantie.", color: "bg-brand-500" },
          { icon: <Layout size={40} />, title: "DESIGN PREMIUM", desc: "Look moderne et pro.", color: "bg-indigo-500" },
          { icon: <Smartphone size={40} />, title: "MOBILE FIRST", desc: "Optimisé pour WhatsApp.", color: "bg-emerald-500" },
          { icon: <ShieldCheck size={40} />, title: "SÉCURITÉ TOTALE", desc: "HTTPS et SSL inclus.", color: "bg-slate-700" },
          { icon: <Rocket size={40} />, title: "SEO LOCAL", desc: "Visible sur Google Maps.", color: "bg-orange-500" },
          { icon: <Zap size={40} />, title: "SANS EFFORT", desc: "On gère tout pour vous.", color: "bg-pink-500" }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all duration-500 group">
            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-slate-400 font-bold text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-brand-500 hover:text-white transition-all group"
        >
          VOIR NOS RÉALISATIONS
          <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="offres" className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-[150px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none uppercase">Tarifs <br />Transparents.</h2>
        <p className="text-xl text-slate-500 font-medium">Pas de frais cachés. Pas d'abonnement mensuel.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Plan 1 */}
        <div className="group bento-card p-12 flex flex-col relative overflow-hidden">
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">Essentiel</div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Landing Page</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-black text-slate-900 tracking-tighter">650</span>
              <span className="text-2xl font-black text-slate-400 uppercase">DH</span>
            </div>
            <p className="text-slate-400 font-black mt-4 uppercase tracking-[0.2em] text-[10px]">Paiement unique</p>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "Site 1 page (Landing Page)",
              "Design professionnel & Moderne",
              "Intégration WhatsApp Direct",
              "Livraison en 72h",
              "Hébergement offert (1 an)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-600 font-bold text-sm">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 rounded-2xl bg-slate-900 text-white font-black text-center hover:bg-brand-600 transition-all uppercase tracking-widest text-xs shadow-xl"
          >
            Choisir ce plan
          </a>
        </div>

        {/* Plan 2 */}
        <div className="bg-slate-900 p-12 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(2,109,198,0.3)] flex flex-col relative overflow-hidden transform md:scale-105 z-10 border border-white/10">
          <div className="absolute top-0 right-0 bg-brand-500 text-white px-10 py-3 rounded-bl-[2rem] text-[10px] font-black uppercase tracking-[0.3em]">
            Populaire
          </div>
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-6">Business</div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Site Complet</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-black text-white tracking-tighter">1300</span>
              <span className="text-2xl font-black text-brand-500 uppercase">DH</span>
            </div>
            <p className="text-slate-400 font-black mt-4 uppercase tracking-[0.2em] text-[10px]">Paiement unique</p>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            {[
              "Site multi-pages (jusqu'à 5)",
              "Design Premium & Personnalisé",
              "SEO Local (Google Maps)",
              "WhatsApp + Formulaire contact",
              "Livraison en 72h",
              "Nom de domaine .ma / .com offert"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-300 font-bold text-sm">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-brand-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 rounded-2xl bg-brand-600 text-white font-black text-center hover:bg-brand-500 transition-all shadow-2xl shadow-brand-900/40 uppercase tracking-widest text-xs"
          >
            Commander maintenant
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section className="py-32 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">Notre Expertise <br />Technique.</h2>
        <p className="text-xl text-slate-500 font-medium">Des solutions à la pointe de la technologie pour votre business.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { 
            title: "Développement Web", 
            desc: "Sites ultra-rapides codés avec les dernières technologies (React, Vite, Tailwind).", 
            url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            tags: ["React", "Performance", "Clean Code"]
          },
          { 
            title: "SEO & Visibilité", 
            desc: "Optimisation pour les moteurs de recherche pour apparaître en haut des résultats Google.", 
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            tags: ["Google Maps", "Keywords", "Ranking"]
          },
          { 
            title: "Maintenance IT", 
            desc: "Support technique et hébergement sécurisé pour une tranquillité d'esprit totale.", 
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            tags: ["Security", "Cloud", "Backup"]
          }
        ].map((item, i) => (
          <div key={i} className="group bento-card overflow-hidden flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img 
                src={`${item.url}?auto=format&fit=crop&w=800&q=80`} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex gap-2">
                {item.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-10 flex-grow">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">Le processus <br />le plus simple.</h2>
        <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed">On déteste la paperasse autant que vous. On va droit au but.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "WHATSAPP", desc: "On discute de votre projet en 5 minutes.", icon: <MessageCircle size={24} /> },
          { step: "02", title: "CONTENU", desc: "Vous envoyez vos photos et textes par message.", icon: <Layout size={24} /> },
          { step: "03", title: "CRÉATION", desc: "On code votre site avec amour et café.", icon: <Zap size={24} /> },
          { step: "04", title: "LIVRAISON", desc: "72h plus tard, vous êtes en ligne !", icon: <Rocket size={24} /> }
        ].map((item, i) => (
          <div key={i} className="group bento-card p-10 hover:bg-slate-900 hover:text-white transition-all duration-700">
            <div className="flex justify-between items-start mb-10">
              <div className="text-5xl font-black text-slate-200 group-hover:text-brand-500 transition-colors leading-none">{item.step}</div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
            <h4 className="font-black text-2xl mb-4 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-slate-500 group-hover:text-slate-400 font-bold text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-brand-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-grid pointer-events-none"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">Ils sont passés <br />au digital.</h2>
        <p className="text-xl text-brand-100 font-medium">Rejoignez les +150 professionnels qui nous font confiance.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { name: "Dr. Amine", role: "Dentiste à Casablanca", url: "https://images.unsplash.com/photo-1556157382-97dee2dcb748", text: "Service incroyable. Mon site a été livré en 2 jours et je reçois déjà des rendez-vous via WhatsApp." },
          { name: "Karim", role: "Plombier à Marrakech", url: "https://images.unsplash.com/photo-1560250097-0b93528c311a", text: "Franchement top. Simple, rapide et pas cher. Mes clients me trouvent plus facilement maintenant." },
          { name: "Sanaa", role: "Fleuriste à Rabat", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", text: "Le design est magnifique. Je n'y connaissais rien et ils se sont occupés de tout. Je recommande !" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-12 rounded-[3rem] shadow-2xl text-slate-900 relative group hover:-translate-y-2 transition-transform duration-500">
            <Quote className="text-brand-600/10 absolute top-8 right-10" size={80} />
            <div className="flex text-amber-400 mb-6 gap-1">
              <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
            </div>
            <p className="text-lg mb-10 font-bold leading-relaxed relative z-10 italic text-slate-700">"{item.text}"</p>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden shadow-inner border-2 border-slate-50">
                <img src={`${item.url}?auto=format&fit=crop&w=150&h=150&q=80`} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-black text-lg uppercase tracking-tight leading-none mb-1">{item.name}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Combien de temps prend la création ?", a: "Nous garantissons une livraison en moins de 72h une fois que nous avons reçu toutes vos informations." },
    { q: "Est-ce que je dois fournir le contenu ?", a: "Si vous avez des photos et textes, c'est parfait. Sinon, nous pouvons vous aider à rédiger et choisir des images professionnelles adaptées à votre métier." },
    { q: "Le site fonctionne-t-il sur téléphone ?", a: "Absolument. Tous nos sites sont 'Mobile-First', ce qui signifie qu'ils sont parfaitement optimisés pour les smartphones." },
    { q: "Comment se passe le paiement ?", a: "Nous demandons un acompte de 50% au lancement et le solde à la livraison du site." },
    { q: "Y a-t-il des frais mensuels ?", a: "Non. L'hébergement est offert la première année. Ensuite, il faudra simplement renouveler votre nom de domaine et hébergement (environ 300-400 DH/an)." }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-20 text-center tracking-tighter uppercase">FAQ.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${openIndex === i ? 'bg-white border-brand-200 shadow-xl' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-10 text-left"
              >
                <span className={`font-black text-xl uppercase tracking-tight transition-colors ${openIndex === i ? 'text-brand-600' : 'text-slate-900'}`}>{faq.q}</span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-brand-600 text-white rotate-180 shadow-lg shadow-brand-200' : 'bg-slate-50 text-slate-400'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-10 pt-0 font-bold text-slate-500 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-48 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-600 rounded-full blur-[180px] animate-pulse"></div>
    </div>
    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85] uppercase">
        NE PERDEZ PLUS <br />
        UN SEUL <span className="text-brand-500">CLIENT.</span>
      </h2>
      <p className="text-2xl text-slate-400 mb-20 font-medium max-w-2xl mx-auto leading-relaxed">
        Lancez votre site professionnel aujourd'hui et commencez à recevoir des appels WhatsApp dès demain.
      </p>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-6 bg-brand-600 text-white px-14 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-brand-500 transition-all shadow-[0_30px_60px_-10px_rgba(2,109,198,0.5)] group"
      >
        <MessageCircle size={40} />
        DISCUTER SUR WHATSAPP
        <ArrowRight className="group-hover:translate-x-3 transition-transform" />
      </a>
      <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-3 font-black tracking-[0.3em] text-[10px]">LIVRAISON 72H</div>
        <div className="flex items-center gap-3 font-black tracking-[0.3em] text-[10px]">SANS ABONNEMENT</div>
        <div className="flex items-center gap-3 font-black tracking-[0.3em] text-[10px]">SUPPORT MAROC</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl">W</div>
          <span className="font-black text-3xl tracking-tighter text-slate-900">WEB72</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#offres" className="hover:text-brand-600 transition-colors">Offres</a>
          <a href="#process" className="hover:text-brand-600 transition-colors">Processus</a>
          <a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a>
          <a href="#" className="hover:text-brand-600 transition-colors">Contact</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-50">
        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          © 2026 WEB72 MAROC. TOUS DROITS RÉSERVÉS.
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

const StickyWhatsApp = () => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-[2rem] shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
  >
    <MessageCircle size={36} fill="currentColor" />
    <span className="absolute right-full mr-6 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none uppercase tracking-widest">
      Besoin d'un site ?
    </span>
  </a>
);

// --- Main App ---

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Expertise />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
