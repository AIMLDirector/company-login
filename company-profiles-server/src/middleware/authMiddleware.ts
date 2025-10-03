// server/src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import type { Prisma } from '../../generated/prisma';

const JWT_SECRET = process.env.JWT_SECRET!;

// Augment the Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        globalRole: string | null;
        companies: { id: string; role: 'admin' | 'user' }[];
      };
    }
  }
}

// Strongly typed user payload with company roles
type UserWithCompanies = Prisma.usersGetPayload<{
  include: {
    user_company_roles: {
      select: { company_id: string; company_role: 'admin' | 'user' };
    };
  };
}>;

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Authentication token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & { id: string; email: string };
    console.log('Decoded JWT payload:', decoded);

    // Fetch user with company roles from DB
    const user: UserWithCompanies | null = await prisma.users.findUnique({
      where: { id: decoded.id },
      include: {
        user_company_roles: {
          select: { company_id: true, company_role: true },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Map company roles (TS now knows `c` type)
    const companiesWithRoles = user.user_company_roles.map((c) => ({
      id: c.company_id,
      role: c.company_role,
    }));

    // Attach user to request
    req.user = {
      id: user.id,
      email: user.email,
      globalRole: user.global_role,
      companies: companiesWithRoles,
    };

    console.log('Request user set to:', req.user);
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: 'Token expired.' });
    }
    console.error('Auth error:', err);
    return res.status(403).json({ error: 'Invalid or expired token.' });
  }
};
