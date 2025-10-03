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
