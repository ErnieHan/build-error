import React, { useEffect, useState } from 'react'
import './style.scss'

function BannerTitle({ title }) {
  const [banner, setBanner] = useState('')

  useEffect(() => {
    const banners = {
      'Jewellery-Bymetal-Platinum': '鉑金',
      'Jewellery-Bymetal-18Kgold': '18K金',
      Gold: '黃金',
      'Gold-Bycategory-Charme': '串珠',
      Jewellery: '珠寶'
    }
    const name = banners[title]
    if (name) {
      setBanner(name)
    } else {
      setBanner(title)
    }
  }, [title])

  console.log('updates: BannerTitle')

  return (
    <div className="banner-title-wrap">
      <h1 className="text-headline">{banner}</h1>
    </div>
  )
}

export default BannerTitle
