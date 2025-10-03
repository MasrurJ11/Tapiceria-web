import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      textAlign: "center",
      background: "linear-gradient(to right, #111, #000)",
      color: "#fff"
    }}>
      {/* Redes Sociales */}
      <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
          <FaInstagram />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
          <FaWhatsapp />
        </a>
        <a href="mailto:contacto@tapiceriaalberto.com" style={{ color: "#fff" }}>
          <FaEnvelope />
        </a>
      </div>

      <p>© 2025 Tapicería Alberto. Todos los derechos reservados.</p>
      <p>Dirección: Av. Principal 123, Ciudad | Tel: +51 987 654 321</p>
      <p>Email: contacto@tapiceriaalberto.com</p>
    </footer>
  );
}
