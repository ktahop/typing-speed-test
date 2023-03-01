import style from './styles/Chat.module.css'
import io from 'socket.io-client'
import { useState, useEffect } from 'react'

const Chat = () => {
  const [socket] = useState(() => io(':8000'))
  const [msgReceived, setMsgReceived] = useState([])
  const [msgSend, setMsgSend] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('send_message', { msgSend })
    setMsgSend("")
  }

  useEffect(() => {
    socket.on('receive_message', data =>
    setMsgReceived(prev => [...prev, data.msgSend])
    )
    return () => socket.off('receive_message')
  },[])

  return (
    <div className={style.chat}>
      <h1>Messages:</h1>
      <form onSubmit={sendMessage}>
        <input type="text" placeholder='Message...'
          onChange={e => setMsgSend(e.target.value)}
          value={msgSend} />
        <button>Send</button>
      </form>
      {msgReceived.map((msg, idx) => <p key={idx}>{msg}</p>)}
    </div>
  )
}

export default Chat;