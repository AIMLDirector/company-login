// server/src/index.ts
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'; // Make sure to load environment variables at the top

// ============================================
// Import route files and middleware
// ============================================
import authRoutes from './routes/authRoutes';
import companyRoutes from './routes/companyRoutes';
import { authenticateToken } from './middleware/authMiddleware';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// ============================================
// Middleware setup
// ============================================

// Enable CORS for all routes
app.use(cors());

// Enable Express to parse JSON formatted request bodies
app.use(express.json());

// ============================================
// API Route setup
// ============================================

// Public Routes (Login and Registration)
app.use('/api/auth', authRoutes);

// Protected Routes (Company and Student management)
// The authenticateToken middleware will be applied to all routes in these routers.
app.use('/api/companies', authenticateToken, companyRoutes);


// Optional: Add a simple root endpoint to confirm the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Server is up and running!');
});

// ============================================
// Start the server
// ============================================

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
