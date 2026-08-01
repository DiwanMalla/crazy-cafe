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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="font-display text-2xl tracking-wide text-cream transition-colors hover:text-lime md:text-3xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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
                className="nav-link font-sans text-sm uppercase tracking-[0.14em] text-cream-muted transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-cream transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 bg-ink transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-2 px-5 py-8"
          aria-label="Mobile primary"
        >
          {links.map((link, index) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`font-display text-4xl tracking-wide transition-colors ${
                  active ? "text-lime" : "text-cream"
                } ${open ? "animate-reveal" : ""}`}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
