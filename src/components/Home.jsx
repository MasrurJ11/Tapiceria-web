import React from 'react'

function Home() {
  return (
    <section id="home" style={styles.section}>
      <h2>Bienvenido a Tapicería Auto</h2>
      <p>Expertos en restauración y tapicería automotriz de calidad.</p>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  }
}

export default Home
