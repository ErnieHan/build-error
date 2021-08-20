import React, { useEffect } from 'react'
import './style.scss'
// three.js
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene, camera, object, material, cube, light, renderer, controls
let fps = 35,
  fpsInterval,
  then,
  now,
  elapsed

function Three() {
  useEffect(() => {
    init()
    // animate()
    startAnimating(fps)
  }, [])

  function startAnimating(fps) {
    fpsInterval = 1000 / fps
    then = Date.now()
    animate()
  }

  function init() {
    // scene
    scene = new THREE.Scene()
    // camera
    camera = new THREE.PerspectiveCamera(45, 600 / 400, 0.1, 100)
    camera.position.set(6, 6, 12)
    // light
    light = new THREE.PointLight(0xffffff)
    light.position.set(10, 10, -10)
    scene.add(light)
    const sphereSize = 1
    const pointLightHelper = new THREE.PointLightHelper(light, sphereSize)
    scene.add(pointLightHelper)
    // object
    object = new THREE.BoxGeometry(5, 5, 5)
    // material
    material = new THREE.MeshLambertMaterial({ color: 0xeeeeee })
    cube = new THREE.Mesh(object, material)
    cube.position.set(0, 0, 0)
    scene.add(cube)
    // renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(600, 400)
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement)
    // controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    // controls.enableDamping = true
    // controls.dampingFactor = 0.05
    // controls.screenSpacePanning = false
    // controls.minDistance = 100
    // controls.maxDistance = 500
    // controls.maxPolarAngle = Math.PI / 2
  }

  function animate() {
    requestAnimationFrame(animate)

    // calc elapsed time since last loop
    now = Date.now()
    elapsed = now - then
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)
      controls.update()
      renderer.render(scene, camera)
    }
  }

  return (
    <div className="three-wrap">
      <p>three.jsx</p>
    </div>
  )
}

export default Three
