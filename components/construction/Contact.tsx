"use client";

import { useState, type FormEvent } from "react";
import { constructionPerks } from "@/lib/construction";

const fields = [
  { name: "name", label: "FULL NAME", autoComplete: "name" },
  { name: "phone", label: "PHONE NUMBER", autoComplete: "tel" },
  { name: "email", label: "EMAIL ADDRESS", autoComplete: "email" },
  { name: "type", label: "PROJECT TYPE", autoComplete: "off" },
] as const;

export function ConstructionContact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name", "phone", "email", "details"];
    const missing = required.some((key) => String(data.get(key) ?? "").trim() === "");
    if (missing) {
      setSent(false);
      setError("Add your name, phone, email, and a short note about the project.");
      return;
    }
    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="page" style={{ padding: "0 var(--pad-grid) calc(192 * var(--u))" }}>
      <div className="c-contact">
        <div className="flex flex-col" style={{ gap: "calc(43 * var(--u))" }}>
          <div className="flex flex-col" style={{ gap: "calc(9 * var(--u))" }}>
            <div className="flex flex-col" style={{ gap: "calc(15 * var(--u))" }}>
              <p className="t-20 font-light opacity-70">G E T S T A R T E D</p>
              <h2 className="text-5xl c-lh-69 no-wrap text-nowrap font-semibold">
                Tell us about your project
              </h2>
            </div>
            <p className="t-20 font-light opacity-70">
              Share a few details and our team will get back to you within one
              business day with next steps and a rough estimate.
            </p>
          </div>
          <ul className="flex flex-col" style={{ gap: "calc(12 * var(--u))" }}>
            {constructionPerks.map((perk) => (
              <li key={perk} className="flex items-center" style={{ gap: "calc(6 * var(--u))" }}>
                <img src="/construction/bullet.svg" alt="" width={11} height={11} style={{ width: "calc(11 * var(--u))", height: "calc(11 * var(--u))" }} />
                <span className="t-20 font-light opacity-70">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="flex flex-col" style={{ gap: "calc(36 * var(--u))" }} onSubmit={onSubmit} noValidate>
          <div className="flex flex-col" style={{ gap: "calc(16 * var(--u))" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(12 * var(--u))" }}>
              {fields.slice(0, 2).map((field) => (
                <label key={field.name} className="c-field">
                  <span className="c-fs-16 font-light opacity-70" style={{ paddingLeft: "calc(18 * var(--u))" }}>
                    {field.label}
                  </span>
                  <input name={field.name} autoComplete={field.autoComplete} />
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(12 * var(--u))" }}>
              {fields.slice(2).map((field) => (
                <label key={field.name} className="c-field">
                  <span className="c-fs-16 font-light opacity-70" style={{ paddingLeft: "calc(18 * var(--u))" }}>
                    {field.label}
                  </span>
                  <input name={field.name} autoComplete={field.autoComplete} type={field.name === "email" ? "email" : "text"} />
                </label>
              ))}
            </div>
            <label className="c-field">
              <span className="c-fs-16 font-light opacity-70" style={{ paddingLeft: "calc(18 * var(--u))" }}>
                PROJECT DETAILS
              </span>
              <textarea name="details" />
            </label>
          </div>
          <button
            type="submit"
            className="t-20 h-[calc(42*var(--u))] w-full rounded-[10px] bg-[#472313] font-medium text-[#fff8ec]"
          >
            SUBMIT REQUEST
          </button>
          {error ? (
            <p className="t-18 text-[#472313]" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="t-18" role="status">
              Request received. Our team will reply within one business day.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
