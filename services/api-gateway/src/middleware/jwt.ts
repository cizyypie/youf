import { jwt } from '@elysiajs/jwt';

export const jwtPlugin = jwt({
  name: 'jwt',
<<<<<<< HEAD
  secret: process.env.JWT_SECRET!,
=======
  secret: process.env.JWT_SECRET! || 'super_secret_key',
>>>>>>> 3333c870a2522ca04bd0a36ee60ac01bad327638
});
