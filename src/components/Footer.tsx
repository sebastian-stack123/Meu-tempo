import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-10 py-12 border-t border-brand-pink/20 bg-white/20 backdrop-blur-xl relative overflow-hidden text-[#4A4A4A]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-brand-pink/20 pb-12">
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-widest text-brand-pink-dark uppercase mb-2 block">
              MEU TEMPO
            </span>
            <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase block mb-6">Centro Estético</span>
            <p className="text-sm font-light leading-relaxed mb-6">
              Tratamientos estéticos avanzados, tecnología de punta y profesionales capacitados.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/meutempo.ec" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors border border-brand-pink/30 text-brand-pink-dark">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-brand-gold">Enlaces</h4>
            <ul className="space-y-4 text-xs font-light uppercase tracking-widest">
              <li><a href="#inicio" className="hover:text-brand-pink transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-pink transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-brand-pink transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-brand-pink transition-colors">Galería</a></li>
              <li><a href="#productos" className="hover:text-brand-pink transition-colors">Productos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-brand-gold">Contacto</h4>
            <ul className="space-y-4 text-xs font-light tracking-wide">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-pink shrink-0" />
                <span>Ed. Nuh, Av. Coruña y Alberto Mena, Quito</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-pink shrink-0" />
                <span>098 383 8600</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-[10px] text-brand-gold">Horarios</h4>
            <ul className="space-y-3 text-xs font-light tracking-wide">
              <li className="flex justify-between">
                <span>Lun - Vie:</span>
                <span>9:00 AM - 5:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between text-brand-pink-dark font-medium italic">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-gray-400 gap-4 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} MEU TEMPO. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-pink transition-colors">Privacidad</a>
            <span>|</span>
            <div className="group flex items-center">
              <span>Creado por </span>
              <a 
                href="https://mantaiweb.com/" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1 font-bold text-gray-500 hover:text-brand-pink transition-colors relative"
              >
                MANTAI WEB DESIGNER COMPANY
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
