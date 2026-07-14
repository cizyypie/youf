import { jwt } from '@elysiajs/jwt';

// Pre-configured JWT plugin for the API Gateway
// Matches the same secret used by users-service and order-service
export const jwtPlugin = jwt({
  name: 'jwt',
<<<<<<< HEAD
  secret: process.env.JWT_SECRET!,
=======
<<<<<<< HEAD
  secret: process.env.JWT_SECRET!,
=======
  secret: process.env.JWT_SECRET! || 'super_secret_key',
>>>>>>> 3333c870a2522ca04bd0a36ee60ac01bad327638
>>>>>>> 5437be6cc45d08eb1489b5170fbfbc11a8acf5f7
});
