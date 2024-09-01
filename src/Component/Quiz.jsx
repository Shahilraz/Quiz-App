// src/Component/Quiz.jsx
import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../Helper/Contexts';
import { getQuestions } from '../Helper/questions';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQue, setCurrQue] = useState(0);
  const [optionChoose, setOptionChoose] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch and set questions when component mounts
    const loadedQuestions = getQuestions();
    if (loadedQuestions.length > 0) {
      setQuestions(loadedQuestions);
    } else {
      // Handle case where there are no questions
      setQuestions([]);
    }
  }, []);

  const nextQuestion = () => {
    if (questions[currQue]?.answer === optionChoose) {
      setScore(score + 1);
    }
    if (currQue < questions.length - 1) {
      setCurrQue(currQue + 1);
      setOptionChoose(''); // Clear selected option
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (questions[currQue]?.answer === optionChoose) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className='Quiz'>
      {questions.length > 0 && (
        <>
          <h1 className='questions'>{questions[currQue]?.prompt}</h1>
          <div className='options'>
            <button onClick={() => setOptionChoose('A')}>{questions[currQue]?.optionA}</button>
            <button onClick={() => setOptionChoose('B')}>{questions[currQue]?.optionB}</button>
            <button onClick={() => setOptionChoose('C')}>{questions[currQue]?.optionC}</button>
            <button onClick={() => setOptionChoose('D')}>{questions[currQue]?.optionD}</button>
          </div>
          {currQue === questions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
          ) : (
            <button onClick={nextQuestion}>Next Question</button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
