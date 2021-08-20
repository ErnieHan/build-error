import React, { useState } from 'react'
import './style.scss'

function LiveChat() {
  const [toggle, setToggle] = useState(false)
  function handleLiveChat() {
    if (toggle) {
      console.log('開啟聊天室')
    } else {
      setToggle(true)
    }
  }

  function handleClose() {
    setToggle(false)
  }

  return (
    <div className="live-chat-wrap">
      <button className={`what-apps-btn ${toggle ? 'active' : ''}`}>
        what apps
      </button>
      <button
        className={`live-chat-pure-btn ${toggle ? 'active' : ''}`}
        onClick={handleLiveChat}
      />
      <button
        className={`close-btn ${toggle ? 'active' : ''}`}
        onClick={handleClose}
      >
        ✖
      </button>
    </div>
  )
}

export default LiveChat
