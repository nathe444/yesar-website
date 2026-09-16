"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 124;
const DURATION_MS = 6000;
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

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;
    let startedAt = 0;
    let cancelled = false;

    const draw = (frames: HTMLImageElement[], index: number) => {
      const frame = frames[index];
      if (!frame?.complete || !frame.naturalWidth) return;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.drawImage(frame, 0, 0, WIDTH, HEIGHT);
    };

    const play = (frames: HTMLImageElement[]) => {
      if (reduced) {
        draw(frames, FRAME_COUNT - 1);
        return;
      }
      const tick = (now: number) => {
        if (cancelled) return;
        if (!startedAt) startedAt = now;
        const t = Math.min(1, (now - startedAt) / DURATION_MS);
        const index = Math.min(
          FRAME_COUNT - 1,
          Math.floor(t * (FRAME_COUNT - 1)),
        );
        draw(frames, index);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    loadFrames().then((frames) => {
      if (cancelled) return;
      draw(frames, 0);
      play(frames);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
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
