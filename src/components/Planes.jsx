
const Planes = () => {
  return (
    <div className="planes-wrapper">
      <div className="planes-container">
        <div className="plan-card landing">
          <div className="card-decoration"></div>
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon landing-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <h3>Web Informativa</h3>
            </div>

            <div className="plan-badge">Básico</div>

            <div className="card-divider"></div>

            <div className="features-list">
              <ul>
                <li>
                  <span className="check-icon">✓</span> Diseño responsive
                </li>
                <li>
                  <span className="check-icon">✓</span> Optimización SEO básica
                </li>
                <li>
                  <span className="check-icon">✓</span> Formulario de contacto
                </li>
                <li>
                  <span className="check-icon">✓</span> Integración con redes
                  sociales
                </li>
                <li>
                  <span className="check-icon">✓</span> Dominio .com personalizado
                </li>
              </ul>
            </div>
          </div>

          <div className="card-footer">
            <div className="card-divider"></div>
            <div className="card-details">
              <span className="price">$99</span>
              <span className="period">mensual</span>
            </div>
          </div>
        </div>

        <div className="plan-card sistema">
          <div className="card-decoration"></div>
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon sistema-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3>Sistema Web Básico</h3>
            </div>

            <div className="plan-badge">Intermedio</div>

            <div className="card-divider"></div>

            <div className="features-list">
              <ul>
                <li>
                  <span className="check-icon">✓</span> Panel de administración
                </li>
                <li>
                  <span className="check-icon">✓</span> Gestión de usuarios
                </li>
                <li>
                  <span className="check-icon">✓</span> Base de datos
                  personalizada
                </li>
                <li>
                  <span className="check-icon">✓</span> Reportes básicos
                </li>
                <li>
                  <span className="check-icon">✓</span> Integración con APIs
                </li>
                <li>
                  <span className="check-icon">✓</span> Soporte técnico
                </li>
                <li>
                  <span className="check-icon">✓</span> Actualizaciones
                  mensuales
                </li>
              </ul>
            </div>
          </div>

          <div className="card-footer">
            <div className="card-divider"></div>
            <div className="card-details">
              <span className="price">$299</span>
              <span className="period">mensual</span>
            </div>
          </div>
        </div>

        <div className="plan-card software">
          <div className="card-decoration"></div>
          <div className="card-content">
            <div className="card-header">
              <div className="card-icon software-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Software a Medida</h3>
            </div>

            <div className="plan-badge">Premium</div>

            <div className="card-divider"></div>

            <div className="features-list">
              <ul>
                <li>
                  <span className="check-icon">✓</span> Análisis de
                  requerimientos
                </li>
                <li>
                  <span className="check-icon">✓</span> Desarrollo personalizado
                </li>
                <li>
                  <span className="check-icon">✓</span> Integraciones avanzadas
                </li>
                <li>
                  <span className="check-icon">✓</span> Reportes avanzados
                </li>
                <li>
                  <span className="check-icon">✓</span> Escalabilidad
                  garantizada
                </li>
                <li>
                  <span className="check-icon">✓</span> Soporte premium 24/7
                </li>
                <li>
                  <span className="check-icon">✓</span> Actualizaciones
                  ilimitadas
                </li>
                <li>
                  <span className="check-icon">✓</span> Consultoría
                  especializada
                </li>
              </ul>
            </div>
          </div>

          <div className="card-footer">
            <div className="card-divider"></div>
            <div className="card-details">
              <span className="price">$599</span>
              <span className="period">mensual</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
