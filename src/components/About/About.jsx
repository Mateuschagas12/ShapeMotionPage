import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre o Projeto</h2>
      <p>
        Este projeto visa oferecer uma solução inovadora para combater o sedentarismo, que é um dos principais problemas de saúde na sociedade atual. Com funcionalidades como análise detalhada de desempenho e apoio de inteligência artificial com feedback visual, ele se destaca por transformar cada movimento em orientações em tempo real.
      </p>
      <p>
        O objetivo é proporcionar uma experiência imersiva e personalizada na jornada de exercícios físicos. Acreditamos que, com este projeto, podemos ajudar as pessoas a se manterem ativas, saudáveis e motivadas.
      </p>
      <a href="https://github.com/FelipeBert/Projeto-3" target="_blank" rel="noopener noreferrer" className="btn-repositorio">
        Ver Repositório
      </a>
    </section>
  );
}

export default About;
