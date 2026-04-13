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
  Rocket,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "+212662825890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

const IMAGES = {
  hero: "https://i.postimg.cc/prM4p4vG/side-view-woman-using-computer-laptop.jpg",
  problem: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  expertise: {
    dev: "https://i.postimg.cc/c45tWmTv/close-up-image-programer-working-his-desk-office.jpg",
    seo: "https://i.postimg.cc/VNJR1vXZ/seo-search-engine-optimization-internet-digital-concept.jpg",
    it: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  },
  avatars: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
  ],
  portfolio: {
    medical: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    boutique: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    business: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    optic: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    luxury: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
};

const PORTFOLIO_SITES = [
  {
    title: "Cabinet Dr Lahlou",
    category: "Santé / Médical",
    url: "https://cabinetdrlahlou.vercel.app/",
    image: IMAGES.portfolio.medical
  },
  {
    title: "Les Fleurs du Boutonnet",
    category: "Commerce / Boutique",
    url: "https://les-fleurs-du-boutonnet.vercel.app/",
    image: IMAGES.portfolio.boutique
  },
  {
    title: "Coach Ilham Nejari",
    category: "Coaching / Business",
    url: "https://coachilhamnejari.vercel.app/",
    image: IMAGES.portfolio.business
  },
  {
    title: "Sushi House Five",
    category: "Restauration / Sushi",
    url: "https://sushi-house-five.vercel.app/",
    image: IMAGES.portfolio.sushi
  },
  {
    title: "Par Optic Berrechid",
    category: "Santé / Opticien",
    url: "https://par-optic-berrechid.vercel.app/",
    image: IMAGES.portfolio.optic
  },
  {
    title: "Dar Luxury",
    category: "Immobilier / Luxe",
    url: "https://darluxury.vercel.app/",
    image: IMAGES.portfolio.luxury
  }
];

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (target: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { target: "#offres", label: "Offres" },
    { target: "services", label: "Services +" },
    { target: "#portfolio", label: "Portfolio" },
    { target: "#process", label: "Processus" },
    { target: "#faq", label: "FAQ" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'py-2 md:py-3 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'py-4 md:py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div onClick={() => onNavigate("#home")} className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <div className="w-9 h-9 md:w-12 md:h-12 bg-slate-900 rounded-lg md:rounded-2xl flex items-center justify-center text-white font-black text-lg md:text-2xl shadow-xl group-hover:bg-brand-600 transition-all duration-500 group-hover:rotate-6">W</div>
          <span className="font-black text-xl md:text-3xl tracking-tighter text-slate-900">WEB48H</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          {navLinks.map((link, i) => (
            <button 
              key={i} 
              onClick={() => onNavigate(link.target)} 
              className="hover:text-brand-600 transition-colors uppercase tracking-[0.3em] font-black"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-slate-900 text-white px-4 md:px-8 py-2.5 md:py-4 rounded-lg md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest items-center gap-2 md:gap-3 hover:bg-brand-600 transition-all shadow-xl"
          >
            <MessageCircle size={14} className="md:w-[18px] md:h-[18px]" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    onNavigate(link.target);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-sm font-black text-slate-900 uppercase tracking-widest hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 text-white p-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <MessageCircle size={18} />
                <span>Lancer mon projet</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <section ref={containerRef} className="relative pt-28 md:pt-48 pb-16 md:pb-32 px-4 md:px-6 bg-grid overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 -left-10 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-brand-400/10 rounded-full blur-[60px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-indigo-400/10 rounded-full blur-[60px] md:blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Livraison garantie en 48h
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] md:leading-[0.9] mb-4 md:mb-8 tracking-tighter">
            VOTRE SITE <br />
            <span className="text-gradient">PRO</span> EN <br />
            48 HEURES.
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Coachs, artisans, médecins, commerçants... <br />
            <span className="text-slate-900 font-bold">Arrêtez de perdre des clients au profit de vos concurrents qui sont déjà sur Google.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center lg:justify-start">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-600 text-white px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-3xl font-black text-sm md:text-lg flex items-center justify-center gap-3 hover:bg-brand-700 transition-all shadow-lg group relative overflow-hidden"
            >
              <MessageCircle size={18} className="md:w-6 md:h-6" />
              LANCER MON PROJET
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex items-center gap-3 md:gap-4 px-4 mt-2 sm:mt-0">
              <div className="flex -space-x-2 md:-space-x-3">
                {IMAGES.avatars.map((url, i) => (
                  <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                    <img src={`${url}?auto=format&fit=crop&w=100&h=100&q=80`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-amber-500 gap-0.5"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>
                <p className="text-[7px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">+150 PROS AU MAROC</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
          <motion.div 
            style={{ y: y1 }} 
            className="relative z-20 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[1px] border-white/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={IMAGES.hero} 
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
                <p className="text-sm font-bold text-slate-800">Livré en 48 Heures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">
        <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="relative z-10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
            <img 
              src={IMAGES.problem} 
              alt="Analyse SEO décevante" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 z-20 glass p-4 md:p-10 rounded-xl md:rounded-[2.5rem] max-w-[140px] md:max-w-xs text-center border-slate-200">
            <p className="text-3xl md:text-6xl font-black text-red-600 mb-0.5 md:mb-2 tracking-tighter">0</p>
            <p className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-[0.1em] md:tracking-[0.2em] leading-tight md:leading-relaxed">Appels reçus via Google <br className="hidden md:block" />cette semaine</p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 md:mb-8 leading-[1] md:leading-[0.9] tracking-tighter uppercase">
            POURQUOI VOTRE <br />
            <span className="text-red-600">CONCURRENCE</span> <br />
            GAGNE ?
          </h2>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-12 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Le bouche-à-oreille ne suffit plus au Maroc. <br />
            <span className="text-slate-900 font-bold underline decoration-red-500/30 underline-offset-4">Si on ne vous trouve pas sur Google, vous n'existez pas.</span>
          </p>
          <div className="space-y-3 md:space-y-6 text-left">
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
              <div key={i} className="group p-4 md:p-6 rounded-xl md:rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <AlertCircle size={18} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-black text-slate-900 mb-0.5 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
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

const Portfolio = () => (
  <section id="portfolio" className="py-16 md:py-32 px-4 md:px-6 bg-[#fafafa]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none uppercase">Nos <br />Réalisations.</h2>
        <p className="text-base md:text-xl text-slate-500 font-medium">Découvrez des exemples de sites livrés en 48h.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {PORTFOLIO_SITES.map((site, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group bento-card overflow-hidden flex flex-col"
          >
            <div className="h-48 md:h-64 overflow-hidden relative">
              <img 
                src={site.image} 
                alt={site.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                  {site.category}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{site.title}</h3>
              <div className="mt-auto">
                <a 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 font-black text-xs md:text-sm uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Voir le site <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = ({ onNavigate }: { onNavigate: (target: string) => void }) => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-brand-600/5 blur-[150px]"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 leading-[1] md:leading-[0.9] tracking-tighter uppercase">
          LA SOLUTION <br />
          <span className="text-brand-500">CLÉ EN MAIN.</span>
        </h2>
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          On s'occupe de tout : design, technique, hébergement. <br className="hidden md:block" />
          <span className="text-white">Vous n'avez qu'à répondre aux messages WhatsApp.</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {[
          { icon: <Clock size={28} />, title: "48H CHRONO", desc: "Livraison éclair garantie.", color: "bg-brand-500" },
          { icon: <Layout size={28} />, title: "DESIGN PREMIUM", desc: "Look moderne et pro.", color: "bg-indigo-500" },
          { icon: <Smartphone size={28} />, title: "MOBILE FIRST", desc: "Optimisé pour WhatsApp.", color: "bg-emerald-500" },
          { icon: <ShieldCheck size={28} />, title: "ZÉRO FRAIS", desc: "Hébergement gratuit à vie.", color: "bg-slate-700" },
          { icon: <Rocket size={28} />, title: "SEO LOCAL", desc: "Visible sur Google Maps.", color: "bg-orange-500" },
          { icon: <Zap size={28} />, title: "SANS EFFORT", desc: "On gère tout pour vous.", color: "bg-pink-500" }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl md:rounded-[3rem] hover:bg-white/10 transition-all duration-500 group">
            <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-lg md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h4 className="text-lg md:text-2xl font-black mb-1.5 md:mb-3 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-slate-400 font-bold text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 md:mt-20 text-center">
        <button 
          onClick={() => onNavigate("#portfolio")}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 md:px-10 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg hover:bg-brand-500 hover:text-white transition-all group"
        >
          VOIR NOS RÉALISATIONS
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="offres" className="py-16 md:py-32 px-4 md:px-6 bg-[#fafafa] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-[150px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none uppercase">Tarif <br />Unique.</h2>
        <p className="text-base md:text-xl text-slate-500 font-medium">Tout ce dont vous avez besoin pour réussir en ligne.</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-900 p-8 md:p-16 rounded-2xl md:rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(2,109,198,0.3)] flex flex-col relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 bg-brand-500 text-white px-6 md:px-10 py-2 md:py-3 rounded-bl-xl md:rounded-bl-[2rem] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Offre Limitée
          </div>
          <div className="mb-10 md:mb-16 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8">Pack Visibilité Pro</div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 uppercase tracking-tighter leading-none">Site Web <br />Professionnel</h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-slate-500 line-through decoration-red-500/50">1500 DH</span>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl md:text-9xl font-black text-white tracking-tighter">999</span>
                <span className="text-2xl md:text-4xl font-black text-brand-500 uppercase">DH</span>
              </div>
            </div>
            <p className="text-brand-400 font-black mt-4 md:mt-6 uppercase tracking-[0.2em] text-[10px] md:text-xs">Offre Tout-Inclus - Sans frais cachés</p>
            <div className="mt-6 p-4 bg-brand-500/10 rounded-2xl border border-brand-500/20">
              <p className="text-brand-400 font-black text-[10px] md:text-xs uppercase tracking-widest">
                Paiement après satisfaction
              </p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              "Site ultra-rapide (React/Vite)",
              "Design moderne & responsive",
              "Bouton WhatsApp flottant",
              "Livraison garantie en 48h",
              "Hébergement gratuit à vie",
              "Domaine .com, .online, .shop OFFERT*",
              "Conformité CNDP Incluse",
              "Sécurité SSL & HTTPS",
              "Indexation Google Express",
              "4 Affiches Réseaux Sociaux (1080x1080)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 md:gap-4 text-slate-300 font-bold text-xs md:text-base">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-brand-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[9px] md:text-[10px] text-slate-500 mb-8 italic leading-relaxed">
            * Nom de domaine offert pour la première année. <br />
            ** Hébergement gratuit inclus via Vercel/Netlify. <br />
            *** Indexation Google Express : votre site visible sur Google en moins de 24h.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 md:py-8 rounded-2xl md:rounded-3xl bg-brand-600 text-white font-black text-center hover:bg-brand-500 transition-all shadow-2xl uppercase tracking-widest text-xs md:text-lg"
          >
            Lancer mon projet maintenant
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ExpertServicesMini = ({ onExplore }: { onExplore: () => void }) => (
  <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
        <div className="text-center md:text-left">
          <div className="font-black text-xl md:text-2xl tracking-tighter text-slate-900 mb-1">WEB48H</div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Plus que de simples sites.</h2>
          <p className="text-sm md:text-lg text-slate-500 font-medium italic">SEO, Conformité CNDP, Formation E-commerce...</p>
        </div>
        <div className="flex gap-4 md:gap-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shadow-sm"><Rocket size={24} /></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm"><ShieldCheck size={24} /></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center shadow-sm"><Zap size={24} /></div>
        </div>
        <button 
          onClick={onExplore}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl flex items-center gap-3"
        >
          Découvrir nos services experts
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

const ServicesPage = ({ onNavigate }: { onNavigate: (target: string) => void }) => (
  <div className="min-h-screen bg-white font-sans selection:bg-brand-100 selection:text-brand-900">
    <nav className="py-6 bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div onClick={() => onNavigate("#home")} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black group-hover:bg-brand-600 transition-colors">W</div>
          <span className="font-black text-2xl tracking-tighter">WEB48H</span>
        </div>
        <button onClick={() => onNavigate("#home")} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-brand-600 transition-colors">
          <ArrowRight size={14} className="rotate-180" />
          Retour à l'accueil
        </button>
      </div>
    </nav>

    <main className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none uppercase">Services <br /><span className="text-brand-600">Experts.</span></h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic">Des solutions stratégiques pour dominer votre marché et sécuriser votre business au Maroc.</p>
        </div>

        <div className="space-y-32">
          {/* SEO */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 bg-orange-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-orange-200">
                <Rocket size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Audit SEO <br />Express.</h2>
              <div className="text-3xl font-black text-orange-600 mb-8 tracking-tight">500 DH <span className="text-sm text-slate-400 uppercase tracking-widest">Paiement Unique</span></div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Pourquoi vos concurrents reçoivent-ils des appels et pas vous ? Notre audit SEO express analyse votre présence digitale avec les outils les plus puissants du marché.
              </p>
              <ul className="space-y-4 mb-10">
                {["Rapport PDF complet et détaillé", "Identification des erreurs techniques bloquantes", "Analyse des mots-clés de vos concurrents", "Plan d'action priorisé"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-black text-slate-800 uppercase tracking-tight">
                    <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
                Commander mon audit SEO
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex items-center justify-center">
              <img src={IMAGES.expertise.seo} alt="SEO" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* CNDP */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex items-center justify-center">
              <div className="p-10 bg-white rounded-3xl shadow-xl border border-red-100 max-w-sm">
                <div className="flex items-center gap-4 text-red-600 mb-6">
                  <AlertCircle size={32} />
                  <span className="font-black text-xl uppercase tracking-tighter">Risque Juridique</span>
                </div>
                <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6 italic">
                  "Le non-respect de la Loi 09-08 peut entraîner des amendes allant jusqu'à **300.000 DH** et des peines d'emprisonnement."
                </p>
                <div className="h-2 w-full bg-red-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-red-600 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-emerald-200">
                <ShieldCheck size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Audit CNDP <br />(Loi 09-08).</h2>
              <div className="text-3xl font-black text-emerald-600 mb-8 tracking-tight">300 DH <span className="text-sm text-slate-400 uppercase tracking-widest">Paiement Unique</span></div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Au Maroc, la protection des données personnelles n'est plus une option. Nous auditons votre site pour garantir sa conformité avec la réglementation **CNDP**. Ne laissez pas une erreur juridique détruire votre business.
              </p>
              <ul className="space-y-4 mb-10">
                {["Vérification des formulaires de collecte", "Audit de la politique de confidentialité", "Recommandations de mise en conformité", "Protection contre les amendes CNDP"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-black text-slate-800 uppercase tracking-tight">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl">
                Sécuriser mon business
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* E-commerce */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 bg-brand-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-brand-200">
                <Zap size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Formation <br />E-commerce.</h2>
              <div className="text-3xl font-black text-brand-600 mb-8 tracking-tight">250 DH <span className="text-sm text-slate-400 uppercase tracking-widest">Session Intensive</span></div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Passez de zéro à votre première vente en une seule journée. Une formation concrète, sans blabla, pour les débutants qui veulent des résultats immédiats au Maroc.
              </p>
              <ul className="space-y-4 mb-10">
                {["Formation intensive de 1 journée", "Lancement réel de votre 1ère campagne pub", "Stratégies de vente (Facebook/Instagram)", "Formation certifiante"].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-black text-slate-800 uppercase tracking-tight">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 bg-brand-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl">
                Réserver ma place
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex items-center justify-center">
              <div className="relative">
                <img src={IMAGES.expertise.dev} alt="Formation" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white"><Star size={20} fill="currentColor" /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certification</p>
                      <p className="text-xs font-bold text-slate-800">Formation Validée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer onNavigate={onNavigate} />
  </div>
);

const Expertise = () => (
  <section className="py-16 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-3 md:mb-6 tracking-tighter uppercase leading-none">Notre Expertise <br />Technique.</h2>
        <p className="text-base md:text-xl text-slate-500 font-medium">Des solutions à la pointe de la technologie pour votre business.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {[
          { 
            title: "Développement Web", 
            desc: "Sites ultra-rapides codés avec les dernières technologies (React, Vite, Tailwind).", 
            url: IMAGES.expertise.dev,
            tags: ["React", "Performance", "Clean Code"]
          },
          { 
            title: "SEO & Visibilité", 
            desc: "Optimisation pour les moteurs de recherche pour apparaître en haut des résultats Google.", 
            url: IMAGES.expertise.seo,
            tags: ["Google Maps", "Keywords", "Ranking"]
          },
          { 
            title: "Maintenance IT", 
            desc: "Support technique et hébergement sécurisé pour une tranquillité d'esprit totale.", 
            url: IMAGES.expertise.it,
            tags: ["Security", "Cloud", "Backup"]
          }
        ].map((item, i) => (
          <div key={i} className="group bento-card overflow-hidden flex flex-col">
            <div className="h-40 md:h-64 overflow-hidden relative">
              <img 
                src={`${item.url}?auto=format&fit=crop&w=800&q=80`} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 flex gap-1.5">
                {item.tags.map((tag, j) => (
                  <span key={j} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/20 backdrop-blur-md text-white text-[7px] md:text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-10 flex-grow">
              <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-2 md:mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 font-bold text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-16 md:py-32 px-4 md:px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-24 gap-6 md:gap-8 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">Le processus <br />le plus simple.</h2>
        <p className="text-base md:text-xl text-slate-500 font-medium max-w-sm leading-relaxed">On déteste la paperasse autant que vous. On va droit au but.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { step: "01", title: "WHATSAPP", desc: "On discute de votre projet en 5 minutes.", icon: <MessageCircle size={20} /> },
          { step: "02", title: "CONTENU", desc: "Vous envoyez vos photos et textes par message.", icon: <Layout size={20} /> },
          { step: "03", title: "CRÉATION", desc: "On code votre site avec amour et café.", icon: <Zap size={20} /> },
          { step: "04", title: "LIVRAISON", desc: "48h plus tard, vous êtes en ligne !", icon: <Rocket size={20} /> }
        ].map((item, i) => (
          <div key={i} className="group bento-card p-6 md:p-10 hover:bg-slate-900 hover:text-white transition-all duration-700">
            <div className="flex justify-between items-start mb-6 md:mb-10">
              <div className="text-4xl md:text-5xl font-black text-slate-200 group-hover:text-brand-500 transition-colors leading-none">{item.step}</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-colors">
                {item.icon}
              </div>
            </div>
            <h4 className="font-black text-xl md:text-2xl mb-2 md:mb-4 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-slate-500 group-hover:text-slate-400 font-bold text-[10px] md:text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Pourquoi le prix est-il si compétitif ?", a: "Nous utilisons des technologies modernes qui nous permettent de coder très vite. De plus, nous supprimons les frais d'hébergement mensuels inutiles pour vous offrir le meilleur rapport qualité/prix du Maroc." },
    { q: "Combien de temps prend la création ?", a: "Nous garantissons une livraison en moins de 48h une fois que nous avons reçu toutes vos informations." },
    { q: "Est-ce que je dois fournir le contenu ?", a: "Si vous avez des photos et textes, c'est parfait. Sinon, nous pouvons vous aider à rédiger et choisir des images professionnelles adaptées à votre métier." },
    { q: "Le site fonctionne-t-il sur téléphone ?", a: "Absolument. Tous nos sites sont 'Mobile-First', ce qui signifie qu'ils sont parfaitement optimisés pour les smartphones." },
    { q: "Comment se passe le paiement ?", a: "C'est simple : vous ne payez qu'une fois que vous êtes satisfait du résultat. Nous fonctionnons à la confiance." },
    { q: "Y a-t-il des frais mensuels ?", a: "Non. Contrairement aux agences classiques, nous utilisons des solutions d'hébergement gratuites à vie. Vous payez une seule fois, et c'est tout." }
  ];

  return (
    <section id="faq" className="py-16 md:py-32 px-4 md:px-6 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 md:mb-20 text-center tracking-tighter uppercase">FAQ.</h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl md:rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${openIndex === i ? 'bg-white border-brand-200 shadow-lg' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-10 text-left"
              >
                <span className={`font-black text-base md:text-xl uppercase tracking-tight transition-colors ${openIndex === i ? 'text-brand-600' : 'text-slate-900'}`}>{faq.q}</span>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-brand-600 text-white rotate-180 shadow-md shadow-brand-200' : 'bg-slate-50 text-slate-400'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
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
                    <div className="p-6 md:p-10 pt-0 font-bold text-slate-500 leading-relaxed text-sm md:text-lg">
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
  <section className="py-20 md:py-48 px-4 md:px-6 bg-slate-900 text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[1200px] h-[400px] md:h-[1200px] bg-brand-600 rounded-full blur-[80px] md:blur-[180px] animate-pulse"></div>
    </div>
    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-9xl font-black mb-6 md:mb-12 tracking-tighter leading-[1] md:leading-[0.85] uppercase">
        NE PERDEZ PLUS <br />
        UN SEUL <span className="text-brand-500">CLIENT.</span>
      </h2>
      <p className="text-base md:text-2xl text-slate-400 mb-10 md:mb-20 font-medium max-w-2xl mx-auto leading-relaxed">
        Lancez votre site professionnel aujourd'hui et commencez à recevoir des appels WhatsApp dès demain.
      </p>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 md:gap-6 bg-brand-600 text-white px-6 md:px-14 py-5 md:py-8 rounded-xl md:rounded-[2.5rem] font-black text-lg md:text-3xl hover:bg-brand-500 transition-all shadow-2xl group"
      >
        <MessageCircle size={24} className="md:w-10 md:h-10" />
        DISCUTER SUR WHATSAPP
        <ArrowRight size={20} className="md:w-8 md:h-8 group-hover:translate-x-3 transition-transform" />
      </a>
      <div className="mt-12 md:mt-24 flex flex-wrap justify-center gap-4 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-3 font-black tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[10px]">LIVRAISON 48H</div>
        <div className="flex items-center gap-3 font-black tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[10px]">ZÉRO ABONNEMENT</div>
        <div className="flex items-center gap-3 font-black tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[10px]">SUPPORT MAROC</div>
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate: (target: string) => void }) => (
  <footer className="py-20 px-6 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <div onClick={() => onNavigate("#home")} className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl">W</div>
          <span className="font-black text-3xl tracking-tighter text-slate-900">WEB48H</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-wrap justify-center gap-10 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
            <button onClick={() => onNavigate("#offres")} className="hover:text-brand-600 transition-colors uppercase font-black">Offres</button>
            <button onClick={() => onNavigate("services")} className="hover:text-brand-600 transition-colors uppercase font-black">Services +</button>
            <button onClick={() => onNavigate("#portfolio")} className="hover:text-brand-600 transition-colors uppercase font-black">Portfolio</button>
            <button onClick={() => onNavigate("#process")} className="hover:text-brand-600 transition-colors uppercase font-black">Processus</button>
            <button onClick={() => onNavigate("#faq")} className="hover:text-brand-600 transition-colors uppercase font-black">FAQ</button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs font-black text-slate-600">
            <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              Appel : {WHATSAPP_NUMBER}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              WhatsApp : {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-50">
        <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
          © 2026 WEB48H MAROC. TOUS DROITS RÉSERVÉS. <br className="md:hidden" />
          <span className="text-slate-300">Conforme CNDP (Loi 09-08) - Protection des données personnelles.</span>
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
    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-2xl md:rounded-[2rem] shadow-[0_15px_30px_rgba(37,211,102,0.3)] md:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
  >
    <MessageCircle size={28} className="md:w-9 md:h-9" fill="currentColor" />
    <span className="absolute right-full mr-6 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none uppercase tracking-widest hidden md:block">
      Besoin d'un site ?
    </span>
  </a>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'home' | 'services'>('home');

  const handleNavigate = (target: string) => {
    if (target === 'services') {
      setView('services');
      window.scrollTo(0, 0);
    } else if (target === '#home') {
      setView('home');
      window.scrollTo(0, 0);
    } else if (target.startsWith('#')) {
      if (view !== 'home') {
        setView('home');
        // Wait for view to update before scrolling
        setTimeout(() => {
          const element = document.querySelector(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  if (view === 'services') {
    return <ServicesPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-600 selection:text-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero />
        <Problem />
        <Solution onNavigate={handleNavigate} />
        <Portfolio />
        <ExpertServicesMini onExplore={() => setView('services')} />
        <Expertise />
        <Process />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer onNavigate={handleNavigate} />
      <StickyWhatsApp />
    </div>
  );
}
