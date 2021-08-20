import React from 'react'
import { Helmet } from 'react-helmet-async'

function MetaHead({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

MetaHead.defaultProps = {
  title: '點睛品(Chow Sang Sang Jewellery)官方網上商城',
  description: ''
}

export default MetaHead
