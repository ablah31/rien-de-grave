import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from "payload";
import { revalidatePath } from "next/cache";

function safeRevalidatePath(path: string) {
  try {
    revalidatePath(path);
  } catch {
    // No-op hors contexte Next.js (ex. script de seed).
  }
}

export const revalidateCollection: CollectionAfterChangeHook = ({
  collection,
  doc,
}) => {
  if (collection.slug === "products") {
    safeRevalidatePath("/");
    safeRevalidatePath("/collection");
    if (doc && typeof doc.slug === "string") {
      safeRevalidatePath(`/collection/${doc.slug}`);
    }
  }

  if (collection.slug === "archives") {
    safeRevalidatePath("/archives");
  }

  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = ({ global, doc }) => {
  if (global.slug === "home") {
    safeRevalidatePath("/");
  }

  if (global.slug === "manifesto") {
    safeRevalidatePath("/");
    safeRevalidatePath("/manifeste");
  }

  if (global.slug === "site-settings") {
    safeRevalidatePath("/");
    safeRevalidatePath("/collection");
  }

  return doc;
};
