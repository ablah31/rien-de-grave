"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useCartStore } from "@/store/cart-store";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/archives", label: "Archives" },
  { href: "/manifeste", label: "Manifeste" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b border-white/10 transition-colors ${
          scrolled ? "bg-brand-black/90 backdrop-blur-md" : "bg-brand-black/35"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center border border-white/15 text-brand-cream/90 lg:flex"
            aria-label="Retour"
          >
            {"<"}
          </button>
          <Logo className="text-[10px] tracking-[0.42em] md:text-xs" />
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] text-brand-cream/80 transition-colors hover:text-brand-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="relative text-[11px] uppercase tracking-[0.25em] text-brand-cream/80 transition-colors hover:text-brand-cream"
            >
              Panier
              {itemCount > 0 ? (
                <span className="ml-2 rounded-full border border-brand-red/80 px-1.5 py-[1px] text-[9px] text-brand-red">
                  {itemCount}
                </span>
              ) : null}
            </Link>
          </nav>

          <button
            type="button"
            className="text-[11px] uppercase tracking-[0.25em] text-brand-cream lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
