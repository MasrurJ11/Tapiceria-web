<<<<<<< HEAD
import React from "react";

export default function Contact() {
  return (
    <section id="contacto">
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>Contacto</h2>
      <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "500px" }}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea placeholder="Mensaje" rows={4}></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}
=======
import React from 'react'

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contacto</h2>
      <p>¿Quieres más información o pedir un presupuesto? Escríbenos por WhatsApp:</p>
      <a
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        style={styles.button}
      >
        Enviar WhatsApp
      </a>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#bdc3c7',
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '1rem',
  }
}

export default Contact
>>>>>>> bdfc1629bda4836a0927239bbdbdd56a5f66db08
