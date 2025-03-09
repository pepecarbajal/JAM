"use client"

import React from "react"

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const [notification, setNotification] = React.useState({
    visible: false,
    message: "",
    type: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const showNotification = (message, type) => {
    setNotification({
      visible: true,
      message,
      type,
    })

    setTimeout(() => {
      setNotification((prev) => ({
        ...prev,
        visible: false,
      }))
    }, 5000)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData(event.target)
    const data = {
      nombre: formDataToSend.get("nombre"),
      telefono: formDataToSend.get("telefono"),
      asunto: formDataToSend.get("asunto"),
      descripcion: formDataToSend.get("mensaje"),
    }
    console.log(data)

    try {
      const response = await fetch("https://jam-send.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormData({
          nombre: "",
          telefono: "",
          asunto: "",
          mensaje: "",
        })

        showNotification(`Gracias ${data.nombre}. Nos comunicaremos contigo a la brevedad posible.`, "success")
      } else {
        showNotification("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.", "error")
      }
    } catch (error) {
      console.error("Error:", error)
      showNotification("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.", "error")
    }
  }

  return (
    <section id="contact-section" className="contact-section">
      {/* Custom notification */}
      {notification.visible && (
        <div className="notification-wrapper">
          <div className={`notification ${notification.type}`}>
            <div className="notification-icon">
              {notification.type === "success" ? (
                <svg viewBox="0 0 24 24" fill="none" className="check-icon">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="error-icon">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="notification-content">
              <div className="notification-title">{notification.type === "success" ? "Mensaje Enviado" : "Error"}</div>
              <p className="notification-message">{notification.message}</p>
            </div>
          </div>
        </div>
      )}

      <h2>Contáctanos</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="tel"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="Asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="textarea"
              placeholder="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>
      </div>

    </section>
  )
}

export default ContactSection

