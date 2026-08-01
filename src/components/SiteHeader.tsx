"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-4 sm:pt-4 md:px-8 md:pt-5">
        <div
          className={`rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4 sm:py-3 md:px-6 ${
            scrolled
              ? "border-[rgba(242,224,194,0.24)] bg-[rgba(33,22,14,0.92)] shadow-2xl shadow-black/35 backdrop-blur-xl"
              : "border-[rgba(242,224,194,0.18)] bg-[rgba(28,19,13,0.55)] backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex min-w-0 flex-1 flex-col leading-none"
            >
              <span className="heading-display truncate text-[1.35rem] text-parchment transition-colors group-hover:text-honey sm:text-2xl md:text-3xl">
                {site.name}
              </span>
              <span className="section-label mt-1 hidden text-[0.58rem] text-latte/90 sm:block">
                Specialty Coffee · Surry Hills
              </span>
            </Link>

            <nav
              className="hidden items-center gap-6 lg:gap-8 md:flex"
              aria-label="Primary"
            >
              {links.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-active={active}
                    className={`nav-link text-sm font-medium tracking-[0.08em] transition-colors ${
                      active
                        ? "text-honey"
                        : "text-cream/85 hover:text-parchment"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:gap-4 md:flex">
              <Link href="/contact" className="btn-primary text-[0.66rem]">
                Visit Us
              </Link>
            </div>

            <button
              type="button"
              className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(242,224,194,0.2)] bg-[rgba(33,22,14,0.7)] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute h-px w-5 bg-parchment transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-parchment transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-parchment transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden
      />

      <aside
        id="mobile-nav"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-[min(88vw,20rem)] flex-col border-l border-[rgba(242,224,194,0.2)] bg-[linear-gradient(180deg,#2b1b11_0%,#1f140d_100%)] text-parchment shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[rgba(242,224,194,0.12)] px-5 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
          <p className="section-label text-latte">Menu</p>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-full border border-[rgba(242,224,194,0.2)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-cream"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {links.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`heading-display rounded-2xl px-4 py-3 text-3xl transition-colors sm:text-4xl ${
                  open ? "animate-reveal" : ""
                } ${
                  active
                    ? "bg-[rgba(185,133,75,0.15)] text-honey"
                    : "text-parchment/90 hover:text-honey"
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 border-t border-[rgba(242,224,194,0.12)] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a href={site.phoneHref} className="block text-sm text-cream">
            {site.phone}
          </a>
          <p className="text-xs text-stone">Open daily 7:00 AM – 2:00 PM</p>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn-primary w-full"
          >
            Visit Us
          </Link>
        </div>
      </aside>
    </header>
  );
}
