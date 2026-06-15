import type { Archive, Home, Manifesto, Product as PayloadProduct, SiteSetting } from "@/payload-types";
import type { Product } from "@/types/product";
import { mapPayloadProduct } from "@/lib/map-product";
import { getPayloadClient, isPayloadConfigured } from "@/lib/payload";
import { fallbackProducts, fallbackCollectionTitle } from "@/lib/products-fallback";

export const collectionTitle = fallbackCollectionTitle;

const activeFallbackProducts = () =>
  fallbackProducts.filter((product) => product.isActive !== false);

function isProductionBuild() {
  return process.env.NEXT_PHASE === "phase-production-build";
}

async function withPayloadQuery<T>(label: string, query: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await query();
  } catch (error) {
    if (isProductionBuild()) {
      console.warn(`[build] ${label} indisponible, utilisation du fallback.`);
      return fallback;
    }
    throw error;
  }
}

export async function getActiveProducts(): Promise<Product[]> {
  const fallback = activeFallbackProducts();
  if (!isPayloadConfigured()) {
    return fallback;
  }

  return withPayloadQuery(
    "produits",
    async () => {
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
        return fallback;
      }

      return result.docs.map((doc) => mapPayloadProduct(doc as PayloadProduct));
    },
    fallback,
  );
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const fallback = fallbackProducts.find((product) => product.slug === slug);
  if (!isPayloadConfigured()) {
    return fallback;
  }

  return withPayloadQuery(
    `produit ${slug}`,
    async () => {
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
        return fallback;
      }

      return mapPayloadProduct(doc as PayloadProduct);
    },
    fallback,
  );
}

export async function getCollectionTitle(): Promise<string> {
  if (!isPayloadConfigured()) {
    return fallbackCollectionTitle;
  }

  return withPayloadQuery(
    "titre collection",
    async () => {
      const payload = await getPayloadClient();
      const settings = await payload.findGlobal({
        slug: "site-settings",
        depth: 0,
      });

      return settings.collectionTitle || fallbackCollectionTitle;
    },
    fallbackCollectionTitle,
  );
}

export async function getHomeContent(): Promise<Home | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  return withPayloadQuery(
    "contenu home",
    async () => {
      const payload = await getPayloadClient();
      return payload.findGlobal({
        slug: "home",
        depth: 2,
      }) as Promise<Home>;
    },
    null,
  );
}

export async function getManifestoContent(): Promise<Manifesto | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  return withPayloadQuery(
    "manifeste",
    async () => {
      const payload = await getPayloadClient();
      return payload.findGlobal({
        slug: "manifesto",
        depth: 0,
      }) as Promise<Manifesto>;
    },
    null,
  );
}

export async function getSiteSettings(): Promise<SiteSetting | null> {
  if (!isPayloadConfigured()) {
    return null;
  }

  return withPayloadQuery(
    "parametres site",
    async () => {
      const payload = await getPayloadClient();
      return payload.findGlobal({
        slug: "site-settings",
        depth: 0,
      }) as Promise<SiteSetting>;
    },
    null,
  );
}

export async function getArchives() {
  if (!isPayloadConfigured()) {
    return [];
  }

  return withPayloadQuery(
    "archives",
    async () => {
      const payload = await getPayloadClient();
      const result = await payload.find({
        collection: "archives",
        sort: "order",
        depth: 1,
        limit: 100,
      });

      return result.docs as Archive[];
    },
    [],
  );
}
