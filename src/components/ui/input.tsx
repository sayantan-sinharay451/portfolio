import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring border-primary flex h-9 w-full border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500 aria-[invalid=true]:focus:ring-red-500',
          className
        )}
        ref={ref}
        aria-invalid={props['aria-invalid']}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
