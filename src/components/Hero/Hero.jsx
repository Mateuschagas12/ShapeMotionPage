import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h2>Pitch do Projeto</h2>
      <div className="video-thumbnail">
        <a href="https://www.youtube.com/watch?v=WZmkbPxgDFQ" target='_blank' rel='noopener noreferrer'>
        <img src="https://img.youtube.com/vi/WZmkbPxgDFQ/maxresdefault.jpg" alt="Assista ao vídeo do projeto" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
