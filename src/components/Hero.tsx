import { motion } from 'motion/react';
import { Star, ShieldCheck, Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FFF9FA]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
          alt="Tratamiento facial relajante" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9FA] via-[#FFF9FA]/80 to-transparent flex"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-brand-pink/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-[#333] leading-[1.1] mb-6">
            Tu mejor versión <br className="hidden md:block"/>
            <span className="italic text-brand-pink">comienza aquí</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[380px] mb-8">
            Tratamientos estéticos avanzados, tecnología de punta y profesionales capacitados para ayudarte a sentirte y verte mejor.
            <br/><br/>
            <span className="text-brand-gold italic font-serif text-lg">"El tiempo es exclusivamente para ti 💗"</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="https://linktr.ee/MeuTempoSpa?utm_source=linktree_admin_share&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnz4JqATiXfQwGkbWhhvEFTxIhr7OBNhcU6GziQG4VpyA6uCI2ecbNtet30UE_aem_tR7WW1QCBHqnX8cjzcyDzg" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-brand-pink hover:bg-brand-pink-dark text-white text-center px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-pink/40 transition-all duration-300"
            >
              Agendar Cita
            </a>
            <a href="#servicios" className="bg-white/50 backdrop-blur-sm hover:bg-white text-brand-pink text-center px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-pink/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              Ver Tratamientos
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full glass rounded-none border-x-0 border-b-0 py-6 text-[10px] uppercase tracking-widest font-bold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-6 text-center divide-x divide-white/40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-brand-gold mb-2" />
              <span className="text-[#4A4A4A]">Última Tecnología</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-brand-pink-dark mb-2" />
              <span className="text-[#4A4A4A]">Atención Personalizada</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
