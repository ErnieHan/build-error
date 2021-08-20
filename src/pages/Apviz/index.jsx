import React, { useEffect, useState } from 'react'
import './style.scss'

let manager

function Apviz() {
  const [color, setColor] = useState('red')
  const [carat, setCarat] = useState('1.50ct')
  const [loading, setLoading] = useState(true)

  const colorOptions = [
    { name: '18K白色黃金', value: 'white' },
    { name: '18K紅色黃金', value: 'red' },
    { name: '18K黃色黃金', value: 'yellow' }
  ]

  const caratOptions = [
    { name: '1.00克拉', value: '1.00ct' },
    { name: '1.50克拉', value: '1.50ct' }
  ]

  useEffect(() => {
    window.addEventListener('message', handleMessage)
  }, [])

  function handleMessage(event) {
    if (event.data === 'SHOWCASE_READY') {
      init()
    }
    if (event.data === 'START_LOADING') {
      setLoading(true)
    }
  }

  async function init() {
    manager = window.showcase
    // 預設顯示
    await manager.updateConfiguration({
      configuration: {
        carat,
        color
      }
    })
    const viewer = await manager.display({
      divId: 'apviz-3d-showcase'
    })
    setLoading(false)
    console.log('manager:', manager)
  }

  function handleColors(event) {
    const { value } = event.target
    manager.updateConfiguration({
      configuration: {
        color: value
      }
    })
    setColor(value)
  }

  function handleCarats(event) {
    const { value } = event.target
    manager.updateConfiguration({
      configuration: {
        carat: value
      }
    })
    setCarat(value)
  }

  return (
    <div className="apviz-content">
      {/* {loading && <div className="loading-content">is Loading</div>} */}
      {/* <div className="options-wapper">
        <div className="select-wrap">
          <select value={color} onChange={handleColors}>
            {colorOptions.map((data, index) => (
              <option key={index} value={data.value}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrap">
          <select value={carat} onChange={handleCarats}>
            {caratOptions.map((data, index) => (
              <option key={index} value={data.value}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      <div id="apviz-3d-showcase"></div>
    </div>
  )
}

export default Apviz
