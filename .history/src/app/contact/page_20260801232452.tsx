import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HoursBlock } from "@/components/HoursBlock";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find ${site.name} in Surry Hills — location, hours, and enquiry form.`,
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-border bg-[linear-gradient(180deg,#2b1b11_0%,#21140d_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="animate-fade-in section-label text-honey">Contact &amp; Location</p>
          <h1 className="animate-fade-up heading-display mt-3 text-5xl text-parchment md:text-7xl">
            Drop by or<br />drop a line.
          </h1>
          <p className="animate-fade-up delay-1 mt-5 max-w-lg text-base leading-relaxed text-cream/85 md:text-lg">
            No bookings needed for coffee or a bite — just walk right in. For general questions,
            catering enquiries, or press, use the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">

          <div>
            <h2 className="heading-display mb-6 text-3xl text-foreground">Send an Enquiry</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="heading-display mb-6 text-3xl text-foreground">Visiting Us</h2>
            <HoursBlock showMapLink={true} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,#f6ecdf_0%,#f2e2d1_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="section-label">Common Questions</p>
          <h2 className="heading-display mb-10 mt-3 text-4xl text-foreground md:text-5xl">
            Good to Know
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {site.faqs.map((faq) => (
              <div key={faq.q} className="card-light rounded-2xl p-6">
                <h3 className="text-base font-semibold text-[#8f623a]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f4a39]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
