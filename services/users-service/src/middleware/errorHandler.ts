import { Elysia } from 'elysia';

export const errorHandler = new Elysia()
  .onError(({ code, error, set }) => {
    
    if ((error as any).code === '23505') {
      set.status = 409; 
      return { error: 'This name already exists. Please choose a unique name.' };
    }

    switch (code) {
      case 'VALIDATION':
        set.status = 400;
        return { error: error.message };
      case 'NOT_FOUND':
        set.status = 404;
        return { error: 'Resource not found' };
      default:
        set.status = 500;
        console.error(error);
        return { error: 'Internal server error' };
    }
  });