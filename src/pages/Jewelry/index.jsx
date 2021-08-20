import React, { useEffect, useState, useRef } from 'react'
import $ from 'jquery'

function Jewelry() {
  const [miniCart, setMiniCart] = useState(null)

  useEffect(() => {
    window.addEventListener('message', onMessage)
  }, [])

  function getCustomer() {
    let custId = '10004826052'
    let token =
      'eyJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJjaG93c2FuZ3NhbmcuY29tIiwiYXVkIjoiQXVkaWVuY2UiLCJleHAiOjE2MjAzODczNDgsImp0aSI6Ik9fanlqQTJfUTRRUjhPSnJoZDd4MGciLCJpYXQiOjE2MjAzODY3NDgsIm5iZiI6MTYyMDM4NjYyOCwic3ViIjoic3ViamVjdCIsInVzZXJuYW1lIjoiMTkyLjE2OC4yMDEuMjAzIiwiaXAiOiIxOTIuMTY4LjIwMS4yMDMifQ.3R_jTIelSD8ndIIIVbgCDXNOlpj906FHD3wPKUYfVmUJfosrOOZVMkr69AU6olQCO0wANRfWULYkpUAH7qAk5xMMyBkEfV88YJDuDoFJIuQcEbRqIPiEtr3WYkfmUczBhEiKFtUocr1kK3JyU5Qwo2oYhTFDquCAXuAmem1wP9gG7yZo07AfO1bkRh7xihZOu8UhWFh3HJHT4S3vwglCC79jkpUVxFGPpf9YUmTRoRUvME_GS3d2bTZSul8itTCRNIR7Dw6vHR0J0aEeM3r14pak2IjFn-lJ5ENDKeqd8T2l_NGEoHWAd9X8-6QM8NekUS1yOzeVCMP3cT9x5Ursng'
    $.ajax({
      url: '//crmuat.chowsangsang.com/api/customers/' + custId,
      type: 'POST',
      headers: {
        Authorization: token
      },
      success: function (data2) {
        console.log(data2)
      },
      error: function (error) {
        console.log(error)
      }
    })
  }

  function onMessage(e) {
    const message = e.data
    if (message === 'GET_MINICART_SUCCESS') {
      // 取得miniCart成功 , 更新redux的miniCart的值
      const data = window.miniCart
      setMiniCart(data)
    }
  }

  function addToBag() {
    window.postMessage('UPDATE_MINICART')
  }

  return (
    <div>
      <Header />
      <button onClick={addToBag}>updates miniCart again</button>
      <FocusButton />
      {miniCart && <MiniCart data={miniCart} />}
    </div>
  )
}

export default Jewelry

function FocusButton() {
  const [active, setActive] = useState('recommend')
  const [focus, setFocus] = useState(false)
  const options = [
    { name: '推薦項目', value: 'recommend' },
    { name: '珠寶', value: 'jewelry' },
    { name: '手錶', value: 'watch' }
  ]

  function handleClick() {
    setFocus(true)
  }

  function handleBlur() {
    setFocus(false)
  }

  function handleActive(data) {
    console.log(data)
    setActive(data.value)
  }

  return (
    <div className="focus-wrap" tabIndex={1} onBlur={handleBlur}>
      <div onClick={handleClick}>查看全部貨類</div>
      <div className={`focus-content ${focus ? 'active' : ''}`}>
        <div className="options-wrap">
          {options.map((data, index) => (
            <div
              key={index}
              className={`option-wrap ${data.value === active ? 'active' : ''}`}
              onClick={handleActive.bind(this, data)}
            >
              {data.name}
            </div>
          ))}
        </div>
        <div className="content-wrap">
          <div className="show-all-btn">顯示全部商品</div>
        </div>
      </div>
    </div>
  )
}

function MiniCart({ data }) {
  const { cartItems } = data
  const content = useRef(null)
  const height = 96

  function handlePrev() {
    content.current.scrollTop = content.current.scrollTop - height
  }

  function handleNext() {
    content.current.scrollTop = content.current.scrollTop + height
  }

  return (
    <div className="minicart-wrap">
      <div className="title-wrap">我的購物車( {cartItems.length} )</div>
      <div className="btns-wrap">
        <button onClick={handlePrev}>prev btn</button>
      </div>
      <div className="items-wrap" ref={content}>
        {cartItems.map((item, index) => (
          <div key={index} className="item-body" style={{ height: height }}>
            <div className="item-image-wrap">
              <img src={item.information.imageUrl} alt="" />
            </div>
            <div className="item-desc-wrap">
              <p>
                {item.information.prodname1}
                {item.information.prodname2}
              </p>
              {item.information.data.map((option, jndex) => (
                <p key={jndex}>
                  {option.name}: {option.value}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="btns-wrap">
        <button onClick={handleNext}>next btn</button>
      </div>
    </div>
  )
}

function Header() {
  useEffect(() => {
    getMiniCart()
    window.addEventListener('message', onMessage)
  }, [])

  function onMessage(e) {
    const message = e.data
    if (message === 'UPDATE_MINICART') {
      getMiniCart()
    }
  }

  async function getMiniCart() {
    const response = await fetch('http://localhost:3536/miniCart')
    if (response.ok) {
      const result = await response.json()
      window.miniCart = result
      window.postMessage('GET_MINICART_SUCCESS', '*')
    }
  }

  return <div>this is header</div>
}
