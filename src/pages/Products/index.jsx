import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { stringify } from 'qs'
import BannerTitle from '../../components/BannerTitle'
import ListWrap from '../../containers/Products/ListWrap'

function Products() {
  const { lang, category } = useParams()
  useEffect(() => {
    setLanguage(lang)
    getProductList()
  }, [])

  async function getProductList() {
    try {
      const params = {
        category: category,
        page: 1
      }
      const response = await fetch(
        `/shopping/v1/channelCatalogItems/itemList?${stringify(params)}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: { 'content-type': 'application/json' }
        }
      )
      if (response.ok) {
        const result = await response.json()
        console.log('result:', result)
      } else {
        throw new Error('GET_PRODUCT_LIST_FAILED')
      }
    } catch (error) {
      console.error(error)
    }
  }

  function setLanguage(lang) {
    if (lang === 'en') {
      // english
    } else if (lang === 'tc') {
      // chinese
    } else {
      // chinese
      const { pathname } = window.location
      const url = pathname.replace(lang, 'tc')
      window.location = url
    }
  }

  return (
    <div>
      <BannerTitle title={category} />
      <ListWrap />
    </div>
  )
}

export default Products
