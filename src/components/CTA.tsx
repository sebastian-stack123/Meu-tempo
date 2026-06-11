import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9FA] via-brand-pink/10 to-brand-pink/20 -z-10"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-10 w-64 h-64 border border-brand-pink/30 rounded-full scale-150 -translate-y-1/2 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 border border-brand-pink/20 rounded-full scale-150 translate-y-1/3 opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-card p-12 lg:p-20 bg-white/50 border-white/80">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl text-[#333] mb-8 leading-[1.1]"
        >
          Regálate el tiempo <br/><span className="italic text-brand-pink">que mereces</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-gray-500 font-light mb-12 tracking-wide"
        >
          Miles de clientes ya confían en <strong className="font-bold text-[#333]">Meu Tempo</strong> para cuidar su bienestar y belleza.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a 
            href="https://linktr.ee/MeuTempoSpa?utm_source=linktree_admin_share&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnz4JqATiXfQwGkbWhhvEFTxIhr7OBNhcU6GziQG4VpyA6uCI2ecbNtet30UE_aem_tR7WW1QCBHqnX8cjzcyDzg" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-brand-gold hover:bg-[#b08e24] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-brand-gold/30 hover:-translate-y-1"
          >
            Reservar Mi Cita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
