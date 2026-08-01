import Image from "next/image";
import Link from "next/link";
import { HoursBlock } from "@/components/HoursBlock";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80"
          alt="Barista pouring specialty espresso in a dimly lit cafe"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-glow absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="animate-fade-up font-display text-6xl leading-none tracking-wide text-cream sm:text-7xl md:text-8xl lg:text-9xl">
            {site.name}
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-xl font-display text-3xl tracking-wide text-lime sm:text-4xl md:text-5xl">
            Late nights. Loud coffee.
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-md text-base leading-relaxed text-cream-muted md:text-lg">
            {site.tagline}
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-lime px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-lime-dim"
            >
              Explore Menu
            </Link>
            <Link
              href="/contact"
              className="border border-cream/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:border-lime hover:text-lime"
            >
              Location & Hours
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="border-t border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {site.features.map((feature, i) => (
              <div
                key={feature.title}
                className="border border-border/80 bg-ink/60 p-6 transition-all hover:border-lime/40"
              >
                <span className="font-display text-2xl text-lime">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vibe Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-lime">
                The Vibe
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-cream sm:text-5xl md:text-6xl">
                A coffee den for people who refuse to call it a night
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream-muted md:text-lg">
                {site.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-lime/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-lime transition-colors hover:bg-lime hover:text-ink"
                >
                  Read Our Story &rarr;
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                alt="Cozy cafe interior with coffee brewing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="border-t border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <HoursBlock />
        </div>
      </section>
    </>
  );
}
