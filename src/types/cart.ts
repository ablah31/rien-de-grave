import type { ProductSize } from "@/types/product";

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  chapterNumber: string;
  size: ProductSize;
  quantity: number;
  price: number;
  image: string;
}
