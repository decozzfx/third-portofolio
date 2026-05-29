"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { loadGLTFModel } from "@/lib/load-model";
import styles from "./hero-model.module.css";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export function HeroModel() {
  const [loading, setLoading] = useState(true);
  const refContainer = useRef<HTMLDivElement>(null);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);

  const refCamera = useRef<THREE.OrthographicCamera | null>(null);
  const refScale = useRef(1);

  const handleResize = useCallback(() => {
    const renderer = refRenderer.current;
    const container = refContainer.current;
    const camera = refCamera.current;
    if (container && renderer) {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      if (camera) {
        const aspect = w / h;
        const s = refScale.current;
        camera.left = -s * aspect;
        camera.right = s * aspect;
        camera.top = s;
        camera.bottom = -s;
        camera.updateProjectionMatrix();
      }
    }
  }, []);

  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;

    const scW = container.clientWidth;
    const scH = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(scW, scH);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;

    const scene = new THREE.Scene();
    const target = new THREE.Vector3(0, 0.2, -0.5);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    );

    // vertical half-size of the frustum; x is widened by the container aspect
    // ratio so the model keeps correct proportions (no "gepeng"/squish)
    const scale = scW <= 480 ? scW * 0.0026 : scW * 0.0016;
    const aspect = scW / scH;
    refScale.current = scale;
    const camera = new THREE.OrthographicCamera(
      -scale * aspect,
      scale * aspect,
      scale,
      -scale,
      0.01,
      5000,
    );
    refCamera.current = camera;
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.7);
    hemiLight.color.setHSL(0.6, 0.2, 0.25);
    hemiLight.groundColor.setHSL(0.04, 1, 0.4);
    hemiLight.position.set(0, -50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xc6f24d, 1.4);
    dirLight.position.set(-1, 0.75, 1).multiplyScalar(50);
    scene.add(dirLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(1, 1, 1).multiplyScalar(50);
    scene.add(keyLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.8;
    controls.target = target;

    let req = 0;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;
      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 26;
        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };

    loadGLTFModel(scene, "/pochita.glb", {
      receiveShadow: false,
      castShadow: false,
    })
      .then(() => {
        animate();
        setLoading(false);
      })
      .catch((err) => {
        console.error("GLB load failed", err);
        setLoading(false);
      });

    return () => {
      cancelAnimationFrame(req);
      controls.dispose();
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize, false);
  }, [handleResize]);

  return (
    <div
      ref={refContainer}
      className={styles.model}
      aria-hidden="true"
      data-loading={loading}
    />
  );
}
