import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>ShapeMotion © 2024</p>
      <nav>
        <ul>
          <li><a href="#intro">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#team">Equipe</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
