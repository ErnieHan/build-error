import React from 'react'

function GoogleMap() {
  return (
    <div>
      <div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=EMPHASIS Pacific Place Branch"
          target="_blank"
          rel="noreferrer"
        >
          前往GOOGLE MAP | 使用門市名稱
        </a>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=22.379801,114.187662"
          target="_blank"
          rel="noreferrer"
        >
          前往GOOGLE MAP | 經緯度
        </a>
      </div>

      <iframe
        title="emphasis-store"
        width="920"
        height="500"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzTmj81wHIQeRK1qldxbVF035wjSiZzIU&q=EMPHASIS+New+Town+Plaza+Branch"
        style={{ border: '0' }}
      />
    </div>
  )
}

export default GoogleMap
