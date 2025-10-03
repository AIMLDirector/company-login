// server/src/routes/authRoutes.ts
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET!;

// -----------------------------
// User Registration
// -----------------------------
router.post('/register', async (req, res) => {
  const { name, email, password, globalRole } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password_hash: hashedPassword,
        global_role: globalRole || null,
      },
    });

    res.status(201).json({
      message: 'User registered successfully.',
      user: { id: user.id, email: user.email, globalRole: user.global_role },
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'User registration failed. Email may already be in use.' });
  }
});

// -----------------------------
// User Login
// -----------------------------
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user with company roles
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        user_company_roles: {
          include: {
            companies: { select: { id: true, company_name: true, industry: true } },
          },
        },
      },
    });
    console.log('Fetched user for login:', user);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatches) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    type CompanyWithRole = {
        id: string;
        role: 'admin' | 'user';
        name: string;
        industry: string | null;
      };

      console.log('User company roles:', user.user_company_roles);
    // Map companies with roles
    // const companiesWithRoles: CompanyWithRole[] = user.user_company_roles
    // .filter((c) => !!c.companies) // defensive: ensure nested company was loaded
    // .map((c) => {
    //   // optional runtime validation for role values
    //   const rawRole = c.company_role;
    //   const role: 'admin' | 'user' = rawRole === 'admin' ? 'admin' : 'user';
  
    //   return {
    //     id: c.company_id,
    //     role,
    //     name: c.companies.company_name,
    //     industry: c.companies.industry,
    //   };
    // });


    const companiesWithRoles = user?.user_company_roles.map((ucr: { company_id: string; company_role: string; companies: { company_name: string; industry: string | null; } }) => ({
            id: ucr.company_id,
            role: ucr.company_role as 'admin' | 'user',
            name: ucr.companies.company_name,
            industry: ucr.companies.industry,
        })) ?? [];
    console.log('Mapped companies with roles:', companiesWithRoles);
    const payload = {
        id: user.id,
        email: user.email,
        globalRole: user.global_role,
        companies: companiesWithRoles,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: payload });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

// -----------------------------
// Example Protected Route
// -----------------------------
router.get('/me', authenticateToken, async (req, res) => {
  res.json({ user: req.user });
});

export default router;
