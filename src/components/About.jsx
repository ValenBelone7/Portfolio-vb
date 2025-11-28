import React from "react";
import Divider from "./Divider";

const About = () => {
  return (
    <section id="sobre-mi" className="py-12 px-6 md:px-[10%] bg-gradient-to-b from-[#0f1419] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#d4af37] text-center mb-2">
          Sobre mí
        </h2>
        <Divider />
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-center mt-12">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d4af37] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="/avatar.png" 
                alt="Valentín Belone"
                className="relative w-full max-w-[350px] transition-transform group-hover:scale-[1.02] drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
              Técnico Superior en Desarrollo de Software, con una sólida formación en programación y tecnologías modernas. Me apasiona crear soluciones que integren lógica, diseño y funcionalidad.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
              Actualmente continúo fortaleciendo mis conocimientos en <span className="text-[#d4af37] font-semibold">Python</span>, <span className="text-[#d4af37] font-semibold">JavaScript</span>, <span className="text-[#d4af37] font-semibold">React</span>, bases de datos y DevOps, con el objetivo de seguir creciendo profesionalmente dentro del mundo del desarrollo de software.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
              Me motiva trabajar en equipo, aprender de otros profesionales y participar en proyectos que impulsen la innovación y la mejora continua. Siempre busco nuevos desafíos que me permitan aprender, aportar valor y seguir evolucionando en el ámbito tecnológico.
            </p>
            
            <div className="pt-4">
              <span className="inline-block px-6 py-3 border-2 border-[#d4af37] bg-[#d4af37]/10 font-['Cinzel'] text-sm text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse-slow relative overflow-hidden group cursor-default">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping"></span>
                  DISPONIBLE PARA TRABAJAR
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(212, 175, 55, 0.8);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;