import React, { useState } from 'react';

const ProjectCard = ({ title, description, technologies, githubLinks, liveLink, isReversed }) => {
  const [selectedDevice, setSelectedDevice] = useState('desktop');

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20 ${isReversed ? 'md:direction-rtl' : ''}`}>
      {/* Imagen del proyecto */}
      <div className={`${isReversed ? 'md:order-2' : ''}`}>
        <div className="relative group">
          {/* Device Switcher */}
          <div className="flex gap-3 mb-4 justify-center md:justify-start">
            <button
              onClick={() => setSelectedDevice('mobile')}
              className={`px-4 py-2 border transition-all duration-300 font-['Cinzel'] text-sm ${
                selectedDevice === 'mobile'
                  ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]'
                  : 'border-[#8c8c8c] bg-transparent text-[#8c8c8c] hover:border-[#d4af37]'
              }`}
            >
              Mobile
            </button>
            <button
              onClick={() => setSelectedDevice('desktop')}
              className={`px-4 py-2 border transition-all duration-300 font-['Cinzel'] text-sm ${
                selectedDevice === 'desktop'
                  ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]'
                  : 'border-[#8c8c8c] bg-transparent text-[#8c8c8c] hover:border-[#d4af37]'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setSelectedDevice('tablet')}
              className={`px-4 py-2 border transition-all duration-300 font-['Cinzel'] text-sm ${
                selectedDevice === 'tablet'
                  ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]'
                  : 'border-[#8c8c8c] bg-transparent text-[#8c8c8c] hover:border-[#d4af37]'
              }`}
            >
              Tablet
            </button>
          </div>

          {/* Preview Image */}
          <div className="relative overflow-hidden bg-[#1a1a1a] border-2 border-[#8c8c8c] group-hover:border-[#d4af37] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src={`https://via.placeholder.com/600x400/1a1a1a/d4af37?text=${title}+${selectedDevice}`}
              alt={`${title} - ${selectedDevice}`}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className={`${isReversed ? 'md:order-1' : ''}`}>
        <h3 className="font-['Cinzel'] text-3xl md:text-4xl text-[#d4af37] mb-4">
          {title}
        </h3>
        
        <p className="text-base md:text-lg leading-relaxed text-[#d4d4d4] mb-6">
          {description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1e3a5f]/30 border border-[#1e3a5f] text-[#d4d4d4] text-sm font-['Inter'] hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          {githubLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border-2 border-[#1e3a5f] bg-transparent text-[#d4d4d4] hover:bg-[#1e3a5f] hover:border-[#d4af37] transition-all duration-300 flex items-center gap-2 font-['Cinzel'] text-sm"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {link.label}
            </a>
          ))}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 border-2 border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-all duration-300 flex items-center gap-2 font-['Cinzel'] text-sm shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;