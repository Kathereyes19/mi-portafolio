import React from 'react';
import './styles/global.css';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Páginas
import Home from './pages/Home/Home';
import Focus from './components/Focus/Focus';
import About from './pages/About/About';
import Tools from './components/Tools/Tools';
import Experience from './pages/Experience/Experience';
import Companies from './components/Companies/Companies';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
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
        <Companies />
        <Education />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
