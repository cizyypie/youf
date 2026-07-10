import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { errorHandler } from './middleware/errorHandler';
import { orderRoutes } from './routes/order.route';
import { connectQueue } from './queue';

connectQueue(); // Start RabbitMQ

const app = new Elysia()
  .use(cors())
  .use(errorHandler)
  .use(swagger({ path: '/docs' }))
  .use(orderRoutes)
  .listen(process.env.PORT || 3001);

console.log(`🦊 Order service running at ${app.server?.hostname}:${app.server?.port}`);