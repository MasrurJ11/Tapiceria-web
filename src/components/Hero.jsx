import React from "react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: "url(/hero.jpg)", // La imagen debe estar en public/hero.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
          <span style={{ color: "#000" }}>Tapicería Alberto</span>
        </h1>

        <p
          style={{
            marginTop: "1rem",
            color: "#000",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Restauramos y modernizamos la tapicería de tu vehículo con materiales
          premium.
        </p>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Botón Ver Catálogo */}
          <a
            href="#catalogo"
            className="btn"
            style={{
              backgroundColor: "#16a34a", // verde
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#138d36";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#16a34a";
            }}
          >
            Ver catálogo
          </a>

          {/* Botón Nuestros Trabajos igual a Ver Catálogo */}
          <a
            href="#trabajos"
            style={{
              backgroundColor: "#16a34a", // verde igual que catálogo
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#138d36";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#16a34a";
            }}
          >
            Nuestros trabajos
          </a>
        </div>
      </div>
    </section>
  );
}
