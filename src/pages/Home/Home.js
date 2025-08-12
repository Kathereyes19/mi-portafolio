import React from 'react';
import './Home.css';

// Logo único (blanco para fondo oscuro y claro)
import logoWhite from '../../assets/img/logo-darkII.png';

// Texturas laterales
import textureLeft from '../../assets/img/texture.png';
import textureRight from '../../assets/img/texture.png';

const Home = () => {
  return (
    <section className="home">
      <img src={textureLeft} alt="Decoración izquierda" className="home-texture left" />
      
      <div className="home-center">
        <img
          src={logoWhite}
          alt="Logo central"
          className="home-logo"
        />
      </div>

      <img src={textureRight} alt="Decoración derecha" className="home-texture right" />
    </section>
  );
};

export default Home;
