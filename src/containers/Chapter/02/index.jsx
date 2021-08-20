import React, { useEffect } from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui'

let scene,
  camera,
  renderer,
  axes,
  controls,
  stats,
  cube,
  sphere,
  plane,
  ambientLight,
  spotLight,
  numberOfObjects

function Chapter02() {
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
    scene.add(camera)
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    // plane
    const planeGeometry = new THREE.PlaneGeometry(60, 40)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true
    plane.rotation.x = -0.5 * Math.PI
    plane.position.y = 0
    plane.position.z = 0
    scene.add(plane)

    // ambientLight
    ambientLight = new THREE.AmbientLight(0x0c0c0c)
    scene.add(ambientLight)

    //spotLight
    spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-40, 60, -10)
    spotLight.castShadow = true
    scene.add(spotLight)

    // fog
    scene.fog = new THREE.FogExp2(0xffffff, 0.01)
    // all objects has same material
    scene.overrideMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })

    // addCube
    controls = {
      rotationSpeed: 0.02,
      addCube: function () {
        const cubeSize = Math.ceil(Math.random() * 3)
        const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
        const cubeMaterial = new THREE.MeshLambertMaterial({
          color: Math.random() * 0xffffff
        })
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.castShadow = true
        cube.name = 'cube-' + scene.children.length
        const x =
          -30 + Math.round(Math.random() * planeGeometry.parameters.width)
        const y = Math.round(Math.random() * 5)
        const z =
          -20 + Math.round(Math.random() * planeGeometry.parameters.height)
        cube.position.set(x, y, z)
        scene.add(cube)
        numberOfObjects = scene.children.length
      },
      removeCube: function () {
        const allChildren = scene.children
        const last = allChildren[allChildren.length - 1]
        if (last instanceof THREE.Mesh) {
          scene.remove(last)
          numberOfObjects = scene.children.length
        }
      }
    }

    const gui = new dat.GUI()
    gui.add(controls, 'rotationSpeed', 0, 0.5)
    gui.add(controls, 'addCube')
    gui.add(controls, 'removeCube')

    const element = document.getElementById('WebGL')
    element.appendChild(renderer.domElement)
    animate()
  }, [])

  function animate() {
    scene.traverse(function (obj) {
      // 類似.map() 找出scene裡所有對象
      if (obj instanceof THREE.Mesh && obj !== plane) {
        obj.rotation.x += controls.rotationSpeed
        obj.rotation.y += controls.rotationSpeed
        obj.rotation.z += controls.rotationSpeed
      }
    })
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return <div id="WebGL" />
}

export default Chapter02
