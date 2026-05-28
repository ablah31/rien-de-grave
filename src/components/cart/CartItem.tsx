"use client";

import Link from "next/link";
import { formatEuro } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import type { CartItem as CartItemType } from "@/types/cart";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <article className="grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[1fr_auto]">
      <div className="space-y-2">
        <Link href={`/collection/${item.slug}`} className="font-serif text-2xl hover:opacity-80">
          {item.chapterNumber} - {item.name}
        </Link>
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gray">Taille {item.size}</p>
        <p>{formatEuro(item.price)}</p>
      </div>

      <div className="flex items-end justify-between gap-4 md:flex-col md:items-end">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-9 w-9 border border-white/20"
            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            type="button"
            className="h-9 w-9 border border-white/20"
            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.18em] text-brand-gray hover:text-brand-cream"
          onClick={() => removeItem(item.productId, item.size)}
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}
