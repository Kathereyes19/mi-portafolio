import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header">
      <h1>Katherine Reyes</h1>
      <nav>
        <a href="#home">{t('header.home')}</a>
        <a href="#about">{t('header.about')}</a>
        <a href="#experience">{t('header.experience')}</a>
        <a href="#projects">{t('header.projects')}</a>
        <a href="#brands">{t('header.brands')}</a>
        <a href="#contact">{t('header.contact')}</a>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
