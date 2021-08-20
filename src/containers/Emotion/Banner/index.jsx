import React, { useEffect } from 'react'
import './style.scss'
import Swiper from 'swiper'
import SwiperCore, { EffectFade, Autoplay } from 'swiper/core'

function Banner() {
  SwiperCore.use([EffectFade, Autoplay])

  useEffect(() => {
    var banner = new Swiper('.banner-swiper', {
      effect: 'fade',
      autoplay: { delay: 3000 },
      loop: true,
      allowTouchMove: false
    })
  }, [])

  const images = [
    {
      url: 'https://cdn.chowsangsang.com/dfs/ivCssModelImages/90664/2021/8/6/e42feb53f7feea034884850076c8c0f7.jpg'
    },
    {
      url: 'https://cdn.chowsangsang.com/dfs/ivCssModelImages/917982021/2/8//ef9a13ac81533342b930ecb9479efbf8.jpg'
    },
    {
      url: 'https://cdn.chowsangsang.com/dfs/ivCssModelImages/91339/4efa1c8621c792bd97ce1408a1e82a55.jpg'
    },
    {
      url: 'https://cdn.chowsangsang.com/dfs/ivCssModelImages/90790/aef1fc3b39438adbedadd8d22783c0c9.jpg'
    },
    {
      url: 'https://cdn.chowsangsang.com/dfs/ivCssModelImages/907362021/3/16//d183aece4613fef0465735879df13098.jpg'
    }
  ]

  return (
    <div className="banner-images-wrap">
      <div className="swiper-container banner-swiper">
        <div className="swiper-wrapper">
          {images.map((data, index) => (
            <div key={index} className="swiper-slide">
              <div
                className="banner-image"
                style={{ backgroundImage: `url(${data.url})` }}
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
