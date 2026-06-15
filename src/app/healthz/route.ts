import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mask(value: string | undefined) {
  if (!value) {
    return null;
  }
  if (value.length <= 12) {
    return `len:${value.length}`;
  }
  return `${value.slice(0, 6)}...${value.slice(-4)} len:${value.length}`;
}

export async function GET() {
  const result: Record<string, unknown> = {
    env: {
      NODE_ENV: process.env.NODE_ENV ?? null,
      VERCEL: process.env.VERCEL ?? null,
      VERCEL_REGION: process.env.VERCEL_REGION ?? null,
      hasPOSTGRES_URL: Boolean(process.env.POSTGRES_URL),
      hasDATABASE_URL: Boolean(process.env.DATABASE_URL),
      hasPAYLOAD_SECRET: Boolean(process.env.PAYLOAD_SECRET),
      hasBLOB_TOKEN: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      hasNEXT_PUBLIC_SITE_URL: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
      postgresUrlMasked: mask(process.env.POSTGRES_URL || process.env.DATABASE_URL),
    },
  };

  try {
    const { Pool } = await import("pg");
    const raw = process.env.POSTGRES_URL || process.env.DATABASE_URL || "";
    let connectionString = raw;
    try {
      const url = new URL(raw);
      if (!url.searchParams.has("uselibpqcompat")) {
        url.searchParams.set("uselibpqcompat", "true");
      }
      url.searchParams.delete("channel_binding");
      connectionString = url.toString();
    } catch {
      // garde la chaine brute
    }
    const pool = new Pool({ connectionString, max: 1, connectionTimeoutMillis: 10_000 });
    const r = await pool.query("select now() as now");
    await pool.end();
    result.pg = { ok: true, now: r.rows[0]?.now };
  } catch (error) {
    result.pg = {
      ok: false,
      name: (error as Error)?.name,
      message: (error as Error)?.message,
      stack: (error as Error)?.stack?.split("\n").slice(0, 4),
    };
  }

  try {
    const { getPayloadClient } = await import("@/lib/payload");
    const payload = await getPayloadClient();
    const count = await payload.count({ collection: "users" });
    result.payload = { ok: true, userCount: count.totalDocs };
  } catch (error) {
    result.payload = {
      ok: false,
      name: (error as Error)?.name,
      message: (error as Error)?.message,
      stack: (error as Error)?.stack?.split("\n").slice(0, 8),
    };
  }

  return NextResponse.json(result, { status: 200 });
}
