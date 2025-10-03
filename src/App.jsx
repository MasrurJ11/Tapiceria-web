<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Categorias from "./pages/Categorias";
import Catalogo from "./pages/Catalogo";
import Trabajos from "./pages/Trabajos";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "calc(100vh - 160px)",
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centra horizontal
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/trabajos" element={<Trabajos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
=======
import React from 'react'
import Navbar from './components/navbar';
import Home from './components/Home'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}

export default App
>>>>>>> bdfc1629bda4836a0927239bbdbdd56a5f66db08
