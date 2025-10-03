import React from "react";

export default function Catalog() {
  const catalogItems = [
    { name: "Cuero negro", image: "/catalog/cuero-negro.jpg" },
    { name: "Tela gris", image: "/catalog/tela-gris.jpg" },
    { name: "Alcántara beige", image: "/catalog/alcantara-beige.jpg" },
    { name: "Cuero marrón", image: "/catalog/cuero-marron.jpg" },
    { name: "Tela azul", image: "/catalog/tela-azul.jpg" },
    { name: "Alfombra personalizada", image: "/catalog/alfombra.jpg" },
  ];

  return (
    <section id="catalogo">
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Catálogo</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem"
      }}>
        {catalogItems.map((item, index) => (
          <div key={index} className="card" style={{
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.85rem"
          }}>
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
