import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Divider from './Divider.jsx';

const Projects = () => {
  const projects = [
    {
      title: "Miniblog Full Stack",
      description: "API REST completa desarrollada con Flask que evolucionó desde templates con Bootstrap hasta una arquitectura moderna con autenticación JWT, roles de usuario, y validación con Marshmallow. El frontend consume la API usando React + Vite con PrimeReact, ofreciendo una experiencia de usuario fluida y moderna para la gestión de publicaciones.",
      technologies: ["Python", "Flask", "React", "Vite", "PrimeReact", "JWT", "Marshmallow", "MySQL"],
      githubLinks: [
        { label: "Backend", url: "https://github.com/ValenBelone7/efi-miniblog" },
        { label: "Frontend", url: "https://github.com/Tiagooo10/efi-javascript" }
      ],
      liveLink: null
    },
    {
      title: "Sistema Inmobiliario",
      description: "Aplicación web completa para gestión inmobiliaria con dos interfaces diferenciadas: área pública con catálogo de propiedades, filtros de búsqueda, detalles de inmuebles y formulario de contacto; y panel administrativo con dashboard para empleados, gestión de propiedades y solicitudes. Desarrollado con énfasis en UX/UI y diseño responsive.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubLinks: [
        { label: "Repositorio", url: "https://github.com/ValenBelone7/Efi---Inmobiliaria---Prog-2" }
      ],
      liveLink: null
    },
    {
      title: "Análisis Predictivo en R",
      description: "Proyecto de ciencia de datos que implementa modelos predictivos e inferenciales sobre conjuntos de datos reales. Incluye análisis estadístico avanzado, visualizaciones interactivas, pruebas de hipótesis y conclusiones fundamentadas. Los resultados fueron presentados con visualizaciones profesionales en Canva.",
      technologies: ["R", "Análisis de Datos", "Machine Learning", "Estadística", "Visualización"],
      githubLinks: [
        { label: "Proyecto R", url: "#" }
      ],
      liveLink: null
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-6 md:px-[10%] bg-gradient-to-b from-[#0d0d0d] to-[#0f1419]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#d4af37] text-center mb-2">
          Proyectos
        </h2>
        <Divider />
        
        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;