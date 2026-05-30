"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { loadGLTFModel } from "@/lib/load-model";
import styles from "./hero-model.module.css";

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
        const A = s * aspect;
        const shift = A * 0.58; // push model toward the right of the canvas
        camera.left = -A - shift;
        camera.right = A - shift;
        camera.top = s;
        camera.bottom = -s;
        camera.updateProjectionMatrix();
      }
    }
  }, []);

  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;
    // skip the 3D entirely on mobile — it's hidden via CSS and would only
    // overlap the headline + waste GPU/memory on phones
    if (window.matchMedia("(max-width: 768px)").matches) return;
    // guard against React StrictMode double-mount leaving two stacked canvases
    container.replaceChildren();

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

    // vertical half-size of the frustum drives model size; based on height so
    // the full-bleed (wide) canvas doesn't shrink it. x widened by aspect to
    // keep proportions (no "gepeng"), then frustum shifted right.
    const scale = scH * 0.0007;
    const aspect = scW / scH;
    refScale.current = scale;
    const A = scale * aspect;
    const shift = A * 0.58;
    const camera = new THREE.OrthographicCamera(
      -A - shift,
      A - shift,
      scale,
      -scale,
      0.01,
      5000,
    );
    refCamera.current = camera;
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbbb, 0.7);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(-1, 0.75, 1).multiplyScalar(50);
    scene.add(dirLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(1, 1, 1).multiplyScalar(50);
    scene.add(keyLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.8;
    controls.target = target;

    let req = 0;
    let model: THREE.Group | null = null;
    const animate = () => {
      req = requestAnimationFrame(animate);
      // spin the model in place (not an orbiting camera); user can still
      // grab/drag to rotate the view via OrbitControls
      if (model) model.rotation.y += 0.006;
      controls.update();
      renderer.render(scene, camera);
    };

    loadGLTFModel(scene, "/model.glb", {
      receiveShadow: false,
      castShadow: false,
    })
      .then((obj) => {
        model = obj;
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
      refRenderer.current = null;
      refCamera.current = null;
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
