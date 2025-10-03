import React from "react";

export default function Contact() {
  return (
    <section id="contacto">
      <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>Contacto</h2>
      <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>
        Completa el formulario y nos pondremos en contacto contigo lo antes posible.
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "500px" }}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea placeholder="Mensaje" rows={4}></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}
