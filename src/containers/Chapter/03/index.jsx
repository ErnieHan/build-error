import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

let scene, camera, renderer, controls, perspective, orbit

function Chapter03() {
  useEffect(() => {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(120, 60, 180)
    camera.lookAt(scene.position)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xeeeeee)
    renderer.shadowMap.enabled = true

    const planeGeometry = new THREE.PlaneGeometry(180, 180)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    scene.add(plane)

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)

    for (var j = 0; j < planeGeometry.parameters.height / 5; j++) {
      for (var i = 0; i < planeGeometry.parameters.width / 5; i++) {
        var rnd = Math.random() * 0.75 + 0.25
        var cubeMaterial = new THREE.MeshLambertMaterial()
        cubeMaterial.color = new THREE.Color(rnd, 0, 0)
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

        cube.position.z = -(planeGeometry.parameters.height / 2) + 2 + j * 5
        cube.position.x = -(planeGeometry.parameters.width / 2) + 2 + i * 5
        cube.position.y = 2

        scene.add(cube)
      }
    }

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
    directionalLight.position.set(-20, 40, 60)
    scene.add(directionalLight)

    const ambientLight = new THREE.AmbientLight(0x292929)
    scene.add(ambientLight)
    perspective = 'Perspective'
    controls = {
      perspective: perspective,
      switchCamera: function () {
        if (camera instanceof THREE.PerspectiveCamera) {
          camera = new THREE.OrthographicCamera(
            window.innerWidth / -16,
            window.innerWidth / 16,
            window.innerHeight / 16,
            window.innerHeight / -16,
            -200,
            500
          )
          camera.position.set(120, 60, 180)
          camera.lookAt(scene.position)
          perspective = 'Orthographic'
        } else {
          camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          )
          camera.position.set(120, 60, 180)
          camera.lookAt(scene.position)
          perspective = 'Perspective'
        }
      }
    }

    const gui = new dat.GUI()
    gui.add(controls, 'switchCamera')
    gui.add(controls, 'perspective').listen()
    orbit = new OrbitControls(camera, renderer.domElement)
    const element = document.getElementById('WebGL')
    element.appendChild(renderer.domElement)

    animate()
  }, [])

  function animate() {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  return <div id="WebGL" />
}

export default Chapter03
