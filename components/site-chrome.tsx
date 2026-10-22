"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME } from "@/lib/pages";

const nav = [
  { href: "/services", label: "What we do" },
  { href: "/locations", label: "Where we go" },
  { href: "/septic-tank-emptying", label: "Emptying" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="wrap topbar-row">
        <Link href="/" className="topbar-logo" onClick={() => setOpen(false)} aria-label={`${SITE_NAME} home`}>
          <BrandLogo />
        </Link>
        <nav className={`topbar-nav ${open ? "is-open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="topbar-phone" href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
        <button type="button" className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bottombar">
      <div className="wrap bottombar-grid">
        <div>
          <BrandLogo />
          <p className="bottombar-blurb">Septic emptying and repairs for homes and small sites across Ireland. Ring us—we will talk you through it.</p>
        </div>
        <div className="bottombar-cols">
          <div>
            <p className="bottombar-label">Help</p>
            <Link href="/septic-tank-repair">Urgent backup</Link>
            <Link href="/services">All services</Link>
          </div>
          <div>
            <p className="bottombar-label">Places</p>
            <Link href="/locations">Cities &amp; counties</Link>
            <Link href="/septic-tank-emptying-dublin">Dublin</Link>
            <Link href="/septic-tank-emptying-cork">Cork</Link>
          </div>
        </div>
        <a className="bottombar-call" href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
      </div>
      <div className="wrap bottombar-meta">
        <span>© {new Date().getFullYear()} {SITE_NAME}</span>
      </div>
    </footer>
  );
}

export function StickyMobileCta() {
  return (
    <div className="phone-stick">
      <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
    </div>
  );
}
