'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, FileText, Users, DollarSign, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Journal', href: '/journal', icon: FileText },
  { name: 'Projects', href: '/projects', icon: FileText },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Finances', href: '/finances', icon: DollarSign },
  { name: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  user: User | null;
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/sign-in';
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold">Lab OS</h1>
          </div>
          
          {/* User Profile */}
          <div className="px-4 py-4 mt-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.email} />
                <AvatarFallback>
                  {user?.email?.substring(0, 2).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="truncate">
                <p className="text-sm font-medium truncate">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col flex-1 mt-2">
            <nav className="flex-1 px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                    'transition-colors duration-200',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              ))}
              
              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className={cn(
                  'w-full flex items-center px-4 py-2 text-sm font-medium rounded-md',
                  'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20',
                  'transition-colors duration-200 mt-4'
                )}
              >
                <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
                Sign out
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
