"use client"

import { useState } from "react"

export default function Projects() {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState("Todos")

  // Datos de ejemplo para los proyectos
  const allProjects = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      description:
        "Plataforma integral para la administración de recursos, inventario y finanzas de una empresa manufacturera.",
      category: "Software a la medida",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto1", // Enlace del proyecto
    },
    {
      id: 2,
      title: "E-commerce Boutique Moda",
      description:
        "Tienda en línea con catálogo de productos, carrito de compras y pasarela de pagos para una boutique de moda.",
      category: "Sistema Web",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto2", // Enlace del proyecto
    },
    {
      id: 3,
      title: "App de Delivery Local",
      description: "Aplicación móvil para gestión de pedidos y entregas a domicilio para restaurantes locales.",
      category: "Informativa",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto3", // Enlace del proyecto
    },
    {
      id: 4,
      title: "Portal Educativo",
      description:
        "Plataforma de aprendizaje en línea con cursos, evaluaciones y seguimiento de progreso para una institución educativa.",
      category: "Sistema Web",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto4", // Enlace del proyecto
    },
    {
      id: 5,
      title: "Sistema de Inventario",
      description:
        "Software para control y gestión de inventario con seguimiento en tiempo real y generación de reportes.",
      category: "Software a la medida",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto5", // Enlace del proyecto
    },
    {
      id: 6,
      title: "Aplicación de Fitness",
      description:
        "App móvil para seguimiento de rutinas de ejercicio, nutrición y progreso físico con planes personalizados.",
      category: "Informativa",
      image: "https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg",
      link: "https://ejemplo.com/proyecto6", // Enlace del proyecto
    },
  ]

  // Filtrar proyectos según el filtro activo
  const filteredProjects =
    activeFilter === "Todos" ? allProjects : allProjects.filter((project) => project.category === activeFilter)

  // Función para cambiar el filtro activo
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  // Función para desplazar a la sección de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects-section" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Nuestros Proyectos</h2>
        <p className="projects-subheading">Soluciones digitales que han transformado negocios</p>

        <div className="projects-filter">
          <button
            className={`filter-button ${activeFilter === "Todos" ? "active" : ""}`}
            onClick={() => handleFilterChange("Todos")}
          >
            Todos
          </button>
          <button
            className={`filter-button ${activeFilter === "Informativa" ? "active" : ""}`}
            onClick={() => handleFilterChange("Informativa")}
          >
            Informativa
          </button>
          <button
            className={`filter-button ${activeFilter === "Sistema Web" ? "active" : ""}`}
            onClick={() => handleFilterChange("Sistema Web")}
          >
            Sistema Web
          </button>
          <button
            className={`filter-button ${activeFilter === "Software a la medida" ? "active" : ""}`}
            onClick={() => handleFilterChange("Software a la medida")}
          >
            Software a la medida
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-project-button"
                  >
                    Visitar Web
                  </a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>¿Tienes un proyecto en mente?</p>
          <button className="cta-button" onClick={scrollToContact}>
            Hablemos de tu proyecto
          </button>
        </div>
      </div>
    </section>
  )
}