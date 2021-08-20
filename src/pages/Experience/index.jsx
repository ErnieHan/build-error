import React, { useEffect, useState } from 'react'
import './style.scss'
import SearchMode from '../../components/SearchMode'
import * as THREE from 'three'

function Experience() {
  let manager = new Manager()
  const width = 375
  const height = width * 0.75
  const [list, setList] = useState(null)

  useEffect(() => {
    manager.init('canvas', width, height)
  }, [])

  function Manager(setting) {
    this.init = function (divId, width, height) {
      const container = document.getElementById(divId)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 45)
      const geometry = new THREE.BoxGeometry(10, 10, 10)
      const material = new THREE.MeshLambertMaterial({ color: '0x00ffff' })
      const box = new THREE.Mesh(geometry, material)
      scene.add(box)
      const light = new THREE.PointLight('0xffffff')
      light.position.set(45, 45, 45)
      scene.add(light)
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(width, height)
      renderer.render(scene, camera)
      let canvas = renderer.domElement
      canvas.className = 'ring-model'
      canvas.addEventListener('mousedown', function (e) {
        console.log('e:', e)
      })
      canvas.addEventListener('mouseup', function (e) {
        console.log('e:', e)
      })
      container.appendChild(canvas)
    }
    this.getEarrings = async function () {
      const response = await fetch('http://localhost:3031/earring-style-lists')
      if (response.ok) {
        const result = await response.json()
        setList(result.results)
      }
    }
  }

  function handleClick() {
    manager.getEarrings()
  }

  console.log('list:', list)

  return (
    <div className="experience-wrap">
      <div id="canvas"></div>
      <SearchMode />
      <h1 className="title">飾品保養服務</h1>
      <p className="desc">
        EMPHASIS為您提供購買日起計一年內飾品保養及各項飾品保養服務。您可把購自EMPHASIS的飾品送到我們的分店，並出示貨品保証單，以享用下列免費服務(受以下條款及細則所限)。
      </p>
      <button onClick={handleClick}>click</button>
      <footer className="exper-foot">
        <p className="sec-title">接收最新資訊</p>
        <p className="sec-desc">訂閱電子通訊了解品牌動向及獨家優惠</p>
        <div className="email-wrap">
          <input type="text" className="email-input" placeholder="電郵地址" />
        </div>
        <p className="comment-text">
          遞交此申請代表閣下同意我們的<a href="/policky">私隱政策</a>。
        </p>
      </footer>
    </div>
  )
}

export default Experience
