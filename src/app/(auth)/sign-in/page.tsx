import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
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
            card: 'shadow-none',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton: 'hover:bg-secondary',
            formButtonPrimary: 'bg-primary hover:bg-primary/90',
            footerActionLink: 'text-primary hover:text-primary/80',
          },
        }}
      />
    </div>
  );
}
