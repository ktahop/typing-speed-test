import style from './styles/Stats.module.css'

const Stats = ({ wpm, acc }) => {
  return (
    <div className={style.container}>
      <p>WPM: {wpm}</p>
      <p>ACC: {acc}</p>
    </div>
  )
}

export default Stats