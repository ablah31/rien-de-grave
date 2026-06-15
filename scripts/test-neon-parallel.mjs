import pg from "pg";

function normalizePostgresConnectionString(connectionString) {
  const url = new URL(connectionString);
  if (!url.searchParams.has("uselibpqcompat")) {
    url.searchParams.set("uselibpqcompat", "true");
  }
  url.searchParams.delete("channel_binding");
  return url.toString();
}

async function testConnection(id) {
  const raw = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  const pool = new pg.Pool({
    connectionString: normalizePostgresConnectionString(raw),
    max: 1,
    connectionTimeoutMillis: 20_000,
  });

  const start = Date.now();
  const client = await pool.connect();
  await client.query("SELECT 1");
  client.release();
  await pool.end();
  return Date.now() - start;
}

const count = Number(process.argv[2] || 5);
console.log(`Test ${count} connexions paralleles...`);

const start = Date.now();
const results = await Promise.allSettled(
  Array.from({ length: count }, (_, index) => testConnection(index)),
);

const ok = results.filter((result) => result.status === "fulfilled").length;
const ko = results.filter((result) => result.status === "rejected").length;

console.log(`Reussites: ${ok}/${count}`);
console.log(`Echecs: ${ko}/${count}`);
console.log(`Duree totale: ${Date.now() - start} ms`);

for (const [index, result] of results.entries()) {
  if (result.status === "fulfilled") {
    console.log(`  #${index + 1}: OK (${result.value} ms)`);
  } else {
    console.error(`  #${index + 1}: ${result.reason?.message || result.reason}`);
  }
}

if (ko > 0) process.exit(1);
