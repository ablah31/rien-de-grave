"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductGalleryProps {
  product: Product;
}

const imageLabels: Record<keyof Product["images"], string> = {
  front: "Vue face avant",
  back: "Vue dos imprime",
  detail: "Detail impression",
  worn: "Photo portee",
};

export function ProductGallery({ product }: ProductGalleryProps) {
  const entries = useMemo(
    () =>
      Object.entries(product.images) as [
        keyof Product["images"],
        string,
      ][],
    [product.images],
  );
  const [selected, setSelected] = useState(entries[0][0]);

  const selectedImage = entries.find(([key]) => key === selected)?.[1] ?? entries[0][1];

  return (
    <div className="overflow-hidden md:editorial-card">
      <header className="hidden items-center justify-between border-b border-white/10 bg-brand-paper px-4 py-3 text-brand-navy md:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">Vue produit</span>
        <span className="text-[10px] uppercase tracking-[0.25em]">RIEN DE GRAVE</span>
      </header>

      <div className="space-y-4 md:bg-brand-navy/90 md:p-5">
        <figure className="relative aspect-[4/5] overflow-hidden bg-brand-paper md:border md:border-white/20 md:bg-brand-black">
          <Image
            src={selectedImage}
            alt={`${product.name} - ${imageLabels[selected]}`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 60vw"
            priority
          />
        </figure>

        <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:pb-0">
          {entries.map(([key, src]) => {
            const active = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                className={`relative w-20 shrink-0 overflow-hidden border transition-colors md:w-auto md:p-1 ${
                  active
                    ? "border-brand-cream md:border-brand-paper"
                    : "border-white/15 hover:border-white/45"
                }`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${product.name} - ${imageLabels[key]}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <span className="absolute bottom-1 left-1 right-1 bg-black/45 px-1 py-[2px] text-[8px] uppercase tracking-[0.16em] text-white/80">
                  {key}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
