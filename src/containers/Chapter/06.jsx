import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as dat from 'dat.gui'
import chroma from 'chroma-js'
import Stats from 'stats.js'

let scene,
  camera,
  renderer,
  controls,
  gui,
  clock,
  trackballControls,
  stats,
  mesh,
  text,
  helper

export default function Chapter06() {
  useEffect(() => {
    init()
  }, [])

  function init() {
    clock = new THREE.Clock()
    stats = initStats()
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(0x000000)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    camera.position.set(100, 100, 300)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    helper = new THREE.CameraHelper(camera)
    scene.add(helper)

    const element = document.getElementById('WebGL-output')
    trackballControls = new OrbitControls(camera, element)
    trackballControls.rotateSpeed = 1.0
    trackballControls.zoomSpeed = 1.0
    trackballControls.panSpeed = 1.0
    trackballControls.staticMoving = true

    const amibentLight = new THREE.AmbientLight(0x383838)
    scene.add(amibentLight)

    const spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(300, 300, 300)
    spotLight.intensity = 1
    scene.add(spotLight)

    controls = {
      camera1: function () {
        camera.position.set(146, 72, 372)
      },
      camera2: function () {
        camera.position.set(-22, 83, 255)
      },
      camera3: function () {
        camera.position.set(237, 75, -190)
      }
    }

    gui = new dat.GUI()

    const fontLoader = new THREE.FontLoader()
    fontLoader.load(
      '/assets/fonts/bitstream_vera_sans_mono_roman.typeface.js',
      function (font) {
        createText(font, '126,070', { x: 0, y: 80, z: 0 }, 'store1')
        createText(font, '75,314', { x: 125, y: 80, z: -108 }, 'store2')
        createText(font, '71,620', { x: -55, y: 80, z: 160 }, 'store3')
      }
    )

    function createText(font, text, position, name) {
      const { x, y, z } = position
      const textGeometry = new THREE.TextGeometry(text, {
        font: font,
        size: 4,
        height: 1
      })
      textGeometry.computeBoundingBox()
      textGeometry.computeVertexNormals()
      const textMaterial = new THREE.MeshLambertMaterial({ color: '#C99152' })
      text = new THREE.Mesh(textGeometry, textMaterial)
      text.castShadow = true
      text.position.set(x, y, z)
      text.position.y = 80
      text.name = name
      if (name === 'store3') {
        text.rotation.y = 1
      }
      scene.add(text)
    }

    addLine('#C99152', { x: 12, y: 28, z: 0 })
    addLine('#C99152', { x: 135, y: 28, z: -108 })
    addLine('#C99152', { x: -50, y: 28, z: 150 })

    function addLine(color, position) {
      const lineGeometry = new THREE.BoxGeometry(0.25, 100, 0.25)
      const lineMaterial = new THREE.MeshLambertMaterial({ color })
      const line = new THREE.Mesh(lineGeometry, lineMaterial)
      line.position.set(position.x, position.y, position.z)
      scene.add(line)
    }

    // gui.add(controls, 'store').onChange(function (e) {
    //   const store = scene.getObjectByName('store')
    //   scene.remove(store)
    //   controls.store = e
    //   fontLoader.load(
    //     '/assets/fonts/bitstream_vera_sans_mono_roman.typeface.js',
    //     function (font) {
    //       createText(font)
    //     }
    //   )
    // })
    gui.add(controls, 'camera1')
    gui.add(controls, 'camera2')
    gui.add(controls, 'camera3')

    const mtlLoader = new MTLLoader()
    mtlLoader.load('/assets/models/newyork.mtl', function (materials) {
      materials.preload()
      const objLoader = new OBJLoader()
      objLoader.setMaterials(materials)
      objLoader.load('/assets/models/newyork.obj', function (object) {
        const scale = chroma.scale(['#ffffff'])
        setColors(object, scale)
        mesh = object
        mesh.scale.set(0.15, 0.15, 0.15)
        scene.add(mesh)
      })
    })

    function setColors(object, scale) {
      const { children } = object
      if (children && children.length > 0) {
        children.forEach(function (e) {
          setColors(e, scale)
        })
      } else {
        if (object instanceof THREE.Mesh) {
          object.material.color = new THREE.Color(scale(Math.random()).hex())
        }
      }
    }

    document.getElementById('WebGL-output').appendChild(renderer.domElement)

    animate()
  }

  function animate() {
    stats.update()
    const delta = clock.getDelta()
    trackballControls.update(delta)
    trackballControls.autoRotate = true
    trackballControls.autoRotateSpeed = 0.1
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    if (mesh) {
      // mesh.rotation.y += 0.001
    }
    if (text) {
      // text.rotation.y += 0.001
    }
  }

  function initStats() {
    const stats = new Stats()
    stats.showPanel(0)
    document.getElementById('WebGL-output').appendChild(stats.dom)
    return stats
  }

  return (
    <>
      <div id="WebGL-output" />
    </>
  )
}
