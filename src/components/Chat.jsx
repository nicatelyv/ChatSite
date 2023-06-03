import React from 'react'
import More from "../img/More.png"
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Nijat</span>
        <div className="chatIcons">
          <i class="fa-solid fa-video"></i>
          <i class="fa-solid fa-user-plus"></i>
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
    </div>
  )
}

export default Chat