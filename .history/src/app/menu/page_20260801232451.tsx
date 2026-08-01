import type { Metadata } from "next";
import { MenuList } from "@/components/MenuList";
import { menuCategories } from "@/content/menu";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu",
  description: `Specialty coffee, all-day breakfast, and kitchen favourites at ${site.name} in Surry Hills.`,
};

export default function MenuPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#2b1b11_0%,#21140d_100%)]">
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="animate-fade-in section-label text-honey">Our Menu</p>
            <h1 className="animate-fade-up heading-display mt-4 text-5xl text-parchment md:text-7xl">
              What we pour<br />&amp; plate
            </h1>
            <p className="animate-fade-up delay-1 mt-5 max-w-md text-base leading-relaxed text-cream/85 md:text-lg">
              Everything made fresh daily. Prices in AUD. Ask our barista for today&apos;s specials and off-menu seasonal drinks.
            </p>

            <nav
              className="animate-fade-up delay-2 mt-10 flex flex-wrap gap-2.5"
              aria-label="Menu categories"
            >
              {menuCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-[rgba(242,224,194,0.35)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-honey transition-colors hover:border-honey hover:bg-[rgba(248,224,194,0.1)]"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80"
            alt="Barista at work at Crazy Cafe"
            fill
            className="object-cover object-center"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b11] via-[#2b1b11]/60 to-transparent" />
        </div>
      </section>

      <div className="border-b border-t border-border bg-[rgba(42,27,17,0.96)]">
        <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">
          <p className="text-center text-xs text-cream/75">
            All dietary requirements can be accommodated — please ask our team. ·{" "}
            <span className="text-honey">Cash or card accepted.</span>
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <MenuList animate />
      </section>

      <section className="border-t border-border bg-[linear-gradient(180deg,#2b1b11_0%,#1f140d_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-[rgba(242,224,194,0.2)] bg-[rgba(255,255,255,0.03)] p-6 text-center sm:flex-row sm:justify-between sm:text-left md:p-8">
            <div>
              <h2 className="heading-display text-2xl text-parchment md:text-3xl">
                Come and taste for yourself.
              </h2>
              <p className="mt-1 text-sm text-stone">
                Open every day, 7:00 AM – 2:00 PM. No reservations needed.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Find Us
              </Link>
              <Link href="/about" className="btn-outline whitespace-nowrap">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
