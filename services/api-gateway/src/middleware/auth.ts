import { Elysia } from 'elysia';
import { jwt } from './jwt';

export const adminGuard = (app: Elysia) => 
  app
    .use(jwt)
    .onBeforeHandle(({ jwtPayload, set }) => {
      // 1. Check if token exists
      if (!jwtPayload) {
        set.status = 401;
        return { error: 'Unauthorized' };
      }
      
      // 2. Check if role is ADMIN
      if (jwtPayload.role !== 'ADMIN') {
        set.status = 403; // Forbidden
        return { error: 'Access denied. Admins only.' };
      }
    });