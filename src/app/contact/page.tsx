import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HoursBlock } from "@/components/HoursBlock";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — location, hours, and direct enquiries.`,
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="border-b border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="animate-fade-up text-xs uppercase tracking-[0.18em] text-lime">
            Contact & Location
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 font-display text-5xl tracking-wide text-cream md:text-7xl">
            Drop by or drop a line
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-lg text-base leading-relaxed text-cream-muted md:text-lg">
            No bookings needed for coffee or bites — just walk on in. For general questions, catering, or press enquiries, send us a message below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Hours */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl text-cream mb-6">Send an Enquiry</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="font-display text-3xl text-cream mb-6">Visiting Us</h2>
            <HoursBlock showMapLink={true} />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="border-t border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.18em] text-lime">
            Helpful Info
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {site.faqs.map((faq) => (
              <div key={faq.q} className="border border-border bg-ink p-6">
                <h3 className="font-display text-2xl text-lime">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
