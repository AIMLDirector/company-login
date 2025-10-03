// server/src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neon, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import 'dotenv/config'; // Ensure environment variables are loaded

neonConfig.webSocketConstructor = ws; // Required for Node.js environments

const connectionString = process.env.DATABASE_URL as string;

// The `prisma` variable is typed globally to handle hot-reloading in development.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const adapter = new PrismaNeon({ connectionString });

// Instantiate Prisma once, attaching it to the global object in development.
// This prevents multiple instances during hot-reloading.
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
