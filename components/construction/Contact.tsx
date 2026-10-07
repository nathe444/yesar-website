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
    <section id="contact" className="page c-contact-section">
      <div className="c-contact">
        <div className="c-contact-intro">
          <div className="c-contact-lead">
            <div className="c-contact-heading">
              <p className="t-20 font-light opacity-70">G E T S T A R T E D</p>
              <h2 className="c-contact-title">Tell us about your project</h2>
            </div>
            <p className="t-20 font-light opacity-70">
              Share a few details and our team will get back to you within one
              business day with next steps and a rough estimate.
            </p>
          </div>
          <ul className="c-contact-perks">
            {constructionPerks.map((perk) => (
              <li key={perk}>
                <img src="/construction/bullet.svg" alt="" width={11} height={11} />
                <span className="t-20 font-light opacity-70">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="c-contact-form" onSubmit={onSubmit} noValidate>
          <div className="c-contact-fields">
            <div className="c-contact-row">
              {fields.slice(0, 2).map((field) => (
                <label key={field.name} className="c-field">
                  <span className="c-fs-16 font-light opacity-70">{field.label}</span>
                  <input name={field.name} autoComplete={field.autoComplete} />
                </label>
              ))}
            </div>
            <div className="c-contact-row">
              {fields.slice(2).map((field) => (
                <label key={field.name} className="c-field">
                  <span className="c-fs-16 font-light opacity-70">{field.label}</span>
                  <input name={field.name} autoComplete={field.autoComplete} type={field.name === "email" ? "email" : "text"} />
                </label>
              ))}
            </div>
            <label className="c-field">
              <span className="c-fs-16 font-light opacity-70">PROJECT DETAILS</span>
              <textarea name="details" />
            </label>
          </div>
          <button type="submit" className="c-contact-submit">
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
