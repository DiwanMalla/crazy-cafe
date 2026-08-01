import Link from "next/link";
import { hoursBlurb } from "@/content/hours";
import { formatAddress, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <p className="font-display text-3xl tracking-wide text-cream">
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-muted">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-lime">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream">
            {formatAddress()}
          </p>
          <a
            href={site.phoneHref}
            className="mt-2 inline-block text-sm text-cream-muted transition-colors hover:text-lime"
          >
            {site.phone}
          </a>
          <p className="mt-4 text-sm text-cream-muted">{hoursBlurb}</p>
          <p className="mt-1 text-sm text-cream">
            Mon–Sun — see{" "}
            <Link
              href="/contact"
              className="text-lime underline-offset-2 hover:underline"
            >
              full hours
            </Link>
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-lime">
            Explore
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/menu"
                className="text-cream-muted transition-colors hover:text-lime"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-cream-muted transition-colors hover:text-lime"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-cream-muted transition-colors hover:text-lime"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href={site.social.instagram}
                className="text-cream-muted transition-colors hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream-muted md:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
