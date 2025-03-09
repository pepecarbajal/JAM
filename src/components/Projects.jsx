import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 1,
      src: "https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg",
      alt: "Proyecto 1",
      title: "Diseño Web",
      description: "Desarrollo de sitios web modernos y responsivos",
    }
  ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
//     }, 5000); // Cambia de proyecto cada 2 segundos

//     return () => clearInterval(interval);
//   }, [projects.length]);

  const currentProject = projects[currentProjectIndex];

  return (
    <section className="projects-section">
      <div
        className="project-background"
        style={{ backgroundImage: `url(${currentProject.src})` }}
      >
        <div className="project-info">
          <h3 className="project-title">{currentProject.title}</h3>
          <p className="project-description">{currentProject.description}</p>
        </div>
      </div>
    </section>
  );
}