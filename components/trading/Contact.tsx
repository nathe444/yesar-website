"use client";

import { useState, type FormEvent } from "react";
import { tradingPerks } from "@/lib/trading";

const fields = [
  { name: "name", label: "FULL NAME", autoComplete: "name" },
  { name: "company", label: "COMPANY", autoComplete: "organization" },
  { name: "email", label: "EMAIL ADDRESS", autoComplete: "email" },
  { name: "type", label: "INQUIRY TYPE", autoComplete: "off" },
] as const;

export function TradingContact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = ["name", "email", "message"].some(
      (key) => String(data.get(key) ?? "").trim() === "",
    );
    if (missing) {
      setSent(false);
      setError("Add your name, email, and a short message.");
      return;
    }
    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="tr-contact">
      <div className="tr-contact-copy">
        <p className="tr-kicker">G E T I N T O U C H</p>
        <h2 className="tr-h2">Let&apos;s talk trade</h2>
        <p className="tr-body">
          Whether you&apos;re sourcing materials or looking to distribute through our
          network, our trade desk is ready to help.
        </p>
        <ul className="tr-perks">
          {tradingPerks.map((perk) => (
            <li key={perk}>
              <img src="/trading/95136.svg" alt="" width={11} height={11} />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
      <form className="tr-form" onSubmit={onSubmit} noValidate>
        <div className="tr-form-row">
          {fields.slice(0, 2).map((field) => (
            <label key={field.name} className="tr-field">
              <span>{field.label}</span>
              <input name={field.name} autoComplete={field.autoComplete} />
            </label>
          ))}
        </div>
        <div className="tr-form-row">
          {fields.slice(2).map((field) => (
            <label key={field.name} className="tr-field">
              <span>{field.label}</span>
              <input
                name={field.name}
                autoComplete={field.autoComplete}
                type={field.name === "email" ? "email" : "text"}
              />
            </label>
          ))}
        </div>
        <label className="tr-field">
          <span>MESSAGE</span>
          <textarea name="message" />
        </label>
        <button type="submit" className="tr-submit">
          SEND INQUIRY
        </button>
        {error ? <p className="tr-form-note">{error}</p> : null}
        {sent ? <p className="tr-form-note">Inquiry sent. Our trade desk will be in touch.</p> : null}
      </form>
    </section>
  );
}
