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

  const [errors, setErrors] = React.useState({
    nombre: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear the error message when the user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { nombre: "", telefono: "", asunto: "", mensaje: "" }

    // Validate nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido."
      isValid = false
    } else if (!/^[A-Za-z\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "El nombre solo debe contener letras y espacios."
      isValid = false
    }

    // Validate telefono
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido."
      isValid = false
    } else if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono solo debe contener números."
      isValid = false
    } else if (formData.telefono.length < 10 || formData.telefono.length > 10) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos."
      isValid = false
    }

    // Validate asunto
    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es requerido."
      isValid = false
    }

    // Validate mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
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

    if (!validateForm()) {
      return
    }

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
            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
            <input
              className="input"
              type="tel"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            {errors.telefono && <p className="error-message">{errors.telefono}</p>}
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
            {errors.asunto && <p className="error-message">{errors.asunto}</p>}
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
            {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
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