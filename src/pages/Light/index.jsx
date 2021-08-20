import React, { useEffect, useState, useRef } from 'react'
import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'

SwiperCore.use([Pagination])

function Light() {
  const images = [
    {
      url:
        'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91781/0a6002f0c8c3f7910bd3a0db6db68ecb.jpg'
    },
    {
      url:
        'https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91781/0a6002f0c8c3f7910bd3a0db6db68ecb.jpg'
    }
  ]
  const videoElement = useRef(null)

  useEffect(() => {}, [])

  return (
    <div className="light-main">
      <Swiper pagination={true} className="mySwiper">
        {images.map((data, index) => (
          <SwiperSlide key={index}>
            <img src={data.url} alt="" />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <video
            preload="metadata"
            autoPlay
            playsInline
            loop
            muted
            ref={videoElement}
            id="video"
          >
            <source src="https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91781/1a4f59e9af8d9cf08a7206f6beb9817d.mp4"></source>
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Light
