import type { Metadata } from "next";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { MenuList } from "@/components/MenuList";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu",
  description: `Specialty coffee, all-day breakfast, and kitchen favourites at ${site.name} in Surry Hills.`,
};

export default function MenuPage() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="animate-fade-in section-label text-honey">Our Menu</p>
            <h1 className="animate-fade-up heading-display mt-3 text-[clamp(2.4rem,10vw,4.5rem)] text-parchment sm:mt-4">
              What we pour
              <br />
              &amp; plate
            </h1>
            <p className="animate-fade-up delay-1 mt-4 max-w-md text-sm leading-relaxed text-cream/85 sm:mt-5 sm:text-base md:text-lg">
              Everything made fresh daily. Prices in AUD. Ask our barista for
              today&apos;s specials and off-menu seasonal drinks.
            </p>

            <MenuCategoryNav />
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="/cafe/counter.png"
            alt="Coffee bar at Crazies Cafe"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#44503f] via-[#44503f]/60 to-transparent" />
        </div>
      </section>

      <div className="border-b border-t border-border bg-[rgba(58,69,54,0.96)]">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 md:px-8">
          <p className="text-center text-[11px] leading-relaxed text-cream/75 sm:text-xs">
            Dietary needs welcome — please ask our team.{" "}
            <span className="text-honey">Cash or card accepted.</span>
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <MenuList animate />
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-16">
          <div className="flex flex-col items-stretch gap-5 rounded-2xl border border-[rgba(220,230,212,0.2)] bg-[rgba(255,255,255,0.04)] p-5 text-center sm:items-center sm:p-6 sm:text-left md:flex-row md:justify-between md:p-8">
            <div>
              <h2 className="heading-display text-xl text-parchment sm:text-2xl md:text-3xl">
                Come and taste for yourself.
              </h2>
              <p className="mt-1 text-sm text-stone">
                Open every day, 7:00 AM – 2:00 PM. No reservations needed.
              </p>
            </div>
            <div className="cta-row shrink-0 justify-center md:justify-end">
              <Link href="/contact" className="btn-primary">
                Find Us
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
