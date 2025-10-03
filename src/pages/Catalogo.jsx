import React from "react";

const items = [
  { name: "Asiento deportivo", img: "/assets/asiento.jpg" },
  { name: "Volante premium", img: "/assets/volante.jpg" },
];

export default function Catalogo() {
  return (
    <section>
      <h2 style={{ textAlign: "center", color: "#000" }}>Catálogo</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {items.map(item => (
          <div key={item.name} style={{
            backgroundColor: "#f3f3f3",
            padding: "1rem",
            borderRadius: "0.5rem",
            textAlign: "center",
            minWidth: "200px",
            color: "#000"
          }}>
            <img src={item.img} alt={item.name} style={{ width: "100%", borderRadius: "0.5rem" }} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
