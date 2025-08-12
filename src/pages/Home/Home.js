import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';

// Logo único (blanco para fondo oscuro y claro)
import logoWhite from '../../assets/img/logo-darkII.png';

// Texturas laterales
import textureLeft from '../../assets/img/texture.png';
import textureRight from '../../assets/img/texture.png';

const Home = () => {
  const { t } = useTranslation();

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
            {t('home.subtitle')}
          </p>
        </div>
      </div>

      <img src={textureRight} alt="Decoración derecha" className="home-texture right" />
    </section>
  );
};

export default Home;

