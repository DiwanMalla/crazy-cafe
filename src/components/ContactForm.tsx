"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`${site.name} enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "mt-2 w-full min-h-11 rounded-xl border border-[rgba(58,69,54,0.2)] bg-white/80 px-4 py-3 text-base text-foreground placeholder:text-[#9a9588] focus:border-[rgba(138,155,126,0.75)] focus:outline-none transition-colors sm:text-sm";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-light space-y-5 rounded-2xl p-5 sm:p-6 md:p-7"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Sarah Smith"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="hello@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#6a7064]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Catering enquiry, event, or just saying hi…"
        />
      </div>

      <button type="submit" className="btn-primary w-full text-center">
        Send via Email
      </button>

      <p className="text-xs leading-relaxed text-[#6f5847]">
        Opens your mail app with the message ready to send. No spam, no backend
        — your message goes direct to us.
      </p>
    </form>
  );
}
