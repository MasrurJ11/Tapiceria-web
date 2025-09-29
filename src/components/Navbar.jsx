import React from 'react'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Tapicería Auto</h1>
      <ul style={styles.ul}>
        <li><a href="#home" style={styles.a}>Inicio</a></li>
        <li><a href="#services" style={styles.a}>Servicios</a></li>
        <li><a href="#gallery" style={styles.a}>Galería</a></li>
        <li><a href="#contact" style={styles.a}>Contacto</a></li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { margin: 0 },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
}

export default Navbar
