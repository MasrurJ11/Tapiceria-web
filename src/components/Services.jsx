import React from 'react'

function Services() {
  return (
    <section id="services" style={styles.section}>
      <h2>Servicios</h2>
      <ul>
        <li>Reparación de tapicería</li>
        <li>Tapizado personalizado</li>
        <li>Revestimiento de techos</li>
        <li>Restauración de interiores</li>
      </ul>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#bdc3c7',
  }
}

export default Services
