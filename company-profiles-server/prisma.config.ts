// server/prisma.config.ts
import { defineConfig } from "prisma/config";
import "dotenv/config";
import path from "node:path";

export default defineConfig({
  schema: path.join(__dirname, "prisma/schema.prisma"),
  migrations: {
    path: path.join(__dirname, "prisma/migrations"),
    seed: `ts-node --compiler-options '{\\"module\\":\\\"CommonJS\\\"}' prisma/seed.ts`,
  },
  
});
