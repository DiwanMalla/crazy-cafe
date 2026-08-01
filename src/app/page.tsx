import Image from "next/image";
import Link from "next/link";
import { HoursBlock } from "@/components/HoursBlock";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80"
          alt="Barista pouring espresso in a dimly lit cafe"
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
              View menu
            </Link>
            <Link
              href="/contact"
              className="border border-cream/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:border-lime hover:text-lime"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.18em] text-lime">
            The vibe
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-wide text-cream md:text-6xl">
            A coffee den for people who refuse to call it a night
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted md:text-lg">
            {site.description}
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-lime transition-colors hover:text-cream"
          >
            Our story →
          </Link>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <HoursBlock />
        </div>
      </section>
    </>
  );
}
