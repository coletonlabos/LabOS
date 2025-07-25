'use client';

import * as React from 'react';
import { useToast } from './use-toast';
import { Toast } from './toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(({ id, title, description, action, variant }) => (
        <Toast key={id} variant={variant}>
          <div className="grid gap-1">
            {title && <div className="font-semibold">{title}</div>}
            {description && (
              <div className="text-sm opacity-90">{description}</div>
            )}
          </div>
          {action}
        </Toast>
      ))}
    </>
  );
}
