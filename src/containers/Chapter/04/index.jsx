import React, { useEffect, useRef, useState } from 'react'
import './style.scss'
import * as THREE from 'three'
import * as dat from 'dat.gui'

let scene, camera, renderer, controls

function Chpater04() {
  useEffect(() => {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(-25, 30, 25)
    camera.lookAt(new THREE.Vector3(10, 0, 0))

    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(0x000000)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    scene.add(plane)

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.castShadow = true
    cube.position.y = 2
    cube.rotation.x = 10
    scene.add(cube)

    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(20, 10, 2)
    sphere.castShadow = true
    scene.add(sphere)

    const ambiColor = '#5a5a5a'
    const ambientLight = new THREE.AmbientLight(ambiColor)
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0x5a5a5a)
    spotLight.position.set(40, 60, -10)
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 2048
    spotLight.shadow.mapSize.height = 2048
    const target = new THREE.Object3D()
    target.position.set(new THREE.Vector3(5, 0, 0))
    spotLight.target = target
    scene.add(spotLight)

    const pointLight = new THREE.PointLight('#cce4ff')
    pointLight.position.set(10, 10, 10)
    pointLight.intensity = 2.4
    pointLight.distance = 14
    scene.add(pointLight)

    controls = {
      rotationSpeed: 0.02,
      bouncingSpped: 0.03,
      ambientColor: ambiColor,
      disableSpotlight: false,
      intensity: 2.4,
      distance: 14
    }

    const gui = new dat.GUI()
    gui.add(controls, 'disableSpotlight').onChange(function (e) {
      spotLight.visible = !e
    })
    gui.addColor(controls, 'ambientColor').onChange(function (e) {
      ambientLight.color = new THREE.Color(e)
    })
    gui.add(controls, 'intensity', 0, 3).onChange(function (e) {
      pointLight.intensity = e
    })
    gui.add(controls, 'distance', 0, 36).onChange(function (e) {
      pointLight.distance = e
    })

    const element = document.getElementById('webGL')
    element.appendChild(renderer.domElement)

    animate()
  }, [])

  function animate() {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return <div id="webGL"></div>
}

export default Chpater04
