"use client";

import { useState } from "react";
import { tradingNav } from "@/lib/trading";

export function TradingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="tr-header">
      <a href="/" className="tr-brand">
        <img
          src="/trading/c8278.svg"
          alt=""
          width={39.216}
          height={33.891}
          className="tr-mark"
        />
        <span>YESAR TRADING</span>
      </a>
      <div className="tr-nav-wrap">
        <nav className="tr-nav" aria-label="Primary">
          {tradingNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="tr-solid">
          GET IN TOUCH
        </a>
      </div>
      <button
        type="button"
        className="tr-menu"
        aria-expanded={open}
        aria-controls="trading-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="tr-menu-icon" aria-hidden>
          <span className={open ? "tr-bar tr-bar-a" : "tr-bar"} />
          <span className={open ? "tr-bar tr-bar-b" : "tr-bar"} />
          <span className={open ? "tr-bar tr-bar-c" : "tr-bar"} />
        </span>
      </button>
      {open ? (
        <nav id="trading-nav" className="tr-mobile" aria-label="Mobile">
          {tradingNav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="tr-solid" onClick={() => setOpen(false)}>
            GET IN TOUCH
          </a>
        </nav>
      ) : null}
    </header>
  );
}
