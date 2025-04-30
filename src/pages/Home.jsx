import React from 'react';
import RpsGame from '../components/Game';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="fade-in intro-section">
        <div className="intro-text">
          <h1 className="typewriter">Hola, soy Sergio</h1>
          <p className="typewriter2">Bienvenido a mi portfolio personal. Soy desarrollador web fullstack.</p>
          <a href="/CV Sergio Checa Alvea.pdf" download className="download-btn fade-in-btn">
            Descargar CV
          </a>
        </div>
      </div>

      <RpsGame />
    </div>
  );
}

export default Home;


  




  
  