"use client";

import { useState } from "react";
import { constructionNav } from "@/lib/construction";
import { Pill } from "./Pill";

export function ConstructionHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="c-header">
      <div className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center" style={{ gap: "calc(8 * var(--u))" }}>
          <img
            src="/construction/logo.svg"
            alt=""
            width={39.2162}
            height={33.8908}
            style={{ width: "var(--logo-w)", height: "var(--logo-h)" }}
          />
          <span className="c-brand font-semibold whitespace-nowrap text-[#472313]">
            YESAR CONSTRUCTION
          </span>
        </a>
        <div className="hidden items-center lg:flex" style={{ gap: "var(--gap-nav-cta)" }}>
          <nav
            className="flex items-center text-[#472313]"
            style={{ gap: "var(--gap-nav)" }}
            aria-label="Primary"
          >
            {constructionNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="t-20 font-light whitespace-nowrap transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Pill href="#contact" solid nav>
            BOOK A CONSULTATION
          </Pill>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#472313]/20 text-[#472313] lg:hidden"
          aria-expanded={open}
          aria-controls="construction-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className={`h-px w-4 bg-current ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-current ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-current ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="construction-nav"
          className="mt-4 flex flex-col gap-3 border-t border-[#472313]/10 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {constructionNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="t-20 font-light"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Pill href="#contact" solid>
            BOOK A CONSULTATION
          </Pill>
        </nav>
      ) : null}
    </header>
  );
}
