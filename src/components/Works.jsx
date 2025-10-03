import React from "react";

export default function Works() {
  const works = [
    { title: "Asientos de cuero negro", image: "public/works/AsientoCuero.jpg" },
    { title: "Tapizado de techo", image: "/public/works/TapizadoTecho.jpg" },
    { title: "Pisos", image: "/public/works/pisos.jpg" },
  ];

  return (
    <section id="trabajos">
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Nuestros trabajos</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem"
      }}>
        {works.map((work, index) => (
          <div key={index} className="card" style={{
            height: "180px",
            backgroundImage: `url(${work.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            padding: "0.5rem"
          }}>
            <div style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem"
            }}>
              <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: "600" }}>{work.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
