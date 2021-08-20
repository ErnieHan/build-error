import React from 'react'
import './style.scss'
import Banner from '../../containers/Emotion/Banner'
import Products from '../../containers/Emotion/Products'

function Emotion() {
  return (
    <div className="emotion-wrap">
      <div className="logo-wrap">
        <img
          src="https://www.emphasis.com/images/common/logo-white.svg"
          alt=""
        />
      </div>
      <Banner />
      <Products />
      {/* <div className="main-pdt-wrap">
        <img
          className="pdt-image"
          src="//cdn.chowsangsang.com/emphasis/web/collections/cosmos/img-intro-prod-2-new.png"
          alt=""
        />
        <div className="desc-wrap">
          <p className="brand">COSMOS</p>
          <p className="name">18K Yellow & White Gold Brown Diamond Ring</p>
        </div>
      </div> */}
    </div>
  )
}

export default Emotion
