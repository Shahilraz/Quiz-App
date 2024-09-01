// src/Component/EndScreen.jsx
import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../Helper/Contexts';
import { getQuestions } from '../Helper/questions'; // Import the function to get questions

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch updated questions from local storage
    const updatedQuestions = getQuestions();
    setQuestions(updatedQuestions);
  }, []); // Empty dependency array to run only on mount

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/{questions.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
