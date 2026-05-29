"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderBg() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    let gl: WebGLRenderingContext | null = null;
    try {
      gl = document
        .createElement("canvas")
        .getContext("webgl") as WebGLRenderingContext | null;
    } catch {
      gl = null;
    }
    if (!gl) return; // CSS .glow fallback remains
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(el.clientWidth, el.clientHeight) },
    };

    const resize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight);
      uniforms.u_res.value.set(el.clientWidth, el.clientHeight);
    };
    resize();
    el.appendChild(renderer.domElement);
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `void main(){ gl_Position = vec4(position,1.0); }`,
      fragmentShader: `
        uniform float u_time; uniform vec2 u_res;
        void main(){
          vec2 uv = gl_FragCoord.xy/u_res;
          float w = 0.5 + 0.5*sin(uv.x*4.0 + u_time*0.4) * cos(uv.y*3.0 - u_time*0.3);
          vec3 accent = vec3(0.776, 0.949, 0.302);
          float a = smoothstep(0.4, 1.0, w) * 0.18;
          gl_FragColor = vec4(accent, a);
        }`,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(mesh);

    let raf = 0;
    const t0 = performance.now();
    const loop = () => {
      uniforms.u_time.value = (performance.now() - t0) / 1000;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      if (renderer.domElement.parentNode === el)
        el.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <div
      ref={mount}
      style={{ position: "absolute", inset: 0, zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
