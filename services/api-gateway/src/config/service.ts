export const services = {
  menu: process.env.MENU_SERVICE_URL || 'http://localhost:3000',
  orders: process.env.ORDER_SERVICE_URL || 'http://localhost:3001',
  payments: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3002',
  users: process.env.USER_SERVICE_URL || 'http://localhost:3004',
};