import { useState } from "react";


const Hero = () => {
const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-b from-[#0d0d0d] via-[#1a1a2e] to-[#0f1419] overflow-hidden pt-20 pb-0"
    >
      {/* Imagen japonesa de fondo */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none overflow-hidden">
        <img
          src="hero-bg-min.webp"
          alt="Japanese Background"
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          className={`
            w-[140%]
            sm:w-[120%]
            md:w-full
            max-w-[1600px]
            h-auto
            object-contain
            select-none
            transition-all duration-[1800ms] ease-out

            ${
              imageLoaded
                ? "opacity-[0.16] blur-[0.3px]"
                : "opacity-0 blur-sm scale-[1.02]"
            }
          `}
          style={{
            objectPosition: "center bottom",
            transform: "translateY(22%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 70%, transparent 100%)",
            filter:
              "drop-shadow(0 0 40px rgba(212,175,55,0.12))",
          }}
        />
      </div>

      {/* Saludo */}
      <p className="font-['Cinzel'] text-lg text-[#d4af37] mb-4 tracking-widest relative z-10 animate-fadeIn">
        BIENVENIDO A MI PORTFOLIO
      </p>

      {/* Nombre */}
      <h1
        className="font-['Cinzel'] text-6xl md:text-7xl font-bold tracking-[0.1em] relative z-10 mb-6 animate-slideUp"
        style={{
          textShadow:
            "0 0 30px #d4af37, 0 0 60px rgba(212,175,55,0.5)",
        }}
      >
        VALENTÍN BELONE
      </h1>

      {/* Título */}
      <p className="text-2xl text-[#d4d4d4] mb-6 font-light tracking-wide animate-slideUp delay-100 relative z-10">
        SOFTWARE DEVELOPER
      </p>

      {/* Descripción */}
      <p className="text-lg text-[#8c8c8c] mb-12 font-light max-w-3xl px-4 leading-relaxed animate-slideUp delay-200 relative z-10">
        Transformo ideas en soluciones digitales robustas y escalables.
        <br />
        <span className="text-[#d4d4d4]">
          Full Stack Developer
        </span>{" "}
        especializado en crear experiencias que combinan
        <span className="text-[#d4af37]">
          {" "}
          lógica impecable
        </span>
        ,
        <span className="text-[#d4af37]">
          {" "}
          diseño intuitivo
        </span>{" "}
        y
        <span className="text-[#d4af37]">
          {" "}
          funcionalidad avanzada
        </span>
        .
      </p>

      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-6 z-10 animate-slideUp delay-300">
        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 font-['Cinzel'] border-2 border-[#1e3a5f] bg-transparent text-[#d4d4d4] hover:bg-[#1e3a5f] hover:border-[#d4af37] transition-all duration-300 relative overflow-hidden flex items-center gap-3"
        >
          <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="relative z-10">
            LinkedIn
          </span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 font-['Cinzel'] border-2 border-[#1e3a5f] bg-transparent text-[#d4d4d4] hover:bg-[#1e3a5f] hover:border-[#d4af37] transition-all duration-300 relative overflow-hidden flex items-center gap-3"
        >
          <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="relative z-10">
            GitHub
          </span>
        </a>

        {/* CV */}
        <a
          href="/CV_Valentin_Belone_Desarrollador_Software.pdf"
          download
          className="group px-8 py-4 font-['Cinzel'] border-2 border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-300 relative overflow-hidden flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
        >
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="relative z-10">
            Descargar CV
          </span>
        </a>
      </div>

      <style jsx>{`
        @keyframes fog {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50px, 50px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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