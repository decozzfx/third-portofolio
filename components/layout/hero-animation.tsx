'use client'

import { Box, Spinner } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadGLTFModel } from '@/lib/load-model'

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export function HeroAnimation() {
  const [loading, setLoading] = useState(true)
  const refContainer = useRef<HTMLDivElement>(null)
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null)

  const handleResize = useCallback(() => {
    const renderer = refRenderer.current
    const container = refContainer.current
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  }, [])

  useEffect(() => {
    const container = refContainer.current
    if (!container) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(scW, scH)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(0, 0.2, -0.5)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    const scale =
      scW <= 480
        ? scW <= 280
          ? scW * 0.0038
          : scW * 0.0025
        : scW * 0.002
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      5000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
    hemiLight.color.setHSL(0.6, 0.2, 0.2)
    hemiLight.groundColor.setHSL(0.095, 1, 0.75)
    hemiLight.position.set(0, -50, 0)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    dirLight.position.set(-1, 0.75, 1)
    dirLight.position.multiplyScalar(50)
    dirLight.castShadow = true
    scene.add(dirLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.enablePan = false
    controls.enableRotate = true
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.rotateSpeed = 0.8
    controls.target = target

    const stopAutoRotate = () => {
      controls.autoRotate = false
    }
    renderer.domElement.addEventListener('pointerdown', stopAutoRotate)

    let req = 0
    let frame = 0
    const animate = () => {
      req = requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 : frame
      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 26
        camera.position.y = 10
        camera.position.x =
          p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z =
          p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }
      renderer.render(scene, camera)
    }

    loadGLTFModel(scene, '/pochita.glb', {
      receiveShadow: false,
      castShadow: false,
    })
      .then(() => {
        animate()
        setLoading(false)
      })
      .catch((err) => {
        console.error('GLB load failed', err)
      })

    return () => {
      cancelAnimationFrame(req)
      renderer.domElement.removeEventListener('pointerdown', stopAutoRotate)
      controls.dispose()
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
    return () => window.removeEventListener('resize', handleResize, false)
  }, [handleResize])

  return (
    <Box
      ref={refContainer}
      position="relative"
      mx="auto"
      mt={['-20px', '-50px', '-90px']}
      mb={['-80px', '-160px', '-200px']}
      w={['280px', '480px', '640px']}
      h={['280px', '480px', '640px']}
      cursor="grab"
      _active={{ cursor: 'grabbing' }}
      css={{ '& canvas': { touchAction: 'none' } }}
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      )}
    </Box>
  )
}
