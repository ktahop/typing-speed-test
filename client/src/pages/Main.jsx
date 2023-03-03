import style from './Main.module.css'
import Header from '../components/Header'
import Content from "../components/Content";
import Chat from "../components/Chat"
import { generateWords, generateSyntaxes } from '../utils/RanWords';

const Main = () => {
  const randomWords = generateWords(10)
  const randomSyntax =  generateSyntaxes(20)

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.flex}>
        <div className={style.content}>
          <Content randomWords={randomWords} randomSyntax={randomSyntax} />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Main;