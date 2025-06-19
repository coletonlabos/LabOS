'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Sidebar } from '@/components/layout/sidebar';
import { TopNav } from '@/components/layout/top-nav';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }

        setUser(session?.user || null);
        
        // If no session and not on a public route, redirect to sign-in
        if (!session && !['/sign-in', '/sign-up', '/auth/callback'].some(route => pathname.startsWith(route))) {
          router.push(`/sign-in?redirectedFrom=${encodeURIComponent(pathname)}`);
          return;
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        router.push(`/sign-in?error=${encodeURIComponent('Failed to check authentication status')}`);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      
      // Handle auth state changes
      if (event === 'SIGNED_IN') {
        // If user just signed in, redirect them to the dashboard or their intended destination
        const urlParams = new URLSearchParams(window.location.search);
        const redirectedFrom = urlParams.get('redirectedFrom') || '/dashboard';
        router.push(redirectedFrom);
      } else if (event === 'SIGNED_OUT') {
        // If user signed out, redirect to sign-in
        router.push('/sign-in');
      }
    });

    return () => {
      // Properly clean up the subscription
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [router, supabase.auth, pathname]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // If no user but not loading, we'll redirect in the effect
  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav user={user} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
