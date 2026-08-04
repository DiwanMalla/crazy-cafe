import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} — great specialty coffee and good vibes in Surry Hills.`,
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="relative min-h-[50svh] overflow-hidden sm:min-h-[58vh] md:min-h-[68vh]">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"
          alt="Warm interior of Crazy Cafe in Surry Hills"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/72 to-espresso/18" />
        <div className="relative mx-auto flex min-h-[50svh] max-w-7xl items-end px-4 pb-10 sm:min-h-[58vh] sm:px-5 sm:pb-14 md:min-h-[68vh] md:px-8 md:pb-20">
          <div className="animate-fade-up max-w-2xl">
            <p className="section-label text-honey">Our Story</p>
            <h1 className="heading-display mt-3 text-[clamp(2.2rem,9vw,4.5rem)] text-parchment">
              {site.about.headline}
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/90 sm:mt-4 sm:text-base">
              We are a neighborhood specialty cafe with an Australian spirit:
              honest flavors, warm people, and mornings done properly.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,#f8efe3_0%,#f3e5d4_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-20">
            <div className="space-y-5 sm:space-y-6">
              {site.about.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 20)}
                  className="text-base leading-relaxed text-[#5e4937] sm:text-lg md:text-xl"
                >
                  {para}
                </p>
              ))}

              <div className="cta-row pt-2 sm:pt-4">
                <Link href="/menu" className="btn-primary">
                  View Our Menu
                </Link>
                <Link href="/contact" className="btn-outline-dark">
                  Come Visit Us
                </Link>
              </div>
            </div>

            <aside className="card-light overflow-hidden rounded-2xl">
              <div className="divide-y divide-[rgba(91,59,39,0.12)]">
                {[
                  {
                    label: "Open",
                    value: "7 Days a Week",
                    sub: "7:00 AM – 2:00 PM",
                  },
                  {
                    label: "Location",
                    value: "Surry Hills, NSW",
                    sub: "42 Neon Lane",
                  },
                  {
                    label: "Walk-ins",
                    value: "Always Welcome",
                    sub: "No reservations required",
                  },
                  {
                    label: "Coffee",
                    value: "Specialty Beans",
                    sub: "Ethically sourced & locally roasted",
                  },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-4 sm:px-6 sm:py-5 md:px-7">
                    <p className="section-label">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                      {item.value}
                    </p>
                    <p className="text-sm text-[#6f5847]">{item.sub}</p>
                  </div>
                ))}
                <div className="px-5 py-4 sm:px-6 sm:py-5 md:px-7">
                  <p className="section-label">Phone</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-base font-semibold text-foreground transition-colors hover:text-[#8d613a] sm:text-lg"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
          <div className="mb-8 sm:mb-12">
            <p className="section-label">What We Offer</p>
            <h2 className="heading-display mt-3 text-[clamp(1.85rem,6vw,3rem)] text-foreground">
              What makes us <em className="text-caramel not-italic">Crazy</em>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {site.features.map((feature, i) => (
              <div
                key={feature.title}
                className="card-light rounded-2xl p-5 sm:p-7"
              >
                <span className="section-label text-caramel/70">0{i + 1}</span>
                <h3 className="heading-display mt-3 text-xl text-foreground sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64503f]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-56 overflow-hidden sm:h-72 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=80"
          alt="Barista brewing espresso"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-5 md:px-8">
          <div className="max-w-lg">
            <p className="heading-display text-xl leading-snug text-parchment sm:text-2xl md:text-3xl">
              No velvet ropes. No quiet hours. Just honest coffee and generous
              plates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
