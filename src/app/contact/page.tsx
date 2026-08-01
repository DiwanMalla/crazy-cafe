import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HoursBlock } from "@/components/HoursBlock";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Hours, location, and how to reach ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="animate-fade-up text-xs uppercase tracking-[0.18em] text-lime">
            Contact
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 font-display text-5xl tracking-wide text-cream md:text-7xl">
            Drop by or shout out
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-lg text-base leading-relaxed text-cream-muted md:text-lg">
            Questions about the menu, catering, or a big table after hours?
            Send a note — we read everything between shots.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-cream md:text-4xl">
              Send a message
            </h2>
            <p className="mt-3 text-sm text-cream-muted">
              Or email us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-lime transition-colors hover:text-cream"
              >
                {site.email}
              </a>
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:pt-2">
            <HoursBlock />
          </div>
        </div>
      </section>
    </div>
  );
}
