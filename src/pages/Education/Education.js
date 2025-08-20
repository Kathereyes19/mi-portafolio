import React, { useState } from 'react';
import './Education.css';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

import educationImg from '../../assets/img/universidad.jpg';
import certificatesImg from '../../assets/img/certificados.png';

const Education = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Arrays seguros (evita .map en undefined)
  const rawEdu = t('education.items', { returnObjects: true });
  const rawCert = t('certifications.items', { returnObjects: true });
  const educationItems = Array.isArray(rawEdu) ? rawEdu : [];
  const certificationItems = Array.isArray(rawCert) ? rawCert : [];

  // Sección activa en mobile: 'education' | 'certifications' | null
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (section) =>
    setActiveSection(activeSection === section ? null : section);

  return (
    <section
      id="education"
      className={`education-section ${theme === 'dark' ? 'dark' : ''}`}
    >
      {/* ======= DESKTOP ======= */}
      <div className="edu-desktop">
        {/* EDUCACIÓN: texto izq, imagen der */}
        <div className="edu-block">
          <div className="edu-text">
            <h2 className="edu-title">{t('education.title')}</h2>
            {educationItems.map((item, index) => (
              <div className="edu-item" key={`edu-${index}`}>
                <h3 className="edu-career">{item.career}</h3>
                <p className="edu-university">{item.university}</p>
                <p className="edu-detail">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="edu-image">
            <img src={educationImg} alt={t('education.title')} />
          </div>
        </div>

        {/* CERTIFICACIONES: imagen izq, texto der */}
        <div className="edu-block reverse">
          <div className="edu-image">
            <img src={certificatesImg} alt={t('certifications.title')} />
          </div>
          <div className="edu-text">
            <h2 className="edu-title">{t('certifications.title')}</h2>
            {certificationItems.map((item, index) => (
              <div className="edu-item" key={`cert-${index}`}>
                <h3 className="edu-career">{item.career}</h3>
                <p className="edu-university">{item.university}</p>
                <p className="edu-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= MOBILE ======= */}
      <div className="edu-mobile">
        {/* Imagen fija SIEMPRE ARRIBA (no se mueve) */}
        <img
          src={educationImg}
          alt={t('education.title')}
          className="edu-mobile-img"
        />

        {/* Botones apilados y contenido debajo de cada uno */}
        <div className="edu-mobile-buttons">
          {/* Botón: Educación */}
          <button
            className={`accordion-btn ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => toggleSection('education')}
            aria-expanded={activeSection === 'education'}
            aria-controls="edu-accordion"
          >
            {t('education.title')}
          </button>
          <div
            id="edu-accordion"
            className={`accordion-content ${activeSection === 'education' ? 'open' : ''}`}
          >
            {activeSection === 'education' && (
              <div className="accordion-inner">
                {educationItems.map((item, index) => (
                  <div className="edu-item" key={`edu-m-${index}`}>
                    <h3 className="edu-career">{item.career}</h3>
                    <p className="edu-university">{item.university}</p>
                    <p className="edu-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botón: Certificaciones */}
          <button
            className={`accordion-btn ${activeSection === 'certifications' ? 'active' : ''}`}
            onClick={() => toggleSection('certifications')}
            aria-expanded={activeSection === 'certifications'}
            aria-controls="cert-accordion"
          >
            {t('certifications.title')}
          </button>
          <div
            id="cert-accordion"
            className={`accordion-content ${activeSection === 'certifications' ? 'open' : ''}`}
          >
            {activeSection === 'certifications' && (
              <div className="accordion-inner">
                {certificationItems.map((item, index) => (
                  <div className="edu-item" key={`cert-m-${index}`}>
                    <h3 className="edu-career">{item.career}</h3>
                    <p className="edu-university">{item.university}</p>
                    <p className="edu-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
