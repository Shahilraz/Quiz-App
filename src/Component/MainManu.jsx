import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts'
import "../App.css";

const MainManu = () => {
  const {gameState,setGameState}=useContext(QuizContext);
  return (
    <div className='Menu'>
     <button onClick={()=>{setGameState("quiz");}}>Start Quiz</button>
    </div>
  )
}

export default MainManu
