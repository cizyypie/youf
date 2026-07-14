import { Elysia, t } from 'elysia';
import { jwt } from '@elysiajs/jwt';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const userRoutes = new Elysia({ prefix: '/api/users' })
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET! || 'super_secret_key',
    })
  )
  .post('/register', async ({ body, set }) => {
    try {
      const user = await userService.register(body);
      set.status = 201;
      return { message: "User registered successfully", user };
    } catch (error: any) {
      if (error.code === '23505') { 
        set.status = 409;
        return { error: "Email already exists" };
      }
      throw error;
    }
  }, {
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String({ minLength: 6 }),
      role: t.Optional(t.String())
    })
  })
  .post('/login', async ({ body, jwt, set }) => {
    try {
      const user = await userService.login(body);
     
      const token = await jwt.sign({ 
        userId: user.id, 
        email: user.email,
        role: user.role 
      });

      return { 
        message: "Login successful", 
        token,
        user: { id: user.id, email: user.email, role: user.role }
      };
    } catch (error: any) {
      set.status = 401;
      return { error: "Invalid email or password" };
    }
  }, {
    body: t.Object({
      email: t.String(),
      password: t.String()
    })
  });