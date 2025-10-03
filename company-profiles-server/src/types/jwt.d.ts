// server/src/types/jwt.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    id: string;
    email: string;
    globalRole: string | null;
    companies: { id: string; role: string }[];
  }
}
