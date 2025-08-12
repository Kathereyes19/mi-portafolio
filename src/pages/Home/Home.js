import React from 'react';
import './Home.css';

// Logo único (blanco para fondo oscuro y claro)
import logoWhite from '../../assets/img/logo-banner.png';

// Texturas laterales
import textureLeft from '../../assets/img/texture.png';
import textureRight from '../../assets/img/texture.png';

const Home = () => {
  return (
    <section className="home">
      <img src={textureLeft} alt="Decoración izquierda" className="home-texture left" />
      
      <div className="home-center">
        <div className="home-content">
          <img
            src={logoWhite}
            alt="Logo central"
            className="home-logo"
          />
          <p className="home-subtitle">
            Diseñadora de medios interactivos | Comunicadora con enfoque digital
          </p>
        </div>
      </div>

      <img src={textureRight} alt="Decoración derecha" className="home-texture right" />
    </section>
  );
};

export default Home;
