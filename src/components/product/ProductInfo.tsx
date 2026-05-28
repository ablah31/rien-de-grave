"use client";

import { useState } from "react";
import { formatEuro } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import type { Product, ProductSize } from "@/types/product";
import { SizeSelector } from "@/components/product/SizeSelector";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [size, setSize] = useState<ProductSize>(product.sizes[1] ?? product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    addItem(product, size, quantity);
  };

  return (
    <aside className="overflow-hidden md:editorial-card">
      <header className="hidden items-center justify-between border-b border-white/15 bg-brand-paper px-5 py-3 text-brand-navy md:flex">
        <span className="text-[10px] uppercase tracking-[0.24em]">Fiche produit</span>
        <span className="text-[10px] uppercase tracking-[0.24em]">Taille selectionnee: {size}</span>
      </header>

      <div className="space-y-6 pt-6 md:bg-brand-navy/92 md:p-7">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-gray md:text-brand-paper/70">
            Piece {product.chapterNumber}
            </p>
            <p className="text-xl leading-none md:hidden">{formatEuro(product.price)}</p>
          </div>
          <h1 className="font-serif text-5xl leading-none md:text-6xl">{product.name}</h1>
          <p className="text-[11px] uppercase tracking-[0.24em] text-brand-gray md:text-brand-paper/70">
            {product.subtitle}
          </p>
          <p className="hidden text-2xl md:block">{formatEuro(product.price)}</p>
        </div>

        <p className="max-w-xl text-sm leading-6 text-brand-cream/75 md:text-base md:text-brand-paper/85">
          {product.description}
        </p>

        <blockquote className="border-l border-brand-sand/70 pl-4 font-serif text-xl text-brand-cream md:text-brand-paper">
          {`"${product.quote}"`}
        </blockquote>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gray md:text-brand-paper/70">
              Taille
            </p>
            <button
              type="button"
              className="text-[10px] uppercase tracking-[0.18em] text-brand-gray underline md:text-brand-paper/70"
            >
              Guide des tailles
            </button>
          </div>
          <SizeSelector sizes={product.sizes} value={size} onChange={setSize} />
          <p className="text-[11px] text-brand-gray md:text-brand-paper/60">
            Taille selectionnee: {size}
          </p>
        </div>

        <div className="flex items-center justify-between border-y border-white/10 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gray md:text-brand-paper/70">
            Quantite
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-9 w-9 border border-white/20 text-lg"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="min-w-10 text-center">{quantity}</span>
            <button
              type="button"
              className="h-9 w-9 border border-white/20 text-lg"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onAddToCart}
            className="h-12 bg-brand-cream px-6 text-xs uppercase tracking-[0.22em] text-brand-black transition-opacity hover:opacity-90 md:border md:border-brand-red md:bg-brand-red md:text-brand-paper"
          >
            Ajouter au panier
          </button>
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.16em] text-brand-gray md:justify-start md:text-brand-paper/70">
            <span>Livraison 48h</span>
            <span>-</span>
            <span>Retours 14 jours</span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
          <div>
            <dt className="text-brand-gray md:text-brand-paper/65">Composition</dt>
            <dd>{product.material}</dd>
          </div>
          <div>
            <dt className="text-brand-gray md:text-brand-paper/65">Grammage</dt>
            <dd>{product.weight}</dd>
          </div>
          <div>
            <dt className="text-brand-gray md:text-brand-paper/65">Coupe</dt>
            <dd>{product.fit}</dd>
          </div>
          <div>
            <dt className="text-brand-gray md:text-brand-paper/65">Fabrication</dt>
            <dd>{product.madeIn}</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
