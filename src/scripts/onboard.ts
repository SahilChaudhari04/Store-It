import { MUTATIONS } from "~/server/db/queries";
import { db } from "~/server/db";

async function main() {
  const userId = process.argv[2];

  if (!userId) {
    console.error("Please provide a userId as an argument.");
    process.exit(1);
  }

  console.log(`Onboarding user: ${userId}`);

  try {
    const rootFolderId = await MUTATIONS.onboardUser(userId);
    console.log(`Successfully created root folder with ID: ${rootFolderId}`);
  } catch (error) {
    console.error("Error onboarding user:", error);
    process.exit(1);
  }

  process.exit(0);
}

main();
