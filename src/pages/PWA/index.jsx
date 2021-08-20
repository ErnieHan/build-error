import React, { useEffect } from 'react'
import { useReactPWAInstall } from 'react-pwa-install'
import './style.scss'
import Swiper from 'swiper'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'

SwiperCore.use([Pagination, Autoplay])

function PWA() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall()
  const support = supported()
  const isInstall = isInstalled()

  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }, [])

  return (
    <div className="pwa-page-wrap">
      <div className="fixed-head">
        <div className="flex-content">
          <form action="javascript:return true" className="searchbar-wrap">
            <input
              type="search"
              className="searchbar"
              placeholder="看更多免運店家"
            />
          </form>

          <div className="icon-wrap">cart</div>
          <div className="icon-wrap">msg</div>
        </div>
      </div>
      <div className="content-body">
        <div className="home-banner">
          <div className="swiper-container mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://cf.shopee.tw/file/dbded983a6de12af3d40fef9f3981da7_xxhdpi"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://cf.shopee.tw/file/9aaea017633aee3fe2667c0d6d22e181_xxhdpi"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://cf.shopee.tw/file/3cd920242bdae5bd194ba562db1b05a5_xxhdpi"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div className="quick-options-wrap">
          <div className="scroll-wrap">
            <div className="flex-content">
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/ce50fa24d20a4ede15b274ef9edbb1c9_xhdpi"
                  alt=""
                />
                <p className="sub-title">免運!蝦皮直送</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/e16672489429510a99c1e6185d814eb5_xhdpi"
                  alt=""
                />
                <p className="sub-title">$99免運</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/cc16714334365452d58ae5486f77d476_xhdpi"
                  alt=""
                />
                <p className="sub-title">健康防疫</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/7627dd07e42f84ba9bfeb5d28becbcca_xhdpi"
                  alt=""
                />
                <p className="sub-title">蝦皮超便宜</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/b5e9a549a81472b58b8cd56142424d51_xhdpi"
                  alt=""
                />
                <p className="sub-title">輕奢時尚館</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/b5e9a549a81472b58b8cd56142424d51_xhdpi"
                  alt=""
                />
                <p className="sub-title">輕奢時尚館</p>
              </div>
            </div>
            <div className="flex-content">
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/1990775389f894698439986a90c4b528_xhdpi"
                  alt=""
                />
                <p className="sub-title">蝦皮超市</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/be06974ac1b4befd67b085ef8fbf6621_xhdpi"
                  alt=""
                />
                <p className="sub-title">現領購物金</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/d3a12c505c3f8591d2d8a71f474066f0_xhdpi"
                  alt=""
                />
                <p className="sub-title">男人館</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/a178d6850d334673cf89e11ef1a1c0a2_xhdpi"
                  alt=""
                />
                <p className="sub-title">海外直送</p>
              </div>
              <div className="option-btn">
                <img
                  className="icon"
                  src="https://cf.shopee.tw/file/1363daaffeba55b1d4c8c40492dc9e24_xhdpi"
                  alt=""
                />
                <p className="sub-title">蝦皮團購</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PWA
