import React from "react";

export default function Contacto() {
  return (
    <section>
      <h2 style={{ textAlign: "center", color: "#000" }}>Contacto</h2>
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "500px",
        margin: "0 auto",
        color: "#000"
      }}>
        <input
          type="text"
          placeholder="Nombre"
          style={{
            border: "2px solid #16a34a",
            borderRadius: "0.5rem",
            padding: "0.5rem"
          }}
        />
        <input
          type="email"
          placeholder="Correo"
          style={{
            border: "2px solid #16a34a",
            borderRadius: "0.5rem",
            padding: "0.5rem"
          }}
        />
        <textarea
          placeholder="Mensaje"
          rows="5"
          style={{
            border: "2px solid #16a34a",
            borderRadius: "0.5rem",
            padding: "0.5rem"
          }}
        ></textarea>
        <button className="btn">Enviar</button>
      </form>
    </section>
  );
}
