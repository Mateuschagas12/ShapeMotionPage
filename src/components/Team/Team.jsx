import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team">
      <h2>Nossa Equipe</h2>
      <div className="team-grid">
        <div className="team-member">
          <h3>José Mateus</h3>
          <p>Desenvolvedor</p>
          <a href="https://github.com/Mateuschagas12" target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub
            </a>
        </div>
        <div className="team-member">
          <h3>Felipe Patriota</h3>
          <p>CEO</p>
          <a href="https://github.com/FelipePatriota" target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
