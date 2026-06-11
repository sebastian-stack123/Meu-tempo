import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-pink/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-5xl text-[#333] mb-4">Visítanos</h2>
            <div className="w-16 h-1 bg-brand-pink rounded-full mb-10"></div>

            <div className="space-y-8 glass-card p-8 bg-white/40">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white/80">
                  <MapPin className="w-5 h-5 text-brand-pink-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1 text-sm uppercase tracking-wide">Ubicación</h4>
                  <p className="text-gray-500 text-[13px] font-light mb-1">Edificio Nuh, Av. Coruña y Alberto Mena</p>
                  <p className="text-gray-400 text-xs italic">Quito, Ecuador (Cod: RG4C+HP)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white/80">
                  <Phone className="w-5 h-5 text-brand-pink-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1 text-sm uppercase tracking-wide">Teléfono</h4>
                  <p className="text-gray-500 text-[13px] font-light">098 383 8600</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white/80">
                  <Clock className="w-5 h-5 text-brand-pink-dark" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-[#333] mb-1 text-sm uppercase tracking-wide">Horarios</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-500 font-light mt-3 w-full">
                    <span>Lunes a Viernes:</span> <span className="font-medium text-right">9:00 AM - 5:30 PM</span>
                    <span>Sábado:</span> <span className="font-medium text-right">9:00 AM - 12:00 PM</span>
                    <span>Domingo:</span> <span className="text-brand-pink-dark font-medium italic text-right">Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white/80">
                  <Instagram className="w-5 h-5 text-brand-pink-dark" />
                </div>
                <div className="flex items-center">
                  <a href="https://instagram.com/meutempo.ec" target="_blank" rel="noreferrer" className="text-brand-gold hover:text-brand-pink-dark transition-colors font-bold uppercase tracking-widest text-xs">
                    @meutempo.ec
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-2 h-[500px] border-white/80 bg-white/40"
          >
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7901041004144!2d-78.4831206!3d-0.1983088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7213264ad9%3A0xcbec80709424c562!2sAv.%20La%20Coru%C3%B1a%20%26%20Alberto%20Mena%2C%20Quito%20170143!5e0!3m2!1sen!2sec!4v1700000000000!5m2!1sen!2sec" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.1] opacity-90 rounded-[32px] mix-blend-multiply"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
