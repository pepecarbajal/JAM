import React from "react"
import { FiShield, FiMonitor, FiClock, FiDatabase } from "react-icons/fi"

const FeaturesSection = () => {
  const features = [
    {
      title: "Garantía de Calidad",
      description: "Código limpio y pruebas exhaustivas para garantizar la mejor calidad",
      icon: <FiShield />,
    },
    {
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte en cualquier momento",
      icon: <FiClock />,
    },
    {
      title: "Mantenimiento Continuo",
      description: "Actualizaciones y mejoras constantes para tu software",
      icon: <FiDatabase />,
    },
  ]

  return (
    <section className="features-section">
      <h2>¡Más que desarrollo de software!</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
