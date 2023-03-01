import style from './Main.module.css'
import Header from '../components/Header'
import MainField from "../components/MainField";
import Chat from "../components/Chat"
import { generateWords } from '../utils/RanWords';
import { generateSyntaxes } from '../utils/RanWords';

const Main = () => {
  const randomWords = generateWords(20)
  const randomSyntax =  generateSyntaxes(20)

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.flex}>
        <div className={style.content}>
          <MainField randomWords={randomWords} randomSyntax={randomSyntax} />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Main;