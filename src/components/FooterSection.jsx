import React from "react"

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
              Desarrollo Web
            </a>
            <a href="#" className="link">
              Apps Móviles
            </a>
            <a href="#" className="link">
              Software Empresarial
            </a>
            <a href="#" className="link">
              Consultoría IT
            </a>
          </div>

          <div className="column">
            <h3 className="heading">Empresa</h3>
            <a href="#" className="link">
              Sobre Nosotros
            </a>
            <a href="#" className="link">
              Proyectos
            </a>
            <a href="#" className="link">
              Blog
            </a>
            <a href="#" className="link">
              Contacto
            </a>
          </div>

          <div className="column">
            <h3 className="heading">Contacto</h3>
            <p className="contact-info">info@jamdev.com</p>
            <p className="contact-info">(756) 127 0452</p>
            <p className="contact-info">Chilpancingo de los Bravo, Gro.</p>
          </div>
        </div>

        <div className="copyright">
          © 2025 JAM Desarrollo de Software. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection
