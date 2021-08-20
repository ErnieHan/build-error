import React, { useState } from 'react'
import './style.scss'
import { Link, useHistory } from 'react-router-dom'

function SearchBar() {
  const [searchText, setSearchText] = useState('')
  const [toggleSuggest, setToggleSuggest] = useState(false)
  const history = useHistory()
  const keywords = [
    { name: '戒指', url: '/tc/products/ring' },
    { name: '頸鍊', url: '/tc/products/necklace' },
    { name: '耳環', url: '/tc/products/earring' },
    { name: '串飾', url: '/tc/products/charmes' },
    { name: '手鍊', url: '/tc/products/handlace' }
  ]

  function handleSubmit(event) {
    event.preventDefault()
    history.push(`/tc/search/${searchText}`)
  }

  function handleChange(event) {
    setSearchText(event.target.value)
  }

  function handleFocus() {
    setToggleSuggest(true)
  }

  return (
    <div className="tb-css-searchbar">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="search"
          placeholder="搜尋"
          value={searchText}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </form>
      <button className="search-camera-btn">camera</button>
      <div className={`suggest-content ${toggleSuggest ? 'active' : ''}`}>
        <p className="title">熱門搜尋關鍵詞</p>
        <div className="keywords-wrap">
          {keywords.map((item, index) => (
            <p key={index} className="keyword">
              <Link className="text" to={item.url}>
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
