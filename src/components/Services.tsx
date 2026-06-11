import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Reducción de Medidas',
    description: 'Protocolos de moldeamiento corporal para esculpir tu figura mejorando tu bienestar general.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1500&auto=format&fit=crop'
  },
  {
    title: 'Rejuvenecimiento Facial',
    description: 'Tratamientos especializados con tecnología no invasiva para revitalizar y rejuvenecer tu piel.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Depilación Láser',
    description: 'Tecnología médica avanzada, indolora y segura para resultados de eliminación de vello duraderos.',
    image: 'https://images.unsplash.com/photo-1512496265738-9aa960bf9e35?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Masajes Relajantes',
    description: 'Experiencias terapéuticas diseñadas para reducir el estrés, aliviar tensiones y mejorar tu descanso.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Tratamientos Corporales',
    description: 'Protocolos personalizados según las necesidades de tu piel: hidratación, exfoliación y reafirmantes.',
    image: 'https://images.unsplash.com/photo-1533621430983-6c8aed614772?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Tratamientos Faciales Premium',
    description: 'Limpieza profunda, hidratación intensiva y nutrición celular para un rostro luminoso.',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden text-[#4A4A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-pink-dark/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-[#333] mb-4"
          >
            Nuestros Servicios
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
            Descubre nuestra exclusiva gama de tratamientos diseñados para realzar tu belleza natural y promover el bienestar integral.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col p-1 sm:p-2 bg-white/50"
            >
              <div className="relative h-56 overflow-hidden rounded-[32px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-transparent">
                <h3 className="font-serif text-xl font-bold text-[#333] mb-2 group-hover:text-brand-pink transition-colors">{service.title}</h3>
                <p className="text-gray-500 mb-6 flex-1 text-[11px] leading-relaxed uppercase tracking-wider">{service.description}</p>
                <a href="#contacto" className="inline-flex items-center gap-2 text-brand-gold font-bold text-[10px] uppercase tracking-[0.2em] group/btn w-fit">
                  Más información 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
