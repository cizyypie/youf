import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { errorHandler } from './middleware/errorHandler';
import { userRoutes } from './routes/user.route';

const app = new Elysia()
  .use(cors())
  .use(errorHandler)
  .use(swagger({ path: '/docs' }))
  .use(userRoutes)
  .listen(process.env.PORT || 3004);

console.log(`User service running at ${app.server?.hostname}:${app.server?.port}`);