import React, { useEffect } from 'react'
import './style.scss'
import * as THREE from 'three'
import throttle from 'lodash.throttle'
import Stats from 'stats.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene,
  camera,
  renderer,
  geometry,
  geometry2,
  material,
  mesh,
  mesh2,
  stats,
  controls

function Android() {
  useEffect(() => {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(2, 2, 5)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = document.getElementById('container')
    container.appendChild(renderer.domElement)
    window.addEventListener('resize', throttle(onWindowResize, 250))
    //
    geometry = new THREE.BoxGeometry(1, 1, 1)
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('/texture/box.jpg')
    material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide
    })
    mesh = new THREE.Mesh(geometry, material)
    mesh.name = 'box'
    //
    geometry2 = new THREE.BoxGeometry(200, 200, 200)
    const rt = new THREE.MeshBasicMaterial({
      map: textureLoader.load('/skybox/rt.png'),
      side: THREE.DoubleSide
    })
    const sky = name => {
      return new THREE.MeshBasicMaterial({
        map: textureLoader.load(`/skybox/${name}.png`),
        side: THREE.DoubleSide
      })
    }
    const materials = [
      sky('rt'),
      sky('lf'),
      sky('up'),
      sky('dn'),
      sky('bk'),
      sky('ft')
    ]
    mesh2 = new THREE.Mesh(geometry2, materials)
    scene.add(mesh)
    scene.add(mesh2)
    //
    stats = new Stats()
    stats.showPanel(0)
    container.appendChild(stats.dom)
    //
    controls = new OrbitControls(camera, renderer.domElement)
    controls.update()
    controls.autoRotate = true

    animate()
  }, [])

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    stats.begin()
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    // const box = scene.getObjectByName('box')
    // box.rotation.x += 0.01
    // box.rotation.y += 0.01
    // box.rotation.z += 0.01
    // mesh2.rotation.y += 0.001
    controls.update()
    stats.end()
  }

  return (
    <div className="android-wrap">
      <div id="container"></div>
    </div>
  )
}

export default Android
