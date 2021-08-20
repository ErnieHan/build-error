import React, { useEffect, useState } from 'react'
import './style.scss'
import Banner from '../../containers/Emotion/Banner'
import Products from '../../containers/Emotion/Products'

function Emotion() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      const response = await fetch('http://localhost:3536/products', {
        method: 'GET'
      })
      if (response.ok) {
        const result = await response.json()
        setProducts(result.productRefinements[0].productList)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="emotion-wrap">
      <div className="logo-wrap">
        <img
          src="https://www.emphasis.com/images/common/logo-white.svg"
          alt=""
        />
      </div>
      {products && (
        <>
          <Banner products={products} />
          <Products products={products} />
        </>
      )}
    </div>
  )
}

export default Emotion
