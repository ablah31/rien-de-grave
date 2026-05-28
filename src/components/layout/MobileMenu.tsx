"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/archives", label: "Archives" },
  { href: "/manifeste", label: "Manifeste" },
  { href: "/cart", label: "Panier" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-sm lg:hidden"
        >
          <div className="flex h-full flex-col justify-between px-8 py-24">
            <nav className="flex flex-col gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-serif text-4xl text-brand-cream transition-colors hover:text-brand-sand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gray">
              Couture d&apos;ailleurs.
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
