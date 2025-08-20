import React, { useState } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import logoLight from '../../assets/img/logo-light.png';
import logoDark from '../../assets/img/logo-dark.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <header className="site-header">
        <div className="logo-container">
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Logo"
            className="logo"
          />
          <span className="site-name">Katherine Reyes</span>
        </div>

        {/* Menú de escritorio */}
        <nav className="desktop-menu">
          <a href="#home">{t('header.home')}</a>
          <a href="#about">{t('header.about')}</a>
          <a href="#experience">{t('header.experience')}</a>
          <a href="#projects">{t('header.projects')}</a>
          <a href="#contact">{t('header.contact')}</a>

          <div className="controls">
            <div className="switch" onClick={changeLanguage}>
              <div className={`slider ${i18n.language === 'es' ? 'left' : 'right'}`}>
                {i18n.language === 'es' ? 'ES' : 'EN'}
              </div>
            </div>
            <div className="switch" onClick={toggleTheme}>
              <div className={`slider ${theme === 'light' ? 'left' : 'right'}`}>
                {theme === 'light' ? '☀️' : '🌑'}
              </div>
            </div>
          </div>
        </nav>

        {/* Botón hamburguesa */}
        <div className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}

      {/* Menú móvil */}
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>

        <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('header.home')}</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>{t('header.experience')}</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('header.projects')}</a>
        <a href="#brands" onClick={() => setIsMenuOpen(false)}>{t('header.brands')}</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a>

        {/* Sliders dentro del menú móvil */}
        <div className="mobile-controls">
          <div className="switch" onClick={changeLanguage}>
            <div className={`slider ${i18n.language === 'es' ? 'left' : 'right'}`}>
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </div>
          </div>
          <div className="switch" onClick={toggleTheme}>
            <div className={`slider ${theme === 'light' ? 'left' : 'right'}`}>
              {theme === 'light' ? '☀️' : '🌑'}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
