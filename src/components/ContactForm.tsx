"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Crazy Cafe enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-sm border border-border bg-charcoal p-6 md:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-[0.16em] text-cream-muted"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full border border-border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-[0.16em] text-cream-muted"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.16em] text-cream-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full resize-y border border-border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50"
          placeholder="Bookings, catering, or just say hey…"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-lime px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-lime-dim"
      >
        Send via email
      </button>
      <p className="text-xs leading-relaxed text-cream-muted">
        Opens your email app with the message ready to send. No spam, no
        backend.
      </p>
    </form>
  );
}
