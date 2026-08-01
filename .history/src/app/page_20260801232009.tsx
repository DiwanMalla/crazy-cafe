import Image from "next/image";
import Link from "next/link";
import { HoursBlock } from "@/components/HoursBlock";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2400&q=80"
          alt="Morning coffee service inside Crazy Cafe"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,224,194,0.18),transparent_42%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-36 md:px-8 md:pb-24">
          <p className="animate-fade-in section-label mb-5 text-honey">
            Specialty Coffee · Surry Hills, NSW
          </p>

          <h1 className="animate-fade-up heading-display max-w-4xl text-5xl leading-[1.02] text-parchment sm:text-6xl md:text-7xl lg:text-[5.7rem]">
            Crafted mornings.
            <br />
            <em className="text-caramel-gradient not-italic">Loud coffee.</em>
          </h1>

          <p className="animate-fade-up delay-1 mt-6 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            {site.tagline}
          </p>

          <div className="animate-fade-up delay-2 mt-8 flex flex-wrap gap-4">
            <Link href="/menu" className="btn-primary">
              Explore the Menu
            </Link>
            <Link href="/contact" className="btn-outline">
              Find Us &amp; Hours
            </Link>
          </div>

          <div className="animate-fade-up delay-3 mt-10 w-full max-w-3xl rounded-2xl border border-[rgba(248,224,194,0.22)] bg-[rgba(25,15,9,0.46)] p-5 backdrop-blur-sm md:p-6">
            <div className="flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/85 md:gap-8">
              <span>Open 7 Days</span>
              <span className="text-caramel/45">·</span>
              <span>7:00 AM – 2:00 PM</span>
              <span className="text-caramel/45">·</span>
              <span>Walk-ins Welcome</span>
              <span className="text-caramel/45">·</span>
              <span>Specialty Coffee</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-ambient-float">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-caramel/60">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="border-y border-border bg-[linear-gradient(180deg,#28190f_0%,#21140d_100%)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {site.features.map((feature, i) => (
              <div key={feature.title} className="flex items-start gap-4 px-6 py-9">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-warm bg-[rgba(185,133,75,0.12)] text-sm font-bold text-honey">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-parchment">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" id="about-preview">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
              Built for the people<br />
              who <em className="text-caramel">refuse</em> to rush.
            </h2>
            <div className="mt-6 space-y-4">
              {site.about.paragraphs.map((para) => (
                <p key={para.slice(0, 20)} className="text-base leading-relaxed text-[#5b4635]">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Our Full Story
              </Link>
              <Link href="/menu" className="btn-outline">
                See the Menu
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="img-zoom aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Close-up of a specialty coffee cup"
                fill={false}
                width={400}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="img-zoom aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                  alt="Cozy Crazy Cafe interior"
                  fill={false}
                  width={300}
                  height={225}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="img-zoom aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
                  alt="Latte art in a cafe"
                  fill={false}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full mt-4 rounded-2xl border border-border bg-[linear-gradient(180deg,#fff8ef_0%,#f4e5d2_100%)] p-5 text-sm text-[#5b4635] md:p-6 lg:max-w-xl">
            <p className="section-label">Brand Promise</p>
            <p className="mt-2 leading-relaxed">
              Every cup is dialed in daily, every plate is built for flavor first, and every guest is treated like a regular from day one.
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      <Reviews />

      <section className="border-t border-border bg-[linear-gradient(180deg,#2a1b11_0%,#1f140d_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <HoursBlock />
        </div>
      </section>
    </>
  );
}
