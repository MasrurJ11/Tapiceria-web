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
