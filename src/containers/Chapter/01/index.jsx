import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats.js'
import * as dat from 'dat.gui'

let scene,
  camera,
  renderer,
  axes,
  controls,
  stats,
  cube,
  sphere,
  step = 0,
  gui,
  guies

let fps = 35,
  fpsInterval,
  then,
  now,
  elapsed

function Chapter01() {
  useEffect(() => {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(0xeeeeee)
    renderer.setSize(window.innerWidth, window.innerHeight)
    // axes 為X(紅)Y(綠)Z(藍)軸座標輔助器
    axes = new THREE.AxesHelper(20)
    scene.add(axes)
    // 新增地板
    const planeGeometry = new THREE.PlaneGeometry(60, 20)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    scene.add(plane)
    // 新增立方體
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xff0000
    })
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-4, 3, 0)
    scene.add(cube)
    // 新增球體
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x7777ff
    })
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(20, 4, 2)
    scene.add(sphere)
    // 新增光源
    const spotlight = new THREE.SpotLight(0xffffff)
    spotlight.position.set(-40, 60, 10)
    scene.add(spotlight)
    // 生成陰影
    renderer.shadowMap.enabled = true
    plane.receiveShadow = true
    cube.castShadow = true
    sphere.castShadow = true
    spotlight.castShadow = true
    // 畫面控制器
    controls = new OrbitControls(camera, renderer.domElement)
    // stats
    stats = new Stats()
    stats.showPanel(0)
    // gui
    gui = new dat.GUI()
    guies = {
      rotationSpeed: 0.02,
      bouncingSpeed: 0.04
    }
    gui.add(guies, 'rotationSpeed', 0, 0.5)
    gui.add(guies, 'bouncingSpeed', 0, 0.5)
    const element = document.getElementById('WebGL-output')
    element.appendChild(renderer.domElement)
    element.appendChild(stats.dom)

    // animate()
    startAnimating(fps)
    window.addEventListener('resize', onResize, false)
  }, [])

  function startAnimating(fps) {
    fpsInterval = 1000 / fps
    then = Date.now()
    animate()
  }

  function animate() {
    requestAnimationFrame(animate)

    // calc elapsed time since last loop
    now = Date.now()
    elapsed = now - then
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)
      // 旋轉立方體
      cube.rotation.y += guies.rotationSpeed
      // 彈跳球體
      step += guies.bouncingSpeed
      sphere.position.x = 20 + 10 * Math.cos(step)
      sphere.position.y = 2 + 10 * Math.abs(Math.sin(step))
      controls.update()
      stats.update()
      renderer.render(scene, camera)
    }
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  return <div id="WebGL-output" />
}

export default Chapter01
