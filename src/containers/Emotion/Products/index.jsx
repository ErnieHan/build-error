import React, { useEffect } from 'react'
import './style.scss'
import Swiper from 'swiper'

function Products() {
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

  const products = [
    {
      image:
        'https://cdn.chowsangsang.com/dfs/ivCssModelImages/90664/2021/8/6/8da833818b96bcd4b98c0bd6937ccc1b.jpg',
      brand: 'Bloom',
      name: '18K Yellow Gold Freshwater Pearl Ring'
    },
    {
      image:
        'https://cdn.chowsangsang.com/dfs/ivCssModelImages/917982021/2/8//986cc3c105d19df85670bf13e9aaca0e.jpg',
      brand: 'Symphony',
      name: '18K Red & Black Gold Diamond Ring'
    },
    {
      image:
        'https://cdn.chowsangsang.com/dfs/ivCssModelImages/91339/3b06cfbb90f5352bf9e6c39fae1553f0.jpg',
      brand: 'Form',
      name: '18K White Gold Diamond Ring'
    },
    {
      image:
        'https://cdn.chowsangsang.com/dfs/ivCssModelImages/90790/4fba9d422cf52165461235f7b6931911.jpg',
      brand: 'Embrace',
      name: ' 18K Yellow Gold Chrysoprase Ring'
    },
    {
      image:
        'https://cdn.chowsangsang.com/dfs/ivCssModelImages/907362021/3/16//172b94d445b6715d7c5f1e64bc1b2a62.jpg',
      brand: 'Cosmos',
      name: `18K White Gold Tiger's-eye and Quartz-jade Ring`
    }
  ]

  return (
    <div className="products-wrap">
      <div className="swiper-container products-swiper">
        <div className="swiper-wrapper">
          {products.map((data, index) => (
            <div key={index} className="swiper-slide">
              <div className="pdt-block">
                <img src={data.image} alt="" />
                <div className="desc-wrap">
                  <p className="brand">{data.brand}</p>
                  <p className="name">{data.name}</p>
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
