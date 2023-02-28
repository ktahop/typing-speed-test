import style from './Main.module.css'
import Header from '../components/Header'
import Stats from "../components/Stats";
import MainField from "../components/MainField";
import Chat from "../components/Chat"

const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.flex}>
        <div className={style.content}>
          <Stats wpm='79' acc='100'/>
          <MainField />
        </div>
        <Chat />
      </div>
    </div>
  )
}

export default Main;