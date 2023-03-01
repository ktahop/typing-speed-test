const Stats = ({ wordsPerMin, accuracy }) => {
  return (
    <>
      <span>WPM: {wordsPerMin} | ACC: {accuracy}%</span>
    </>
  )
}

export default Stats