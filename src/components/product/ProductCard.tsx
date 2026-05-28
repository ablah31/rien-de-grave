"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatEuro } from "@/lib/utils";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group overflow-hidden border-b border-white/10 pb-8 md:editorial-card md:border-b-0 md:pb-0"
    >
      <Link href={`/collection/${product.slug}`} className="block">
        <header className="hidden items-center justify-between border-b border-white/15 bg-brand-paper px-4 py-3 text-brand-navy md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">{product.chapterNumber}</span>
          <span className="text-[10px] uppercase tracking-[0.25em]">RIEN DE GRAVE</span>
          <span className="text-[10px] uppercase tracking-[0.25em]">{formatEuro(product.price)}</span>
        </header>

        <div className="relative aspect-[4/5] overflow-hidden bg-brand-paper md:bg-brand-navy/85 md:p-4">
          <div className="relative h-full w-full overflow-hidden bg-brand-paper md:border md:border-white/20 md:bg-brand-black">
            <Image
              src={product.images.back}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-x-4 bottom-5 hidden border border-white/30 bg-brand-black/45 p-3 backdrop-blur-sm md:block">
            <p className="font-serif text-base leading-tight text-brand-paper/95">
              {`"${product.quote}"`}
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-4 text-brand-cream md:border-t md:border-white/10 md:bg-brand-paper md:px-5 md:py-5 md:text-brand-navy">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-brand-gray md:text-brand-navy/60">
                Piece {product.chapterNumber}
              </p>
              <h3 className="font-serif text-3xl leading-none md:text-4xl">{product.name}</h3>
            </div>
            <p className="pt-7 text-sm md:pt-0">{formatEuro(product.price)}</p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-brand-gray md:text-brand-navy/80">
            {product.subtitle}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
