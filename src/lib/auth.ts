import { auth, currentUser } from '@clerk/nextjs/server';
import { User } from '@clerk/nextjs/server';

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    return await currentUser();
  } catch (error) {
    return null;
  }
};

export const getAuth = () => {
  return auth();
};

export const requireUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
};
