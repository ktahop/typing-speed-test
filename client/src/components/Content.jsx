import style from "./styles/Content.module.css";
import Stats from "./Stats";
import Leaderboard from "./Leaderboard";
import { useState, useEffect, useRef } from "react";
import useTyping from "react-typing-game-hook";

const MainField = ({ randomWords, randomSyntax }) => {
  const [wordsPerMin, setWordsPerMin] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [option, setOption] = useState(randomWords);
  const character = useRef();

  const {
    states: {
      charsState,
      phase,
      currIndex,
      correctChar,
      errorChar,
      startTime,
      endTime,
    },
    actions: { insertTyping, deleteTyping, resetTyping },
  } = useTyping(option, {
    skipCurrentWordOnSpace: false,
    countErrors: "everytime",
  });

  useEffect(() => {
    if (phase === 2 && endTime && startTime) {
      let time = (endTime - startTime) / 60000;
      let keyPress = correctChar + errorChar;
      setWordsPerMin(Math.round(keyPress / 5 / time.toFixed(2)));
      setAccuracy(Math.round(((correctChar - errorChar) * 100) / correctChar));
      setIsDone(true);
    } else {
      setWordsPerMin(0);
    }
  }, [phase, startTime, endTime]);

  const handleKeyPress = (key, control) => {
    if (key === "Backspace") {
      deleteTyping(control);
    } else if (key.length === 1) {
      insertTyping(key);
    };
  };

  const handleReset = () => {
    resetTyping();
    setWordsPerMin(0);
    setAccuracy(0);
    setIsDone(false);
  };

  return (
    <div>
      <h2 className={style.instruction}>Click on a word and type to begin!</h2>
      <div className={style.option}>
        <label>Random Words: </label>
        <input 
          type="radio" 
          value={randomWords} 
          checked={option === randomWords} 
          onChange={e => setOption(e.target.value)} />
        <label>Random JS Syntaxes: </label>
        <input 
          type="radio" 
          value={randomSyntax} 
          checked={option === randomSyntax} 
          onChange={e => setOption(e.target.value)} />
      </div>
      <div className={style.container}>
        <Stats
          wordsPerMin={wordsPerMin}
          accuracy={accuracy}
          correct={correctChar}
          error={errorChar}
        />
        <div
          tabIndex={0}
          ref={character}
          onKeyDown={(e) => handleKeyPress(e.key, e.ctrlKey)}
          className={style.textarea}
        >
          {option.split("").map((char, idx) => {
            let color =
              charsState[idx] === 0
                ? "#fff"
                : charsState[idx] === 1
                ? "#a6e22e"
                : "#f92672";
            let current = currIndex + 1 === idx ? "rgba(255,255,255,0.3)" : "";
            return (
              <span
                key={idx}
                style={{ color: `${color}`, backgroundColor: `${current}` }}
                className={style.textfield}
              >
                {char}
              </span>
            );
          })}
        </div>
        <button onClick={handleReset} className={style.btn}>
          Reset
        </button>
      </div>
      <Leaderboard
        wordsPerMin={wordsPerMin}
        accuracy={accuracy}
        isDone={isDone}
        onResetProp={handleReset}
      />
    </div>
  );
};

export default MainField;
