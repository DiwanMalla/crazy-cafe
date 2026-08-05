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
          src="/cafe/storefront.png"
          alt="Crazies Cafe storefront with yellow awning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="grain absolute inset-0" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-[max(4rem,env(safe-area-inset-bottom))] pt-28 sm:px-5 sm:pb-20 sm:pt-36 md:px-8 md:pb-28">
          <p className="animate-fade-up brand-mark text-[clamp(2.5rem,11vw,5.75rem)] leading-[0.95] text-parchment">
            {site.name}
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl heading-display text-[clamp(1.5rem,5vw,2.75rem)] text-honey sm:mt-4">
            {site.headline}
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-md text-sm leading-relaxed text-cream/90 sm:mt-5 sm:text-base md:text-lg">
            {site.tagline}
          </p>
          <div className="animate-fade-up delay-3 cta-row mt-7 sm:mt-9">
            <Link href="/menu" className="btn-primary">
              View menu
            </Link>
            <Link href="/contact" className="btn-outline">
              Find us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <div className="grid divide-y divide-[rgba(220,230,212,0.12)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {site.features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 px-4 py-7 sm:gap-4 sm:px-5 sm:py-8 md:px-6 md:py-9"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-warm bg-[rgba(138,155,126,0.2)] text-xs font-bold text-honey sm:h-10 sm:w-10 sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-parchment sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone sm:mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28"
        id="about-preview"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="heading-display mt-3 text-[clamp(1.85rem,6vw,3rem)] text-foreground sm:mt-4">
              Built for mornings that{" "}
              <em className="text-caramel not-italic">linger</em>.
            </h2>
            <div className="mt-5 space-y-4 sm:mt-6">
              {site.about.paragraphs.slice(0, 2).map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="text-sm leading-relaxed text-[#5a5f54] sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-5 border-l-2 border-caramel/50 pl-4 text-sm leading-relaxed text-[#5a5f54] sm:mt-6">
              Every cup is dialed in daily, every plate is built for flavour
              first, and every guest is treated like a regular from day one.
            </p>
            <div className="cta-row mt-7 sm:mt-8">
              <Link href="/about" className="btn-dark">
                Our story
              </Link>
              <Link
                href="/menu"
                className="inline-flex min-h-11 items-center justify-center text-xs font-bold uppercase tracking-[0.16em] text-caramel transition-colors hover:text-espresso"
              >
                See the menu →
              </Link>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:max-w-none">
            <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/cafe/seating.png"
                alt="Sage green tables and seating inside Crazies Cafe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 25vw"
              />
            </div>
            <div className="flex flex-col gap-3 pt-6 sm:gap-4 sm:pt-8">
              <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/cafe/window-bar.png"
                  alt="Window bar seating with warm pendant lights"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
              <div className="img-zoom relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/cafe/counter.png"
                  alt="Service counter and coffee bar at Crazies Cafe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <Reviews />

      <section className="border-t border-border bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
          <HoursBlock />
        </div>
      </section>
    </>
  );
}
