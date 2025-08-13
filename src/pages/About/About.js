import React from 'react';
import './About.css';
import profileImage from '../../assets/img/foto-katherine.png';
import cvFile from '../../assets/docs/Katherine_Reyes_CV.pdf';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';

// Iconos
import { FaDownload, FaLinkedin, FaBehance } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`about ${theme === 'dark' ? 'dark' : ''}`} id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">{t('about.title')}</h2>
          <p className="about-description">{t('about.description')}</p>

          <div className="about-buttons">
            <a href={cvFile} download className="btn">
              {t('about.cv')} <FaDownload className="btn-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/katherine-reyes-60859a307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn <FaLinkedin className="btn-icon" />
            </a>
            <a
              href="https://www.behance.net/katherinereyes119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Behance <FaBehance className="btn-icon" />
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
