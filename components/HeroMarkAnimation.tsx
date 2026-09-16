"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 124;
const WIDTH = 1536;
const HEIGHT = 672;

function frameSrc(index: number) {
  return `/yesar_frames_webp/frame_${String(index).padStart(6, "0")}.webp?v=2`;
}

let frameCache: HTMLImageElement[] | null = null;
let frameCachePromise: Promise<HTMLImageElement[]> | null = null;

function loadFrames() {
  if (frameCache) return Promise.resolve(frameCache);
  if (!frameCachePromise) {
    frameCachePromise = Promise.all(
      Array.from({ length: FRAME_COUNT }, (_, index) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new window.Image();
          img.decoding = "async";
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(frameSrc(index)));
          img.src = frameSrc(index);
        });
      }),
    ).then((frames) => {
      frameCache = frames;
      return frames;
    });
  }
  return frameCachePromise;
}

function frameFromTrack(track: HTMLElement) {
  const range = Math.max(track.offsetHeight * 0.4, window.innerHeight * 0.65);
  const progress = Math.min(1, Math.max(0, window.scrollY / range));
  return Math.round(progress * (FRAME_COUNT - 1));
}

export function HeroMarkAnimation({
  className,
  media,
}: {
  className?: string;
  media?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(!media);

  useEffect(() => {
    if (!media) {
      setActive(true);
      return;
    }
    const mq = window.matchMedia(media);
    const sync = () => setActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [media]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const track = canvas.closest("section") ?? canvas;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frames: HTMLImageElement[] | null = null;
    let raf = 0;
    let ticking = false;
    let cancelled = false;
    let lastIndex = -1;

    const draw = (index: number) => {
      if (!frames || index === lastIndex) return;
      const frame = frames[index];
      if (!frame?.complete || !frame.naturalWidth) return;
      lastIndex = index;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.drawImage(frame, 0, 0, WIDTH, HEIGHT);
    };

    const syncFrame = () => {
      if (!frames || cancelled) return;
      draw(reduced ? FRAME_COUNT - 1 : frameFromTrack(track));
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;
        syncFrame();
      });
    };

    loadFrames().then((loaded) => {
      if (cancelled) return;
      frames = loaded;
      syncFrame();
    });

    if (!reduced) {
      window.addEventListener("scroll", onScrollOrResize, { passive: true });
      window.addEventListener("resize", onScrollOrResize);
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={WIDTH}
      height={HEIGHT}
      aria-hidden
    />
  );
}
