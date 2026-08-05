import Link from "next/link";
import { hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(220,230,212,0.2)] bg-[linear-gradient(180deg,#44503f_0%,#3a4536_100%)] pb-[env(safe-area-inset-bottom)] text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:px-5 sm:py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <p className="brand-mark text-xl text-parchment sm:text-2xl">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
            {site.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[rgba(220,230,212,0.3)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-stone transition-colors hover:border-honey hover:text-honey"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[rgba(220,230,212,0.3)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-stone transition-colors hover:border-honey hover:text-honey"
            >
              TikTok
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-latte">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-cream sm:mt-4">
            {formatAddress()}
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-sm text-stone transition-colors hover:text-honey"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block break-all text-sm text-stone transition-colors hover:text-honey"
          >
            {site.email}
          </a>
          <p className="mt-4 text-sm text-honey sm:mt-5">{hoursBlurb}</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:text-honey"
          >
            Open in Maps
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-latte">
            Explore
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:mt-4 md:grid-cols-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-stone transition-colors hover:text-honey"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(220,230,212,0.16)]">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-stone sm:px-5 sm:py-5 md:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
