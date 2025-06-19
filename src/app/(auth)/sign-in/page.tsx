'use client';

import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function SignInPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  // Redirect if user is already signed in
  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard');
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Welcome back to Lab OS</h1>
          <p className="text-muted-foreground">Sign in to continue to your dashboard</p>
        </div>
        <SignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              card: 'shadow-none w-full',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
              socialButtonsBlockButton: 'hover:bg-secondary',
              formButtonPrimary: 'bg-primary hover:bg-primary/90',
              footerActionLink: 'text-primary hover:text-primary/80',
            },
          }}
        />
      </div>
    </div>
  );
}
