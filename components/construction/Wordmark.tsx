"use client";

import { useLayoutEffect, useRef } from "react";

export function ConstructionWordmark() {
  const conRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = conRef.current;
    if (!el) return;

    const fit = () => {
      const probe = document.createElement("div");
      probe.style.cssText = "position:absolute;visibility:hidden;width:calc(1891 * var(--u));height:0;";
      document.body.appendChild(probe);
      const target = probe.getBoundingClientRect().width;
      probe.remove();

      el.style.letterSpacing = "0px";
      const natural = el.getBoundingClientRect().width;
      const gaps = "CONSTRUCTION".length - 1;
      if (natural > 0 && gaps > 0) {
        el.style.letterSpacing = `${(target - natural) / gaps}px`;
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <p className="c-word-yesar">YESAR</p>
      <p ref={conRef} className="c-word-con">
        CONSTRUCTION
      </p>
    </>
  );
}
