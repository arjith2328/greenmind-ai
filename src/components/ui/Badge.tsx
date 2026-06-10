import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'outline' | 'glass';
}

const badgeVariants = {
  default: 'bg-greenmind-primary/20 text-greenmind-primary border-transparent',
  success: 'bg-green-500/20 text-green-400 border-transparent',
  warning: 'bg-yellow-500/20 text-yellow-400 border-transparent',
  destructive: 'bg-red-500/20 text-red-400 border-transparent',
  outline: 'text-white border-white/20',
  glass: 'glass-panel text-white border-white/10',
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
