import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carolina M.',
    text: 'Después de tanta búsqueda encontré el lugar ideal. La atención es impecable y los resultados en mi rostro han sido increíbles.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Sofia V.',
    text: 'Los resultados de mis tratamientos han sido exitosos. La doctora es una excelente profesional y el personal muy atento.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop'
  },
  {
    name: 'Daniela R.',
    text: 'Me dieron seguridad y confianza desde el primer día. Las instalaciones son hermosas y realmente te hacen sentir especial.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-[#333] mb-4"
          >
            Resultados Reales
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-pink mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 font-light"
          >
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-[40px] p-8 flex flex-col justify-between shadow-xl ${
                index === 1 
                ? 'bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white border border-brand-pink/50' 
                : 'glass-card text-[#4A4A4A]'
              }`}
            >
              <Quote className={`absolute top-6 right-6 w-10 h-10 ${index === 1 ? 'text-white/20' : 'text-brand-pink/20'}`} />
              <div className="mb-6">
                <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${index === 1 ? 'text-white/80' : 'text-brand-gold'} block mb-4`}>Testimonio</span>
                <p className="font-serif text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className={`w-12 h-12 rounded-full object-cover border-2 ${index === 1 ? 'border-white/50' : 'border-brand-pink/30'}`}
                />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest">{testimonial.name}</h4>
                  <p className={`text-[9px] uppercase tracking-widest mt-1 ${index === 1 ? 'text-white/80' : 'text-gray-400'}`}>Cliente Verificada</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
