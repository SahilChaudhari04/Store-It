import { db } from "~/server/db";
import { folders_table } from "~/server/db/schema";

async function main() {
    const users = await db.selectDistinct({ ownerId: folders_table.ownerId }).from(folders_table);
    console.log("Users found:", users);
    process.exit(0);
}

main();
