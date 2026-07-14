import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { proxies } from './routes/proxies';

const app = new Elysia()
  .use(cors())
  .use(proxies)
  .listen(process.env.PORT || 8000);

console.log(`🌉 Restaurant API Gateway running at http://localhost:${app.server?.port}`);