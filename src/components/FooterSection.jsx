import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="main-content">
          <div className="logo-container">
            <picture>
              <source
                srcSet="/logo-dark.png"
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcSet="/logo-light.png"
                media="(prefers-color-scheme: light)"
              />
              <img src="/logo-light.png" alt="Logo" className="hero-logo" />
            </picture>
          </div>

          <div className="column">
            <h3 className="heading">Servicios</h3>
            <a href="#" className="link">
              Web Informativa
            </a>
            <a href="#" className="link">
              Sistema web básico
            </a>
            <a href="#" className="link">
              Desarrollo a la medida
            </a>
          </div>
          <div className="column">
            <h3 className="heading">Contacto</h3>
            <a
              href="https://wa.me/527471757401"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              +52 747 175 7401
            </a>
            <a
              href="https://wa.me/527561270452"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              +52 756 127 0452
            </a>
            <a
              href="https://wa.me/527471674419"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              +52 747 167 4419
            </a>
            <a href="mailto:jamsoftware@outlook.com" className="link">
              jamsoftware@outlook.com
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2025 JAM Desarrollo de Software. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
