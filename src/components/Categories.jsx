import React from "react";

export default function Categories() {
  const categories = [
    { title: "Asientos", subtitle: "Cuero / Tela / Alcántara" },
    { title: "Techos", subtitle: "Retapizados y limpiezas" },
    { title: "Paneles", subtitle: "Tapizado de puertas" },
    { title: "Alfombras", subtitle: "A medida y resistentes" },
  ];

  return (
    <section id="categorias">
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1.5rem" }}>Categorías</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {categories.map((cat) => (
          <div key={cat.title} className="card" style={{ height: "200px", display: "flex", alignItems: "flex-end", padding: "0.5rem" }}>
            <div>
              <h3 style={{ fontWeight: "600", color: "#fff" }}>{cat.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
