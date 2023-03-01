import style from './styles/MainField.module.css'
import Stats from './Stats'
import Leaderboard from './Leaderboard'
import { useState, useEffect, useRef } from 'react'
import useTyping from  'react-typing-game-hook'

const MainField = ({ randomWords, randomSyntax }) => {
  const [wordsPerMin, setWordsPerMin] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [option, setOption] = useState(randomWords)
  const char = useRef(HTMLDivElement)

  const {
    states: {
      charsState,
      phase,
      correctChar,
      errorChar,
      startTime,
      endTime
    },
    actions: { insertTyping, deleteTyping, resetTyping }
  } = useTyping(randomWords, {skipCurrentWordOnSpace: false, countErrors: 'everytime'})

  useEffect(() => {
    if (phase === 2 && endTime && startTime) {
      let time = (((endTime - startTime) / 60000))
      let keyPress = correctChar + errorChar
      setWordsPerMin(Math.round((keyPress / 5) / time.toFixed(2)))
      setAccuracy(Math.round(((correctChar - errorChar) * 100 / correctChar)))
    } else {
      setWordsPerMin(0)
    }
  }, [phase, startTime, endTime])

  const handleKeyPress = (char, control) => {
    if (char === "Escape") {
      resetTyping()
    } else if (char === "Backspace") {
      deleteTyping(control)
    } else if (char.length === 1) {
      insertTyping(char)
    }
  }

  return (
    <div>
      <h2 className={style.instruction}>Click on the word block and type to begin!</h2>
      <div className={style.container}>
        <Stats 
          wordsPerMin={wordsPerMin}
          accuracy={accuracy}
          correct={correctChar}
          error={errorChar}/>
          <div
            tabIndex={0}
            ref={char}
            onKeyDown={e => handleKeyPress(e.key, e.ctrlKey)}
            className={style.textarea}
          >
            {option.split("").map((char, idx) => {
              let color = 
                charsState[idx] === 0
                ? 'white'
                : charsState[idx] === 1
                  ? '#a6e22e'
                  : '#f92672'
              return (
                <span 
                  key={idx} 
                  style={{color: `${color}`}}
                  className={style.textfield}>
                  {char}
                </span>
              )
            })}
          </div>
      <p>Press ESC key to reset</p>
      </div>
      {phase === 2 && startTime && endTime ?
      <Leaderboard 
        wordsPerMin={wordsPerMin} 
        accuracy={accuracy} /> : null}
    </div>
  );
}

export default MainField;