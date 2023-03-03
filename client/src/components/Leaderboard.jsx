import style from './styles/Leaderboard.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Leaderboard = ({ wordsPerMin, accuracy, isDone, onResetProp }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [entry, setEntry] = useState({
    name: "",
    wordsPerMin,
    accuracy,
  });

  const handleInput = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/leaderboard')
      .then(res => setLeaderboard(res.data))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    setEntry({
      ...entry,
      wordsPerMin,
      accuracy
    });
  }, [ wordsPerMin, accuracy]);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/leaderboard', entry)
     .then(setLeaderboard([...leaderboard, entry]))
     .then(onResetProp())
    e.target.reset()
  }

  return (
    <div className={style.container}>
      <div className={style.flex}>
        <h1>Leaderboard</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name='name'
            placeholder='Enter your name...' 
            onChange={handleInput}
            className={style.input}/>
          {isDone 
          ? <button type='submit' className={style.active}>Submit</button>
          : <button type='submit'className={style.disabled} disabled>Submit</button>
          }
        </form>
      </div>
      <hr />
      <ul>
        {leaderboard.map((person, idx) => {
          return (
            <li key={idx}>:: {person.name} - WPM: {person.wordsPerMin} ACC: {person.accuracy}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;