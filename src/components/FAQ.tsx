import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: "¿Necesito una evaluación previa a los tratamientos?",
    a: "Sí, todos nuestros tratamientos requieren una valoración inicial gratuita. Esto nos permite analizar tu tipo de piel, necesidades específicas y diseñar un protocolo 100% personalizado para garantizar los mejores resultados."
  },
  {
    q: "¿Con cuánta anticipación debo agendar mi cita?",
    a: "Recomendamos agendar con al menos 48 horas de anticipación para asegurar disponibilidad en el horario de tu preferencia."
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Aceptamos efectivo, transferencias bancarias y todas las tarjetas de crédito (con opción a diferir según el monto del tratamiento)."
  },
  {
    q: "¿Duele la depilación láser?",
    a: "Nuestra tecnología láser de última generación cuenta con un sistema de enfriamiento inteligente que hace el tratamiento prácticamente indoloro y muy cómodo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFF9FA]">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-[#333] mb-4">Preguntas Frecuentes</h2>
          <div className="w-16 h-1 bg-brand-pink mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white/40 hover:bg-white/60 transition-colors"
              >
                <span className="font-bold text-[#333] text-sm uppercase tracking-wide">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-pink-dark shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-gold shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-white/40 border-t border-white/40 mt-2">
                  <p className="text-gray-500 font-light mt-4 text-[13px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
