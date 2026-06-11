import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'glass';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const buttonVariants = {
  default: 'bg-greenmind-primary text-greenmind-bg hover:bg-greenmind-secondary',
  outline: 'border border-greenmind-primary text-greenmind-primary hover:bg-greenmind-primary/10',
  ghost: 'hover:bg-white/10 text-white',
  glass: 'glass-panel text-white hover:bg-white/10 border-white/20',
};

const sizeVariants = {
  default: 'h-11 px-6 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-14 rounded-lg px-8 text-lg',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
