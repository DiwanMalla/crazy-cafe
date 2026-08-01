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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-8 md:pt-5">
        <div
          className={`rounded-full border px-4 py-3 transition-all duration-500 md:px-6 ${
            scrolled
              ? "border-[rgba(242,224,194,0.24)] bg-[rgba(33,22,14,0.87)] shadow-2xl shadow-black/35 backdrop-blur-xl"
              : "border-[rgba(242,224,194,0.18)] bg-[rgba(28,19,13,0.48)] backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex min-w-0 flex-col leading-none"
            >
              <span className="heading-display truncate text-2xl text-parchment transition-colors group-hover:text-honey md:text-3xl">
                {site.name}
              </span>
              <span className="section-label mt-1 text-[0.62rem] text-latte/90">
                Specialty Coffee · Surry Hills
              </span>
            </Link>

            <nav
              className="hidden items-center gap-8 md:flex"
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

            <div className="hidden items-center gap-4 md:flex">
              <a
                href={site.phoneHref}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-honey"
              >
                {site.phone}
              </a>
              <Link href="/contact" className="btn-primary text-[0.66rem]">
                Book A Visit
              </Link>
            </div>

            <button
              type="button"
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(242,224,194,0.2)] bg-[rgba(33,22,14,0.7)] md:hidden"
              aria-expanded={open}
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
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[82vw] max-w-sm border-l border-[rgba(242,224,194,0.2)] bg-[linear-gradient(180deg,#2b1b11_0%,#1f140d_100%)] px-6 pb-8 pt-24 text-parchment shadow-2xl transition-transform duration-400 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p className="section-label mb-8 text-latte">Navigation</p>
        <nav className="flex flex-col gap-1">
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
                className={`heading-display animate-reveal rounded-2xl px-4 py-3 text-4xl transition-colors ${
                  active
                    ? "bg-[rgba(185,133,75,0.15)] text-honey"
                    : "text-parchment/90 hover:text-honey"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-2xl border border-[rgba(242,224,194,0.2)] bg-[rgba(255,255,255,0.03)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-latte">
            Contact
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-sm text-cream transition-colors hover:text-honey"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block text-sm text-cream transition-colors hover:text-honey"
          >
            {site.email}
          </a>
          <p className="mt-3 text-xs text-stone">
            Open daily from 7:00 AM to 2:00 PM
          </p>
        </div>
      </aside>
    </header>
  );
}
