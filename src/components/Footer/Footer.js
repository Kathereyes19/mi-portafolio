import React from 'react';
import './Footer.css';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { theme } = useTheme(); // Obtenemos el tema actual
  const { t } = useTranslation(); // Función de traducción

  return (
    <footer className={`site-footer ${theme === 'dark' ? 'dark' : 'light'}`}>
      <p>© {new Date().getFullYear()} {t('footer.name')} - {t('footer.role')}</p>
    </footer>
  );
};

export default Footer;
