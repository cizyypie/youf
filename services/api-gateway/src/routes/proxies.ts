import { Elysia } from 'elysia';
import { services } from '../config/service';
import { proxyHelper } from '../utils/proxy';

export const proxies = new Elysia()
  // User Authentication
  .all('/api/users/*', ({ request }) => proxyHelper(services.users, request))
  
  // Restaurant Menu
  .all('/api/menu/*', ({ request }) => proxyHelper(services.menu, request))
  .all('/api/categories/*', ({ request }) => proxyHelper(services.menu, request))
  
  // Orders
  .all('/api/orders/*', ({ request }) => proxyHelper(services.orders, request))
  
  // Stripe Webhooks (Payments)
  .all('/api/webhook/stripe', ({ request }) => proxyHelper(services.payments, request));