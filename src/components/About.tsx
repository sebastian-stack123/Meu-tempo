import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass-card p-2 relative z-10 border-white/80 bg-white/40">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Instalaciones del spa" 
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-pink/20 backdrop-blur-xl rounded-full -z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-brand-pink/40 bg-white/40 backdrop-blur-xl rounded-full -z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-5xl text-[#333] mb-6 leading-tight">
              Un espacio creado <br/><span className="italic text-brand-pink">para ti</span>
            </h2>
            <div className="w-16 h-1 bg-brand-pink mb-8 rounded-full"></div>
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
              En <strong className="text-[#333] font-bold">Meu Tempo Centro Estético</strong> combinamos tecnología avanzada, experiencia profesional y atención personalizada para ofrecer tratamientos estéticos de alta calidad. 
            </p>
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8">
              Nuestro objetivo es ayudarte a sentirte segura, renovada y feliz con tu imagen, brindándote una experiencia de relajación total en un ambiente en donde el tiempo se detiene exclusivamente para ti.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-brand-pink/20">
              <div>
                <h4 className="font-serif text-4xl text-brand-gold mb-2">10+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Años de experiencia</p>
              </div>
              <div>
                <h4 className="font-serif text-4xl text-brand-gold mb-2">Certificados</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Profesionales de la salud</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
