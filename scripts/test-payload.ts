import config from "../payload.config";
import { getPayload } from "payload";

async function main() {
  console.log("Test Payload + Neon...");
  const start = Date.now();

  const payload = await getPayload({ config });

  const products = await payload.find({
    collection: "products",
    where: { isActive: { equals: true } },
    limit: 10,
  });

  const users = await payload.count({ collection: "users" });

  await payload.destroy();

  console.log(`OK en ${Date.now() - start} ms`);
  console.log(`Produits actifs: ${products.docs.length}`);
  console.log(`Utilisateurs: ${users.totalDocs}`);
  for (const product of products.docs) {
    console.log(`  - ${product.chapterNumber} ${product.name} (${product.slug})`);
  }
}

main().catch((error) => {
  console.error("ECHEC Payload:");
  console.error(error instanceof Error ? error.message : error);
  if (error && typeof error === "object" && "cause" in error) {
    console.error("Cause:", error.cause);
  }
  process.exit(1);
});
