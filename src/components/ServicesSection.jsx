import { FiMonitor, FiSmartphone, FiCode } from "react-icons/fi";

const ServicesSection = () => {
  return (
    <section className="features-section">
      <h2 className="services-heading">¿Qué tipo de servicio necesitas?</h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <FiMonitor />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Landing Page</h3>
            <p className="feature-description">Diseño de páginas de aterrizaje atractivas y efectivas</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FiSmartphone />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Sistema Web Básico</h3>
            <p className="feature-description">Soluciones web funcionales para pequeñas empresas</p>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FiCode />
          </div>
          <div className="feature-content">
            <h3 className="feature-title">Software a la Medida</h3>
            <p className="feature-description">Desarrollo de software personalizado según tus necesidades</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;