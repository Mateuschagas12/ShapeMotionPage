import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h2>Pitch do Projeto</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/watch?v=WZmkbPxgDFQ" 
          title="Vídeo do Pitch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
