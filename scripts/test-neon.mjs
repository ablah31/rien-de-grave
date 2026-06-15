import pg from "pg";

function normalizePostgresConnectionString(connectionString) {
  const url = new URL(connectionString);
  if (!url.searchParams.has("uselibpqcompat")) {
    url.searchParams.set("uselibpqcompat", "true");
  }
  url.searchParams.delete("channel_binding");
  return url.toString();
}

async function main() {
  const raw = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!raw) {
    console.error("ERREUR: POSTGRES_URL ou DATABASE_URL manquant");
    process.exit(1);
  }

  const connectionString = normalizePostgresConnectionString(raw);
  const host = new URL(connectionString).hostname;
  console.log(`Host: ${host}`);
  console.log("Test connexion Neon...");

  const pool = new pg.Pool({
    connectionString,
    max: 1,
    connectionTimeoutMillis: 20_000,
  });

  const start = Date.now();

  try {
    const client = await pool.connect();
    const now = await client.query("SELECT NOW() AS now, current_database() AS db");
    const products = await client.query(
      "SELECT COUNT(*)::int AS count FROM products WHERE is_active = true",
    );
    const users = await client.query("SELECT COUNT(*)::int AS count FROM users");

    client.release();
    await pool.end();

    console.log(`OK en ${Date.now() - start} ms`);
    console.log(`Heure serveur: ${now.rows[0].now}`);
    console.log(`Base: ${now.rows[0].db}`);
    console.log(`Produits actifs: ${products.rows[0].count}`);
    console.log(`Utilisateurs admin: ${users.rows[0].count}`);
  } catch (error) {
    await pool.end().catch(() => {});
    console.error(`ECHEC en ${Date.now() - start} ms`);
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
