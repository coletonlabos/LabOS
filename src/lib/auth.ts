import { auth, currentUser } from '@clerk/nextjs/server';
import type { User } from '@clerk/nextjs/server';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    return await currentUser();
  } catch {
    return null;
  }
};

export const getAuth = () => {
  return auth();
};

export const requireUser = async () => {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  return user;
};
