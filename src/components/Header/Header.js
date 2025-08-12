import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import logoLight from '../../assets/img/logo-light.png';
import logoDark from '../../assets/img/logo-dark.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="site-header">
      <div className="logo-container">
        <img
          src={theme === 'light' ? logoLight : logoDark}
          alt="Logo"
          className="logo"
        />
        <span className="site-name">Katherine Reyes</span>
      </div>

      <nav className="nav-links">
        <a href="#home">{t('header.home')}</a>
        <a href="#about">{t('header.about')}</a>
        <a href="#experience">{t('header.experience')}</a>
        <a href="#projects">{t('header.projects')}</a>
        <a href="#brands">{t('header.brands')}</a>
        <a href="#contact">{t('header.contact')}</a>

        <div className="controls">
          {/* Switch de idioma */}
          <div className="switch" onClick={changeLanguage}>
            <div className={`slider ${i18n.language === 'es' ? 'left' : 'right'}`}>
              {i18n.language === 'es' ? 'ES' : 'EN'}
            </div>
          </div>

          {/* Switch de tema */}
          <div className="switch" onClick={toggleTheme}>
            <div className={`slider ${theme === 'light' ? 'left' : 'right'}`}>
              {theme === 'light' ? '☀️' : '🌙'}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
