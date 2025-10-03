<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Categorías", to: "/categorias" },
    { label: "Catálogo", to: "/catalogo" },
    { label: "Trabajos", to: "/trabajos" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <header style={{
      position: "fixed",
      width: "100%",
      top: 0,
      background: "linear-gradient(to right, #000000, #111111)",
      zIndex: 1000
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem"
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(to bottom right, #16a34a, #22c55e)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "#000",
            borderRadius: "0.25rem"
          }}>A</div>
          <div style={{ fontWeight: "600", color: "#fff" }}>
            Tapicería <span style={{ color: "#22c55e" }}>Alberto</span>
          </div>
        </Link>

        {/* Menú Desktop */}
        <ul style={{
          display: window.innerWidth >= 768 ? "flex" : "none",
          gap: "1.5rem",
          listStyle: "none"
        }}>
          {navItems.map(n => (
            <li key={n.label}>
              <Link to={n.to} style={{ color: "#fff" }}>{n.label}</Link>
            </li>
          ))}
        </ul>

        {/* Botón Mobile */}
        <button
          style={{ display: window.innerWidth < 768 ? "block" : "none", background: "none", border: "none", color: "#fff" }}
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : "☰"}
        </button>
      </nav>

      {/* Menú Mobile */}
      {open && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          backgroundColor: "rgba(0,0,0,0.9)"
        }}>
          {navItems.map(n => (
            <Link key={n.label} to={n.to} onClick={() => setOpen(false)} style={{ padding: "0.5rem 0", color: "#fff" }}>
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
=======
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
>>>>>>> bdfc1629bda4836a0927239bbdbdd56a5f66db08
