import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

function Card({ code, brand, name, price, image, image2, url }) {
  return (
    <div className="pdt-card-wrap">
      <Link
        className="image-wrap"
        to={url}
        style={{ backgroundImage: `url(${image2})` }}
      >
        <img className="main-pdt-image" src={image} alt="" />
      </Link>
      <div className="desc-wrap">
        <p className="brand">{brand || '-'}</p>
        <p className="name">{name}</p>
        <p className="price">NT${Number(price).toLocaleString()}</p>
      </div>
    </div>
  )
}

Card.defaultProps = {
  code: '000000-0000-00',
  brand: 'brand',
  name: 'name',
  price: 0,
  image: 'image',
  image2: 'image2',
  url: 'url'
}

export default Card
