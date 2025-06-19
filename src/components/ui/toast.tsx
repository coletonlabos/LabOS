import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive: 'bg-destructive text-destructive-foreground border-destructive/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, onOpenChange, open = true, children, ...props }, ref) => {
    if (!open) return null;
    
    return (
      <div
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      >
        <div className="grid gap-1 flex-1">
          {children}
        </div>
        <button
          type="button"
          onClick={() => onOpenChange?.(false)}
          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));

ToastTitle.displayName = 'ToastTitle';

const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));

ToastDescription.displayName = 'ToastDescription';

export { Toast, ToastTitle, ToastDescription };
export type { ToastProps };
