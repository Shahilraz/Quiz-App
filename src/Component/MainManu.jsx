// src/Component/MainManu.jsx
import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helper/Contexts';
import AddQuestionForm from './AddQuestionForm'; // Ensure this path is correct

const MainManu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  const [showManageQuestions, setShowManageQuestions] = useState(false);

  return (
    <div className='Menu'>
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
      <button onClick={() => setShowManageQuestions(!showManageQuestions)}>
        {showManageQuestions ? "Hide Question Manager" : "Manage Questions"}
      </button>
      
      {showManageQuestions && <AddQuestionForm />}
    </div>
  );
}

export default MainManu;
