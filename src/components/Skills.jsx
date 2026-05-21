import React from "react";
import Divider from "./Divider.jsx";

const Skills = () => {
  const skillsRow1 = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const skillsRow2 = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "n8n", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
    { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  ];

  // Duplicar arrays para loop perfecto
  const row1Items = [...skillsRow1, ...skillsRow1];
  const row2Items = [...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#0f1419] to-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#d4af37] text-center mb-2">
          Habilidades
        </h2>
        <Divider />
      </div>

      <div className="mt-16 relative">
        {/* Difuminado izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1419] to-transparent z-20 pointer-events-none"></div>
        
        {/* Difuminado derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1419] to-transparent z-20 pointer-events-none"></div>

        {/* Primera fila - scroll hacia la izquierda */}
        <div className="overflow-hidden pb-12 relative">
          {/* Gradient fade izquierda */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent z-20 pointer-events-none"/>
          {/* Gradient fade derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent z-20 pointer-events-none"/>
          <div className="flex gap-16 animate-scroll-left">
            {row1Items.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="flex flex-col items-center justify-center w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
                  />
                  <span className="mt-2 text-sm text-[#8c8c8c] group-hover:text-[#d4af37] transition-colors font-['Inter'] whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila - scroll hacia la derecha */}
        <div className="overflow-hidden pt-12 relative">
          {/* Gradient fade izquierda */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent z-20 pointer-events-none"/>
          {/* Gradient fade derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent z-20 pointer-events-none"/>
          <div className="flex gap-16 animate-scroll-right">
            {row2Items.map((skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="flex flex-col items-center justify-center w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
                  />
                  <span className="mt-2 text-sm text-[#8c8c8c] group-hover:text-[#d4af37] transition-colors font-['Inter'] whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }
        
        @keyframes scroll-right {
          from {
            transform: translateX(calc(-50%));
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;