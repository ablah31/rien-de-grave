"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/cart";
import type { Product, ProductSize } from "@/types/product";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: ProductSize, quantity?: number) => void;
  removeItem: (productId: string, size: ProductSize) => void;
  updateQuantity: (productId: string, size: ProductSize, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

function itemKey(productId: string, size: ProductSize) {
  return `${productId}-${size}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (product, size, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(
            (item) => itemKey(item.productId, item.size) === itemKey(product.id, size),
          );

          if (existing) {
            return {
              items: state.items.map((item) =>
                itemKey(item.productId, item.size) === itemKey(product.id, size)
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                chapterNumber: product.chapterNumber,
                size,
                quantity,
                price: product.price,
                image: product.images.front,
              },
            ],
          };
        });
      },
      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => itemKey(item.productId, item.size) !== itemKey(productId, size),
          ),
        })),
      updateQuantity: (productId, size, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            itemKey(item.productId, item.size) === itemKey(productId, size)
              ? { ...item, quantity: Math.max(1, quantity) }
              : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
      getTotal: () =>
        get().items.reduce((sum, item) => {
          return sum + item.price * item.quantity;
        }, 0),
    }),
    { name: "rdg-cart" },
  ),
);
