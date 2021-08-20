import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene, camera, renderer, orbit

function Chapter07() {
  useEffect(() => {
    init()
  }, [])

  function init() {
    const width = 640
    const height = 320
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 100, 0)
    camera.rotation.x = -90
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(0x000000)
    renderer.setSize(width, height)
    renderer.render(scene, camera)

    const groundGeometry = new THREE.PlaneGeometry(30, 30)
    const groundMaterial = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      color: 'rgb(51,72,55)'
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    scene.add(ground)

    orbit = new OrbitControls(camera, renderer.domElement)

    const element = document.getElementById('WebGL')
    element.appendChild(renderer.domElement)

    animate()
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return (
    <div>
      <p>chapter 07</p>
      <div id="WebGL" />
    </div>
  )
}

export default Chapter07
