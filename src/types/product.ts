export type ProductSize = "S" | "M" | "L" | "XL";

export type ProductImageType = "front" | "back" | "detail" | "worn" | "archive";

export interface ProductImages {
  front: string;
  back: string;
  detail: string;
  worn: string;
}

export interface Product {
  id: string;
  chapterNumber: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  quote: string;
  price: number;
  color: string;
  material: string;
  weight: string;
  fit: string;
  madeIn: string;
  images: ProductImages;
  sizes: ProductSize[];
  isActive?: boolean;
}
