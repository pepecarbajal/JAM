import React from "react";

// Función para desplazar a la sección de contacto
const scrollToContact = () => {
  const contactSection = document.getElementById("contact-section");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Función para desplazar a la sección de proyectos
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects-section");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <h1 className="hero-heading">
          Desarrollo de Software 
          <span className="hero-highlight"> a la medida</span>
        </h1>
        <p className="hero-paragraph">
          Transformamos tus ideas en soluciones digitales innovadoras. Expertos en desarrollo web y software
          empresarial.
        </p>
        <div className="hero-button-container">
        <button className="hero-contact-button" onClick={scrollToContact}>
            Contactar
          </button>
          <button className="hero-project-button" onClick={scrollToProjects}>
            Ver Proyectos
          </button>
        </div>
      </div>
      <div>
        <picture>
          <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
          <source srcSet="/logo-light.png" media="(prefers-color-scheme: light)" />
          <img src="/logo-light.png" alt="Logo" className="hero-logo" />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;