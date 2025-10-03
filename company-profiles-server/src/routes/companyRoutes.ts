import { Router } from 'express';
import prisma from '../lib/prisma';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Route to get a list of companies (accessible by authenticated users)
router.get('/', authenticateToken, async (req, res) => {
  const companies = await prisma.company.findMany();
  res.json(companies);
});

// Route to add a new company (only accessible by the super-admin)
router.post('/', authenticateToken, async (req, res) => {
  if (req.user?.globalRole !== 'super-admin') {
    return res.status(403).json({ error: 'Forbidden: Insufficient permissions.' });
  }

  const { companyName, address, industry } = req.body;
  try {
    const newCompany = await prisma.company.create({
      data: { companyName, address, industry },
    });
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create company.' });
  }
});

export default router;
