import Link from "next/link";
import { hours } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(230,200,154,0.2)] bg-[linear-gradient(180deg,#25180f_0%,#1a110b_100%)] text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr_0.95fr_0.8fr]">
          <div>
            <p className="heading-display text-3xl text-parchment">{site.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-latte">{site.headline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">{site.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              {["Instagram", "TikTok"].map((label) => {
                const href = label === "Instagram" ? site.social.instagram : site.social.tiktok;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[rgba(230,200,154,0.3)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-stone transition-colors hover:border-honey hover:text-honey"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-latte">Opening Hours</p>
            <ul className="mt-4 space-y-2.5">
              {hours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-stone">{entry.day.slice(0, 3)}</span>
                  <span className="text-cream/95">{entry.closed ? "Closed" : `${entry.open} - ${entry.close}`}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-latte">Visit</p>
            <address className="mt-4 not-italic space-y-2 text-sm leading-relaxed text-stone">
              <p className="text-cream">{formatAddress()}</p>
              <p>{site.address.state} {site.address.postcode}</p>
              <a href={site.phoneHref} className="block text-cream transition-colors hover:text-honey">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block transition-colors hover:text-honey">
                {site.email}
              </a>
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-honey transition-colors hover:text-latte"
            >
              Open in Maps ->
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-latte">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone transition-colors hover:text-honey">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(230,200,154,0.16)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-stone md:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>42 Neon Lane, Surry Hills NSW 2010, Australia</p>
        </div>
      </div>
    </footer>
  );
}
