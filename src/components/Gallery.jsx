import React from 'react'

function Gallery() {
  return (
    <section id="gallery" style={styles.section}>
      <h2>Galería</h2>
      <div style={styles.grid}>
        <img src="https://via.placeholder.com/150" alt="Trabajo 1" style={styles.img} />
        <img src="https://via.placeholder.com/150" alt="Trabajo 2" style={styles.img} />
        <img src="https://via.placeholder.com/150" alt="Trabajo 3" style={styles.img} />
        <img src="https://via.placeholder.com/150" alt="Trabajo 4" style={styles.img} />
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#ecf0f1',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  img: {
    width: '100%',
    borderRadius: '8px',
  }
}

export default Gallery
