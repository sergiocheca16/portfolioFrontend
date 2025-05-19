import React from "react";
import RpsGame from "../components/Game"

function Home() {
  return (
    <div className="fade-in">
      <h2>Hola, soy Sergio</h2>
      <p className="p-home">Bienvenido a mi portfolio personal. Soy desarrollador web fullstack.</p>
      <div style={{ textAlign: 'center' }}>
        <a href="/CV Sergio Checa Alvea.pdf" download className="download-btn fade-in-btn">
          Descargar CV
        </a>
      </div>
      <RpsGame />
    </div>
  )
}

export default Home;



  