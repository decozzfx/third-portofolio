import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export interface LoadOptions {
  receiveShadow?: boolean
  castShadow?: boolean
}

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options: LoadOptions = { receiveShadow: true, castShadow: true }
): Promise<THREE.Group> {
  const { receiveShadow = true, castShadow = true } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene
        obj.name = 'model'
        obj.position.set(0, 0, 0)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)
        obj.traverse((child) => {
          const mesh = child as THREE.Mesh
          if (mesh.isMesh) {
            mesh.castShadow = castShadow
            mesh.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      (error) => reject(error)
    )
  })
}
