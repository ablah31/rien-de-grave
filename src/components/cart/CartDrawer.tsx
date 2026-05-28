"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/store/cart-store";
import { formatEuro } from "@/lib/utils";

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const total = useCartStore((state) => state.getTotal());

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            aria-label="Fermer le panier"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-brand-black p-6"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl">Panier</h2>
                <p className="text-brand-gray">Total: {formatEuro(total)}</p>
              </div>
              <Link
                href="/cart"
                onClick={closeCart}
                className="h-12 border border-brand-cream bg-brand-cream px-6 py-3 text-center text-sm uppercase tracking-[0.2em] text-brand-black"
              >
                Voir le panier
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
