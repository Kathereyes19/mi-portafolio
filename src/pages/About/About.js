import React, { useState, useEffect } from 'react';
import './About.css';
import profileImage from '../../assets/img/foto-katherine.png';
import cvFile from '../../assets/docs/Katherine_Reyes_CV.pdf';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

// Iconos
import { FaDownload, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';

const About = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile para mostrar el botón
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`about ${theme === 'dark' ? 'dark' : ''}`} id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">{t('about.title')}</h2>
          <p className={`about-description ${isExpanded ? 'expanded' : ''}`}>
            {t('about.description')}
          </p>

          {/* Botón solo visible en mobile */}
          {isMobile && (
            <button className="read-more-btn" onClick={toggleReadMore}>
              {isExpanded ? t('about.readLess') : t('about.readMore')}
            </button>
          )}

          <div className="about-buttons">
            <a href={cvFile} download className="btn">
              <FaDownload className="btn-icon" /> {t('about.cv')}
            </a>
            <a
              href="https://www.linkedin.com/in/katherine-reyes-60859a307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaLinkedin className="btn-icon" /> LinkedIn
            </a>
            <a
              href="https://www.behance.net/katherinereyes119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaBehance className="btn-icon" /> Behance
            </a>
            <a
              href="https://www.instagram.com/kathereyes.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaInstagram className="btn-icon" /> Instagram
            </a>
          </div>
        </div>

        <div className="about-image">
          <img src={profileImage} alt="Katherine Reyes" />
        </div>
      </div>
    </section>
  );
};

export default About;
