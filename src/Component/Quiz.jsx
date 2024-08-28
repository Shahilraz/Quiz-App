import React, { useContext, useState } from 'react'
import { Questions } from '../Helper/Questions';
import { QuizContext } from '../Helper/Contexts';
const Quiz = () => {
  const {score ,setScore,setGameState}=useContext(QuizContext);
  const [currQue,setCurrQue]=useState(0);
  const [optionChoose,setOptionChoose]=useState("");

  const nextQuestion=()=>{
    if(Questions[currQue].answer==optionChoose)
    {
      setScore(score+1);
    }
    // alert(score);
    setCurrQue(currQue+1);
  };
  const finishQuiz=()=>{
    if(Questions[currQue].answer==optionChoose)
      {
        setScore(score+1);
      }
      setGameState("endScreen");
  }

  return (
    <div className='Quiz'>
    <h1 className='questions'>{Questions[currQue].prompt}</h1> 
    <div className='options'>
    <button onClick={()=>setOptionChoose("A")}>{Questions[currQue].optionA}</button>
    <button onClick={()=>setOptionChoose("B")}>{Questions[currQue].optionB}</button>
    <button onClick={()=>setOptionChoose("C")}>{Questions[currQue].optionC}</button>
    <button onClick={()=>setOptionChoose("D")}>{Questions[currQue].optionD}</button>
    </div>
    {currQue === Questions.length - 1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : ( <button onClick={nextQuestion}>Next Question</button>  )}  

    </div>

  );
}

export default Quiz
