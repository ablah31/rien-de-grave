import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

export const getPayloadClient = cache(async () => {
  return getPayload({ config });
});

export function isPayloadConfigured() {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
}
