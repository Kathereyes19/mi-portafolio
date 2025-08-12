import React from 'react';
import './styles/global.css';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Páginas
import Home from './pages/Home/Home';
import Focus from './components/Focus/Focus';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Brands from './pages/Brands/Brands';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Focus />
        <About />
        <Experience />
        <Projects />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
