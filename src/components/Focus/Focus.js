import React from 'react';
import './Focus.css';
import { useTranslation } from 'react-i18next';

const Focus = () => {
  const { t } = useTranslation();

  const focuses = [
    t('focus.uxui'),
    t('focus.branding'),
    t('focus.identity'),
    t('focus.multimedia'),
    t('focus.graphic'),
    t('focus.strategy')
  ];

  return (
    <section className="focus-section">
      <div className="focus-container">
        {focuses.map((item, index) => (
          <div key={index} className="focus-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Focus;
