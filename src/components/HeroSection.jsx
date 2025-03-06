import React from "react";
import "./HeroSection.css"; // Asegúrate de importar el archivo CSS

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
          <button className="hero-contact-button">Contactar</button>
          <button className="hero-project-button">Ver Proyectos</button>
        </div>
      </div>
      <div>
        <img src="/logo.png" alt="Logo" className="hero-logo" />
      </div>
    </section>
  );
};

export default HeroSection;
