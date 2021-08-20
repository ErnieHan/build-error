import React, { useEffect } from 'react'
import './style.scss'
import Swiper from 'swiper'
import SwiperCore, { EffectFade, Autoplay } from 'swiper/core'

function Banner({ products }) {
  SwiperCore.use([EffectFade, Autoplay])

  useEffect(() => {
    var banner = new Swiper('.banner-swiper', {
      effect: 'fade',
      autoplay: { delay: 3000 },
      loop: true,
      allowTouchMove: false
    })
  }, [])

  return (
    <div className="banner-images-wrap">
      <div className="swiper-container banner-swiper">
        <div className="swiper-wrapper">
          {products.map((data, index) => (
            <div key={index} className="swiper-slide">
              <div
                className="banner-image"
                style={{ backgroundImage: `url(${data.imageUrl2})` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="radius-backdrop" />
    </div>
  )
}

export default Banner
