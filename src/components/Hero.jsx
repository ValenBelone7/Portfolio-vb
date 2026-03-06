import React, { useState, useEffect } from "react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-b from-[#0d0d0d] via-[#1a1a2e] to-[#0f1419] overflow-hidden py-20">
      {/* Efecto de niebla */}
      <div className="absolute inset-0 opacity-20 animate-fog" 
           style={{background: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence baseFrequency=\"0.02\" numOctaves=\"3\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23noise)\" opacity=\"0.05\"/%3E%3C/svg%3E')"}}
      ></div>
      
      {/* Saludo */}
      <p className="font-['Cinzel'] text-lg text-[#d4af37] mb-4 tracking-widest relative z-10 animate-fadeIn">
        BIENVENIDO A MI PORTFOLIO
      </p>
      
      {/* Nombre */}
      <h1 className="font-['Cinzel'] text-6xl md:text-7xl font-bold tracking-[0.1em] relative z-10 mb-6 animate-slideUp"
          style={{textShadow: '0 0 30px #d4af37, 0 0 60px rgba(212,175,55,0.5)'}}>
        VALENTÍN BELONE
      </h1>
      
      {/* Título profesional */}
      <p className="text-2xl text-[#d4d4d4] mb-6 font-light tracking-wide animate-slideUp delay-100">
        SOFTWARE DEVELOPER
      </p>
      
      {/* Descripción impactante */}
      <p className="text-lg text-[#8c8c8c] mb-12 font-light max-w-3xl px-4 leading-relaxed animate-slideUp delay-200">
        Transformo ideas en soluciones digitales robustas y escalables.
        <br />
        <span className="text-[#d4d4d4]">Full Stack Developer</span> especializado en crear experiencias que combinan 
        <span className="text-[#d4af37]"> lógica impecable</span>, 
        <span className="text-[#d4af37]"> diseño intuitivo</span> y 
        <span className="text-[#d4af37]"> funcionalidad avanzada</span>.
      </p>
      
      {/* Botones con iconos y efectos */}
      <div className="flex flex-wrap justify-center gap-6 z-10 animate-slideUp delay-300">
        <a href="https://www.linkedin.com/in/valent%C3%ADn-belone-a447b42b7/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="group px-8 py-4 font-['Cinzel'] border-2 border-[#1e3a5f] bg-transparent text-[#d4d4d4] hover:bg-[#1e3a5f] hover:border-[#d4af37] transition-all duration-300 relative overflow-hidden flex items-center gap-3">
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span className="relative z-10">LinkedIn</span>
          <div className="absolute inset-0 bg-[#1e3a5f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></div>
        </a>
        
        <a href="https://github.com/ValenBelone7" 
           target="_blank" 
           rel="noopener noreferrer"
           className="group px-8 py-4 font-['Cinzel'] border-2 border-[#1e3a5f] bg-transparent text-[#d4d4d4] hover:bg-[#1e3a5f] hover:border-[#d4af37] transition-all duration-300 relative overflow-hidden flex items-center gap-3">
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="relative z-10">GitHub</span>
          <div className="absolute inset-0 bg-[#1e3a5f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></div>
        </a>
        
        <a href="/CV_Valentin_Belone_Desarrollador_Software.pdf" 
           download
           className="group px-8 py-4 font-['Cinzel'] border-2 border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-300 relative overflow-hidden flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="relative z-10">Descargar CV</span>
        </a>
      </div>

      <style jsx>{`
        @keyframes fog {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, 50px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fog {
          animation: fog 20s infinite linear;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        .delay-300 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default Hero;