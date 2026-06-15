import type { Media, Product as PayloadProduct } from "@/payload-types";
import type { Product, ProductImages, ProductSize } from "@/types/product";

function resolveMediaUrl(media: number | Media | null | undefined): string {
  if (!media || typeof media === "number") {
    return "";
  }

  return media.url || "";
}

function mapImages(images: PayloadProduct["images"]): ProductImages {
  return {
    front: resolveMediaUrl(images.front),
    back: resolveMediaUrl(images.back),
    detail: resolveMediaUrl(images.detail),
    worn: resolveMediaUrl(images.worn),
  };
}

export function mapPayloadProduct(product: PayloadProduct): Product {
  return {
    id: String(product.id),
    chapterNumber: product.chapterNumber,
    name: product.name,
    slug: product.slug,
    subtitle: product.subtitle,
    description: product.description,
    quote: product.quote,
    price: product.price,
    color: product.color,
    material: product.material,
    weight: product.weight,
    fit: product.fit,
    madeIn: product.madeIn,
    images: mapImages(product.images),
    sizes: (product.sizes ?? []) as ProductSize[],
    isActive: product.isActive ?? true,
  };
}

export function resolveMedia(media: number | Media | null | undefined): string {
  return resolveMediaUrl(media);
}
