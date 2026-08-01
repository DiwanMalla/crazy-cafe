import type { Metadata } from "next";
import { MenuList } from "@/components/MenuList";
import { menuCategories } from "@/content/menu";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Coffee, bites, and lunch fuel at ${site.name}.`,
};

export default function MenuPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-border bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="animate-fade-up text-xs uppercase tracking-[0.18em] text-lime">
            Menu
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 font-display text-5xl tracking-wide text-cream md:text-7xl">
            What we pour & plate
          </h1>
          <p className="animate-fade-up delay-2 mt-4 max-w-lg text-base leading-relaxed text-cream-muted md:text-lg">
            Prices in AUD. Menu rotates with the mood — ask the bar for
            today&apos;s specials.
          </p>

          <nav
            className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-cream-muted transition-colors hover:border-lime hover:text-lime"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <MenuList animate />
      </section>
    </div>
  );
}
