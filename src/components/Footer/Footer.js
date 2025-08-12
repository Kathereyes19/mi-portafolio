import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Katherine Reyes - Diseñadora de medios interactivos</p>
    </footer>
  );
};

export default Footer;
