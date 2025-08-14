import React from 'react';
import './Tools.css';
import { useTheme } from '../../context/ThemeContext';
import toolsLight from '../../assets/tools/tools.png';
import toolsDark from '../../assets/tools/tools-dark.png';

const Tools = () => {
  const { theme } = useTheme(); // "light" o "dark"

  const toolsImage = theme === 'dark' ? toolsLight : toolsDark;

  return (
    <section className="tools-section">
      <div className="tools-track">
        <img src={toolsImage} alt="tools" className="tools-img" />
        <img src={toolsImage} alt="tools" className="tools-img" /> {/* duplicada para bucle */}
      </div>
    </section>
  );
};

export default Tools;

