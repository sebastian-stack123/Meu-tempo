import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Productos', href: '#productos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'glass py-4 border-white/60' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col z-50 group">
          <span className={`font-serif text-2xl font-bold tracking-widest uppercase transition-colors group-hover:text-brand-pink ${isScrolled ? 'text-brand-pink-dark' : 'text-brand-pink-dark'}`}>
            MEU TEMPO
          </span>
          <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase">Centro Estético</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`hover:text-brand-pink transition-colors ${isScrolled ? 'text-[#4A4A4A]' : 'text-[#4A4A4A]'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://linktr.ee/MeuTempoSpa?utm_source=linktree_admin_share&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnz4JqATiXfQwGkbWhhvEFTxIhr7OBNhcU6GziQG4VpyA6uCI2ecbNtet30UE_aem_tR7WW1QCBHqnX8cjzcyDzg" 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-2 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-white transition-all bg-white/40 backdrop-blur-sm"
          >
            Agendar Cita
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-[#4A4A4A]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium tracking-widest uppercase text-gray-800 hover:text-brand-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://linktr.ee/MeuTempoSpa?utm_source=linktree_admin_share&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnz4JqATiXfQwGkbWhhvEFTxIhr7OBNhcU6GziQG4VpyA6uCI2ecbNtet30UE_aem_tR7WW1QCBHqnX8cjzcyDzg" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-brand-pink text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand-pink/40 mt-4"
            >
              Agendar Cita
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
