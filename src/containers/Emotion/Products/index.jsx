import React, { useEffect } from 'react'
import './style.scss'
import Swiper from 'swiper'

function Products({ products }) {
  useEffect(() => {
    const swiper = new Swiper('.products-swiper', {
      slidesPerView: 4,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 3000
      }
    })
  }, [])

  return (
    <div className="products-wrap">
      <div className="swiper-container products-swiper">
        <div className="swiper-wrapper">
          {products.map((data, index) => (
            <div key={index} className="swiper-slide">
              <div className="pdt-block">
                <img src={data.imageUrlWhite} alt="" />
                <div className="desc-wrap">
                  <p className="brand">{data.name}</p>
                  <p className="name">{data.name2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
