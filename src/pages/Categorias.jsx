import React from "react";

const categorias = ["Asientos", "Volantes", "Paneles", "Techos"];

export default function Categorias() {
  return (
    <section>
      <h2 style={{ textAlign: "center", color: "#000" }}>Categorías</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center"
        }}
      >
        {categorias.map(cat => (
          <div key={cat} style={{
            backgroundColor: "#f3f3f3",
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            textAlign: "center",
            minWidth: "120px",
            color: "#000"
          }}>
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
