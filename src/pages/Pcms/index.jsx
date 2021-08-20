import React, { useState } from 'react'
import './style.scss'
import ButtonRange from '../../components/FilterBar/modules/ButtonRange'
import Cards from '../../containers/Pcms/Cards'

function Pcms() {
  const [active, setActive] = useState(null)
  const options = [
    { name: '款號', displayType: 'button-range' },
    { name: '會計存貨分類', displayType: '' },
    { name: '用途', displayType: '' },
    { name: '金類', displayType: '' }
  ]

  function handleActive(index) {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <div>
      <aside className="filter-aside-wrap">
        <div className="aside-head">head</div>
        <div className="aside-body">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option-wrap ${active === index ? 'active' : ''}`}
            >
              <div
                className="title-wrap"
                onClick={handleActive.bind(this, index)}
              >
                <p>{option.name}</p>
                <div className="selections">307GS-18KW-00</div>
              </div>
              <div className="content-scroll-wrap">
                <div className="content-wrap">
                  {option.displayType === 'button-range' && <ButtonRange />}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="aside-foot">foot</div>
      </aside>
      <section className="main-section-wrap">
        <Cards />
      </section>
    </div>
  )
}

export default Pcms
