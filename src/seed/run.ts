import config from "../../payload.config";
import { getPayload } from "payload";
import { seedDatabase } from "./index";

async function main() {
  const payload = await getPayload({ config });
  await seedDatabase(payload);
  await payload.destroy();
  console.log("Seed termine.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
