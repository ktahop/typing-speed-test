import axios from 'axios'
import { useEffect, useState } from 'react'

const Leaderboard = ({ wordsPerMin, accuracy }) => {
  const [entry, setEntry] = useState({
    name: "",
    wordsPerMin,
    accuracy,
  })
  const [leaderboard, setLeaderboard] = useState([])

  const handleInput = (e) => {
    setEntry({
      ...entry,
      name: e.value.target
    })
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/leaderboard')
      .then(res => setLeaderboard(res.data))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/leaderboard', entry)
  }

  return (
    <>
     <h1>Leaderboard</h1>
     <form onSubmit={handleSubmit}>
      <input placeholder='Enter your name...' onChange={handleInput}/>
      <button>Submit</button>
     </form>
     {leaderboard.map((person, idx) =>
      <p key={idx}>{person.name},{person.wordsPerMin},{person.accuracy}</p>)}
    </>
  )
}

export default Leaderboard