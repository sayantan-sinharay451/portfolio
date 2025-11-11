import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // 🔹 Shared Base Styles
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground shadow-sm 
          hover:bg-primary/80 hover:shadow-md 
          focus-visible:ring-primary
        `,
        secondary: `
          bg-surface-elevated text-foreground shadow-sm 
          hover:bg-surface hover:text-primary 
          focus-visible:ring-secondary
        `,
        outline: `
          border border-border bg-transparent text-foreground 
          hover:border-primary hover:text-primary 
          focus-visible:ring-primary
        `,
        ghost: `
          text-muted hover:text-primary hover:bg-surface/40 
          focus-visible:ring-ring
        `,
        link: `
          text-primary underline-offset-4 hover:underline 
          hover:text-primary-light
        `,
        destructive: `
          bg-error text-white shadow-sm 
          hover:bg-error/80 focus-visible:ring-error
        `,
      },
      // 📏 Button Sizes
      size: {
        default: 'h-10 px-5 text-sm',
        sm: 'h-8 px-3 text-xs rounded-md',
        lg: 'h-11 px-8 text-base rounded-md',
        icon: 'h-10 w-10 p-0 flex items-center justify-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
