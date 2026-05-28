"use client";

import Link from "next/link";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCartStore } from "@/store/cart-store";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-8 md:py-20">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-gray">Panier</p>
        <h1 className="font-serif text-5xl md:text-6xl">Panier</h1>
      </header>

      {items.length === 0 ? (
        <div className="space-y-4 border border-white/10 p-8">
          <p className="text-lg">Votre panier est encore vide.</p>
          <p className="text-brand-gray">Rien de grave.</p>
          <Link href="/collection" className="text-sm uppercase tracking-[0.18em] underline">
            Retour a la collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            {items.map((item) => (
              <CartItem key={`${item.productId}-${item.size}`} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </section>
  );
}
