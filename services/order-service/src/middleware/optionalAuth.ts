export const optionalAuth = async ({ jwt, request }: any) => {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) return { user: null };
  
  try {
    const payload = await jwt.verify(token);
    return payload?.userId ? { user: payload } : { user: null };
  } catch {
    return { user: null };
  }
}