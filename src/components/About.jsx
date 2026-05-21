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
              Soy Valentín Belone, Técnico Superior en Desarrollo de Software especializado en crear soluciones web completas desde el relevamiento de requerimientos hasta el despliegue en producción.
            </p>
            
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold mt-0.5">▸</span>
                <span className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
                  <span className="text-[#d4af37] font-semibold">Desarrollo Full-Stack:</span> React, Django, Python en proyectos reales
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold mt-0.5">▸</span>
                <span className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
                  <span className="text-[#d4af37] font-semibold">Automatización e IA:</span> Agentes conversacionales, bots inteligentes, workflows complejos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold mt-0.5">▸</span>
                <span className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
                  <span className="text-[#d4af37] font-semibold">Proyectos en Producción:</span> Sistemas SaaS, gestión de datos en tiempo real, integraciones
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#d4af37] font-bold mt-0.5">▸</span>
                <span className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
                  <span className="text-[#d4af37] font-semibold">Metodologías Ágiles:</span> Scrum, trabajo colaborativo, buenas prácticas
                </span>
              </li>
            </ul>
            
            <p className="text-base md:text-lg leading-relaxed text-[#d4d4d4]">
              Me apasiona resolver problemas reales con tecnología y construir aplicaciones que generen impacto genuino en negocios y usuarios finales.
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