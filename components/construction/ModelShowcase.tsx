"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { galleryModelBuffer } from "@/lib/gallery-model";

const MODEL_SRC = "/3d/fd0fcff7053d4d9f8829320a30d7087e.glb";

function whenIdle(signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const finish = () => resolve();
    const idleId = window.requestIdleCallback(finish, { timeout: 2000 });
    signal.addEventListener(
      "abort",
      () => {
        window.cancelIdleCallback(idleId);
        reject(new DOMException("Aborted", "AbortError"));
      },
      { once: true },
    );
  });
}

async function readModel(signal: AbortSignal, onProgress: (fraction: number) => void) {
  const response = await fetch(MODEL_SRC, { priority: "low", signal });
  if (!response.ok || !response.body) {
    throw new Error(`Model request failed: ${response.status}`);
  }

  const total = Number(response.headers.get("content-length")) || 0;
  const reader = response.body.getReader();
  const parts: Uint8Array[] = [];
  let received = 0;
  let lastReport = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    parts.push(value);
    received += value.byteLength;
    const now = performance.now();
    if (total > 0 && (now - lastReport > 120 || received >= total)) {
      lastReport = now;
      onProgress(received / total);
    }
  }

  const bytes = new Uint8Array(received);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.byteLength;
  }
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function frameModel(model: THREE.Object3D, camera: THREE.PerspectiveCamera, controls: OrbitControls) {
  const bounds = new THREE.Box3();
  model.traverse((child) => {
    if (child instanceof THREE.Mesh) bounds.expandByObject(child);
  });
  if (bounds.isEmpty()) return null;

  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  model.position.sub(center);
  model.position.y += size.y / 2;

  const target = new THREE.Vector3(0, size.y * 0.42, 0);
  controls.target.copy(target);
  const fit = () => {
    const aspect = Math.max(camera.aspect, 0.4);
    const fov = (camera.fov * Math.PI) / 180;
    const halfY = size.y * 0.62;
    const halfX = Math.max(size.x, size.z) * 0.62;
    const distance = Math.max(halfY / Math.tan(fov / 2), halfX / (Math.tan(fov / 2) * aspect)) * 1.18;
    camera.position.set(distance * 0.62, size.y * 0.55, distance * 0.82);
    camera.near = Math.max(distance / 200, 0.01);
    camera.far = distance * 20;
    camera.updateProjectionMatrix();
    controls.minDistance = distance * 0.45;
    controls.maxDistance = distance * 2.4;
    controls.update();
  };

  return { size, fit };
}

export function ModelShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const signal = new AbortController();
    let disposed = false;
    let frame = 0;
    let renderer: THREE.WebGLRenderer | null = null;
    let controls: OrbitControls | null = null;
    let environment: THREE.WebGLRenderTarget | null = null;
    let pmrem: THREE.PMREMGenerator | null = null;
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const modelRoot = new THREE.Group();
    let resizeObserver: ResizeObserver | null = null;

    const fail = (error: unknown) => {
      if (disposed || (error instanceof DOMException && error.name === "AbortError")) return;
      setStatus("error");
    };

    const start = async () => {
      const buffer = await readModel(signal.signal, (fraction) => {
        if (!disposed) setProgress(fraction);
      });
      if (disposed) return;

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      await whenIdle(signal.signal);
      if (disposed) return;

      const model = await new Promise<THREE.Object3D>((resolve, reject) => {
        new GLTFLoader().parse(galleryModelBuffer(buffer), "", (gltf) => resolve(gltf.scene), reject);
      });
      if (disposed) return;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.setClearColor(0xefe4d0, 1);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      root.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(4, 2.5, 6);
      scene.add(modelRoot);

      pmrem = new THREE.PMREMGenerator(renderer);
      environment = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = environment.texture;
      scene.environmentIntensity = 0.85;
      scene.add(new THREE.AmbientLight(0xfff8ef, 0.35));
      const sun = new THREE.DirectionalLight(0xfff3e2, 2.1);
      sun.position.set(6, 10, 5);
      scene.add(sun);
      const fill = new THREE.DirectionalLight(0xd5e4f5, 0.7);
      fill.position.set(-6, 3, -4);
      scene.add(fill);

      const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(1, 48),
        new THREE.MeshBasicMaterial({ color: 0x472313, transparent: true, opacity: 0.14, depthWrite: false }),
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = 0.001;
      scene.add(shadow);
      geometries.push(shadow.geometry);
      materials.push(shadow.material);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      controls.autoRotateSpeed = 0.7;
      controls.maxPolarAngle = Math.PI / 2.02;
      controls.target.set(0, 1, 0);
      root.tabIndex = 0;
      controls.listenToKeyEvents(root);

      model.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        const list = Array.isArray(child.material) ? child.material : [child.material];
        for (const material of list) {
          if (!(material instanceof THREE.MeshStandardMaterial)) continue;
          if (material.transparent && material.opacity < 0.95) {
            material.roughness = 0.06;
            material.metalness = 0;
            material.side = THREE.DoubleSide;
            material.envMapIntensity = 1.2;
          }
        }
      });
      modelRoot.add(model);

      let fitCamera: (() => void) | null = null;
      const resize = () => {
        const width = root.clientWidth;
        const height = root.clientHeight;
        if (!width || !height || !renderer) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        fitCamera?.();
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(root);

      const framed = frameModel(model, camera, controls);
      fitCamera = framed?.fit ?? null;
      resize();
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      shadow.scale.set(Math.max(size.x, size.z) * 0.72, Math.max(size.x, size.z) * 0.72, 1);

      const tick = () => {
        frame = requestAnimationFrame(tick);
        controls?.update();
        renderer?.render(scene, camera);
      };
      tick();
      setStatus("ready");
    };

    void start().catch(fail);

    return () => {
      disposed = true;
      signal.abort();
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      controls?.dispose();
      modelRoot.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        child.geometry?.dispose();
        const list = Array.isArray(child.material) ? child.material : [child.material];
        list.forEach((material) => material.dispose());
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      environment?.dispose();
      pmrem?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  const loadingLabel =
    progress > 0 && progress < 1
      ? `Loading model ${Math.round(progress * 100)}%`
      : "Loading model";

  return (
    <div
      ref={rootRef}
      className={status === "ready" ? "c-showcase-stage c-showcase-live" : "c-showcase-stage"}
      role="group"
      aria-busy={status === "loading"}
      aria-label="Interactive 3D model. Drag to rotate, scroll to zoom, or use the arrow keys."
    >
      {status === "loading" ? <p className="c-showcase-status">{loadingLabel}</p> : null}
      {status === "error" ? <p className="c-showcase-status">The model could not be loaded.</p> : null}
      {status === "ready" ? <p className="c-showcase-hint">Drag to rotate</p> : null}
    </div>
  );
}
