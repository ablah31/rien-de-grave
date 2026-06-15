import type { Archive, Home, Manifesto, Product as PayloadProduct, SiteSetting } from "@/payload-types";
import type { Product } from "@/types/product";
import { mapPayloadProduct } from "@/lib/map-product";
import { getPayloadClient, isPayloadConfigured } from "@/lib/payload";
import { fallbackProducts, fallbackCollectionTitle } from "@/lib/products-fallback";

export const collectionTitle = fallbackCollectionTitle;

export async function getActiveProducts(): Promise<Product[]> {
  if (!isPayloadConfigured()) {
    return fallbackProducts.filter((product) => product.isActive !== false);
  }

  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products",
    where: {
      isActive: {
        equals: true,
      },
    },
    sort: "chapterNumber",
    depth: 2,
    limit: 100,
  });

  if (result.docs.length === 0) {
    return fallbackProducts.filter((product) => product.isActive !== false);
  }

  return result.docs.map((doc) => mapPayloadProduct(doc as PayloadProduct));
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!isPayloadConfigured()) {
    return fallbackProducts.find((product) => product.slug === slug);
  }

  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products",
    where: {
      slug: {
        equals: slug,
      },
      isActive: {
        equals: true,
      },
    },
    depth: 2,
    limit: 1,
  });

  const doc = result.docs[0];
  if (!doc) {
    return fallbackProducts.find((product) => product.slug === slug);
  }

  return mapPayloadProduct(doc as PayloadProduct);
}

export async function getCollectionTitle(): Promise<string> {
  if (!isPayloadConfigured()) {
    return fallbackCollectionTitle;
  }

  const payload = await getPayloadClient();
  const settings = await payload.findGlobal({
    slug: "site-settings",
    depth: 0,
  });

  return settings.collectionTitle || fallbackCollectionTitle;
}

export async function getHomeContent(): Promise<Home | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  const payload = await getPayloadClient();
  return payload.findGlobal({
    slug: "home",
    depth: 2,
  }) as Promise<Home>;
}

export async function getManifestoContent(): Promise<Manifesto | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  const payload = await getPayloadClient();
  return payload.findGlobal({
    slug: "manifesto",
    depth: 0,
  }) as Promise<Manifesto>;
}

export async function getSiteSettings(): Promise<SiteSetting | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  const payload = await getPayloadClient();
  return payload.findGlobal({
    slug: "site-settings",
    depth: 0,
  }) as Promise<SiteSetting>;
}

export async function getArchives() {
  if (!isPayloadConfigured()) {
    return [];
  }

  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "archives",
    sort: "order",
    depth: 1,
    limit: 100,
  });

  return result.docs as Archive[];
}
