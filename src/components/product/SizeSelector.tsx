"use client";

import type { ProductSize } from "@/types/product";

interface SizeSelectorProps {
  sizes: ProductSize[];
  value: ProductSize;
  onChange: (size: ProductSize) => void;
}

export function SizeSelector({ sizes, value, onChange }: SizeSelectorProps) {
  return (
    <div className="grid grid-cols-5 gap-2 md:gap-2">
      {sizes.map((size) => {
        const active = size === value;
        return (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`h-10 min-w-10 border text-xs uppercase tracking-[0.16em] transition-colors md:h-11 md:tracking-[0.18em] ${
              active
                ? "border-brand-cream bg-brand-cream text-brand-black md:border-brand-paper md:bg-brand-paper md:text-brand-navy"
                : "border-white/20 text-brand-cream hover:border-white/50 md:border-white/30 md:text-brand-paper"
            }`}
          >
            {size}
          </button>
        );
      })}
      <button
        type="button"
        className="h-10 border border-white/10 px-2 text-[10px] uppercase tracking-[0.14em] text-brand-gray md:h-11 md:border-white/20 md:text-brand-paper/65"
        disabled
      >
        XL+
      </button>
    </div>
  );
}
