import style from './styles/Chat.module.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const Chat = () => {
  const [socket] = useState(() => io(':8000'));
  const [msgReceived, setMsgReceived] = useState([]);
  const [msgSend, setMsgSend] = useState("");

  const sendMessage = (e) => {
    e.preventDefault()
      socket.emit('send', msgSend)
      setMsgSend("")
  }

  useEffect(() => {
    socket.on('receive', data => 
      setMsgReceived(prev => [data, ...prev])
    )
    return () => socket.off('receive')
  },[socket])

  return (
    <div className={style.chat}>
      <h1>Chat</h1>
      <div className={style.chatBody}>
        {msgReceived.map((msg, idx) =>
          <p key={idx}>
            <span style={{color: idx % 2 === 0? '#a6e22e' : '#f92672'}}>// </span>
            {msg}
          </p>
        )}
      </div>
      <div className={style.flex}>
        <form onSubmit={sendMessage}>
          <input 
            className={style.input}
            type="text" 
            placeholder='Message...'
            onChange={e => setMsgSend(e.target.value)}
            value={msgSend} />
          <button className={style.btn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat;