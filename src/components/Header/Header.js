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

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false); // Cierra el menú móvil al hacer click
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Opcional para Inicio
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
          <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {t('header.home')}
          </a>
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

        <a href="#home" onClick={handleMenuLinkClick}>{t('header.home')}</a>
        <a href="#about" onClick={handleMenuLinkClick}>{t('header.about')}</a>
        <a href="#experience" onClick={handleMenuLinkClick}>{t('header.experience')}</a>
        <a href="#projects" onClick={handleMenuLinkClick}>{t('header.projects')}</a>
        <a href="#contact" onClick={handleMenuLinkClick}>{t('header.contact')}</a>

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
