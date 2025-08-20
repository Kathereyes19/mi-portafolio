import React from 'react';
import './Companies.css';
import { useTheme } from '../../context/ThemeContext';

// Imágenes (versión clara y oscura)
import companiesLight from '../../assets/img/companies/companies-light.png';
import companiesDark from '../../assets/img/companies/companies-dark.png';

const Companies = () => {
  const { theme } = useTheme();

  return (
    <section className={`companies-section ${theme}`}>
      <div className="companies-slider">
        <div className="companies-track">
          {/* Repetimos dos veces para el efecto infinito */}
          <img
            src={theme === 'light' ? companiesLight : companiesDark}
            alt="Empresas"
            className="companies-logo"
          />
          <img
            src={theme === 'light' ? companiesLight : companiesDark}
            alt="Empresas"
            className="companies-logo"
          />
          <img
            src={theme === 'light' ? companiesLight : companiesDark}
            alt="Empresas"
            className="companies-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
