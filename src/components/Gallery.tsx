import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496265738-9aa960bf9e35?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 relative overflow-hidden bg-white/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl text-[#333] mb-4"
          >
            Nuestras Instalaciones
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-pink mx-auto rounded-full mb-6"
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="break-inside-avoid glass-card p-2 border-white/60 bg-white/40"
            >
              <div className="rounded-[32px] overflow-hidden group relative transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Galería ${index + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-pink-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
