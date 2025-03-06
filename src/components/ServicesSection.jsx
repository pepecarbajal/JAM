import { FiMonitor, FiSmartphone, FiCode } from "react-icons/fi"
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">¿Qué tipo de servicio necesitas?</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">
            <FiMonitor />
          </div>
          <h3 className="service-title">Landing Page</h3>
          <p className="service-description">Diseño de páginas de aterrizaje atractivas y efectivas</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FiSmartphone />
          </div>
          <h3 className="service-title">Sistema Web Básico</h3>
          <p className="service-description">Soluciones web funcionales para pequeñas empresas</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <FiCode />
          </div>
          <h3 className="service-title">Software a la Medida</h3>
          <p className="service-description">Desarrollo de software personalizado según tus necesidades</p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
