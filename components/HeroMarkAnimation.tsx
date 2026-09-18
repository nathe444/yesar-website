"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 124;
const BUILD_END = 78;
const BUILD_PORTION = 0.2;
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
  const extra = Math.max(1, track.offsetHeight - window.innerHeight);
  const progress = Math.min(
    1,
    Math.max(0, -track.getBoundingClientRect().top / extra),
  );

  if (progress <= BUILD_PORTION) {
    return Math.round((progress / BUILD_PORTION) * BUILD_END);
  }

  const wrap = (progress - BUILD_PORTION) / (1 - BUILD_PORTION);
  return Math.min(
    FRAME_COUNT - 1,
    BUILD_END + Math.round(wrap * (FRAME_COUNT - 1 - BUILD_END)),
  );
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
    const pin = canvas.closest(".hero-pin");
    const section = canvas.closest("section");
    const track =
      pin instanceof HTMLElement
        ? pin
        : section instanceof HTMLElement
          ? section
          : canvas;

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
