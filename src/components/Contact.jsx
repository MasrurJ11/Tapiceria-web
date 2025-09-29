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
