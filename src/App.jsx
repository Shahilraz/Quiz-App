// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import MainManu from './Component/MainManu';
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';
import { QuizContext } from './Helper/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className='App'>
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainManu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
