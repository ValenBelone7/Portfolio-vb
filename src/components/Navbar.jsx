import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${
      scrolled ? 'bg-[#0d0d0d]/95 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg className="w-9 h-9" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="2"/>
            <path d="M30,60 Q50,30 70,60" fill="none" stroke="#d4d4d4" strokeWidth="3"/>
            <path d="M70,60 Q50,80 30,60" fill="none" stroke="#d4d4d4" strokeWidth="3"/>
          </svg>
          <span className="font-['Cinzel'] text-2xl font-bold text-[#d4d4d4]">VB</span>
        </div>
        
        <ul className="flex gap-10">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'sobre-mi', label: 'Sobre mí' },
            { id: 'proyectos', label: 'Proyectos' },
            { id: 'skills', label: 'Skills' },
            { id: 'contacto', label: 'Contacto' }
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="font-['Cinzel'] text-[#d4d4d4] hover:text-[#d4af37] transition-colors relative group text-base inline-block"
              >
                {item.label}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;