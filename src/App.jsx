import './App.css'
import { useState } from 'react'
import MainManu from './Component/MainManu'
import Quiz from './Component/Quiz';
import EndScreen from './Component/EndScreen';

import { QuizContext } from './Helper/Contexts';

function App() {
 const [gameState,setGameState] = useState("menu");
 const [score,setScore] = useState(0);

  return (
    <div className='App'>
    <h1>Quiz app</h1>

    <QuizContext.Provider value={{gameState,setGameState,score , setScore}}>
    {gameState==="menu"&&<MainManu/>}
    {gameState==="quiz"&&<Quiz/>}
    {gameState==="endScreen"&&<EndScreen/>}
    </QuizContext.Provider>

    </div>
  )
}

export default App
