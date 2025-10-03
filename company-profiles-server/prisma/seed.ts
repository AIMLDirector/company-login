// server/prisma/seed.ts
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  // Create a company
  const company = await prisma.companies.upsert({
    where: { company_name: 'Startup Company' },
    update: {},
    create: {
      company_name: 'Startup Company',
      address: '123 Test St',
      industry: 'Technology',
    },
  });

  // Hash a password
  const hashedPassword = await bcrypt.hash('superadmin123', 10);

  // Create a user
  const user = await prisma.users.upsert({
    where: { email: 'superadmin@example.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'superadmin@example.com',
      password_hash: hashedPassword,
      global_role: 'super-admin',
    },
  });

  // Link the user to the company with an admin role
  const userCompanyRole = await prisma.user_company_roles.upsert({
    where: {
      user_id_company_id: {
        user_id: user.id,
        company_id: company.id,
      },
    },
    update: {},
    create: {
      user_id: user.id,
      company_id: company.id,
      company_role: 'admin',
    },
  });

  console.log({ user, company, userCompanyRole });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
