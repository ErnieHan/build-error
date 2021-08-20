import React, { useEffect } from 'react'
import './style.scss'
// containers
import Header from '../../containers/Header'
import { Link } from 'react-router-dom'
import MetaHead from '../../components/MetaHead'
import CookiesPolicy from '../../components/CookiesPolicy'
import { getCookie } from '../../functions/handleCookies'

function Home() {
  useEffect(() => {
    const cookieLang = getCookie('hk-emphasis-language')
    const isTcInUrl = window.location.pathname.indexOf('/tc/') !== -1
    const isEnInUrl = window.location.pathname.indexOf('/en/') !== -1
    console.log('isTC in url:', isTcInUrl)
    console.log('isEN in url:', isEnInUrl)
    if (cookieLang) {
      // normal using
    } else {
      // using browser language
      const browserLang =
        window.navigator.userLanguage || window.navigator.language
      if (browserLang.indexOf('zh-') === 0) {
        //chinese
      } else {
        // english
      }
    }
  }, [])

  return (
    <React.Fragment>
      <MetaHead />
      <a href="/pwa">前往pwa頁面</a>
      <p>Home pages</p>
      <Header />
      <div className="main-wrapper">
        <Link to="/tc/products/Jewellery-Bymetal-Platinum">
          go to Jewellery-Bymetal-Platinum
        </Link>
        <p>this is main content</p>
      </div>
      <CookiesPolicy />
    </React.Fragment>
  )
}

export default Home
