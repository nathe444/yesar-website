"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(57.85deg, rgb(248, 239, 224) 4.23%, rgb(255, 251, 245) 99.69%)",
        paddingTop: "calc(49 * var(--u))",
        paddingBottom: "calc(48 * var(--u))",
        paddingLeft: "calc(166 * var(--u))",
        paddingRight: "calc(166 * var(--u))",
        marginBottom: "calc(232 * var(--u))",
      }}
    >
      <div
        className="page flex flex-col items-start justify-between lg:flex-row lg:items-center"
        style={{ gap: "calc(158 * var(--u))" }}
      >
        <div className="max-w-[900px]">
          <h2
            className="t-40 text-ink"
            style={{ lineHeight: "var(--lh-79)" }}
          >
            Get Yesar news in your inbox
          </h2>
          <p className="t-20 mt-[4px] max-w-[469px] font-light text-ink">
            Optional strip — subscribe for group announcements, the same way a
            flagship industrial site keeps its newsroom close.
          </p>
        </div>
        {sent ? (
          <p className="t-20 text-ink" role="status">
            You are on the list. We will write when there is something worth
            reading.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="relative flex w-full items-center bg-card"
            style={{
              width: "calc(530 * var(--u))",
              maxWidth: "100%",
              height: "max(3.25rem, calc(64 * var(--u)))",
              borderRadius: "calc(36 * var(--u))",
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="t-20 min-w-0 flex-1 bg-transparent px-7 font-light text-ink outline-none placeholder:text-ink/40"
            />
            <button
              type="submit"
              className="mr-[14px] shrink-0 bg-ink font-light text-cream"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "max(2.25rem, calc(36 * var(--u)))",
                padding: "0 calc(31 * var(--u))",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--fs-20)",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
