import React from 'react'
import './style.scss'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([Navigation])

function NewsTop() {
  return (
    <div className="tb-css-news-top">
      <Swiper
        id="news-top"
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        navigation
        loop={true}
      >
        <SwiperSlide>
          滿<span className="color-tan">NT$3,000</span>以上享免運費
        </SwiperSlide>
        <SwiperSlide>
          防詐騙聲明：點晴品不會在未授權網站進行珠寶銷售 |{' '}
          <span className="color-tan">了解更多</span>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default NewsTop
