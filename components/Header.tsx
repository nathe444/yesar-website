"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div
        className="page flex items-center justify-between"
        style={{
          paddingLeft: "var(--pad-header)",
          paddingRight: "var(--pad-header)",
          paddingTop: "var(--header-pt)",
        }}
      >
        <Logo compact />
        <div
          className="hidden items-center lg:flex"
          style={{ gap: "var(--gap-nav-cta)" }}
        >
          <nav
            className="flex items-center text-[#070606]"
            style={{ gap: "var(--gap-nav)" }}
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="t-20 font-light whitespace-nowrap transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="pill-nav bg-ink text-cream">
            Contact Us
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`h-px w-4 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-4 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 bg-cream px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="t-20 block py-1 font-light"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="pill bg-ink text-cream"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
