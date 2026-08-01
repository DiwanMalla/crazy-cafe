import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} — a daytime coffee spot in Surry Hills.`,
};

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative min-h-[45vh] overflow-hidden md:min-h-[55vh]">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80"
          alt="Warm cafe interior with tables and hanging lights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto flex min-h-[45vh] max-w-6xl items-end px-5 pb-12 md:min-h-[55vh] md:px-8 md:pb-16">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.18em] text-lime">
              About
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-cream md:text-7xl">
              {site.about.headline}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl space-y-6">
          {site.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-cream-muted md:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/menu"
            className="bg-lime px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-lime-dim"
          >
            See the menu
          </Link>
          <Link
            href="/contact"
            className="border border-cream/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:border-lime hover:text-lime"
          >
            Plan a visit
          </Link>
        </div>
      </section>
    </div>
  );
}
