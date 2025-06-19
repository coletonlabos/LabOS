import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground">Get started with Lab OS</p>
      </div>
      <SignUp 
        path="/sign-up" 
        routing="path" 
        signInUrl="/sign-in"
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
