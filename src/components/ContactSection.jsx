import React from "react"

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Contáctanos</h2>
      <div className="form-container">
        <form>
          <div className="form-group">
            <input className="input" type="text" placeholder="Nombre" name="nombre" />
            <input className="input" type="tel" placeholder="Teléfono" name="telefono" />
          </div>
          <div className="form-group">
            <input className="input" type="text" placeholder="Asunto" name="asunto" />
          </div>
          <div className="form-group">
            <textarea className="textarea" placeholder="Mensaje" name="mensaje" />
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
