import React, { useState } from 'react';
import './Game.css';

const choices = ['piedra', 'papel', 'tijera'];

const RpsGame = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const handleChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setWinner('Empate');
    } else if (
      (userChoice === 'piedra' && computerChoice === 'tijera') ||
      (userChoice === 'papel' && computerChoice === 'piedra') ||
      (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
      setWinner('Tú ganaste!');
      setScore({ ...score, user: score.user + 1 });
    } else {
      setWinner('La IA ganó!');
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  return (
    <div className="rps-container">
      <div className="scoreboard">
        <div className="team">
          <span className="team-name">Jugador</span>
          <span className="score">{score.user}</span>
        </div>
        <span className="vs">VS</span>
        <div className="team">
          <span className="team-name">IA</span>
          <span className="score">{score.computer}</span>
        </div>
      </div>

      <div className="choices-container">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)} className="choice-btn">
            {choice === 'piedra' ? '✊' : choice === 'papel' ? '✋' : '✌️'}
          </button>
        ))}
      </div>

      {userChoice && computerChoice && (
        <div className="result">
          <div className="user-choice">
            <h2>Tú elegiste: {userChoice === 'piedra' ? '✊' : userChoice === 'papel' ? '✋' : '✌️'}</h2>
          </div>
          <div className="computer-choice">
            <h2>La IA eligió: {computerChoice === 'piedra' ? '✊' : computerChoice === 'papel' ? '✋' : '✌️'}</h2>
          </div>
        </div>
      )}

      <div className="winner">
        {winner && <h3>{winner}</h3>}
      </div>
    </div>
  );
};

export default RpsGame;