import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    name: 'Sérum Ácido Hialurónico',
    category: 'Skincare Facial',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Crema Hidratante Premium',
    category: 'Skincare Facial',
    price: '$60.00',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Aceite Corporal Relajante',
    category: 'Cuidado Corporal',
    price: '$35.00',
    image: 'https://images.unsplash.com/photo-1608248593842-8d76cbfeac59?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Mascarilla Reparadora',
    category: 'Skincare Profesional',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl text-[#333] mb-4"
            >
              Productos Profesionales
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-1 bg-brand-pink rounded-full mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm leading-relaxed"
            >
              Prolonga los resultados de tus tratamientos en casa con nuestra línea exclusiva de dermocosmética.
            </motion.p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 group bg-white/40"
            >
              <div className="bg-white/50 rounded-[32px] overflow-hidden aspect-square relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
              <div className="px-2">
                <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2">{product.category}</span>
                <h3 className="font-serif font-bold text-[#333] mb-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-serif italic text-brand-pink-dark">{product.price}</span>
                  <button className="bg-brand-pink/20 hover:bg-brand-pink text-brand-pink-dark hover:text-white p-3 rounded-full transition-colors backdrop-blur-sm border border-brand-pink/30">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
