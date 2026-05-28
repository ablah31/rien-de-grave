"use client";

import { useState } from "react";
import { formatEuro } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  const [isLoading, setIsLoading] = useState(false);

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout indisponible.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Quelque chose s'est perdu en route. Reessayez dans un instant.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className="space-y-6 border border-white/10 bg-brand-brown/10 p-6">
      <h2 className="font-serif text-3xl">Resume</h2>
      <div className="flex items-center justify-between text-sm">
        <span>Total</span>
        <span className="text-xl">{formatEuro(total)}</span>
      </div>
      <button
        type="button"
        disabled={items.length === 0 || isLoading}
        onClick={onCheckout}
        className="h-12 w-full border border-brand-cream bg-brand-cream px-6 text-sm uppercase tracking-[0.2em] text-brand-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Chargement..." : "Passer au paiement"}
      </button>
    </aside>
  );
}
