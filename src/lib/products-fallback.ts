import type { Product } from "@/types/product";

const landscapeFirstImages = {
  front: "/images/products/SS23-103T_WHITE_2.webp",
  back: "/images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
  detail: "/images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
  worn: "/images/products/NEW-BRANDO-WHITE.webp",
} as const;

export const fallbackCollectionTitle = "Paysages interieurs";

export const fallbackProducts: Product[] = [
  {
    id: "1",
    chapterNumber: "01",
    name: "Le Depart",
    slug: "le-depart",
    subtitle: "T-shirt ecru - paysage desertique",
    description: "T-shirt epais a coupe legerement oversize, pense comme une ouverture de film.",
    quote: "Parce qu'on vient tous de quelque part.",
    price: 65,
    color: "Ecru",
    material: "100% coton",
    weight: "240g",
    fit: "Oversize",
    madeIn: "Imprime en France",
    images: landscapeFirstImages,
    sizes: ["S", "M", "L", "XL"],
    isActive: true,
  },
];
