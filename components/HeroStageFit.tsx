"use client";

import { useLayoutEffect, useRef } from "react";

const STAGE_W = 1875.859;
const STAGE_H = 955;

export function HeroStageFit({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const apply = () => {
      const u = Math.min(window.innerWidth, 1920) / 1920;
      const stageW = STAGE_W * u;
      const stageH = STAGE_H * u;
      const fit = Math.min(
        1,
        parent.clientWidth / stageW,
        parent.clientHeight / stageH,
      );
      el.style.setProperty("--hero-fit", String(Number.isFinite(fit) ? fit : 1));
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(parent);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <div ref={ref} className="hero-stage-fit hidden lg:block">
      {children}
    </div>
  );
}
