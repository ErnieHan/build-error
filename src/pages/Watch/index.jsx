import React, { useEffect, useState } from 'react'
import './style.scss'

function Watch() {
  useEffect(() => {
    init()
    setYahooNative()
  })

  function init() {
    const { search } = window.location
    const query = search.replace('?', '')
    if (query) {
      // 使用網址上的query
      const decodeQuery = decodeURI(query)
      const params = JSON.parse(decodeQuery)
      getWatches(params)
    } else {
      // 使用預設值
      const params = {
        type: 'watch',
        sortBy: 'price',
        sortDirection: 'asc',
        searchText: null,
        page: 1,
        pageSize: 30,
        refs: [
          { type: 'stock', value: ['Y'] },
          { type: 'region', value: ['TWN'] }
        ]
      }
      getWatches(params)
    }
  }

  function setYahooNative() {
    console.log('set yahoo native')
  }

  async function getWatches(params) {
    console.log('params:', params)
    try {
      // write query on website
      const query = JSON.stringify(params)
      const encodeQuery = encodeURI(query)
      const { pathname } = window.location
      const url = pathname + '?' + encodeQuery
      window.history.pushState(null, null, url)
    } catch (error) {
      console.error(error)
    }
  }

  function handleReset() {
    console.log('reset')
  }

  return (
    <div>
      <header className="css-header-main">
        <p>header.jsx</p>
        <SearchBar />
      </header>
      <nav className="css-navbar-main">
        navbar.jsx
        <button className="reset-btn" onClick={handleReset}>
          reset
        </button>
      </nav>
      <div className="css-body-main">
        <aside>aside.jsx</aside>
        <div>
          <p>main content</p>
        </div>
      </div>
    </div>
  )
}

function SearchBar() {
  const [searchText, setSearchText] = useState('')

  function handleChange(e) {
    setSearchText(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault()
    const mode = 'watch'
    if (mode === 'jewelry') {
      // 導入至jewelry頁
      const params = {
        type: 'jewelry',
        sortBy: 'price',
        sortDirection: 'desc',
        searchText: searchText,
        page: 1,
        pageSize: 30,
        refs: [
          { type: 'stock', value: ['Y'] },
          { type: 'region', value: ['TWN'] }
        ]
      }
      const query = JSON.stringify(params)
      const encodeQuery = encodeURI(query)
      window.location = `/en/jewelry/home?${encodeQuery}`
    } else if (mode === 'watch') {
      // post api
      console.log('search text:', searchText)
    }
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-bar"
        type="search"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default Watch
