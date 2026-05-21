import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Divider from './Divider.jsx';

const Projects = () => {
  const projects = [
    {
      title: "SaaS de Gestión de Contratos Inmobiliarios",
      description: "Plataforma completa para gestionar contratos de alquiler. Automatiza cálculos de ajustes por inflación, seguimiento de pagos, detección de moras y genera recibos legales automáticamente. Proyecto entregado en producción y en uso.",
      technologies: ["React", "Django", "TypeScript", "PostgreSQL", "JWT", "Docker", "Vercel", "Render"],
      githubLinks: [
        { label: "Privado", url: "#" }
      ],
      image: "/saas-image.png",
      case: "Cliente pasó de gestionar en Excel a sistema centralizado"
    },
    {
      title: "Agente de IA para Compra de Tickets de Bus",
      description: "Bot conversacional con IA que automatiza la compra de tickets de bus vía Telegram. Busca destinos, selecciona horarios, gestiona pasajeros y completa compras por chat. Diseñado como alternativa moderna a portales tradicionales.",
      technologies: ["n8n", "LLMs", "Telegram API", "Automatización", "IA", "Workflows"],
      githubLinks: [
        { label: "Privado", url: "#" }
      ],
      image: "/bot-telegram-ai.svg",
      case: "Proyecto en posesión del cliente - Sistema de compra completamente automatizado"
    },
    {
      title: "Plataforma de Blogs - Sistema Full-Stack",
      description: "Aplicación web para crear y publicar blogs con panel de administración. Incluye autenticación de usuarios, gestión de artículos con editor enriquecido y sistema de roles. Proyecto académico implementado con arquitectura profesional.",
      technologies: ["React", "Flask", "Python", "Vite", "PrimeReact", "MySQL", "JWT", "Marshmallow"],
      githubLinks: [
        { label: "Backend", url: "https://github.com/ValenBelone7/efi-miniblog" },
        { label: "Frontend", url: "https://github.com/Tiagooo10/efi-javascript" }
      ],
      image: "/desktop-miniblog.png"
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