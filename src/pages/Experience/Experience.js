import React from 'react';
import './Experience.css';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import './Experience.css';


const Experience = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const experiences = t('experiences', { returnObjects: true });

  return (
    <section className="experience-section">
      <h2 className={`experience-title ${theme}`}>{t('experience')}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <p className={`experience-role ${theme}`}>{exp.role}</p>
            <p className={`experience-company ${theme}`}>{exp.company}</p>
            <p className={`experience-period ${theme}`}>{exp.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
