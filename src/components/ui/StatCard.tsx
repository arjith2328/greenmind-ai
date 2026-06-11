import React, { type ReactNode } from 'react';
import { Card, CardContent } from './Card';
import { cn } from '../../lib/utils';

export interface StatCardProps {
  title: string;
  value: ReactNode;
  icon?: ReactNode;
  iconContainerClassName?: string;
  footer?: ReactNode;
  variant?: 'default' | 'vertical';
  className?: string;
  valueSuffix?: ReactNode;
  cardContentClassName?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconContainerClassName,
  footer,
  variant = 'default',
  className,
  valueSuffix,
  cardContentClassName,
}) => {
  if (variant === 'vertical') {
    return (
      <Card className={cn("border-white/10", className)}>
        <CardContent className={cn("p-6 flex flex-col items-center text-center justify-center", cardContentClassName)}>
          {icon && <div className={cn("mb-2", iconContainerClassName)}>{icon}</div>}
          <p className="text-sm text-gray-400 font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">
            {value}
            {valueSuffix && <span className="text-sm font-normal text-gray-400 ml-1">{valueSuffix}</span>}
          </p>
          {footer && <div className="mt-2 w-full">{footer}</div>}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("border-white/10", className)}>
      <CardContent className={cn("p-6", cardContentClassName)}>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{title}</p>
            <p className="text-3xl font-bold text-white">
              {value}
              {valueSuffix && <span className="text-sm font-normal text-gray-400 ml-1">{valueSuffix}</span>}
            </p>
          </div>
          {icon && (
            <div className={cn("p-3 rounded-xl", iconContainerClassName)}>
              {icon}
            </div>
          )}
        </div>
        {footer && (
          <div className="mt-4 text-sm text-gray-400 font-medium flex items-center">
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
