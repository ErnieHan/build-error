import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import * as dat from 'dat.gui'
import chroma from 'chroma-js'

let scene,
  camera,
  renderer,
  controls,
  cube,
  gui,
  step = 0,
  clock,
  trackballControls,
  box

function Chpater05() {
  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    scene = new THREE.Scene()

    clock = new THREE.Clock()

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(100, 100, 300)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    const ambientLight = new THREE.AmbientLight(0x383838)
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(300, 300, 300)
    spotLight.intensity = 1
    scene.add(spotLight)

    const boxGeometry = new THREE.BoxGeometry(30, 30, 30)
    const boxMaterial = new THREE.MeshLambertMaterial({ color: '#ffffff' })
    box = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(box)

    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(0x000000)
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true

    const element = document.getElementById('webGL')
    element.appendChild(renderer.domElement)

    animate()
  }, [])

  function animate() {
    requestAnimationFrame(animate)
    box.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  return (
    <React.Fragment>
      <div id="webGL"></div>
    </React.Fragment>
  )
}

export default Chpater05
