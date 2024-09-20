import React from 'react';
import "./Intro.css"
import imagem1 from "../../public/imagem1.jpg"
import imagem2 from "../../public/imagem2.jpg"

const Intro = () => {
  return (
    <section id='intro' className="intro">
      <h1>ShapeMotion</h1>
      <p>Seu mentor fitness com inteligência artificial.</p>
      <div className="images">
        <img src={imagem1} alt="Imagem 1" />
        <img src={imagem2} alt="Imagem 2" />
      </div>
    </section>
  );
};

export default Intro;
