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
    <div className="page-shell">
      <section className="border-b border-border bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
          <p className="animate-fade-in section-label text-honey">
            Contact &amp; Location
          </p>
          <h1 className="animate-fade-up heading-display mt-3 text-[clamp(2.4rem,10vw,4.5rem)] text-parchment">
            Drop by or
            <br />
            drop a line.
          </h1>
          <p className="animate-fade-up delay-1 mt-4 max-w-lg text-sm leading-relaxed text-cream/85 sm:mt-5 sm:text-base md:text-lg">
            No bookings needed for coffee or a bite — just walk right in. For
            general questions, catering enquiries, or press, use the form below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="heading-display mb-5 text-2xl text-foreground sm:mb-6 sm:text-3xl">
              Send an Enquiry
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="heading-display mb-5 text-2xl text-foreground sm:mb-6 sm:text-3xl">
              Visiting Us
            </h2>
            <HoursBlock showMapLink />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,#f7f3e9_0%,#efe9db_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
          <p className="section-label">Common Questions</p>
          <h2 className="heading-display mb-8 mt-3 text-[clamp(1.85rem,6vw,3rem)] text-foreground sm:mb-10">
            Good to Know
          </h2>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {site.faqs.map((faq) => (
              <div key={faq.q} className="card-light rounded-2xl p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-caramel sm:text-base">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a5f54]">
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
