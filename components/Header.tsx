"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, storeLinks } from "@/lib/site";
import Logo from "./Logo";
import { BagIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-linen/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur" : "bg-linen"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Lakes Floral Gift & Garden — home" onClick={() => setOpen(false)}>
          <Logo priority className="h-10 w-auto md:h-11" />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[15px]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`py-2 transition-colors hover:text-evergreen ${
                    pathname === n.href ? "text-evergreen underline decoration-cedar decoration-2 underline-offset-8" : "text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={`tel:${site.phone.tel}`} className="btn btn-ghost hidden !min-h-[42px] !px-4 md:inline-flex" aria-label={`Call ${site.phone.display}`}>
            <PhoneIcon />
            {site.phone.display}
          </a>
          <a href={storeLinks.home} className="btn btn-primary !min-h-[42px] !px-4">
            <BagIcon />
            <span>Order<span className="hidden sm:inline"> flowers</span></span>
          </a>
          <button
            type="button"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="xl:hidden">
        <nav aria-label="Mobile" className="wrap h-[calc(100dvh-72px)] overflow-y-auto pb-28 pt-4">
          <ul className="divide-y divide-line border-y border-line">
            {[{ href: "/", label: "Home" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="display block py-4 text-3xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href={storeLinks.home} className="btn btn-primary">Order flowers online</a>
            <a href={`tel:${site.phone.tel}`} className="btn btn-ghost">
              <PhoneIcon /> Call {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
