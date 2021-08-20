import React, { useState } from 'react'
import './style.scss'

function SearchMode() {
  const [mode, setMode] = useState(null)
  const [searchMode, setSearchMode] = useState('jewelry')
  const [searchText, setSearchText] = useState('')

  function handleText(event) {
    setSearchText(event.target.value)
  }

  function handleSearchMode(event) {
    setSearchMode(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('search text:', searchText, searchMode)
    setMode(searchMode)
  }

  function handleGoods(mode) {
    setMode(mode)
  }

  return (
    <div className="search-mode-wrap">
      <form onSubmit={handleSubmit} className="form-wrap">
        <input
          type="search"
          className="searchbar"
          onChange={handleText}
          value={searchText}
          placeholder="搜索商品"
        />
      </form>
      <select
        className="mode-select"
        onChange={handleSearchMode}
        value={searchMode}
      >
        <option value="jewelry">珠寶</option>
        <option value="watch">手錶</option>
      </select>
      <div className="buttons-wrap">
        <button
          className="goods-btn"
          onClick={handleGoods.bind(this, 'jewelry')}
        >
          全部貨類
        </button>
        <button
          className="goods-btn"
          onClick={handleGoods.bind(this, 'jewelry')}
        >
          推薦珠寶
        </button>
        <button className="goods-btn" onClick={handleGoods.bind(this, 'watch')}>
          推薦手錶
        </button>
      </div>
      <div className="mode-wrap">mode: {mode}</div>
    </div>
  )
}

export default SearchMode
