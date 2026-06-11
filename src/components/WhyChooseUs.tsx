import { ShieldCheck, Heart, Sparkle, Award } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Especialistas Certificados",
    desc: "Equipo médico y estético en constante formación."
  },
  {
    icon: <Sparkle className="w-6 h-6" />,
    title: "Tecnología de Punta",
    desc: "Equipos de última generación para resultados seguros."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Atención Personalizada",
    desc: "Protocolos adaptados a tus necesidades únicas."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Seguridad Garantizada",
    desc: "Estrictos estándares de higiene y bioseguridad."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-pink-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-pink-dark to-brand-gold/60 mix-blend-multiply pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl mb-6 leading-tight">¿Por qué elegir <br/><span className="italic text-white">Meu Tempo?</span></h2>
            <div className="w-16 h-1 bg-white/40 rounded-full mb-8"></div>
            <p className="text-white/90 text-sm font-light leading-relaxed mb-8">
              No somos un spa convencional. Somos una clínica estética comprometida con la excelencia. Nuestro enfoque combina ciencia, tecnología y el toque humano para revelar tu mejor versión en un ambiente de lujo y exclusividad.
            </p>
            <div className="flex items-center gap-4 text-white font-medium">
              <span className="text-4xl font-serif">5k+</span>
              <span className="text-[10px] uppercase tracking-widest leading-tight">Clientas<br/>Felices</span>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/30 p-8 rounded-[40px] hover:bg-white/20 transition-colors shadow-xl shadow-brand-pink-dark/50"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white backdrop-blur-md">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{reason.title}</h4>
                <p className="text-white/80 font-light text-[10px] uppercase tracking-wider leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
