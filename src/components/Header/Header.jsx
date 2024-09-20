import React from 'react';
import './Header.css';
import logo from "../../assets/logo.jpg"
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo ShapeMotion" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#intro">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#team">Equipe</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
