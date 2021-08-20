import React, { useEffect, useState } from 'react'

function Header() {
  const [element, setElement] = useState(null)

  useEffect(() => {
    getMenu()
  }, [])

  async function getMenu() {
    const response = await fetch('http://localhost:3536/header')
    if (response.ok) {
      const result = await response.json()
      const menu = result.menu.map((data, index) => {
        console.log(data.type)
        if (data.type === 'member') {
          return (
            <a key={index} href={data.url}>
              <span className="icon-member-logo"></span>
            </a>
          )
        } else {
          return null
        }
      })
      setElement(menu)
    }
  }

  function handleHover() {
    // open
    window.dataLayer &&
      window.dataLayer.push({
        event: 'expandChatIcons'
      })
    // close
    window.dataLayer &&
      window.dataLayer.push({
        event: 'collapseChatIcons'
      })
  }

  return (
    <div>
      this is header.jsx
      {element}
      <button onClick={handleHover}>fix button</button>
    </div>
  )
}

export default Header
