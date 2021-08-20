import React from 'react'
import './style.scss'

function ButtonRange() {
  const options = new Array(30).fill(0)

  return (
    <div className="button-range-wrap">
      {options.map((data, index) => (
        <label key={index} className="range-option">
          [DI] options
          <input type="checkbox" />
        </label>
      ))}
    </div>
  )
}

export default ButtonRange
