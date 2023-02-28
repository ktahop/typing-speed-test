import style from './styles/MainField.module.css'
import { generateWords } from '../utils/RanWords';
import { generateSyntaxes } from '../utils/RanWords';
import { useState, useEffect, useRef, useCallback } from 'react'
import useKeyPress from '../hooks/useKeyPress';
import useTyping from  'react-typing-game-hook'


const MainField = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [userInput, setUserInput] = useState("")
  const randomWords = useRef(generateWords())

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const testFunc = () => {
    setTimeLeft(60);
  };

  return (
    <div className={style.container}>
      <p>{timeLeft}</p>
      {/* {randomWords.current.split(',').map((word, idx) => 
        <p key={word + idx}>{word}</p>
      )} */}
      <input placeholder='Click here to begin!' value={userInput} onChange={e => setUserInput(e.target.value)}/>
      <button onClick={testFunc}>Start</button>
    </div>
  )
}

export default MainField;